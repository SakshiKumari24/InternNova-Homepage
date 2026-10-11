import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Building, GraduationCap, Mail, User } from 'lucide-react';
import { DOMAINS_DATA } from '../data/mockData';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDomainId?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  selectedDomainId,
}) => {
  const [domainId, setDomainId] = useState<string>(selectedDomainId || DOMAINS_DATA[0].id);
  const [tier, setTier] = useState<'basic' | 'pro'>('pro');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');
  const [gradYear, setGradYear] = useState('2026');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedDomainId) {
      setDomainId(selectedDomainId);
    }
  }, [selectedDomainId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !college.trim()) {
      setErrorMsg('Please fill out all required fields before submitting.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid academic or personal email address.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const selectedDomain = DOMAINS_DATA.find((d) => d.id === domainId) || DOMAINS_DATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#0F172A] border border-slate-700 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold text-violet-400 uppercase tracking-wider">
                Cohort Application 2026
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                Apply for InternNova Cohort
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Reserve your slot for the upcoming batch starting Oct 24. Zero application fee.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Domain Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Select Internship Track
                </label>
                <select
                  value={domainId}
                  onChange={(e) => setDomainId(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                >
                  {DOMAINS_DATA.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tier Selection: Basic vs Pro */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Choose Cohort Track
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => setTier('basic')}
                    className={`cursor-pointer p-3 rounded-xl border text-xs transition-all ${
                      tier === 'basic'
                        ? 'bg-violet-950/40 border-violet-500 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-white mb-0.5">Foundational (4 Wks)</div>
                    <div className="text-[11px] text-slate-400">Project tasks + Verified Certificate</div>
                  </div>

                  <div
                    onClick={() => setTier('pro')}
                    className={`cursor-pointer p-3 rounded-xl border text-xs transition-all relative ${
                      tier === 'pro'
                        ? 'bg-cyan-950/40 border-cyan-400 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="absolute -top-2 right-2 text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-cyan-400 text-slate-950 uppercase">
                      Recommended
                    </span>
                    <div className="font-bold text-cyan-200 mb-0.5">Pro Mentorship (8-12 Wks)</div>
                    <div className="text-[11px] text-slate-400">1:1 Reviews + ₹15k Stipend Pool</div>
                  </div>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. priya@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>

              {/* College & Grad year */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    College / University *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. SRM University"
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Year of Graduation
                  </label>
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={gradYear}
                      onChange={(e) => setGradYear(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="Graduate">Already Graduated</option>
                    </select>
                  </div>
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-950/40 border border-red-800/40 text-xs text-red-300">
                  {errorMsg}
                </div>
              )}

              <div className="pt-3">
                <button
                  type="submit"
                  data-testid="submit-application-btn"
                  className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#06B6D4] hover:opacity-95 shadow-xl shadow-[#7C3AED]/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  No credit card required. Confirmation and onboarding checklist will be emailed instantly.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2">Application Received!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
              Welcome, <strong className="text-white">{name}</strong>! We have registered your application for the{' '}
              <strong className="text-cyan-300">{selectedDomain.title}</strong> cohort.
            </p>

            <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 text-left text-xs text-slate-300 mb-6 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Applicant:</span>
                <span className="font-semibold text-white">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Track:</span>
                <span className="font-semibold text-cyan-300 uppercase">{tier} Cohort</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Start Date:</span>
                <span className="font-semibold text-white">{selectedDomain.nextCohort}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Next Step:</span>
                <span className="font-semibold text-emerald-300">Diagnostic Assessment Email Sent</span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-bold text-xs"
            >
              Return to Homepage
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
