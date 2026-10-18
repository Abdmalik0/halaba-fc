import React, { useState } from 'react';
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
  Trash2
} from 'lucide-react';

export const MembershipPage: React.FC = () => {
  const { t, language, submitMembership } = useClub();

  // Tier selection
  const [selectedTier, setSelectedTier] = useState<MembershipTier>('STANDARD');

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
        alert('File size exceeds 5MB limit. Please choose a smaller photo.');
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
  const [registrationResult, setRegistrationResult] = useState<{
    referenceNumber: string;
    registeredAt: string;
    fullName: string;
    membershipType: MembershipTier;
    cityOrRegion: string;
    photoUrl?: string;
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await submitMembership({
        fullName,
        dateOfBirth,
        gender: gender || undefined,
        phone,
        email: email || undefined,
        cityOrRegion,
        membershipType: selectedTier,
        preferredLanguage: preferredLang,
      });

      if (res.success) {
        setRegistrationResult({
          referenceNumber: res.referenceNumber,
          registeredAt: new Date().toLocaleDateString(),
          fullName,
          membershipType: selectedTier,
          cityOrRegion,
          photoUrl: photoUrl || undefined,
        });
        window.scrollTo({ top: 300, behavior: 'smooth' });
      }
    } catch {
      setErrors({ form: 'An error occurred during registration. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setRegistrationResult(null);
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

      {/* SUCCESS SCREEN WITH DIGITAL MEMBERSHIP CARD */}
      {registrationResult ? (
        <div className="bg-neutral-900 border border-neutral-700 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-in fade-in">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
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
                  <span className="px-2.5 py-0.5 rounded text-xxs font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
                    {registrationResult.membershipType}
                  </span>
                </div>

                {/* Card Center: Member Info */}
                {/* Card Center: Member Info & Photo */}
                <div className="py-4 flex items-center justify-between gap-4">
                  <div className="space-y-1 min-w-0">
                    <span className="text-xxs uppercase tracking-wider text-neutral-400 block font-sports font-bold">
                      Member Name
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
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white text-black font-mono text-xxs font-bold">
                    <QrCode className="w-4 h-4 text-black" />
                    <span>VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
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
      ) : (
        /* REGISTRATION APPLICATION FORM */
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
              {/* Supporter Tier */}
              <div
                onClick={() => setSelectedTier('SUPPORTER')}
                className={`cursor-pointer rounded-2xl p-6 border transition-all relative flex flex-col justify-between ${
                  selectedTier === 'SUPPORTER'
                    ? 'bg-neutral-900 border-red-500 shadow-xl shadow-red-950/40 ring-1 ring-red-500'
                    : 'bg-neutral-950/80 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                    <span className="font-sports font-black text-xl text-white uppercase">
                      {t.tierSupporter}
                    </span>
                    <span className="text-xs uppercase font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                      Digital Fan ID
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
                  <span
                    className={`block w-full py-2 rounded-lg text-center text-xs font-bold uppercase tracking-wider font-sports ${
                      selectedTier === 'SUPPORTER'
                        ? 'bg-red-600 text-white'
                        : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {selectedTier === 'SUPPORTER' ? t.selectedTier : t.selectTier}
                  </span>
                </div>
              </div>

              {/* Standard Tier */}
              <div
                onClick={() => setSelectedTier('STANDARD')}
                className={`cursor-pointer rounded-2xl p-6 border transition-all relative flex flex-col justify-between ${
                  selectedTier === 'STANDARD'
                    ? 'bg-neutral-900 border-emerald-500 shadow-xl shadow-emerald-950/40 ring-1 ring-emerald-500'
                    : 'bg-neutral-950/80 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                    <span className="font-sports font-black text-xl text-white uppercase">
                      {t.tierStandard}
                    </span>
                    <span className="text-xs uppercase font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      Most Popular
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
                  <span
                    className={`block w-full py-2 rounded-lg text-center text-xs font-bold uppercase tracking-wider font-sports ${
                      selectedTier === 'STANDARD'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {selectedTier === 'STANDARD' ? t.selectedTier : t.selectTier}
                  </span>
                </div>
              </div>

              {/* Gold VIP Tier */}
              <div
                onClick={() => setSelectedTier('PREMIUM')}
                className={`cursor-pointer rounded-2xl p-6 border transition-all relative flex flex-col justify-between ${
                  selectedTier === 'PREMIUM'
                    ? 'bg-neutral-900 border-amber-500 shadow-xl shadow-amber-950/40 ring-1 ring-amber-500'
                    : 'bg-neutral-950/80 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                    <span className="font-sports font-black text-xl text-white uppercase flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      {t.tierPremium}
                    </span>
                    <span className="text-xs uppercase font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">
                      VIP Lounge
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
                  <span
                    className={`block w-full py-2 rounded-lg text-center text-xs font-bold uppercase tracking-wider font-sports ${
                      selectedTier === 'PREMIUM'
                        ? 'bg-amber-600 text-white'
                        : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {selectedTier === 'PREMIUM' ? t.selectedTier : t.selectTier}
                  </span>
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
                    Membership Tier
                  </label>
                  <div className="px-4 py-3 bg-neutral-950 rounded-xl border border-neutral-800 text-sm font-sports font-bold uppercase text-amber-400 flex items-center justify-between">
                    <span>{selectedTier} MEMBER</span>
                    <span className="text-xs font-normal text-neutral-400 font-sans">
                      (Click tier cards above to change)
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
                      <span>{t.submitting}</span>
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-5 h-5" />
                      <span>{t.submitApplication}</span>
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
