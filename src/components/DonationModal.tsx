import React, { useState } from 'react';
import { useClub } from '../context/ClubContext';
import { HalabaCrest } from './HalabaCrest';
import {
  Heart,
  X,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sparkles,
  Lock,
  ArrowRight,
  RefreshCw,
  Coins
} from 'lucide-react';

export const DonationModal: React.FC = () => {
  const { t, language, isDonationModalOpen, closeDonationModal, recordDonation } = useClub();

  const presetAmounts = [100, 500, 1000, 2500];
  const [selectedPreset, setSelectedPreset] = useState<number>(500);
  const [isCustom, setIsCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState<string>('');

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState<string>(t.purposeGeneral);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Success state
  const [verifiedDonation, setVerifiedDonation] = useState<{
    donationNumber: string;
    amount: number;
    fullName: string;
    purpose: string;
    date: string;
  } | null>(null);

  // Sandbox fallback modal state
  const [sandboxTx, setSandboxTx] = useState<{
    txRef: string;
    amount: number;
  } | null>(null);

  if (!isDonationModalOpen) return null;

  const currentAmount = isCustom ? Number(customAmount) || 0 : selectedPreset;

  const handleSelectPreset = (amount: number) => {
    setSelectedPreset(amount);
    setIsCustom(false);
    setErrorMsg(null);
  };

  const handleCustomChange = (val: string) => {
    const clean = val.replace(/[^\d]/g, '');
    setCustomAmount(clean);
    setIsCustom(true);
    setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (currentAmount <= 0) {
      setErrorMsg('Please select or enter a valid donation amount.');
      return;
    }

    if (!fullName.trim() || !phone.trim()) {
      setErrorMsg('Full Name and Phone Number are required.');
      return;
    }

    setIsSubmitting(true);

    try {
      const txRef = `halaba-donate-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

      const res = await fetch('/api/initialize-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: currentAmount,
          type: 'DONATION',
          fullName: fullName.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          cityOrRegion: 'Halaba',
          donationDetails: {
            purpose,
            supporterName: fullName.trim(),
          },
          title: `Halaba City FC Donation - ${purpose}`,
          description: `Supporter donation to Halaba City FC (${currentAmount} ETB)`,
          tx_ref: txRef,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to initialize donation with Chapa');
      }

      // If live Chapa URL provided, redirect to Chapa checkout
      if (data.checkout_url && !data.isSandbox && !data.checkout_url.includes('chapa_modal')) {
        window.location.href = data.checkout_url;
        return;
      }

      // If in sandbox mode or test environment, show instant simulator
      setSandboxTx({
        txRef: data.tx_ref || txRef,
        amount: currentAmount,
      });
      setIsSubmitting(false);
    } catch (err: any) {
      console.error('Error initiating donation:', err);
      setErrorMsg(err.message || 'Error communicating with payment gateway.');
      setIsSubmitting(false);
    }
  };

  const handleCompleteSandboxPayment = async () => {
    if (!sandboxTx) return;
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/complete-sandbox-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tx_ref: sandboxTx.txRef,
          method: 'Telebirr',
        }),
      });

      const data = await res.json();
      if (data.verified && data.donation) {
        recordDonation({
          id: `don-${Date.now()}`,
          donationNumber: data.donation.donationNumber,
          fullName: data.donation.fullName,
          email: data.donation.email,
          phone: data.donation.phone,
          amount: data.donation.amount,
          purpose: data.donation.purpose,
          tx_ref: data.donation.tx_ref,
          createdAt: new Date().toISOString(),
          status: 'COMPLETED',
          verifiedAt: data.donation.verifiedAt,
        });

        setVerifiedDonation({
          donationNumber: data.donation.donationNumber,
          amount: data.donation.amount,
          fullName: data.donation.fullName,
          purpose: data.donation.purpose,
          date: new Date().toLocaleDateString(language === 'am' ? 'am-ET' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
        });
      } else {
        setErrorMsg('Payment verification failed.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Payment simulation failed.');
    } finally {
      setIsSubmitting(false);
      setSandboxTx(null);
    }
  };

  const handleClose = () => {
    setVerifiedDonation(null);
    setSandboxTx(null);
    setErrorMsg(null);
    closeDonationModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-neutral-900 border border-neutral-700 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col max-h-[92vh] overflow-y-auto">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success View */}
        {verifiedDonation ? (
          <div className="text-center py-6 space-y-5">
            <div className="mx-auto w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>

            <div>
              <span className="text-xs font-sports font-bold tracking-widest text-emerald-400 uppercase">
                {t.donationSuccessTitle}
              </span>
              <h2 className="text-2xl font-sports font-black text-white uppercase mt-1">
                {verifiedDonation.amount.toLocaleString()} ETB Donated
              </h2>
              <p className="text-xs text-neutral-300 mt-2 max-w-sm mx-auto">
                {t.donationSuccessMsg}
              </p>
            </div>

            {/* Receipt Box */}
            <div className="bg-neutral-950/80 rounded-2xl p-4 border border-neutral-800 text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                <span className="text-neutral-400">Receipt / Ref:</span>
                <span className="font-mono font-bold text-amber-400">{verifiedDonation.donationNumber}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                <span className="text-neutral-400">Donor Name:</span>
                <span className="font-medium text-white">{verifiedDonation.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                <span className="text-neutral-400">Purpose:</span>
                <span className="font-medium text-emerald-400">{verifiedDonation.purpose}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Payment Gateway:</span>
                <span className="font-semibold text-white flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified via Chapa
                </span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-sports font-black uppercase tracking-wider text-base shadow-lg transition-all"
            >
              Back to Halaba FC
            </button>
          </div>
        ) : sandboxTx ? (
          /* Sandbox Simulation Dialog (Chapa Test Environment) */
          <div className="py-4 space-y-5">
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Coins className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-sports font-black text-lg text-white uppercase">Chapa Sandbox Gateway</h3>
                <p className="text-xs text-neutral-400">Complete donation simulation for {sandboxTx.amount} ETB</p>
              </div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-400">Transaction Ref:</span>
                <span className="font-mono text-neutral-200">{sandboxTx.txRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Donor:</span>
                <span className="text-white font-semibold">{fullName}</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-amber-400 pt-2 border-t border-neutral-800">
                <span>Total Amount:</span>
                <span>{sandboxTx.amount} ETB</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleCompleteSandboxPayment}
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-sports font-black text-base uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Verifying with Chapa...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5" />
                    <span>Simulate Telebirr / CBE Payment ({sandboxTx.amount} ETB)</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setSandboxTx(null)}
                className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          /* Main Donation Form */
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Modal Header */}
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-green-600 p-0.5 flex items-center justify-center shadow-lg">
                <div className="w-full h-full bg-neutral-900 rounded-[14px] flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-500 fill-red-500/30" />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xxs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Berberewochu Fund
                </div>
                <h2 className="text-xl font-sports font-black text-white uppercase tracking-wider mt-0.5">
                  {t.donateTitle}
                </h2>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              {t.donateSubtitle}
            </p>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-950/70 border border-red-800/80 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Donation Presets */}
            <div className="space-y-2">
              <label className="block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300">
                {t.selectDonationAmount}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {presetAmounts.map((amt) => {
                  const isSelected = !isCustom && selectedPreset === amt;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handleSelectPreset(amt)}
                      className={`py-2.5 px-2 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-900/30 scale-102'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <span className="font-sports font-black text-lg block">{amt}</span>
                      <span className="text-xxs uppercase tracking-wider opacity-80 block">ETB</span>
                    </button>
                  );
                })}
              </div>

              {/* Custom amount toggle / input */}
              <div className="mt-2">
                <div className="relative">
                  <input
                    type="text"
                    value={customAmount}
                    onChange={(e) => handleCustomChange(e.target.value)}
                    placeholder={t.enterAmountPlaceholder}
                    className={`w-full px-4 py-2.5 rounded-xl bg-neutral-950 text-white text-sm border focus:outline-none transition-all ${
                      isCustom && customAmount
                        ? 'border-red-500 ring-2 ring-red-500/20'
                        : 'border-neutral-800 focus:border-red-600'
                    }`}
                  />
                  <span className="absolute right-3.5 top-3 text-xs font-bold font-sports text-neutral-500 uppercase">
                    ETB
                  </span>
                </div>
              </div>
            </div>

            {/* Donation Purpose */}
            <div className="space-y-1.5">
              <label className="block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300">
                {t.donationPurposeLabel}
              </label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs focus:outline-none focus:border-red-500"
              >
                <option value={t.purposeGeneral}>{t.purposeGeneral}</option>
                <option value={t.purposeAcademy}>{t.purposeAcademy}</option>
                <option value={t.purposeStadium}>{t.purposeStadium}</option>
              </select>
            </div>

            {/* Donor Information */}
            <div className="space-y-3 pt-1 border-t border-neutral-800/80">
              <div>
                <label className="block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  {t.donorNameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Dawit Kebede"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    {t.donorPhoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="09... / +251..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs focus:outline-none focus:border-red-500 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    {t.donorEmailLabel}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="supporter@email.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Summary & Submit */}
            <div className="pt-2">
              <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800/90 flex items-center justify-between mb-3 text-xs">
                <span className="text-neutral-400">Total Contribution:</span>
                <span className="font-sports font-black text-xl text-emerald-400">
                  {currentAmount.toLocaleString()} ETB
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || currentAmount <= 0}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-emerald-600 hover:from-red-500 hover:to-emerald-500 text-white font-sports font-black text-base uppercase tracking-wider shadow-xl shadow-red-950/40 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Connecting to Chapa...</span>
                  </>
                ) : (
                  <>
                    <Heart className="w-5 h-5 fill-white" />
                    <span>Proceed to Chapa Payment ({currentAmount.toLocaleString()} ETB)</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xxs text-neutral-400 mt-2.5">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>Secured by Chapa Payment Gateway • Supports Telebirr, CBE Birr & Cards</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
