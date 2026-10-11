import React from 'react';
import { CheckCircle2, Target } from 'lucide-react';
import { MENTORSHIP_STEPS } from '../data/mockData';

export const MentorshipPathway: React.FC = () => {
  return (
    <section id="mentorship" className="py-20 relative bg-[#090D1A]/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-semibold mb-3">
            <Target className="w-3.5 h-3.5 text-cyan-400" />
            <span>Structured Sprint Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 4-Stage Mentorship Journey
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            How we transform ambitious college students into engineers capable of passing senior-level code reviews and system design rounds.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-16">
          {MENTORSHIP_STEPS.map((step) => (
            <div
              key={step.step}
              className="glass-card rounded-2xl p-6 border border-slate-800/80 relative hover:border-violet-500/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                    {step.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/70 flex items-center text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors">
                <span>Phase Outcome Verified</span>
                <CheckCircle2 className="w-3.5 h-3.5 ml-1.5 text-cyan-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Callout: InternNova vs Generic Tutorials */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800/80 max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-8">
            Why InternNova Solves the College Placement Dilemma
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Old Way */}
            <div className="bg-red-950/10 border border-red-900/30 rounded-2xl p-5">
              <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                Typical Video Courses & Mass Portals
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Passive video watching with zero accountability or feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Cloned projects (To-Do list, calculators) that recruiters discard instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>No feedback when code breaks or architecture scales poorly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Unverifiable PDFs without cryptographic lookup backing</span>
                </li>
              </ul>
            </div>

            {/* The InternNova Way */}
            <div className="bg-emerald-950/20 border border-emerald-800/30 rounded-2xl p-5">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                InternNova Sprint Cohorts
              </div>
              <ul className="space-y-2.5 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>Weekly GitHub PR submissions with senior engineer code reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>Production architectures (RAG pipelines, microservices, auth flows)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>Live office hours & debugging calls directly over Discord/Slack</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>MSME-recognized verifiable credential & verified public portfolio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
