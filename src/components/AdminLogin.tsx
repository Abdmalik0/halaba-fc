import React, { useState } from 'react';
import { useClub } from '../context/ClubContext';
import { HalabaCrest } from './HalabaCrest';
import { Lock, Mail, AlertTriangle, Loader2, ShieldCheck } from 'lucide-react';

interface AdminLoginProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onSuccess, onCancel }) => {
  const { language, loginAdmin, setCurrentPage } = useClub();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail || !password) {
      setLoginError(
        language === 'am'
          ? 'እባክዎ ኢሜይል እና የይለፍ ቃል ያስገቡ።'
          : 'Please enter both your email and password.'
      );
      return;
    }

    setIsLoggingIn(true);
    setLoginError(null);

    const result = await loginAdmin(cleanEmail, password);
    setIsLoggingIn(false);

    if (result.success) {
      if (onSuccess) {
        onSuccess();
      }
    } else {
      setLoginError(result.error || 'Login failed. Please check credentials.');
    }
  };

  const handleBackToSite = () => {
    if (onCancel) {
      onCancel();
    } else {
      setCurrentPage('home');
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
        <div className="flex justify-center">
          <HalabaCrest size={72} showGlow />
        </div>

        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xxs font-bold uppercase tracking-wider mb-1">
            <Lock className="w-3 h-3" />
            <span>{language === 'am' ? 'ይፋዊ የአስተዳዳሪ ፖርታል' : 'Official Administrator Portal'}</span>
          </div>
          <h1 className="font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
            {language === 'am' ? 'የአስተዳዳሪ መግቢያ' : 'Admin Sign In'}
          </h1>
          <p className="text-neutral-400 text-xs">
            {language === 'am'
              ? 'ለተፈቀደላቸው የሀላባ ከተማ እግር ኳስ ክለብ አመራሮች ብቻ የተፈቀደ።'
              : 'Authorized HALABA City FC management and club IT personnel only.'}
          </p>
        </div>

        {loginError && (
          <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-800/80 text-red-200 text-xs flex items-start gap-2.5 shadow-sm">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{loginError}</span>
          </div>
        )}

        <form onSubmit={handleLogin} noValidate className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
              {language === 'am' ? 'የአስተዳዳሪ ኢሜይል *' : 'Admin Email *'}
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                placeholder="admin@halabafc.et"
                required
                autoComplete="email"
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500 placeholder-neutral-600 transition-colors"
              />
              <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
              {language === 'am' ? 'የይለፍ ቃል *' : 'Password *'}
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500 placeholder-neutral-600 transition-colors"
              />
              <Lock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-wider font-sports shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
            style={{
              backgroundColor: '#dc2626',
              backgroundImage: 'linear-gradient(to right, #dc2626, #ef4444)',
              color: '#ffffff',
            }}
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{language === 'am' ? 'በፈርቤዝ በመግባት ላይ...' : 'Signing In with Firebase...'}</span>
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>{language === 'am' ? 'ወደ ዳሽቦርድ ግባ' : 'Sign In to Dashboard'}</span>
              </>
            )}
          </button>
        </form>

        {/* Strict Security Policy */}
        <div className="pt-4 border-t border-neutral-800/80 space-y-2 text-center">
          <div className="flex items-center justify-center gap-1.5 text-neutral-400 text-xxs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language === 'am' ? 'በፈርቤዝ የተጠበቀ • አስተዳዳሪ ብቻ' : 'Firebase Auth Protected • Login-Only Workflow'}</span>
          </div>
          <p className="text-neutral-500 text-xxs">
            {language === 'am'
              ? 'የይለፍ ቃል ለመቀየር ወይም አዲስ መለያ ለማግኘት የክለቡን አስተዳደር ያነጋግሩ።'
              : 'Self-service registration and password reset are strictly disabled. Contact club administration for access credentials.'}
          </p>
          <button
            type="button"
            onClick={handleBackToSite}
            className="text-neutral-400 hover:text-white text-xs underline underline-offset-4 pt-1 transition-colors cursor-pointer"
          >
            {language === 'am' ? 'ወደ ክለቡ ድረ-ገጽ ተመለስ' : 'Return to Public Club Website'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
