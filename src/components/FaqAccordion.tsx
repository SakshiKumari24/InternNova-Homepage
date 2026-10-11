import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/mockData';

export const FaqAccordion: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 relative bg-[#090D1A]/50 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-800/40 text-violet-300 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Clarifications & Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Everything you need to know about internship schedules, college compatibility, mentoring, and certificates.
          </p>
        </div>

        {/* Collapsible Items */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg bg-slate-800 text-slate-300 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-violet-900/60 text-cyan-300' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
