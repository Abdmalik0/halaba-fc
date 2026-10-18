import React, { useState, useEffect } from 'react';
import { useClub } from '../context/ClubContext';
import { MembershipTier, Language } from '../types';
import { HalabaCrest } from '../components/HalabaCrest';
import {
  UserPlus,
  CheckCircle2,
  ShieldCheck,
  QrCode,
  Printer,
  Sparkles,
  Info,
  Calendar,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  Upload,
  Link,
  Camera,
  X,
  Trash2,
  ExternalLink,
  CreditCard,
  Clock,
  RefreshCw,
  ArrowLeft,
  Copy,
  Check
} from 'lucide-react';

interface PendingPayment {
  txRef: string;
  checkoutUrl: string | null;
  amount: number;
  tier: MembershipTier;
  fullName: string;
  dateOfBirth: string;
  gender?: string;
  phone: string;
  email?: string;
  cityOrRegion: string;
  photoUrl?: string;
  preferredLanguage: Language;
}

export const MembershipPage: React.FC = () => {
  const { t, language, submitMembership } = useClub();

  // Tier selection & dynamic Chapa payment amount
  // Tier 1: amount = 200 | Tier 2: amount = 500 | Tier 3: amount = 1000 ETB
  const [selectedTier, setSelectedTier] = useState<MembershipTier>('STANDARD');
  const [amount, setAmount] = useState<number>(500);

  // Dynamic plan and payment amount setter on tier selection
  const handleSelectTier = (tier: MembershipTier, planAmount: number) => {
    setSelectedTier(tier);
    setAmount(planAmount);
  };

  // Form inputs
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cityOrRegion, setCityOrRegion] = useState('');
  const [preferredLang, setPreferredLang] = useState<Language>(language);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [photoUrl, setPhotoUrl] = useState('');
  const [photoMode, setPhotoMode] = useState<'url' | 'upload'>('upload');

  const handlePhotoFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, photo: 'File size exceeds 5MB limit. Please choose a smaller photo.' }));
        return;
      }
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        if (loadEvent.target?.result) {
          setPhotoUrl(loadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Status & Feedback
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pendingPayment, setPendingPayment] = useState<PendingPayment | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifyMessage, setVerifyMessage] = useState<string | null>(null);
  const [verifyError, setVerifyError] = useState<string | null>(null);
  const [copiedTx, setCopiedTx] = useState(false);

  const [registrationResult, setRegistrationResult] = useState<{
    referenceNumber: string;
    registeredAt: string;
    fullName: string;
    membershipType: MembershipTier;
    cityOrRegion: string;
    photoUrl?: string;
    amount: number;
    checkoutUrl?: string | null;
  } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 3) {
      errs.fullName = t.errFullName;
    }
    if (!dateOfBirth) {
      errs.dateOfBirth = t.errDob;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      errs.phone = t.errPhone;
    }
    if (!cityOrRegion.trim()) {
      errs.cityOrRegion = t.errCity;
    }
    if (!agreeTerms) {
      errs.agree = t.errAgree;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Periodic background check while awaiting payment
  useEffect(() => {
    if (!pendingPayment || registrationResult) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/verify-payment/${pendingPayment.txRef}`);
        const data = await res.json();
        if (data.paid || data.status === 'success' || data.success) {
          clearInterval(interval);
          handleVerifyPayment(false);
        }
      } catch {
        // silent fail on auto-polling check
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [pendingPayment, registrationResult]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setVerifyError(null);
    setVerifyMessage(null);
    try {
      // 1. Explicitly send dynamic amount (200, 500, or 1000 ETB) and user details to /api/initialize-payment
      const paymentRes = await fetch('/api/initialize-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount, // Explicit dynamic amount based on tier (200, 500, or 1000)
          fullName,
          dateOfBirth,
          gender: gender || undefined,
          phone,
          email: email || undefined,
          cityOrRegion,
          tier: selectedTier,
        }),
      });

      const chapaData = await paymentRes.json();
      const txRef = chapaData?.txRef || `HLB-${selectedTier}-${Date.now()}`;
      const checkoutUrl = chapaData?.checkoutUrl || null;

      // CRITICAL: Registration is NOT successful yet!
      // Registration is strictly PENDING until payment is accepted by Chapa!
      setPendingPayment({
        txRef,
        checkoutUrl,
        amount,
        tier: selectedTier,
        fullName,
        dateOfBirth,
        gender: gender || undefined,
        phone,
        email: email || undefined,
        cityOrRegion,
        photoUrl: photoUrl || undefined,
        preferredLanguage: preferredLang,
      });

      window.scrollTo({ top: 250, behavior: 'smooth' });
    } catch {
      setErrors({ form: 'An error occurred while initializing payment. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyPayment = async (forceSimulate = false) => {
    if (!pendingPayment) return;
    setIsVerifying(true);
    setVerifyError(null);
    setVerifyMessage(null);

    try {
      if (forceSimulate) {
        // Record test payment in server
        await fetch('/api/confirm-test-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ txRef: pendingPayment.txRef }),
        });
      }

      // Check payment status with Chapa / backend
      const res = await fetch(`/api/verify-payment/${pendingPayment.txRef}`);
      const data = await res.json();

      if (data.paid || data.status === 'success' || data.success) {
        // PAYMENT ACCEPTED! Now and ONLY now can registration be finalized and card issued!
        setVerifyMessage('Payment accepted! Finalizing your official membership registration...');

        const regRes = await submitMembership({
          fullName: pendingPayment.fullName,
          dateOfBirth: pendingPayment.dateOfBirth,
          gender: pendingPayment.gender,
          phone: pendingPayment.phone,
          email: pendingPayment.email,
          cityOrRegion: pendingPayment.cityOrRegion,
          membershipType: pendingPayment.tier,
          preferredLanguage: pendingPayment.preferredLanguage,
        });

        if (regRes.success) {
          setRegistrationResult({
            referenceNumber: regRes.referenceNumber,
            registeredAt: new Date().toLocaleDateString(),
            fullName: pendingPayment.fullName,
            membershipType: pendingPayment.tier,
            cityOrRegion: pendingPayment.cityOrRegion,
            photoUrl: pendingPayment.photoUrl,
            amount: pendingPayment.amount,
            checkoutUrl: pendingPayment.checkoutUrl,
          });
          setPendingPayment(null);
          window.scrollTo({ top: 200, behavior: 'smooth' });
        }
      } else {
        setVerifyError(
          data.message ||
          'Payment has not yet been accepted by Chapa. Please complete the transaction on Chapa before registration can be finalized.'
        );
      }
    } catch {
      setVerifyError('Unable to verify payment status with Chapa. Please check connection and try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleCopyTx = (tx: string) => {
    navigator.clipboard.writeText(tx);
    setCopiedTx(true);
    setTimeout(() => setCopiedTx(false), 2000);
  };

  const handleResetForm = () => {
    setRegistrationResult(null);
    setPendingPayment(null);
    setVerifyError(null);
    setVerifyMessage(null);
    setFullName('');
    setDateOfBirth('');
    setPhone('');
    setEmail('');
    setCityOrRegion('');
    setPhotoUrl('');
    setAgreeTerms(false);
    setErrors({});
  };

  const handlePrintCard = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Supporter Program</span>
            </div>
            <h1 className="font-sports font-black text-3xl sm:text-5xl text-white uppercase tracking-wider">
              {t.membershipTitle}
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">{t.membershipSubtitle}</p>
          </div>

          <div className="hidden lg:block shrink-0">
            <HalabaCrest size={80} showGlow />
          </div>
        </div>
      </div>

      {/* 1. SUCCESS SCREEN - ONLY ACCESSIBLE AFTER PAYMENT HAS BEEN CONFIRMED & ACCEPTED */}
      {registrationResult ? (
        <div className="bg-neutral-900 border border-neutral-700 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-in fade-in">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/50">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-800 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Payment Accepted • Official Member Registered</span>
            </div>
            <h2 className="font-sports font-black text-3xl sm:text-4xl text-white uppercase">
              {t.registrationSuccessTitle}
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base">{t.registrationSuccessDesc}</p>
            <div className="inline-block px-4 py-2 bg-neutral-950 border border-neutral-800 rounded-xl">
              <span className="text-xs text-neutral-400 block uppercase font-mono tracking-wider">
                {t.yourRefNumber}
              </span>
              <span className="font-mono font-black text-xl text-amber-400">
                {registrationResult.referenceNumber}
              </span>
            </div>
          </div>

          {/* Interactive Digital Membership Card Graphic */}
          <div className="max-w-md mx-auto">
            <div className="p-1 rounded-3xl bg-gradient-to-tr from-red-600 via-amber-500 to-emerald-600 shadow-2xl">
              <div className="rounded-[22px] bg-gradient-to-br from-neutral-950 via-neutral-900 to-red-950 p-6 text-white relative overflow-hidden flex flex-col justify-between min-h-[250px] border border-neutral-800">
                {/* Background watermarked crest */}
                <div className="absolute -right-10 -bottom-10 opacity-15 pointer-events-none">
                  <HalabaCrest size={220} />
                </div>

                {/* Card Top: Logo & Club Title */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
                  <div className="flex items-center gap-2.5">
                    <HalabaCrest size={38} />
                    <div>
                      <span className="font-sports font-black text-lg tracking-wider text-white uppercase block leading-none">
                        HALABA CITY FC
                      </span>
                      <span className="text-xxs text-emerald-400 font-bold uppercase tracking-widest font-ethiopic">
                        በርበሬዎቹ • OFFICIAL SUPPORTER
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-xxs font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono">
                    {registrationResult.membershipType} • PAID
                  </span>
                </div>

                {/* Card Center: Member Info & Photo */}
                <div className="py-4 flex items-center justify-between gap-4">
                  <div className="space-y-1 min-w-0">
                    <span className="text-xxs uppercase tracking-wider text-neutral-400 block font-sports font-bold">
                      Official Member Name
                    </span>
                    <h3 className="font-sports font-black text-2xl text-white uppercase tracking-wide truncate">
                      {registrationResult.fullName}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-neutral-300 pt-1">
                      <span>
                        <strong className="text-neutral-500">Region:</strong> {registrationResult.cityOrRegion}
                      </span>
                      <span>
                        <strong className="text-neutral-500">Season:</strong> 2026/2027
                      </span>
                    </div>
                  </div>

                  {registrationResult.photoUrl ? (
                    <img
                      src={registrationResult.photoUrl}
                      alt={registrationResult.fullName}
                      className="w-14 h-16 object-cover rounded-xl border-2 border-amber-400 shadow-md shrink-0"
                    />
                  ) : (
                    <div className="w-14 h-16 rounded-xl bg-neutral-900 border border-neutral-700 flex flex-col items-center justify-center text-neutral-500 shrink-0">
                      <Camera className="w-6 h-6 text-neutral-600" />
                      <span className="text-xxs font-mono mt-0.5">ID PHOTO</span>
                    </div>
                  )}
                </div>

                {/* Card Bottom: Reference & Barcode/QR Graphic */}
                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-xxs text-neutral-400 block font-mono">ID REFERENCE</span>
                    <span className="font-mono font-bold text-amber-400">
                      {registrationResult.referenceNumber}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-400 text-black font-mono text-xxs font-bold">
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    <span>PAID & VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment confirmed badge */}
          <div className="max-w-md mx-auto p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-center text-xs text-emerald-300 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Registration fee of <strong>{registrationResult.amount} ETB</strong> verified and accepted. Official supporter record active.
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={handlePrintCard}
              className="px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm uppercase tracking-wider font-sports flex items-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>{t.downloadCard}</span>
            </button>
            <button
              onClick={handleResetForm}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-wider font-sports flex items-center gap-2 transition-colors shadow-lg shadow-red-950"
            >
              <UserPlus className="w-4 h-4" />
              <span>{t.newRegistrationBtn}</span>
            </button>
          </div>
        </div>
      ) : pendingPayment ? (
        /* 2. AWAITING PAYMENT SCREEN - REGISTRATION IS NOT COMPLETE BEFORE PAYMENT */
        <div className="bg-neutral-900 border border-amber-500/50 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-in fade-in">
          {/* Header Warning & Status */}
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-amber-950/80 text-amber-400 border border-amber-600 flex items-center justify-center mx-auto shadow-lg shadow-amber-950/60 animate-pulse">
              <Clock className="w-9 h-9" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 animate-spin" />
              <span>Awaiting Payment Acceptance • Registration Pending</span>
            </div>
            <h2 className="font-sports font-black text-3xl sm:text-4xl text-white uppercase tracking-wider">
              Complete Payment to Activate Registration
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Official membership registration and digital card issuance will <strong className="text-amber-400">only be completed after your payment is accepted</strong> by Chapa.
            </p>
          </div>

          {/* Pending Application Summary Card */}
          <div className="max-w-xl mx-auto rounded-2xl bg-neutral-950 border border-neutral-800 p-6 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <HalabaCrest size={34} />
                <div>
                  <span className="font-sports font-black text-base text-white uppercase block leading-none">
                    HALABA CITY FC MEMBERSHIP
                  </span>
                  <span className="text-xxs text-neutral-400 uppercase tracking-widest font-mono">
                    Tier: {pendingPayment.tier} Member
                  </span>
                </div>
              </div>
              <span className="font-sports font-black text-2xl text-amber-400">
                {pendingPayment.amount} ETB
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="text-neutral-400 block uppercase font-mono text-xxs mb-1">
                  Applicant Name
                </span>
                <span className="font-bold text-white text-sm truncate block">
                  {pendingPayment.fullName}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="text-neutral-400 block uppercase font-mono text-xxs mb-1">
                  Phone / Region
                </span>
                <span className="font-bold text-white text-sm truncate block">
                  {pendingPayment.phone} • {pendingPayment.cityOrRegion}
                </span>
              </div>
            </div>

            {/* Transaction Ref with Copy */}
            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between text-xs">
              <div>
                <span className="text-neutral-400 block uppercase font-mono text-xxs">
                  Chapa Transaction Reference (tx_ref)
                </span>
                <span className="font-mono font-bold text-amber-300">
                  {pendingPayment.txRef}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopyTx(pendingPayment.txRef)}
                className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs flex items-center gap-1.5 transition-colors"
              >
                {copiedTx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedTx ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Error or Notice Display */}
            {verifyError && (
              <div className="p-4 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs flex items-start gap-2.5 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold block">Payment Not Accepted Yet</span>
                  <span className="text-red-300 leading-relaxed block">{verifyError}</span>
                </div>
              </div>
            )}

            {verifyMessage && (
              <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-200 text-xs flex items-center gap-2.5 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{verifyMessage}</span>
              </div>
            )}

            {/* Primary Payment CTA */}
            {pendingPayment.checkoutUrl && (
              <a
                href={pendingPayment.checkoutUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-500 text-white font-sports font-black text-base uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-950 transition-all hover:scale-[1.01]"
              >
                <CreditCard className="w-5 h-5" />
                <span>Open Chapa Checkout & Pay {pendingPayment.amount} ETB</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            )}

            <div className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800/80 text-center space-y-1">
              <span className="text-xxs text-neutral-400 block">
                Accepted Channels: Telebirr • CBE Birr • Awash Bank • Visa / MasterCard
              </span>
              <span className="text-xxs text-neutral-500 block font-mono">
                System automatically verifies payment status every 5 seconds.
              </span>
            </div>

            {/* Verification Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                disabled={isVerifying}
                onClick={() => handleVerifyPayment(false)}
                className="flex-1 py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-sports font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-neutral-700 disabled:opacity-50 transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isVerifying ? 'animate-spin text-amber-400' : ''}`} />
                <span>{isVerifying ? 'Verifying with Chapa...' : 'Verify Payment Status'}</span>
              </button>

              <button
                type="button"
                disabled={isVerifying}
                onClick={() => handleVerifyPayment(true)}
                title="Test payment acceptance for testing / review"
                className="py-3 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/40 font-sports font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Simulate Acceptance (Test Mode)</span>
              </button>
            </div>

            {/* Back / Edit Form */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => {
                  setPendingPayment(null);
                  setVerifyError(null);
                  setVerifyMessage(null);
                }}
                className="text-xs text-neutral-400 hover:text-white inline-flex items-center gap-1.5 transition-colors font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Edit Application or Choose Different Plan</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* 3. REGISTRATION APPLICATION FORM */
        <div className="space-y-10">
          {/* 1. Membership Tiers Selection */}
          <div>
            <div className="text-center md:text-left mb-6">
              <h2 className="font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
                {t.membershipPlansTitle}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Choose the membership category that suits your level of support for the club.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Supporter Tier - Tier 1: 200 ETB */}
              <div
                onClick={() => handleSelectTier('SUPPORTER', 200)}
                className={`cursor-pointer rounded-2xl p-6 border transition-all relative flex flex-col justify-between ${
                  selectedTier === 'SUPPORTER'
                    ? 'bg-neutral-900 border-red-500 shadow-xl shadow-red-950/40 ring-1 ring-red-500'
                    : 'bg-neutral-950/80 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                    <div>
                      <span className="font-sports font-black text-xl text-white uppercase block">
                        {t.tierSupporter}
                      </span>
                      <span className="font-sports font-black text-2xl text-red-400 mt-1 block">
                        200 ETB
                      </span>
                    </div>
                    <span className="text-xs uppercase font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                      Tier 1
                    </span>
                  </div>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                    {t.tierSupporterDesc}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-neutral-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Official Digital Fan Card</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Club email newsletter & alerts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Global supporter registry listing</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800">
                  <button
                    type="button"
                    id="tier-1-button"
                    data-tier="Tier 1"
                    data-amount="200"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectTier('SUPPORTER', 200);
                    }}
                    className={`w-full py-2.5 rounded-lg text-center text-xs font-bold uppercase tracking-wider font-sports transition-all ${
                      selectedTier === 'SUPPORTER'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
                    }`}
                  >
                    {selectedTier === 'SUPPORTER' ? `${t.selectedTier} (200 ETB)` : `Select Plan (200 ETB)`}
                  </button>
                </div>
              </div>

              {/* Standard Tier - Tier 2: 500 ETB */}
              <div
                onClick={() => handleSelectTier('STANDARD', 500)}
                className={`cursor-pointer rounded-2xl p-6 border transition-all relative flex flex-col justify-between ${
                  selectedTier === 'STANDARD'
                    ? 'bg-neutral-900 border-emerald-500 shadow-xl shadow-emerald-950/40 ring-1 ring-emerald-500'
                    : 'bg-neutral-950/80 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                    <div>
                      <span className="font-sports font-black text-xl text-white uppercase block">
                        {t.tierStandard}
                      </span>
                      <span className="font-sports font-black text-2xl text-emerald-400 mt-1 block">
                        500 ETB
                      </span>
                    </div>
                    <span className="text-xs uppercase font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      Tier 2 • Popular
                    </span>
                  </div>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                    {t.tierStandardDesc}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-neutral-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Physical & Digital Member Card</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>10% Discount on club scarves & jerseys</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Priority ticket queue at Halaba Stadium</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800">
                  <button
                    type="button"
                    id="tier-2-button"
                    data-tier="Tier 2"
                    data-amount="500"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectTier('STANDARD', 500);
                    }}
                    className={`w-full py-2.5 rounded-lg text-center text-xs font-bold uppercase tracking-wider font-sports transition-all ${
                      selectedTier === 'STANDARD'
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
                    }`}
                  >
                    {selectedTier === 'STANDARD' ? `${t.selectedTier} (500 ETB)` : `Select Plan (500 ETB)`}
                  </button>
                </div>
              </div>

              {/* Gold VIP Tier - Tier 3: 1000 ETB */}
              <div
                onClick={() => handleSelectTier('PREMIUM', 1000)}
                className={`cursor-pointer rounded-2xl p-6 border transition-all relative flex flex-col justify-between ${
                  selectedTier === 'PREMIUM'
                    ? 'bg-neutral-900 border-amber-500 shadow-xl shadow-amber-950/40 ring-1 ring-amber-500'
                    : 'bg-neutral-950/80 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                    <div>
                      <span className="font-sports font-black text-xl text-white uppercase flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        {t.tierPremium}
                      </span>
                      <span className="font-sports font-black text-2xl text-amber-400 mt-1 block">
                        1,000 ETB
                      </span>
                    </div>
                    <span className="text-xs uppercase font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">
                      Tier 3 • VIP
                    </span>
                  </div>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                    {t.tierPremiumDesc}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-neutral-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>VIP Stadium tribune access & parking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Complimentary official season jersey voucher</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Invitation to Annual Club Assembly</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800">
                  <button
                    type="button"
                    id="tier-3-button"
                    data-tier="Tier 3"
                    data-amount="1000"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectTier('PREMIUM', 1000);
                    }}
                    className={`w-full py-2.5 rounded-lg text-center text-xs font-bold uppercase tracking-wider font-sports transition-all ${
                      selectedTier === 'PREMIUM'
                        ? 'bg-amber-600 text-white shadow-md'
                        : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
                    }`}
                  >
                    {selectedTier === 'PREMIUM' ? `${t.selectedTier} (1,000 ETB)` : `Select Plan (1,000 ETB)`}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
              <Info className="w-4 h-4 text-neutral-500 shrink-0" />
              <span>
                Note: Supporter membership fees, tier benefits, and payment methods are managed and configurable by the club administrative board.
              </span>
            </div>
          </div>

          {/* 2. Application Form */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-6 pb-4 border-b border-neutral-800">
              <h2 className="font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
                {t.formTitle}
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                Please complete the details below. All submitted applications are logged in the club registry.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.form && (
                <div className="p-4 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-sm flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errors.form}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.fullName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t.fullNamePlaceholder}
                    className={`w-full px-4 py-3 bg-neutral-950 rounded-xl border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-neutral-800 focus:border-red-500'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.fullName}</span>
                  )}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.dob} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      className={`w-full px-4 py-3 bg-neutral-950 rounded-xl border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.dateOfBirth ? 'border-red-500' : 'border-neutral-800 focus:border-red-500'
                      }`}
                    />
                    <Calendar className="w-4 h-4 text-neutral-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  {errors.dateOfBirth && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.dateOfBirth}</span>
                  )}
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.gender}
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">{t.genderMale}</option>
                    <option value="Female">{t.genderFemale}</option>
                    <option value="Other">{t.genderOther}</option>
                  </select>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.phone} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.phonePlaceholder}
                      className={`w-full pl-10 pr-4 py-3 bg-neutral-950 rounded-xl border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-neutral-800 focus:border-red-500'
                      }`}
                    />
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                  {errors.phone && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.phone}</span>
                  )}
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.email}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      className="w-full pl-10 pr-4 py-3 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
                    />
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* City / Region */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.cityOrRegion} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cityOrRegion}
                      onChange={(e) => setCityOrRegion(e.target.value)}
                      placeholder={t.cityPlaceholder}
                      className={`w-full pl-10 pr-4 py-3 bg-neutral-950 rounded-xl border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.cityOrRegion ? 'border-red-500' : 'border-neutral-800 focus:border-red-500'
                      }`}
                    />
                    <MapPin className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                  {errors.cityOrRegion && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.cityOrRegion}</span>
                  )}
                </div>

                {/* Preferred Language */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.prefLanguage}
                  </label>
                  <select
                    value={preferredLang}
                    onChange={(e) => setPreferredLang(e.target.value as Language)}
                    className="w-full px-4 py-3 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="en">English</option>
                    <option value="am">አማርኛ (Amharic)</option>
                    <option value="om">Afaan Oromo</option>
                  </select>
                </div>

                {/* Selected Tier Review */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Selected Plan & Fee
                  </label>
                  <div className="px-4 py-3 bg-neutral-950 rounded-xl border border-neutral-800 text-sm font-sports font-bold uppercase flex items-center justify-between">
                    <span className="text-amber-400">{selectedTier} MEMBER</span>
                    <span className="text-emerald-400 font-mono font-black text-base">
                      {amount} ETB
                    </span>
                  </div>
                </div>
              </div>

              {/* Privacy agreement */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-neutral-700 text-red-600 focus:ring-red-500 bg-neutral-950"
                  />
                  <span className="text-xs sm:text-sm text-neutral-300 leading-normal">
                    {t.agreePrivacy}
                  </span>
                </label>
                {errors.agree && (
                  <span className="text-xs text-red-400 mt-1 block">{errors.agree}</span>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-neutral-800 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-base uppercase tracking-wider font-sports shadow-xl shadow-red-950/60 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Initializing Payment...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      <span>Proceed to Payment ({amount} ETB via Chapa)</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
