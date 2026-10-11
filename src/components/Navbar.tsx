import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Code } from 'lucide-react';

interface NavbarProps {
  onOpenApply: (domainId?: string) => void;
  onOpenVerify: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply, onOpenVerify }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Domains', href: '#domains' },
    { label: 'Mentorship', href: '#mentorship' },
    { label: 'Student Corner', href: '#student-corner' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090E]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#7C3AED] rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#06B6D4] p-[1.5px] shadow-md shadow-[#7C3AED]/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                <Code className="w-5 h-5 text-[#38BDF8]" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-colors">
                  Intern<span className="text-[#38BDF8]">Nova</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#7C3AED]/20 text-[#A78BFA] border border-[#7C3AED]/30 uppercase tracking-wider">
                  Pro
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                Tech Internships & Cohorts
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenVerify}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 text-cyan-400 hover:text-cyan-300 bg-cyan-950/30 hover:bg-cyan-950/60 border border-cyan-800/40 rounded-lg transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Verify Certificate
            </button>

            <button
              onClick={() => onOpenApply()}
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white hover:opacity-95 shadow-lg shadow-[#7C3AED]/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Apply for Cohort
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenApply()}
              className="text-xs font-semibold px-3 py-1.5 rounded-md bg-[#7C3AED] text-white"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div data-testid="mobile-nav-drawer" className="md:hidden bg-[#0A0F1D]/98 border-b border-slate-800 px-5 pt-3 pb-6 mt-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-3">
          <div className="flex flex-col gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800/70 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerify();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 rounded-lg"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Verify Certificate
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-lg shadow-md"
            >
              Apply for Internship Cohort
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
