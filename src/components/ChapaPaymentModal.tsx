import React, { useState, useEffect, useRef } from 'react';
import { HalabaCrest } from './HalabaCrest';
import {
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  RefreshCw,
  X,
  Smartphone,
  Building2,
  Lock,
  ArrowRight
} from 'lucide-react';

interface ChapaPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  txRef: string;
  amount: number | string;
  tier: string;
  fullName: string;
  checkoutUrl: string;
  isSandbox: boolean;
  onPaymentVerified: (data: {
    referenceNumber: string;
    amount: number | string;
    tier: string;
    tx_ref: string;
    verifiedAt?: string;
  }) => void;
}

export const ChapaPaymentModal: React.FC<ChapaPaymentModalProps> = ({
  isOpen,
  onClose,
  txRef,
  amount,
  tier,
  fullName,
  checkoutUrl,
  isSandbox,
  onPaymentVerified,
}) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSimulatingSandbox, setIsSimulatingSandbox] = useState(false);
  const [selectedSandboxMethod, setSelectedSandboxMethod] = useState<'Telebirr' | 'CBE Birr' | 'Awash Bank' | 'Card'>('Telebirr');
  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Poll payment verification while modal is open
  useEffect(() => {
    if (!isOpen || !txRef || isSuccess) {
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
      return;
    }

    const checkVerification = async () => {
      try {
        const res = await fetch(`/api/verify-payment/${txRef}`);
        const data = await res.json();
        if (data.verified && data.status === 'success') {
          setIsSuccess(true);
          if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
          setTimeout(() => {
            onPaymentVerified({
              referenceNumber: data.referenceNumber,
              amount: data.amount || amount,
              tier: data.tier || tier,
              tx_ref: txRef,
              verifiedAt: data.verifiedAt,
            });
          }, 1200);
        }
      } catch (e) {
        console.warn('Auto poll error:', e);
      }
    };

    pollIntervalRef.current = setInterval(checkVerification, 2500);

    return () => {
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
    };
  }, [isOpen, txRef, isSuccess, amount, tier, onPaymentVerified]);

  if (!isOpen) return null;

  const handleManualVerify = async () => {
    setIsVerifying(true);
    setVerificationError(null);
    try {
      const res = await fetch(`/api/verify-payment/${txRef}`);
      const data = await res.json();
      if (data.verified && data.status === 'success') {
        setIsSuccess(true);
        setTimeout(() => {
          onPaymentVerified({
            referenceNumber: data.referenceNumber,
            amount: data.amount || amount,
            tier: data.tier || tier,
            tx_ref: txRef,
            verifiedAt: data.verifiedAt,
          });
        }, 1200);
      } else {
        setVerificationError(
          data.message || 'Payment has not been completed or verified yet. Please complete the transaction on Chapa.'
        );
      }
    } catch {
      setVerificationError('Unable to connect to verification service. Please try again in a moment.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleSimulateSandboxSuccess = async () => {
    setIsSimulatingSandbox(true);
    setVerificationError(null);
    try {
      const res = await fetch('/api/complete-sandbox-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tx_ref: txRef,
          method: selectedSandboxMethod,
        }),
      });
      const data = await res.json();
      if (data.success && data.verified) {
        setIsSuccess(true);
        setTimeout(() => {
          onPaymentVerified({
            referenceNumber: data.referenceNumber,
            amount: data.amount || amount,
            tier: data.tier || tier,
            tx_ref: txRef,
            verifiedAt: data.verifiedAt,
          });
        }, 1200);
      } else {
        setVerificationError(data.error || 'Failed to simulate test payment.');
      }
    } catch {
      setVerificationError('Error executing sandbox payment.');
    } finally {
      setIsSimulatingSandbox(false);
    }
  };

  const isExternalChapaUrl = checkoutUrl.startsWith('http://') || checkoutUrl.startsWith('https://');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-neutral-900 border border-neutral-700 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col max-h-[92vh] overflow-y-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <HalabaCrest size={36} />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-sports font-black text-lg text-white uppercase tracking-wider">
                  Chapa Payment
                </span>
                <span className="px-2 py-0.5 rounded text-xxs font-mono font-bold uppercase bg-emerald-950 text-emerald-400 border border-emerald-800">
                  {isSandbox ? 'Test Sandbox' : 'Official Gateway'}
                </span>
              </div>
              <p className="text-xxs text-neutral-400">
                Halaba City FC Supporter Registry
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Payment Success State */}
        {isSuccess ? (
          <div className="py-10 text-center space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-600 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-sports font-black text-2xl text-white uppercase tracking-wider">
              Payment Verified!
            </h3>
            <p className="text-sm text-neutral-300 max-w-sm mx-auto">
              Chapa has confirmed your payment of{' '}
              <strong className="text-amber-400">{amount} ETB</strong>. Completing your official registration...
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Activating Membership ID...</span>
            </div>
          </div>
        ) : (
          <div className="py-4 space-y-5">
            {/* Amount Box */}
            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-xxs uppercase tracking-wider text-neutral-400 font-bold block">
                  Membership Plan & Fee
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="font-sports font-black text-xl text-white uppercase">
                    {tier} Plan
                  </span>
                  <span className="text-xs text-neutral-400">for {fullName}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xxs text-neutral-400 uppercase font-mono block">Amount Due</span>
                <span className="font-sports font-black text-2xl text-amber-400 font-mono">
                  {amount} ETB
                </span>
              </div>
            </div>

            {/* Transaction Ref Pill */}
            <div className="flex items-center justify-between text-xs px-3 py-2 rounded-xl bg-neutral-800/40 border border-neutral-800 text-neutral-400 font-mono">
              <span>Chapa Reference:</span>
              <span className="text-neutral-200 font-bold">{txRef}</span>
            </div>

            {/* Ethiopian Payment Methods Supported */}
            <div>
              <span className="text-xxs uppercase tracking-wider text-neutral-400 font-bold block mb-2">
                Supported Ethiopian Payment Providers
              </span>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center gap-1">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span className="text-xxs font-bold text-neutral-200">Telebirr</span>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center gap-1">
                  <Building2 className="w-4 h-4 text-purple-400" />
                  <span className="text-xxs font-bold text-neutral-200">CBE Birr</span>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center gap-1">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span className="text-xxs font-bold text-neutral-200">Awash Birr</span>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center gap-1">
                  <CreditCard className="w-4 h-4 text-sky-400" />
                  <span className="text-xxs font-bold text-neutral-200">Cards</span>
                </div>
              </div>
            </div>

            {/* Error Message if Verification Failed */}
            {verificationError && (
              <div className="p-3 rounded-xl bg-red-950/70 border border-red-800 text-red-200 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{verificationError}</span>
              </div>
            )}

            {/* Action Buttons */}
            {isExternalChapaUrl ? (
              <div className="space-y-3">
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-sports font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950"
                >
                  <span>Pay {amount} ETB on Chapa</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-center text-xxs text-neutral-400">
                  Click above to open the secure Chapa checkout in a new tab. After payment, return here and click &quot;Verify Payment Status&quot;.
                </p>
              </div>
            ) : null}

            {/* Interactive Sandbox Simulator Panel for Test/Dev Mode */}
            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Chapa Sandbox Simulation</span>
                </span>
                <span className="text-xxs font-mono bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded">
                  Instant Test Pay
                </span>
              </div>
              <p className="text-xxs text-neutral-400">
                Select your simulated Ethiopian payment method to complete and verify the{' '}
                <strong className="text-amber-400">{amount} ETB</strong> transaction:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {(['Telebirr', 'CBE Birr', 'Awash Bank', 'Card'] as const).map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setSelectedSandboxMethod(method)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all text-left flex items-center justify-between ${
                      selectedSandboxMethod === method
                        ? 'bg-red-600/20 border border-red-500 text-white'
                        : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span>{method}</span>
                    {selectedSandboxMethod === method && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                    )}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleSimulateSandboxSuccess}
                disabled={isSimulatingSandbox}
                className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-sports font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-red-950"
              >
                {isSimulatingSandbox ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Processing {amount} ETB Payment...</span>
                  </>
                ) : (
                  <>
                    <span>Simulate Successful Payment ({amount} ETB via {selectedSandboxMethod})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Manual Verification Button & Status */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleManualVerify}
                disabled={isVerifying}
                className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 disabled:opacity-50 text-white font-sports font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-neutral-700"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isVerifying ? 'animate-spin' : ''}`} />
                <span>{isVerifying ? 'Verifying with Chapa...' : 'Verify Payment Status'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-transparent hover:bg-neutral-800 text-neutral-400 hover:text-white text-xs font-sports font-bold uppercase tracking-wider transition-colors"
              >
                Cancel
              </button>
            </div>

            {/* Security Guarantee Notice */}
            <div className="flex items-center justify-center gap-1.5 text-xxs text-neutral-500">
              <Lock className="w-3 h-3 text-neutral-600" />
              <span>Registration will only be activated once payment is confirmed and verified by Chapa.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
