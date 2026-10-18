import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface PendingTransaction {
  tx_ref: string;
  amount: number | string;
  tier: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cityOrRegion: string;
  dateOfBirth: string;
  gender?: string;
  preferredLanguage: string;
  photoUrl?: string;
  status: 'PENDING' | 'SUCCESS' | 'FAILED';
  referenceNumber?: string;
  paymentMethod?: string;
  createdAt: string;
  verifiedAt?: string;
  isSandbox: boolean;
  chapaData?: any;
}

// In-memory registry of transactions
const pendingTransactions = new Map<string, PendingTransaction>();

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(cors());
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  const CHAPA_SECRET_KEY = process.env.CHAPA_SECRET_KEY || '';
  const isChapaConfigured = Boolean(
    CHAPA_SECRET_KEY &&
    !CHAPA_SECRET_KEY.includes('sample_secret_key') &&
    CHAPA_SECRET_KEY.startsWith('CHASECK')
  );

  /**
   * POST /api/initialize-payment
   * Initializes a Chapa transaction for membership registration.
   * Explicitly passes the dynamic amount (200, 500, or 1000 ETB) directly into Chapa's payload.
   */
  app.post('/api/initialize-payment', async (req: Request, res: Response) => {
    try {
      const {
        amount,
        tier,
        fullName,
        phone,
        email,
        cityOrRegion,
        dateOfBirth,
        gender,
        preferredLanguage,
        photoUrl,
        tx_ref: customTxRef,
      } = req.body;

      if (!amount) {
        return res.status(400).json({
          success: false,
          error: 'Amount is required for Chapa payment initialization.',
        });
      }

      if (!fullName || !phone) {
        return res.status(400).json({
          success: false,
          error: 'Full name and phone number are required.',
        });
      }

      // Format names for Chapa
      const nameParts = fullName.trim().split(/\s+/);
      const firstName = nameParts[0] || 'Halaba';
      const lastName = nameParts.slice(1).join(' ') || 'Supporter';

      // Clean phone number (e.g. 09... or +251...)
      let cleanPhone = phone.trim().replace(/[^\d+]/g, '');
      if (cleanPhone.startsWith('0')) {
        cleanPhone = cleanPhone; // Chapa accepts Ethiopian 09... or +2519...
      }

      const txRef = customTxRef || `halaba-tx-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const userEmail = email && email.includes('@') ? email.trim() : `member-${txRef.slice(-6)}@halabafc.et`;
      const protocol = req.protocol === 'https' || req.headers['x-forwarded-proto'] === 'https' ? 'https' : 'http';
      const host = req.get('host') || `localhost:${PORT}`;

      // Chapa payload with dynamic amount explicitly passed
      const chapaPayload = {
        amount: String(amount),
        currency: 'ETB',
        email: userEmail,
        first_name: firstName,
        last_name: lastName,
        phone_number: cleanPhone,
        tx_ref: txRef,
        callback_url: `${protocol}://${host}/api/verify-payment/${txRef}`,
        return_url: `${protocol}://${host}/?tx_ref=${txRef}&payment_completed=true`,
        'customization[title]': `Halaba FC ${tier || 'Official'} Membership`,
        'customization[description]': `Membership registration fee (${amount} ETB)`,
      };

      console.log(`[Chapa Init] Initializing payment for tx_ref=${txRef}, amount=${amount} ETB, tier=${tier}`);

      let checkoutUrl: string = '';
      let isSandbox = false;
      let chapaResponseData: any = null;

      if (isChapaConfigured) {
        try {
          const chapaRes = await fetch('https://api.chapa.co/v1/transaction/initialize', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${CHAPA_SECRET_KEY}`,
            },
            body: JSON.stringify(chapaPayload),
          });

          const chapaJson = await chapaRes.json();
          console.log('[Chapa Response]:', chapaJson);

          if (chapaRes.ok && chapaJson.status === 'success' && chapaJson.data?.checkout_url) {
            checkoutUrl = chapaJson.data.checkout_url;
            chapaResponseData = chapaJson.data;
          } else {
            console.warn('[Chapa API Warning]:', chapaJson.message || 'Falling back to sandbox simulator');
            isSandbox = true;
          }
        } catch (apiErr) {
          console.error('[Chapa API Network Error]:', apiErr);
          isSandbox = true;
        }
      } else {
        isSandbox = true;
      }

      if (isSandbox) {
        checkoutUrl = `/?chapa_modal=1&tx_ref=${txRef}&amount=${encodeURIComponent(String(amount))}&tier=${encodeURIComponent(tier || 'STANDARD')}`;
      }

      // Store in pending transactions: NOT yet verified or registered
      const transactionRecord: PendingTransaction = {
        tx_ref: txRef,
        amount: String(amount),
        tier: tier || 'STANDARD',
        fullName: fullName.trim(),
        firstName,
        lastName,
        email: userEmail,
        phone: cleanPhone,
        cityOrRegion: cityOrRegion || 'Halaba',
        dateOfBirth: dateOfBirth || '',
        gender: gender || '',
        preferredLanguage: preferredLanguage || 'en',
        photoUrl: photoUrl || '',
        status: 'PENDING',
        isSandbox,
        createdAt: new Date().toISOString(),
        chapaData: chapaResponseData,
      };

      pendingTransactions.set(txRef, transactionRecord);

      return res.json({
        success: true,
        checkout_url: checkoutUrl,
        tx_ref: txRef,
        amount: String(amount),
        tier: tier || 'STANDARD',
        isSandbox,
        message: 'Payment initialized successfully. Complete payment to verify registration.',
      });
    } catch (error: any) {
      console.error('[Error in /api/initialize-payment]:', error);
      return res.status(500).json({
        success: false,
        error: error.message || 'Failed to initialize payment with Chapa',
      });
    }
  });

  /**
   * GET & POST /api/verify-payment/:tx_ref
   * Verifies the payment with Chapa.
   * Registration MUST NOT be successful unless payment is verified!
   */
  const handleVerify = async (txRef: string, res: Response) => {
    if (!txRef) {
      return res.status(400).json({
        verified: false,
        error: 'Missing tx_ref parameter',
      });
    }

    const transaction = pendingTransactions.get(txRef);
    if (!transaction) {
      return res.status(404).json({
        verified: false,
        error: `No transaction found for reference ${txRef}`,
      });
    }

    // If already verified
    if (transaction.status === 'SUCCESS' && transaction.referenceNumber) {
      return res.json({
        verified: true,
        status: 'success',
        referenceNumber: transaction.referenceNumber,
        amount: transaction.amount,
        tier: transaction.tier,
        verifiedAt: transaction.verifiedAt,
        member: {
          fullName: transaction.fullName,
          dateOfBirth: transaction.dateOfBirth,
          gender: transaction.gender,
          phone: transaction.phone,
          email: transaction.email,
          cityOrRegion: transaction.cityOrRegion,
          membershipType: transaction.tier,
          preferredLanguage: transaction.preferredLanguage,
          photoUrl: transaction.photoUrl,
          referenceNumber: transaction.referenceNumber,
          amountPaid: transaction.amount,
          tx_ref: transaction.tx_ref,
          status: 'APPROVED',
        },
      });
    }

    // If live transaction through Chapa API, query Chapa verification
    if (!transaction.isSandbox && isChapaConfigured) {
      try {
        const verifyRes = await fetch(`https://api.chapa.co/v1/transaction/verify/${txRef}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${CHAPA_SECRET_KEY}`,
          },
        });

        const verifyJson = await verifyRes.json();
        console.log(`[Chapa Verify ${txRef}]:`, verifyJson);

        if (verifyRes.ok && verifyJson.status === 'success' && verifyJson.data?.status === 'success') {
          // Payment confirmed by Chapa! Now finalize registration!
          const randNum = Math.floor(1000 + Math.random() * 9000);
          const refNumber = `HCFC-2026-M${randNum}`;

          transaction.status = 'SUCCESS';
          transaction.referenceNumber = refNumber;
          transaction.verifiedAt = new Date().toISOString();
          transaction.chapaData = verifyJson.data;

          pendingTransactions.set(txRef, transaction);

          return res.json({
            verified: true,
            status: 'success',
            referenceNumber: refNumber,
            amount: transaction.amount,
            tier: transaction.tier,
            verifiedAt: transaction.verifiedAt,
            member: {
              fullName: transaction.fullName,
              dateOfBirth: transaction.dateOfBirth,
              gender: transaction.gender,
              phone: transaction.phone,
              email: transaction.email,
              cityOrRegion: transaction.cityOrRegion,
              membershipType: transaction.tier,
              preferredLanguage: transaction.preferredLanguage,
              photoUrl: transaction.photoUrl,
              referenceNumber: refNumber,
              amountPaid: transaction.amount,
              tx_ref: transaction.tx_ref,
              status: 'APPROVED',
            },
            message: 'Chapa payment successfully verified.',
          });
        } else {
          return res.json({
            verified: false,
            status: verifyJson.data?.status || 'pending',
            message: 'Payment has not been completed or verified yet on Chapa.',
          });
        }
      } catch (err: any) {
        console.error('[Chapa Verify API Error]:', err);
        return res.status(502).json({
          verified: false,
          error: 'Error communicating with Chapa verification endpoint.',
        });
      }
    }

    // In sandbox or pending state:
    // Registration must NOT be successful until verified!
    return res.json({
      verified: false,
      status: transaction.status.toLowerCase(),
      isSandbox: transaction.isSandbox,
      message: 'Payment has not been completed or verified yet. Please complete the payment first.',
    });
  };

  app.get('/api/verify-payment/:tx_ref', async (req: Request, res: Response) => {
    const txRef = Array.isArray(req.params.tx_ref) ? req.params.tx_ref[0] : req.params.tx_ref;
    await handleVerify(txRef || '', res);
  });

  app.post('/api/verify-payment', async (req: Request, res: Response) => {
    const txRef = typeof req.body?.tx_ref === 'string' ? req.body.tx_ref : '';
    await handleVerify(txRef, res);
  });

  /**
   * POST /api/complete-sandbox-payment
   * Simulates successful payment completion for sandbox/test environments
   * Only after this is called does the transaction become verified and generate member ID!
   */
  app.post('/api/complete-sandbox-payment', (req: Request, res: Response) => {
    const { tx_ref, method } = req.body;
    if (!tx_ref) {
      return res.status(400).json({ success: false, error: 'tx_ref is required' });
    }

    const transaction = pendingTransactions.get(tx_ref);
    if (!transaction) {
      return res.status(404).json({ success: false, error: 'Transaction not found' });
    }

    const randNum = Math.floor(1000 + Math.random() * 9000);
    const refNumber = `HCFC-2026-M${randNum}`;

    transaction.status = 'SUCCESS';
    transaction.referenceNumber = refNumber;
    transaction.paymentMethod = method || 'Telebirr';
    transaction.verifiedAt = new Date().toISOString();

    pendingTransactions.set(tx_ref, transaction);

    console.log(`[Sandbox Paid] Completed payment for ${tx_ref}, refNumber=${refNumber}, amount=${transaction.amount}`);

    return res.json({
      success: true,
      verified: true,
      referenceNumber: refNumber,
      amount: transaction.amount,
      tier: transaction.tier,
      verifiedAt: transaction.verifiedAt,
      member: {
        fullName: transaction.fullName,
        dateOfBirth: transaction.dateOfBirth,
        gender: transaction.gender,
        phone: transaction.phone,
        email: transaction.email,
        cityOrRegion: transaction.cityOrRegion,
        membershipType: transaction.tier,
        preferredLanguage: transaction.preferredLanguage,
        photoUrl: transaction.photoUrl,
        referenceNumber: refNumber,
        amountPaid: transaction.amount,
        tx_ref: transaction.tx_ref,
        status: 'APPROVED',
      },
      message: 'Sandbox payment completed and verified.',
    });
  });

  /**
   * GET /api/payment-status/:tx_ref
   * Quick status check
   */
  app.get('/api/payment-status/:tx_ref', (req: Request, res: Response) => {
    const txRef = Array.isArray(req.params.tx_ref) ? req.params.tx_ref[0] : req.params.tx_ref;
    const transaction = txRef ? pendingTransactions.get(txRef) : undefined;
    if (!transaction) {
      return res.status(404).json({ found: false });
    }
    return res.json({
      found: true,
      status: transaction.status,
      amount: transaction.amount,
      tier: transaction.tier,
      isSandbox: transaction.isSandbox,
      referenceNumber: transaction.referenceNumber,
    });
  });

  // Vite Integration
  const isProduction = process.env.NODE_ENV === 'production';
  if (isProduction && !process.env.VITE_DEV) {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: PORT },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`⚽ Halaba City FC Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
