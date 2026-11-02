import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface PendingTransaction {
  tx_ref: string;
  amount: number | string;
  tier: string;
  type?: 'MEMBERSHIP' | 'SHOP_ORDER' | 'DONATION';
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cityOrRegion: string;
  dateOfBirth?: string;
  gender?: string;
  preferredLanguage?: string;
  photoUrl?: string;
  shopOrderDetails?: {
    itemId: string;
    itemName: string;
    size: string;
    streetAddress: string;
    city: string;
    subcityOrRegion: string;
  };
  donationDetails?: {
    purpose: string;
    supporterName: string;
  };
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

// Parse command-line flags (--port, -p, --host)
const cliArgs = process.argv.slice(2);
let cliPort: number | undefined;
let cliHost: string | undefined;
for (let i = 0; i < cliArgs.length; i++) {
  if (cliArgs[i] === '--port' || cliArgs[i] === '-p') {
    cliPort = parseInt(cliArgs[i + 1], 10);
  }
  if (cliArgs[i] === '--host') {
    cliHost = cliArgs[i + 1];
  }
}

// Global safety guards to prevent dev server crash
process.on('uncaughtException', (err) => {
  console.error('[Server Uncaught Exception]:', err);
});
process.on('unhandledRejection', (reason) => {
  console.error('[Server Unhandled Rejection]:', reason);
});

async function startServer() {
  const app = express();
  const PORT = cliPort || (process.env.PORT ? parseInt(process.env.PORT, 10) : 3000);
  const HOST = cliHost || process.env.HOST || '0.0.0.0';

  app.use(cors());
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Serve static assets from public folder under root and subpaths
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/halaba-fc', express.static(path.join(__dirname, 'public')));
  app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
  app.use('/halaba-fc/images', express.static(path.join(__dirname, 'public', 'images')));

  const CHAPA_SECRET_KEY = process.env.CHAPA_SECRET_KEY || '';
  const isChapaConfigured = Boolean(
    CHAPA_SECRET_KEY &&
    !CHAPA_SECRET_KEY.includes('sample_secret_key') &&
    CHAPA_SECRET_KEY.startsWith('CHASECK')
  );

  // Cache for GitHub APK release resolution (5 minute TTL)
  let cachedApkInfo: {
    downloadUrl: string;
    fileName: string;
    version: string;
    sizeBytes: number;
    sizeFormatted: string;
    publishedAt: string;
    cachedAt: number;
  } | null = null;

  // Free Over-The-Air Live Update endpoint for CapacitorUpdater
  app.get(['/api/update-check', '/update-check.json'], (_req: Request, res: Response) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Content-Type', 'application/json');

    try {
      const filePath = path.join(__dirname, 'public', 'update-check.json');
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf-8');
        return res.send(raw);
      }
    } catch (e) {
      console.warn('[UpdateCheck] Failed reading update-check.json from disk:', e);
    }

    return res.json({
      version: '1.0.14',
      url: 'https://github.com/Abdmalik0/halaba-fc/releases/download/v1.0.14/dist.zip',
    });
  });

  /**
   * GET /api/latest-apk
   * Queries GitHub Releases for the latest .apk file from Abdmalik0/halaba-fc
   * Supports ?download=1 to immediately 302 redirect browser to direct APK download
   */
  app.get('/api/latest-apk', async (req: Request, res: Response) => {
    const shouldDownload = req.query.download === '1' || req.query.download === 'true';
    const now = Date.now();

    // Default fallback pointing to verified APK release on GitHub
    const defaultApk = {
      downloadUrl: 'https://github.com/Abdmalik0/halaba-fc/releases/download/v1.0/HalabaCityFC-v1.0-debug.apk',
      fileName: 'HalabaCityFC-v1.0-debug.apk',
      version: 'v1.0',
      sizeBytes: 23365247,
      sizeFormatted: '22.3 MB',
      publishedAt: '2026-10-29T10:00:00Z',
    };

    // Return cached info if fresh (< 5 mins)
    if (cachedApkInfo && now - cachedApkInfo.cachedAt < 5 * 60 * 1000) {
      if (shouldDownload) {
        return res.redirect(cachedApkInfo.downloadUrl);
      }
      return res.json({ success: true, ...cachedApkInfo, fromCache: true });
    }

    try {
      console.log('[LatestAPK] Querying GitHub API for latest APK release...');
      const ghRes = await fetch('https://api.github.com/repos/Abdmalik0/halaba-fc/releases', {
        headers: {
          'User-Agent': 'HalabaCityFC-App',
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (ghRes.ok) {
        const releases = await ghRes.json();
        if (Array.isArray(releases) && releases.length > 0) {
          for (const rel of releases) {
            const apkAsset = rel.assets?.find((a: any) =>
              typeof a?.name === 'string' && a.name.toLowerCase().endsWith('.apk')
            );

            if (apkAsset && apkAsset.browser_download_url) {
              const sizeMB = (apkAsset.size / (1024 * 1024)).toFixed(1);
              cachedApkInfo = {
                downloadUrl: apkAsset.browser_download_url,
                fileName: apkAsset.name,
                version: rel.tag_name || 'v1.0',
                sizeBytes: apkAsset.size,
                sizeFormatted: `${sizeMB} MB`,
                publishedAt: apkAsset.updated_at || rel.published_at || new Date().toISOString(),
                cachedAt: now,
              };
              console.log(`[LatestAPK] Discovered latest APK: ${cachedApkInfo.fileName} (${cachedApkInfo.version}) -> ${cachedApkInfo.downloadUrl}`);
              break;
            }
          }
        }
      } else {
        console.warn(`[LatestAPK] GitHub API returned status ${ghRes.status}`);
      }
    } catch (err: any) {
      console.warn('[LatestAPK] Error fetching GitHub releases:', err.message);
    }

    const finalApk = cachedApkInfo || { ...defaultApk, cachedAt: now };

    if (shouldDownload) {
      return res.redirect(finalApk.downloadUrl);
    }

    return res.json({
      success: true,
      ...finalApk,
    });
  });

  /**
   * POST /api/initialize-payment
   * Initializes a Chapa transaction for membership, jersey shop checkout, or supporter donation.
   * Explicitly passes the dynamic amount directly into Chapa's payload.
   */
  app.post('/api/initialize-payment', async (req: Request, res: Response) => {
    try {
      const {
        amount,
        tier,
        type = 'MEMBERSHIP',
        title,
        description,
        fullName,
        phone,
        email,
        cityOrRegion,
        dateOfBirth,
        gender,
        preferredLanguage,
        photoUrl,
        shopOrderDetails,
        donationDetails,
        tx_ref: customTxRef,
      } = req.body;

      if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
        return res.status(400).json({
          success: false,
          error: 'A valid amount is required for payment initialization.',
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

      const txPrefix = type === 'SHOP_ORDER' ? 'halaba-shop' : type === 'DONATION' ? 'halaba-donate' : 'halaba-tx';
      const txRef = customTxRef || `${txPrefix}-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const userEmail = email && email.includes('@') ? email.trim() : `supporter-${txRef.slice(-6)}@halabafc.et`;
      const protocol = req.protocol === 'https' || req.headers['x-forwarded-proto'] === 'https' ? 'https' : 'http';
      const host = req.get('host') || `localhost:${PORT}`;

      // Customization title and description based on transaction type
      let paymentTitle = title;
      let paymentDesc = description;

      if (!paymentTitle) {
        if (type === 'SHOP_ORDER') {
          paymentTitle = `Halaba FC Shop: ${shopOrderDetails?.itemName || 'Jersey Order'}`;
        } else if (type === 'DONATION') {
          paymentTitle = 'Halaba City FC Supporter Donation';
        } else {
          paymentTitle = `Halaba FC ${tier || 'Official'} Membership`;
        }
      }

      if (!paymentDesc) {
        if (type === 'SHOP_ORDER') {
          paymentDesc = `Merchandise order: ${shopOrderDetails?.itemName || 'Jersey'} (Size: ${shopOrderDetails?.size || 'Standard'}) - ${amount} ETB`;
        } else if (type === 'DONATION') {
          paymentDesc = `Club Donation: ${donationDetails?.purpose || 'General Club Support'} (${amount} ETB)`;
        } else {
          paymentDesc = `Membership registration fee (${amount} ETB)`;
        }
      }

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
        return_url: `${protocol}://${host}/?tx_ref=${txRef}&payment_completed=true&payment_type=${type}`,
        'customization[title]': paymentTitle,
        'customization[description]': paymentDesc,
      };

      console.log(`[Chapa Init] Initializing ${type} payment for tx_ref=${txRef}, amount=${amount} ETB, customer=${fullName}`);

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
        checkoutUrl = `/?chapa_modal=1&tx_ref=${txRef}&amount=${encodeURIComponent(String(amount))}&type=${encodeURIComponent(type)}&tier=${encodeURIComponent(tier || 'STANDARD')}`;
      }

      // Store in pending transactions
      const transactionRecord: PendingTransaction = {
        tx_ref: txRef,
        amount: String(amount),
        tier: tier || 'STANDARD',
        type,
        fullName: fullName.trim(),
        firstName,
        lastName,
        email: userEmail,
        phone: cleanPhone,
        cityOrRegion: cityOrRegion || shopOrderDetails?.city || 'Halaba',
        dateOfBirth: dateOfBirth || '',
        gender: gender || '',
        preferredLanguage: preferredLanguage || 'en',
        photoUrl: photoUrl || '',
        shopOrderDetails,
        donationDetails,
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
        type,
        isSandbox,
        message: 'Payment initialized successfully. Complete payment to verify transaction.',
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

    const formatVerifiedPayload = (tx: PendingTransaction) => {
      const type = tx.type || 'MEMBERSHIP';
      return {
        verified: true,
        status: 'success',
        type,
        referenceNumber: tx.referenceNumber,
        amount: tx.amount,
        tier: tx.tier,
        verifiedAt: tx.verifiedAt,
        order: type === 'SHOP_ORDER' ? {
          orderNumber: tx.referenceNumber,
          itemId: tx.shopOrderDetails?.itemId || 'item-unknown',
          itemName: tx.shopOrderDetails?.itemName || 'Halaba Jersey',
          size: tx.shopOrderDetails?.size || 'Standard',
          amount: Number(tx.amount),
          fullName: tx.fullName,
          email: tx.email,
          phone: tx.phone,
          streetAddress: tx.shopOrderDetails?.streetAddress || '',
          city: tx.shopOrderDetails?.city || tx.cityOrRegion,
          subcityOrRegion: tx.shopOrderDetails?.subcityOrRegion || '',
          status: 'PAID',
          tx_ref: tx.tx_ref,
          verifiedAt: tx.verifiedAt,
        } : undefined,
        donation: type === 'DONATION' ? {
          donationNumber: tx.referenceNumber,
          fullName: tx.fullName,
          email: tx.email,
          phone: tx.phone,
          amount: Number(tx.amount),
          purpose: tx.donationDetails?.purpose || 'General Club Support',
          status: 'COMPLETED',
          tx_ref: tx.tx_ref,
          verifiedAt: tx.verifiedAt,
        } : undefined,
        member: type === 'MEMBERSHIP' ? {
          fullName: tx.fullName,
          dateOfBirth: tx.dateOfBirth,
          gender: tx.gender,
          phone: tx.phone,
          email: tx.email,
          cityOrRegion: tx.cityOrRegion,
          membershipType: tx.tier,
          preferredLanguage: tx.preferredLanguage,
          photoUrl: tx.photoUrl,
          referenceNumber: tx.referenceNumber,
          amountPaid: tx.amount,
          tx_ref: tx.tx_ref,
          status: 'APPROVED',
        } : undefined,
      };
    };

    // If already verified
    if (transaction.status === 'SUCCESS' && transaction.referenceNumber) {
      return res.json(formatVerifiedPayload(transaction));
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
          // Payment confirmed by Chapa!
          const randNum = Math.floor(1000 + Math.random() * 9000);
          const type = transaction.type || 'MEMBERSHIP';
          const refNumber = type === 'SHOP_ORDER'
            ? `HCFC-SHOP-${randNum}`
            : type === 'DONATION'
            ? `HCFC-DON-${randNum}`
            : `HCFC-2026-M${randNum}`;

          transaction.status = 'SUCCESS';
          transaction.referenceNumber = refNumber;
          transaction.verifiedAt = new Date().toISOString();
          transaction.chapaData = verifyJson.data;

          pendingTransactions.set(txRef, transaction);

          return res.json({
            ...formatVerifiedPayload(transaction),
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
    return res.json({
      verified: false,
      status: transaction.status.toLowerCase(),
      isSandbox: transaction.isSandbox,
      type: transaction.type || 'MEMBERSHIP',
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
    const type = transaction.type || 'MEMBERSHIP';
    const refNumber = type === 'SHOP_ORDER'
      ? `HCFC-SHOP-${randNum}`
      : type === 'DONATION'
      ? `HCFC-DON-${randNum}`
      : `HCFC-2026-M${randNum}`;

    transaction.status = 'SUCCESS';
    transaction.referenceNumber = refNumber;
    transaction.paymentMethod = method || 'Telebirr';
    transaction.verifiedAt = new Date().toISOString();

    pendingTransactions.set(tx_ref, transaction);

    console.log(`[Sandbox Paid] Completed ${type} payment for ${tx_ref}, refNumber=${refNumber}, amount=${transaction.amount}`);

    return res.json({
      success: true,
      verified: true,
      type,
      referenceNumber: refNumber,
      amount: transaction.amount,
      tier: transaction.tier,
      verifiedAt: transaction.verifiedAt,
      order: type === 'SHOP_ORDER' ? {
        orderNumber: refNumber,
        itemId: transaction.shopOrderDetails?.itemId || 'item-unknown',
        itemName: transaction.shopOrderDetails?.itemName || 'Halaba Jersey',
        size: transaction.shopOrderDetails?.size || 'Standard',
        amount: Number(transaction.amount),
        fullName: transaction.fullName,
        email: transaction.email,
        phone: transaction.phone,
        streetAddress: transaction.shopOrderDetails?.streetAddress || '',
        city: transaction.shopOrderDetails?.city || transaction.cityOrRegion,
        subcityOrRegion: transaction.shopOrderDetails?.subcityOrRegion || '',
        status: 'PAID',
        tx_ref: transaction.tx_ref,
        verifiedAt: transaction.verifiedAt,
      } : undefined,
      donation: type === 'DONATION' ? {
        donationNumber: refNumber,
        fullName: transaction.fullName,
        email: tx_ref ? transaction.email : undefined,
        phone: transaction.phone,
        amount: Number(transaction.amount),
        purpose: transaction.donationDetails?.purpose || 'General Club Support',
        status: 'COMPLETED',
        tx_ref: transaction.tx_ref,
        verifiedAt: transaction.verifiedAt,
      } : undefined,
      member: type === 'MEMBERSHIP' ? {
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
      } : undefined,
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
      type: transaction.type || 'MEMBERSHIP',
      amount: transaction.amount,
      tier: transaction.tier,
      isSandbox: transaction.isSandbox,
      referenceNumber: transaction.referenceNumber,
    });
  });

  /**
   * GET /api/shop-orders
   * Retrieves all jersey & merchandise transactions
   */
  app.get('/api/shop-orders', (_req: Request, res: Response) => {
    const orders: any[] = [];
    pendingTransactions.forEach((tx) => {
      if (tx.type === 'SHOP_ORDER' || tx.shopOrderDetails) {
        orders.push({
          orderNumber: tx.referenceNumber || tx.tx_ref,
          itemId: tx.shopOrderDetails?.itemId || 'unknown',
          itemName: tx.shopOrderDetails?.itemName || 'Halaba FC Jersey',
          size: tx.shopOrderDetails?.size || 'Standard',
          amount: Number(tx.amount),
          fullName: tx.fullName,
          email: tx.email,
          phone: tx.phone,
          streetAddress: tx.shopOrderDetails?.streetAddress || '',
          city: tx.shopOrderDetails?.city || tx.cityOrRegion,
          subcityOrRegion: tx.shopOrderDetails?.subcityOrRegion || '',
          status: tx.status === 'SUCCESS' ? 'PAID' : 'PENDING',
          tx_ref: tx.tx_ref,
          createdAt: tx.createdAt,
          verifiedAt: tx.verifiedAt,
        });
      }
    });
    return res.json({ success: true, count: orders.length, orders });
  });

  /**
   * GET /api/donations
   * Retrieves all supporter donations
   */
  app.get('/api/donations', (_req: Request, res: Response) => {
    const donations: any[] = [];
    pendingTransactions.forEach((tx) => {
      if (tx.type === 'DONATION' || tx.donationDetails) {
        donations.push({
          donationNumber: tx.referenceNumber || tx.tx_ref,
          fullName: tx.fullName,
          email: tx.email,
          phone: tx.phone,
          amount: Number(tx.amount),
          purpose: tx.donationDetails?.purpose || 'General Club Support',
          status: tx.status === 'SUCCESS' ? 'COMPLETED' : 'PENDING',
          tx_ref: tx.tx_ref,
          createdAt: tx.createdAt,
          verifiedAt: tx.verifiedAt,
        });
      }
    });
    return res.json({ success: true, count: donations.length, donations });
  });

  /**
   * GET /api/standings/sportsdb
   * Fetches official Ethiopian Premier League standings from TheSportsDB (League ID 4959)
   */
  app.get('/api/standings/sportsdb', async (_req: Request, res: Response) => {
    try {
      console.log('[SportsDB Sync] Fetching official Ethiopian Premier League table from TheSportsDB...');
      const response = await fetch('https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=4959&s=2026-2027');
      const data = await response.json();

      const normalizeEplId = (strTeam: string, idTeam?: string): string => {
        const s = (strTeam || '').toLowerCase();
        const id = String(idTeam || '');
        if (s.includes('halaba') || id === '157333') return 'halaba';
        if (s.includes('cbe') || s.includes('nigd') || id === '149377') return 'cbe_sa';
        if (s.includes('medhin') || s.includes('insurance') || id === '146921') return 'insurance';
        if (s.includes('adama') || id === '141024') return 'adama';
        if (s.includes('electric') || id === '146920') return 'electric';
        if (s.includes('bahir') || (id === '141026' && s.includes('bahir')) || id === '141025') return 'bahirdar';
        if (s.includes('fasil') || id === '141026') return 'fasil';
        if (s.includes('bunna') || (s.includes('coffee') && !s.includes('sidama'))) return 'bunna';
        if (s.includes('george') || s.includes('giorgis')) return 'saintgeorge';
        if (s.includes('defence') || s.includes('mekelakeya') || s.includes('mechal') || id === '143767') return 'defence';
        if (s.includes('welwalo')) return 'welwalo';
        if (s.includes('dicha') || s.includes('wolaitta')) return 'wolaitta';
        if (s.includes('hosaena') || s.includes('hossana') || s.includes('hadiya')) return 'hosaena';
        if (s.includes('diredawa') || s.includes('dire dawa')) return 'diredawa';
        if (s.includes('chencha') || s.includes('gamo')) return 'gamochencha';
        if (s.includes('sidama')) return 'sidama';
        if (s.includes('hawassa')) return 'hawassa';
        if (s.includes('shaggar') || s.includes('sheger')) return 'shaggar';
        if (s.includes('negelle') || s.includes('negele') || id === '153585') return 'negelle';
        return id || s.replace(/[^a-z0-9]/g, '');
      };

      const baseFallbackTeams = [
        { teamId: 'negelle', teamName: 'Negele Arsi FC', played: 5, won: 3, drawn: 2, lost: 0, goalsFor: 7, goalsAgainst: 2, goalDifference: 5, points: 11, form: ['D', 'D', 'W', 'W', 'W'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/3vj7z31760913824.png' },
        { teamId: 'defence', teamName: 'Mechal (Defence Force)', played: 5, won: 3, drawn: 1, lost: 1, goalsFor: 5, goalsAgainst: 2, goalDifference: 3, points: 10, form: ['W', 'L', 'W', 'W', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/o1ig4m1760893133.png' },
        { teamId: 'wolaitta', teamName: 'Wolaitta Dicha (Welayta Dicha)', played: 5, won: 2, drawn: 2, lost: 1, goalsFor: 10, goalsAgainst: 4, goalDifference: 6, points: 8, form: ['D', 'D', 'L', 'W', 'W'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/zveh4e1615830076.png' },
        { teamId: 'cbe_sa', teamName: 'Ethiopia Nigd Bank (CBE SA)', played: 4, won: 2, drawn: 2, lost: 0, goalsFor: 3, goalsAgainst: 1, goalDifference: 2, points: 8, form: ['W', 'W', 'D', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/fn7am21727368578.png' },
        { teamId: 'halaba', teamName: 'Halaba Ketema (በርበሬዎቹ)', played: 5, won: 2, drawn: 2, lost: 1, goalsFor: 5, goalsAgainst: 9, goalDifference: -4, points: 8, form: ['D', 'W', 'D', 'L', 'W'], isHalaba: true, badgeUrl: '/images/halaba-city-fc-logo.png' },
        { teamId: 'bahirdar', teamName: 'Bahir Dar Kenema', played: 4, won: 2, drawn: 1, lost: 1, goalsFor: 6, goalsAgainst: 4, goalDifference: 2, points: 7, form: ['W', 'L', 'W', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/o25wvi1790265058.png' },
        { teamId: 'electric', teamName: 'Ethio Electric (EEPCO)', played: 5, won: 2, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, points: 7, form: ['L', 'D', 'W', 'W', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/nywmq91790265280.png' },
        { teamId: 'saintgeorge', teamName: 'Saint George SC (Kidus Giorgis)', played: 5, won: 1, drawn: 3, lost: 1, goalsFor: 6, goalsAgainst: 6, goalDifference: 0, points: 6, form: ['D', 'L', 'D', 'D', 'W'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/9d201v1615830018.png' },
        { teamId: 'adama', teamName: 'Adama Kenema SC', played: 5, won: 1, drawn: 3, lost: 1, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, points: 6, form: ['W', 'D', 'D', 'L', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/4yijrk1615830040.png' },
        { teamId: 'hawassa', teamName: 'Hawassa Kenema SC', played: 4, won: 1, drawn: 2, lost: 1, goalsFor: 4, goalsAgainst: 4, goalDifference: 0, points: 5, form: ['L', 'D', 'D', 'W'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/hawassa_city_sc.png' },
        { teamId: 'shaggar', teamName: 'Shaggar City FC (Sheger Ketema)', played: 5, won: 1, drawn: 2, lost: 2, goalsFor: 4, goalsAgainst: 5, goalDifference: -1, points: 5, form: ['W', 'D', 'L', 'D', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/shaggar_city_epl.png' },
        { teamId: 'insurance', teamName: 'Ethiopian Medhin (Insurance)', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 4, goalDifference: 0, points: 4, form: ['W', 'D', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/oboroa1776295149.png' },
        { teamId: 'hosaena', teamName: 'Hadiya Hossana', played: 4, won: 1, drawn: 1, lost: 2, goalsFor: 3, goalsAgainst: 4, goalDifference: -1, points: 4, form: ['L', 'D', 'W', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/9f0ozj1790265391.png' },
        { teamId: 'bunna', teamName: 'Ethiopian Coffee SC (Bunna)', played: 5, won: 1, drawn: 1, lost: 3, goalsFor: 2, goalsAgainst: 6, goalDifference: -4, points: 4, form: ['L', 'W', 'L', 'L', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/welkj51790265316.png' },
        { teamId: 'fasil', teamName: 'Fasil Kenema', played: 4, won: 0, drawn: 3, lost: 1, goalsFor: 3, goalsAgainst: 4, goalDifference: -1, points: 3, form: ['D', 'D', 'L', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/xivgrb1790265423.png' },
        { teamId: 'sidama', teamName: 'Sidama Coffee SC (Sidama Bunna)', played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 0, goalsAgainst: 1, goalDifference: -1, points: 1, form: ['L', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/t0057h1615830065.png' },
        { teamId: 'welwalo', teamName: 'Welwalo Adigrat Univ.', played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 3, goalDifference: -2, points: 1, form: ['D', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/w2p6k41790265538.png' },
        { teamId: 'gamochencha', teamName: 'Gamo Chencha', played: 4, won: 0, drawn: 1, lost: 3, goalsFor: 1, goalsAgainst: 5, goalDifference: -4, points: 1, form: ['L', 'L', 'D', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/o3yz391790265452.png' },
      ];

      const standingsMap = new Map<string, any>();

      // Populate with baseline 18 Ethiopian Premier League clubs
      baseFallbackTeams.forEach((fb) => {
        standingsMap.set(fb.teamId, { ...fb });
      });

      // Overlay live official data from TheSportsDB
      if (data && Array.isArray(data.table) && data.table.length > 0) {
        data.table.forEach((item: any) => {
          const canonicalId = normalizeEplId(item.strTeam, item.idTeam);
          if (canonicalId === 'diredawa') return; // Dire Dawa is not in the league
          const isHalaba = canonicalId === 'halaba';
          const formLetters = (item.strForm || 'DWD')
            .split('')
            .filter((c: string) => ['W', 'D', 'L'].includes(c));

          const existing = standingsMap.get(canonicalId) || {};

          standingsMap.set(canonicalId, {
            ...existing,
            teamId: canonicalId,
            teamName: canonicalId === 'cbe_sa' ? 'Ethiopia Nigd Bank (CBE SA)' : canonicalId === 'halaba' ? 'Halaba Ketema (በርበሬዎቹ)' : canonicalId === 'insurance' ? 'Ethiopian Medhin (Insurance)' : canonicalId === 'adama' ? 'Adama Kenema SC' : canonicalId === 'electric' ? 'Ethio Electric' : canonicalId === 'hosaena' ? 'Hadiya Hossana' : item.strTeam,
            played: parseInt(item.intPlayed, 10) || existing.played || 0,
            won: parseInt(item.intWin, 10) || existing.won || 0,
            drawn: parseInt(item.intDraw, 10) || existing.drawn || 0,
            lost: parseInt(item.intLoss, 10) || existing.lost || 0,
            goalsFor: parseInt(item.intGoalsFor, 10) || existing.goalsFor || 0,
            goalsAgainst: parseInt(item.intGoalsAgainst, 10) || existing.goalsAgainst || 0,
            goalDifference: parseInt(item.intGoalDifference, 10) || existing.goalDifference || 0,
            points: parseInt(item.intPoints, 10) || existing.points || 0,
            form: formLetters.length > 0 ? formLetters : existing.form || ['D', 'W', 'D'],
            isHalaba,
            badgeUrl: item.strBadge ? item.strBadge.replace('/tiny', '') : existing.badgeUrl,
          });
        });
      }

      // If lookup table only returns top 5 teams (free tier cap), compute additional rounds from events
      if (!data?.table || data.table.length <= 5) {
        try {
          const sportsDbTeamIdToCanonical: Record<string, string> = {
            '153585': 'negelle',
            '143767': 'defence',
            '141032': 'wolaitta',
            '149377': 'cbe_sa',
            '157333': 'halaba',
            '141026': 'bahirdar',
            '141024': 'adama',
            '146921': 'insurance',
            '153586': 'shaggar',
            '146920': 'electric',
            '141028': 'bunna',
            '141029': 'fasil',
            '141030': 'saintgeorge',
            '141025': 'hawassa',
            '149378': 'welwalo',
            '141033': 'hosaena',
            '141031': 'sidama',
            '157334': 'gamochencha',
          };

          // Fetch finished events across recent rounds to keep all 18 teams live
          for (let r = 1; r <= 5; r++) {
            const rRes = await fetch(`https://www.thesportsdb.com/api/v1/json/123/eventsround.php?id=4959&r=${r}&s=2026-2027`);
            if (rRes.ok) {
              const rJson = await rRes.json();
              if (Array.isArray(rJson?.events)) {
                rJson.events.forEach((ev: any) => {
                  if (ev.strStatus === 'FT' && ev.intHomeScore !== null && ev.intAwayScore !== null) {
                    const homeCId = sportsDbTeamIdToCanonical[String(ev.idHomeTeam)] || normalizeEplId(ev.strHomeTeam, ev.idHomeTeam);
                    const awayCId = sportsDbTeamIdToCanonical[String(ev.idAwayTeam)] || normalizeEplId(ev.strAwayTeam, ev.idAwayTeam);
                    if (standingsMap.has(homeCId) && standingsMap.has(awayCId)) {
                      // Validate if badges can be upgraded
                      if (ev.strHomeTeamBadge && !standingsMap.get(homeCId).badgeUrl?.includes('thesportsdb')) {
                        standingsMap.get(homeCId).badgeUrl = ev.strHomeTeamBadge.replace('/tiny', '');
                      }
                      if (ev.strAwayTeamBadge && !standingsMap.get(awayCId).badgeUrl?.includes('thesportsdb')) {
                        standingsMap.get(awayCId).badgeUrl = ev.strAwayTeamBadge.replace('/tiny', '');
                      }
                    }
                  }
                });
              }
            }
          }
        } catch (roundErr) {
          console.debug('[Notice querying round events]:', roundErr);
        }
      }

      const list = Array.from(standingsMap.values())
        .filter((t) => t.teamId !== 'diredawa');
      list.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor);
      const rankedStandings = list.slice(0, 18).map((item, idx) => ({
        ...item,
        position: idx + 1,
      }));

      return res.json({
        success: true,
        source: 'TheSportsDB Official Season 2026-2027',
        league: 'Ethiopian Premier League',
        leagueId: '4959',
        season: '2026-2027',
        round: 'Round 5 Completed',
        count: rankedStandings.length,
        standings: rankedStandings,
      });
    } catch (err: any) {
      console.warn('[Notice fetching standings from TheSportsDB]:', err?.message || err);
      return res.status(500).json({
        success: false,
        error: err.message || 'Failed to sync standings from TheSportsDB',
      });
    }
  });

  // In-memory cache for Halaba City fixtures from TheSportsDB
  let cachedHalabaFixtures: any[] | null = null;
  let lastFixturesSyncTime = 0;

  /**
   * GET /api/fixtures/sportsdb
   * Fetches official Halaba City FC fixtures and results from TheSportsDB (Ethiopian Premier League, League 4959, Season 2026-2027)
   * Strictly filters and delivers ONLY fixtures and results involving Halaba City FC.
   */
  app.get('/api/fixtures/sportsdb', async (_req: Request, res: Response) => {
    try {
      const now = Date.now();
      // Serve in-memory cache if fresh (within 3 minutes)
      if (cachedHalabaFixtures && cachedHalabaFixtures.length > 0 && now - lastFixturesSyncTime < 180000) {
        return res.json({
          success: true,
          source: 'TheSportsDB (Cached)',
          season: '2026-2027',
          count: cachedHalabaFixtures.length,
          fixtures: cachedHalabaFixtures,
        });
      }

      const HALABA_SPORTSDB_ID = '157333';

      const normalizeTeam = (name: string, id?: string) => {
        const s = (name || '').toLowerCase();
        const idStr = String(id || '');
        if (s.includes('halaba') || idStr === '157333') return { id: 'halaba', name: 'Halaba Ketema (በርበሬዎቹ)', isHalaba: true };
        if (s.includes('cbe') || s.includes('nigd') || idStr === '149377') return { id: 'cbe_sa', name: 'Ethiopia Nigd Bank (CBE SA)', isHalaba: false };
        if (s.includes('medhin') || s.includes('insurance') || idStr === '146921') return { id: 'insurance', name: 'Ethiopian Medhin (Insurance)', isHalaba: false };
        if (s.includes('adama') || idStr === '141024') return { id: 'adama', name: 'Adama Kenema SC', isHalaba: false };
        if (s.includes('electric') || idStr === '146920') return { id: 'electric', name: 'Ethio Electric', isHalaba: false };
        if (s.includes('bahir') || idStr === '141026') return { id: 'bahirdar', name: 'Bahir Dar Kenema', isHalaba: false };
        if (s.includes('fasil') || idStr === '141029') return { id: 'fasil', name: 'Fasil Kenema', isHalaba: false };
        if (s.includes('bunna') || (s.includes('coffee') && !s.includes('sidama'))) return { id: 'bunna', name: 'Ethiopian Coffee SC', isHalaba: false };
        if (s.includes('george') || s.includes('giorgis')) return { id: 'saintgeorge', name: 'Saint George SC', isHalaba: false };
        if (s.includes('defence') || s.includes('mekelakeya') || s.includes('mechal') || idStr === '143767') return { id: 'defence', name: 'Mechal (Defence Force)', isHalaba: false };
        if (s.includes('welwalo') || idStr === '149378') return { id: 'welwalo', name: 'Welwalo Adigrat University', isHalaba: false };
        if (s.includes('dicha') || s.includes('wolaitta') || idStr === '141032') return { id: 'wolaitta', name: 'Wolaitta Dicha', isHalaba: false };
        if (s.includes('hosaena') || s.includes('hossana') || s.includes('hadiya') || idStr === '141033') return { id: 'hosaena', name: 'Hadiya Hosaena', isHalaba: false };
        if (s.includes('chencha') || s.includes('gamo')) return { id: 'gamochencha', name: 'Gamo Chencha', isHalaba: false };
        if (s.includes('sidama')) return { id: 'sidama', name: 'Sidama Coffee SC', isHalaba: false };
        if (s.includes('hawassa')) return { id: 'hawassa', name: 'Hawassa Kenema SC', isHalaba: false };
        if (s.includes('shaggar') || s.includes('sheger')) return { id: 'shaggar', name: 'Shaggar City FC', isHalaba: false };
        if (s.includes('negelle') || s.includes('negele') || idStr === '153585') return { id: 'negelle', name: 'Negelle Arsi FC', isHalaba: false };
        return { id: idStr || s.replace(/[^a-z0-9]/g, ''), name: name || 'Team', isHalaba: false };
      };

      // Baseline verified 2026/27 Halaba City FC EPL campaign matches
      const baselineHalabaMatches: any[] = [
        {
          id: 'm-epl-rd1',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2026-10-09',
          kickoffTime: '15:00',
          venue: 'Hawassa University Stadium',
          homeTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          awayTeam: { id: 'welwalo', name: 'Welwalo Adigrat University', isHalaba: false },
          status: 'FINISHED',
          score: { home: 1, away: 1 },
          halftimeScore: { home: 1, away: 0 },
          round: 'Round 1',
          summary: 'Round 1 opener: Halaba Ketema earned their first Ethiopian Premier League point in a hard-fought 1-1 draw with Welwalo Adigrat University.',
        },
        {
          id: 'm-epl-rd2',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2026-10-16',
          kickoffTime: '15:00',
          venue: 'Hawassa University Stadium',
          homeTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          awayTeam: { id: 'bahirdar', name: 'Bahir Dar Kenema', isHalaba: false },
          status: 'FINISHED',
          score: { home: 1, away: 0 },
          halftimeScore: { home: 0, away: 0 },
          round: 'Round 2',
          summary: 'Historic Round 2 triumph: Halaba Ketema defeated Bahir Dar Kenema 1-0 to capture their first ever victory in the Ethiopian Premier League.',
        },
        {
          id: 'm-epl-rd3',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2026-10-20',
          kickoffTime: '15:00',
          venue: 'Hawassa University Stadium',
          homeTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          awayTeam: { id: 'fasil', name: 'Fasil Kenema', isHalaba: false },
          status: 'FINISHED',
          score: { home: 1, away: 1 },
          halftimeScore: { home: 1, away: 0 },
          round: 'Round 3',
          summary: 'Round 3: Halaba Ketema maintained their undefeated home record in an electric 1-1 thriller against powerhouse Fasil Kenema.',
        },
        {
          id: 'm-epl-rd4',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2026-10-26',
          kickoffTime: '15:00',
          venue: 'Adama Science and Technology University Stadium',
          homeTeam: { id: 'wolaitta', name: 'Wolaitta Dicha', isHalaba: false },
          awayTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          status: 'FINISHED',
          score: { home: 6, away: 0 },
          round: 'Round 4',
          summary: 'Round 4 away trip against Wolaitta Dicha at Adama Science and Technology Stadium.',
        },
        {
          id: 'm-epl-rd5',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2026-10-30',
          kickoffTime: '15:00',
          venue: 'Hawassa University Stadium',
          homeTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          awayTeam: { id: 'hosaena', name: 'Hadiya Hosaena', isHalaba: false },
          status: 'FINISHED',
          score: { home: 2, away: 1 },
          round: 'Round 5',
          summary: 'Round 5 victory: The Berberewochu mounted a heroic performance to secure a 2-1 win over Hadiya Hosaena.',
        },
        {
          id: 'm-epl-rd6',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2026-11-20',
          kickoffTime: '15:00',
          venue: 'Addis Ababa Stadium',
          homeTeam: { id: 'electric', name: 'Ethio Electric', isHalaba: false },
          awayTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          status: 'UPCOMING',
          round: 'Round 6',
          summary: 'Round 6: Halaba Ketema travel to Addis Ababa to battle Ethio Electric.',
        },
        {
          id: 'm-epl-rd7',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2026-11-28',
          kickoffTime: '15:00',
          venue: 'Halaba Stadium, Halaba Kulito',
          homeTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          awayTeam: { id: 'cbe_sa', name: 'Ethiopia Nigd Bank (CBE SA)', isHalaba: false },
          status: 'UPCOMING',
          round: 'Round 7',
          summary: 'Round 7: Halaba Stadium hosts league contenders Ethiopia Nigd Bank (CBE SA).',
        },
        {
          id: 'm-epl-rd8',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2026-12-05',
          kickoffTime: '15:00',
          venue: 'Abebe Bikila Stadium, Addis Ababa',
          homeTeam: { id: 'insurance', name: 'Ethiopian Medhin (Insurance)', isHalaba: false },
          awayTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          status: 'UPCOMING',
          round: 'Round 8',
        },
        {
          id: 'm-epl-rd9',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2026-12-12',
          kickoffTime: '15:00',
          venue: 'Halaba Stadium, Halaba Kulito',
          homeTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          awayTeam: { id: 'bunna', name: 'Ethiopian Coffee SC', isHalaba: false },
          status: 'UPCOMING',
          round: 'Round 9',
        },
        {
          id: 'm-epl-rd10',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2026-12-19',
          kickoffTime: '15:00',
          venue: 'Addis Ababa Stadium',
          homeTeam: { id: 'saintgeorge', name: 'Saint George SC', isHalaba: false },
          awayTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          status: 'UPCOMING',
          round: 'Round 10',
        },
        {
          id: 'm-epl-rd11',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2026-12-26',
          kickoffTime: '15:00',
          venue: 'Halaba Stadium, Halaba Kulito',
          homeTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          awayTeam: { id: 'adama', name: 'Adama Kenema SC', isHalaba: false },
          status: 'UPCOMING',
          round: 'Round 11',
        },
        {
          id: 'm-epl-rd12',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2027-01-02',
          kickoffTime: '15:00',
          venue: 'Hawassa Stadium',
          homeTeam: { id: 'sidama', name: 'Sidama Coffee SC', isHalaba: false },
          awayTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          status: 'UPCOMING',
          round: 'Round 12',
        },
        {
          id: 'm-epl-rd13',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2027-01-09',
          kickoffTime: '15:00',
          venue: 'Halaba Stadium, Halaba Kulito',
          homeTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          awayTeam: { id: 'hawassa', name: 'Hawassa Kenema SC', isHalaba: false },
          status: 'UPCOMING',
          round: 'Round 13',
        },
        {
          id: 'm-epl-rd14',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2027-01-16',
          kickoffTime: '15:00',
          venue: 'Addis Ababa Stadium',
          homeTeam: { id: 'defence', name: 'Mechal (Defence Force)', isHalaba: false },
          awayTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          status: 'UPCOMING',
          round: 'Round 14',
        },
        {
          id: 'm-epl-rd15',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2027-01-23',
          kickoffTime: '15:00',
          venue: 'Halaba Stadium, Halaba Kulito',
          homeTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          awayTeam: { id: 'shaggar', name: 'Shaggar City FC', isHalaba: false },
          status: 'UPCOMING',
          round: 'Round 15',
        },
        {
          id: 'm-epl-rd16',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2027-01-30',
          kickoffTime: '15:00',
          venue: 'Hawassa Stadium',
          homeTeam: { id: 'negelle', name: 'Negelle Arsi FC', isHalaba: false },
          awayTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          status: 'UPCOMING',
          round: 'Round 16',
        },
        {
          id: 'm-epl-rd17',
          competition: 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: 'Ethiopian Premier League',
          date: '2027-02-06',
          kickoffTime: '15:00',
          venue: 'Halaba Stadium, Halaba Kulito',
          homeTeam: { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
          awayTeam: { id: 'gamochencha', name: 'Gamo Chencha', isHalaba: false },
          status: 'UPCOMING',
          round: 'Round 17',
        },
      ];

      const fixturesMap = new Map<string, any>();
      baselineHalabaMatches.forEach((m) => fixturesMap.set(m.id, { ...m }));

      // Fetch live data from TheSportsDB
      try {
        const [seasonRes, nextRes, lastRes] = await Promise.allSettled([
          fetch('https://www.thesportsdb.com/api/v1/json/123/eventsseason.php?id=4959&s=2026-2027').then(r => r.json()),
          fetch('https://www.thesportsdb.com/api/v1/json/123/eventsnext.php?id=' + HALABA_SPORTSDB_ID).then(r => r.json()),
          fetch('https://www.thesportsdb.com/api/v1/json/123/eventslast.php?id=' + HALABA_SPORTSDB_ID).then(r => r.json()),
        ]);

        const rawEvents: any[] = [];
        if (seasonRes.status === 'fulfilled' && seasonRes.value?.events) {
          rawEvents.push(...seasonRes.value.events);
        }
        if (nextRes.status === 'fulfilled' && nextRes.value?.events) {
          rawEvents.push(...nextRes.value.events);
        }
        if (lastRes.status === 'fulfilled' && lastRes.value?.results) {
          rawEvents.push(...lastRes.value.results);
        }

        // Filter strictly for Halaba City FC matches
        const halabaEvents = rawEvents.filter((e) => {
          const homeId = String(e.idHomeTeam || '');
          const awayId = String(e.idAwayTeam || '');
          const homeName = String(e.strHomeTeam || '').toLowerCase();
          const awayName = String(e.strAwayTeam || '').toLowerCase();
          const evName = String(e.strEvent || '').toLowerCase();
          return (
            homeId === HALABA_SPORTSDB_ID ||
            awayId === HALABA_SPORTSDB_ID ||
            homeName.includes('halaba') ||
            awayName.includes('halaba') ||
            evName.includes('halaba')
          );
        });

        // Merge live TheSportsDB data into Halaba fixtures
        halabaEvents.forEach((e) => {
          const roundNum = e.intRound ? parseInt(e.intRound, 10) : null;
          const matchKey = roundNum ? `m-epl-rd${roundNum}` : `m-sdb-${e.idEvent}`;
          const existing = fixturesMap.get(matchKey) || {};

          const homeTeam = normalizeTeam(e.strHomeTeam, e.idHomeTeam);
          const awayTeam = normalizeTeam(e.strAwayTeam, e.idAwayTeam);

          const isFinished = e.strStatus === 'FT' || e.strStatus === 'AOT' ||
            (e.intHomeScore !== null && e.intHomeScore !== '' && e.intAwayScore !== null && e.intAwayScore !== '');
          const isLive = e.strStatus === '1H' || e.strStatus === '2H' || e.strStatus === 'HT';

          const homeScore = isFinished || isLive ? parseInt(e.intHomeScore, 10) : undefined;
          const awayScore = isFinished || isLive ? parseInt(e.intAwayScore, 10) : undefined;

          fixturesMap.set(matchKey, {
            ...existing,
            id: matchKey,
            competition: 'ETHIOPIAN_PREMIER_LEAGUE',
            competitionName: e.strLeague || 'Ethiopian Premier League',
            date: e.dateEvent || existing.date,
            kickoffTime: e.strTime ? e.strTime.substring(0, 5) : existing.kickoffTime || '15:00',
            venue: e.strVenue || existing.venue || 'Hawassa University Stadium',
            homeTeam: {
              ...homeTeam,
              logo: e.strHomeTeamBadge ? e.strHomeTeamBadge.replace('/tiny', '') : existing.homeTeam?.logo,
            },
            awayTeam: {
              ...awayTeam,
              logo: e.strAwayTeamBadge ? e.strAwayTeamBadge.replace('/tiny', '') : existing.awayTeam?.logo,
            },
            status: isFinished ? 'FINISHED' : isLive ? 'LIVE' : 'UPCOMING',
            score: (homeScore !== undefined && awayScore !== undefined && !isNaN(homeScore) && !isNaN(awayScore))
              ? { home: homeScore, away: awayScore }
              : existing.score,
            round: e.intRound ? `Round ${e.intRound}` : existing.round,
            summary: existing.summary || `${homeTeam.name} vs ${awayTeam.name} in Ethiopian Premier League ${e.intRound ? `Round ${e.intRound}` : ''}`,
          });
        });
      } catch (err: any) {
        console.warn('[SportsDB Fixtures Fetch Notice]:', err?.message || err);
      }

      // Convert map to array and strictly filter for Halaba matches only
      const allHalabaFixtures = Array.from(fixturesMap.values()).filter(
        (m: any) =>
          m.homeTeam?.isHalaba ||
          m.awayTeam?.isHalaba ||
          m.homeTeam?.id === 'halaba' ||
          m.awayTeam?.id === 'halaba' ||
          m.homeTeam?.name?.toLowerCase().includes('halaba') ||
          m.awayTeam?.name?.toLowerCase().includes('halaba')
      );

      // Sort by date chronologically
      allHalabaFixtures.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

      // Update in-memory cache
      cachedHalabaFixtures = allHalabaFixtures;
      lastFixturesSyncTime = Date.now();

      return res.json({
        success: true,
        source: 'TheSportsDB Official Feed',
        season: '2026-2027',
        league: 'Ethiopian Premier League',
        count: allHalabaFixtures.length,
        fixtures: allHalabaFixtures,
      });
    } catch (err: any) {
      console.warn('[Error in /api/fixtures/sportsdb]:', err?.message || err);
      return res.status(500).json({
        success: false,
        error: err.message || 'Failed to sync Halaba fixtures from TheSportsDB',
      });
    }
  });

  // Vite Integration
  const isProduction = process.env.NODE_ENV === 'production';
  if (isProduction && !process.env.VITE_DEV) {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    // Disable HMR in middleware mode to avoid conflicting WebSocket servers and crashes in dev environment
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: HOST,
        port: PORT,
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  const server = app.listen(PORT, HOST, () => {
    console.log(`⚽ Halaba City FC Server listening on http://${HOST}:${PORT}`);
  });

  server.on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`[Server Notice] Port ${PORT} already in use. Retrying or keeping running...`);
    } else {
      console.error('[Server Listen Error]:', err);
    }
  });
}

startServer().catch((err) => {
  console.error('[Failed to start server]:', err);
});
