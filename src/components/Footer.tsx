import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailInput.trim();

    if (!email) {
      setNewsletterStatus('error');
      setStatusMessage('Please provide an email address.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setNewsletterStatus('error');
      setStatusMessage('Please enter a valid email address (e.g. name@college.edu).');
      return;
    }

    setNewsletterStatus('success');
    setStatusMessage('Subscribed! You will receive weekly project breakdowns and internship notices.');
    setEmailInput('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070B] border-t border-slate-800 text-slate-400 text-xs">
      {/* Pre-footer Application Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-12">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-violet-950/80 via-slate-900 to-cyan-950/80 border border-violet-500/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                Ready to level up your engineering skills?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Build Production-Grade Projects With Senior Mentors
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Join 28,000+ ambitious developers across India. Applications close once cohort caps are filled.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href="#domains"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] hover:opacity-95 shadow-lg shadow-[#7C3AED]/25 transition-all"
              >
                <span>Browse All Tracks</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Brand & Registration */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7C3AED] to-[#06B6D4] flex items-center justify-center text-white font-black text-sm">
                IN
              </div>
              <span className="font-extrabold text-lg text-white">
                Intern<span className="text-[#38BDF8]">Nova</span>
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mb-4">
              India's premier hands-on tech internship & mentorship platform. Empowering college students with production-grade engineering capstones, line-by-line code reviews, and industry-standard credentials.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>MSME Registered • UDYAM-DL-08-004921 • ISO 9001:2015</span>
            </div>
          </div>

          {/* Column 2: Internship Domains */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Domains
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#domains" className="hover:text-cyan-400 transition-colors">Full Stack Web Dev</a></li>
              <li><a href="#domains" className="hover:text-cyan-400 transition-colors">AI & Machine Learning</a></li>
              <li><a href="#domains" className="hover:text-cyan-400 transition-colors">Data Analytics & BI</a></li>
              <li><a href="#domains" className="hover:text-cyan-400 transition-colors">Cyber Security & Pentest</a></li>
              <li><a href="#domains" className="hover:text-cyan-400 transition-colors">Cloud & DevOps SRE</a></li>
              <li><a href="#domains" className="hover:text-cyan-400 transition-colors">Mobile App (Flutter)</a></li>
            </ul>
          </div>

          {/* Column 3: Ecosystem */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Student Hub
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#student-corner" className="hover:text-cyan-400 transition-colors">Verify Certificate</a></li>
              <li><a href="#student-corner" className="hover:text-cyan-400 transition-colors">AI Resume Grader</a></li>
              <li><a href="#student-corner" className="hover:text-cyan-400 transition-colors">Capstone Portfolios</a></li>
              <li><a href="#workshops" className="hover:text-cyan-400 transition-colors">Weekend Masterclasses</a></li>
              <li><a href="#mentorship" className="hover:text-cyan-400 transition-colors">Mentorship Pathway</a></li>
              <li><a href="#faqs" className="hover:text-cyan-400 transition-colors">Help & FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter with Error/Fallback Handling (PRD ERR.1) */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Cohort Dispatch
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Get notified of new batch openings, free masterclasses, and open-source project bounties.
            </p>

            <form noValidate onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => {
                    setEmailInput(e.target.value);
                    if (newsletterStatus !== 'idle') setNewsletterStatus('idle');
                  }}
                  placeholder="Enter your student email..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs transition-colors"
              >
                Subscribe
              </button>

              {/* Inline feedback message */}
              {newsletterStatus === 'error' && (
                <div className="text-[11px] text-red-400 pt-1 leading-tight">
                  {statusMessage}
                </div>
              )}
              {newsletterStatus === 'success' && (
                <div className="text-[11px] text-emerald-400 pt-1 leading-tight font-medium">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Socials & Back to Top */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} InternNova EdTech Technologies Pvt Ltd. All rights reserved.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-colors" aria-label="GitHub">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors" aria-label="Discord">
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-2 p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
