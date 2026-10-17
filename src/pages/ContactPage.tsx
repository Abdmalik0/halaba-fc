import React, { useState } from 'react';
import { useClub } from '../context/ClubContext';
import { HalabaCrest } from '../components/HalabaCrest';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t, clubInfo } = useClub();

  // Form state
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !emailOrPhone.trim() || !message.trim()) {
      setError('Please fill in your name, contact information, and message.');
      return;
    }

    setError('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setName('');
      setEmailOrPhone('');
      setSubject('');
      setMessage('');
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">
              <Mail className="w-4 h-4" />
              <span>Official Communications</span>
            </div>
            <h1 className="font-sports font-black text-3xl sm:text-5xl text-white uppercase tracking-wider">
              {t.contactTitle}
            </h1>
            <p className="text-neutral-400 text-sm mt-1 max-w-xl">{t.contactSubtitle}</p>
          </div>

          <HalabaCrest size={70} showGlow />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info Col */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <h3 className="font-sports font-black text-2xl text-white uppercase tracking-wider pb-3 border-b border-neutral-800">
              Club Headquarters
            </h3>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-red-950 border border-red-800 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block text-sm">Address</strong>
                  <span className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {clubInfo.contact.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block text-sm">Official Phone</strong>
                  <span className="text-neutral-300 font-mono text-xs sm:text-sm block">
                    {clubInfo.contact.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-950 border border-amber-800 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block text-sm">Inquiries & Press</strong>
                  <span className="text-neutral-300 font-mono text-xs sm:text-sm block">
                    General: {clubInfo.contact.email}
                  </span>
                  <span className="text-neutral-400 font-mono text-xs block">
                    Media: {clubInfo.contact.mediaEmail}
                  </span>
                  <span className="text-neutral-400 font-mono text-xs block">
                    Tickets: {clubInfo.contact.ticketOffice}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-neutral-800 border border-neutral-700 text-neutral-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block text-sm">Office Hours</strong>
                  <span className="text-neutral-400 text-xs leading-relaxed block">
                    {clubInfo.contact.hours}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Channels */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <h3 className="font-sports font-bold text-xl text-white uppercase tracking-wider">
              Official Social Channels
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={clubInfo.socials.telegram}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-sky-500/50 flex items-center justify-between text-xs font-semibold text-neutral-200 hover:text-white transition-colors"
              >
                <span>Telegram</span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              </a>

              <a
                href={clubInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-blue-500/50 flex items-center justify-between text-xs font-semibold text-neutral-200 hover:text-white transition-colors"
              >
                <span>Facebook</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-500" />
              </a>

              <a
                href={clubInfo.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-red-500/50 flex items-center justify-between text-xs font-semibold text-neutral-200 hover:text-white transition-colors"
              >
                <span>YouTube</span>
                <ExternalLink className="w-3.5 h-3.5 text-red-500" />
              </a>

              <a
                href={clubInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-500/50 flex items-center justify-between text-xs font-semibold text-neutral-200 hover:text-white transition-colors"
              >
                <span>X (Twitter)</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Message Form Col */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="pb-4 border-b border-neutral-800 mb-6">
              <h3 className="font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
                {t.sendUsMessage}
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                Reach out to the club secretariat, fan liaison officer, or press department.
              </p>
            </div>

            {isSent ? (
              <div className="p-8 text-center space-y-3 bg-emerald-950/40 border border-emerald-800/80 rounded-2xl animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-sports font-bold text-2xl text-white uppercase">
                  Message Transmitted
                </h4>
                <p className="text-neutral-300 text-sm max-w-md mx-auto">
                  {t.messageSentSuccess}
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider font-sports"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dawit Kebede"
                      className="w-full px-4 py-3 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                      Email or Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      placeholder="+251 9... or fan@example.com"
                      className="w-full px-4 py-3 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.messageSubject}
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="General Inquiry, Ticket Question, Partnership, Media..."
                    className="w-full px-4 py-3 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.messageBody} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message to HALABA City FC..."
                    className="w-full px-4 py-3 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-wider font-sports shadow-lg shadow-red-950 flex items-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : t.sendMessageBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Interactive Halaba Stadium Representation Map */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h4 className="font-sports font-bold text-lg text-white uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Halaba Stadium Location</span>
            </h4>
            <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col items-center justify-center text-center space-y-2 relative overflow-hidden min-h-[160px]">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#056b2b_1px,transparent_1px)] [background-size:16px_16px]" />
              <HalabaCrest size={48} />
              <span className="font-sports font-bold text-lg text-white">
                Halaba Stadium (ሀላባ ስታዲየም)
              </span>
              <p className="text-xs text-neutral-400 max-w-md">
                Halaba Kulito, Central Ethiopia Regional State • Coordinates: 7.31° N, 38.09° E
              </p>
              <span className="text-xxs px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
                Official Matchday Ground
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
