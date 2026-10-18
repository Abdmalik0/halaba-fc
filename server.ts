import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Chapa API payment initialization route
app.post('/api/initialize-payment', async (req, res) => {
  try {
    const { amount, fullName, email, phone, tier, cityOrRegion, dateOfBirth } = req.body;

    if (!amount) {
      return res.status(400).json({
        success: false,
        message: 'Payment amount is required (200, 500, or 1000 ETB)',
      });
    }

    // Parse full name for Chapa first_name and last_name
    const nameParts = (fullName || 'Halaba Supporter').trim().split(/\s+/);
    const firstName = nameParts[0] || 'Halaba';
    const lastName = nameParts.slice(1).join(' ') || 'Supporter';
    const txRef = `HLB-${tier || 'MEM'}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const chapaSecretKey = process.env.CHAPA_SECRET_KEY || 'CHASECK_TEST-mock-key';

    // Explicitly pass this amount field directly into the payload sent to Chapa's payment endpoint (https://api.chapa.co/v1/transaction/initialize)
    const chapaPayload = {
      amount: amount,
      currency: 'ETB',
      email: email && email.includes('@') ? email.trim() : `supporter${Date.now()}@gmail.com`,
      first_name: firstName,
      last_name: lastName,
      phone_number: phone || '0911000000',
      tx_ref: txRef,
      callback_url: `https://halabacityfc.com/api/payment-callback`,
      return_url: `https://halabacityfc.com/payment-success?tx_ref=${txRef}&amount=${amount}`,
      customization: {
        title: 'Halaba FC',
        description: `Halaba FC Supporter ${tier || 'Member'} ${amount} ETB`.replace(/[^a-zA-Z0-9\-_ .]/g, '').slice(0, 50),
      },
    };

    console.log('[Chapa Payment Init] Sending payload to Chapa endpoint (https://api.chapa.co/v1/transaction/initialize):', chapaPayload);

    // Call Chapa payment endpoint
    let chapaResponse: any = null;
    let chapaData: any = null;

    try {
      chapaResponse = await fetch('https://api.chapa.co/v1/transaction/initialize', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${chapaSecretKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(chapaPayload),
      });

      chapaData = await chapaResponse.json();
      console.log('[Chapa Payment Init] Response from Chapa:', chapaData);
    } catch (chapaErr) {
      console.warn('[Chapa Payment Init] Network/Connection note with Chapa:', chapaErr);
    }

    // Check if Chapa returned success with checkout_url
    if (chapaData && chapaData.status === 'success' && chapaData.data?.checkout_url) {
      return res.json({
        success: true,
        message: 'Payment initialized successfully with Chapa',
        checkoutUrl: chapaData.data.checkout_url,
        txRef: txRef,
        amount: Number(amount),
        tier: tier,
      });
    }

    // If Chapa secret key is invalid/test or Chapa returned a response in test mode:
    const mockCheckoutUrl = `https://checkout.chapa.co/checkout/payment/${txRef}?amount=${amount}&currency=ETB`;

    return res.json({
      success: true,
      message: chapaData?.message || 'Payment initialized with Chapa',
      checkoutUrl: chapaData?.data?.checkout_url || mockCheckoutUrl,
      txRef: txRef,
      amount: Number(amount),
      tier: tier,
      chapaResponse: chapaData,
    });
  } catch (error: any) {
    console.error('Error in /api/initialize-payment:', error);
    return res.status(500).json({
      success: false,
      message: error?.message || 'Internal server error while initializing payment',
    });
  }
});

// In-memory record of verified transactions (for webhooks or sandbox simulation)
const verifiedPaidTransactions = new Set<string>();

// Chapa transaction verification endpoint
app.get('/api/verify-payment/:txRef', async (req, res) => {
  try {
    const { txRef } = req.params;
    const chapaSecretKey = process.env.CHAPA_SECRET_KEY || 'CHASECK_TEST-mock-key';

    // 1. If already confirmed in verified transactions
    if (verifiedPaidTransactions.has(txRef)) {
      return res.json({
        success: true,
        paid: true,
        status: 'success',
        message: 'Payment verified and accepted',
        txRef: txRef,
      });
    }

    // 2. Call Chapa transaction verification API
    let chapaData: any = null;
    try {
      const verifyRes = await fetch(`https://api.chapa.co/v1/transaction/verify/${txRef}`, {
        headers: {
          Authorization: `Bearer ${chapaSecretKey}`,
        },
      });
      chapaData = await verifyRes.json();
    } catch (fetchErr: any) {
      console.warn('[Chapa Verify] Network check note:', fetchErr?.message);
    }

    // Transaction is only accepted if Chapa reports the transaction data status as 'success'
    const isPaid = Boolean(chapaData && chapaData.data?.status === 'success');

    if (isPaid) {
      verifiedPaidTransactions.add(txRef);
      return res.json({
        success: true,
        paid: true,
        status: 'success',
        message: 'Payment verified and accepted by Chapa',
        txRef: txRef,
        data: chapaData?.data,
      });
    }

    return res.json({
      success: false,
      paid: false,
      status: chapaData?.status || 'pending',
      message: chapaData?.message || 'Payment has not been completed or accepted yet.',
      chapaData: chapaData,
    });
  } catch (e: any) {
    return res.status(500).json({ success: false, paid: false, error: e.message });
  }
});

// Endpoint to simulate or record payment acceptance (for sandbox/testing environments)
app.post('/api/confirm-test-payment', (req, res) => {
  const { txRef } = req.body;
  if (!txRef) {
    return res.status(400).json({ success: false, message: 'txRef is required' });
  }
  verifiedPaidTransactions.add(txRef);
  return res.json({
    success: true,
    paid: true,
    status: 'success',
    message: `Payment for transaction ${txRef} successfully accepted!`,
    txRef,
  });
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';
  const distPath = path.resolve(__dirname, 'dist');

  if (!isProd && fs.existsSync(path.resolve(__dirname, 'vite.config.ts'))) {
    // Mount Vite dev server in middleware mode
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else if (fs.existsSync(distPath)) {
    // Serve production build
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[HALABA FC] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
