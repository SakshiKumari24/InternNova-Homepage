import React from 'react';
import { ArrowRight, Shield, Users, Terminal } from 'lucide-react';
import { HIRING_PARTNERS, UNIVERSITY_PARTNERS } from '../data/mockData';

interface HeroProps {
  onOpenApply: () => void;
  onOpenVerify: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply, onOpenVerify }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Radial Glow Blobs */}
      <div 
        className="hero-glow-blob w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2 bg-[#7C3AED]/30"
        aria-hidden="true" 
      />
      <div 
        className="hero-glow-blob w-[450px] h-[450px] top-60 -right-40 bg-[#06B6D4]/20"
        aria-hidden="true" 
      />
      <div 
        className="hero-glow-blob w-[350px] h-[350px] top-80 -left-20 bg-[#7C3AED]/20"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Live Cohort Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-violet-500/30 text-xs text-slate-200 shadow-lg shadow-violet-500/10 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-white">Live Cohort 2026</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400 font-medium">Batch Starts Oct 24</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">MSME Recognized</span>
          </div>
        </div>

        {/* Main Display Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Bridging College Theory with{' '}
            <span className="gradient-text">Production Tech Internships</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Stop coding trivial calculator apps. Build scalable cloud microservices, fine-tune LLMs, and conduct offensive penetration tests with line-by-line mentor code reviews.
          </p>
        </div>

        {/* CTAs & Trust Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenApply}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#06B6D4] hover:opacity-95 shadow-xl shadow-[#7C3AED]/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Internship Tracks</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenVerify}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/70 hover:border-slate-600 transition-all"
          >
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Verify Certificates & Portfolios</span>
          </button>
        </div>

        {/* Floating Feature Strip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
          <div className="glass-card glass-card-hover rounded-2xl p-4 flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-violet-950/60 border border-violet-800/40 flex items-center justify-center shrink-0">
              <Terminal className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Production Capstones</h3>
              <p className="text-xs text-slate-400 mt-0.5">Real user stories, CI/CD, and zero toy projects.</p>
            </div>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-4 flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">1:1 Line-by-Line Reviews</h3>
              <p className="text-xs text-slate-400 mt-0.5">Direct feedback from senior engineers on Git PRs.</p>
            </div>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-4 flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">MSME Recognized & Verified</h3>
              <p className="text-xs text-slate-400 mt-0.5">Cryptographic QR credential accepted nationwide.</p>
            </div>
          </div>
        </div>

        {/* University & Hiring Partner Recognition Ticker */}
        <div className="pt-6 border-t border-slate-800/60">
          <p className="text-center text-xs uppercase tracking-wider text-slate-400 font-semibold mb-5">
            Trusted by students & alumni across leading engineering institutes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {UNIVERSITY_PARTNERS.map((univ) => (
              <div
                key={univ.name}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/40 border border-slate-800/80 text-xs font-medium text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>{univ.name}</span>
                <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                  {univ.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Hiring Network Mention */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="font-medium text-slate-400">Interns working & placed at:</span>
            {HIRING_PARTNERS.map((company) => (
              <span key={company} className="font-semibold text-slate-300 hover:text-white transition-colors">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
