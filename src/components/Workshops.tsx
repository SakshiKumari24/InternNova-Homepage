import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, Video, ArrowRight } from 'lucide-react';
import { WORKSHOPS_DATA, type Workshop } from '../data/mockData';

export const Workshops: React.FC = () => {
  const [registeredIds, setRegisteredIds] = useState<string[]>([]);
  const [activeModalWorkshop, setActiveModalWorkshop] = useState<Workshop | null>(null);

  const handleRegister = (ws: Workshop) => {
    if (!registeredIds.includes(ws.id)) {
      setRegisteredIds([...registeredIds, ws.id]);
    }
    setActiveModalWorkshop(ws);
  };

  return (
    <section id="workshops" className="py-20 relative bg-[#090D1A]/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-800/40 text-violet-300 text-xs font-semibold mb-3">
            <Video className="w-3.5 h-3.5 text-cyan-400" />
            <span>Weekend Masterclasses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Engineering Workshops & Labs
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Learn directly from Staff Engineers and Security Researchers. Free access included for all actively enrolled InternNova interns.
          </p>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKSHOPS_DATA.map((ws) => {
            const isRegistered = registeredIds.includes(ws.id);
            return (
              <div
                key={ws.id}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800/80 flex flex-col justify-between hover:border-violet-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                      {ws.tag}
                    </span>
                    {ws.isLive && (
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Next Up
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-white mb-3 line-clamp-2 leading-snug group-hover:text-cyan-200 transition-colors">
                    {ws.title}
                  </h3>

                  {/* Speaker Details */}
                  <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 mb-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-xs font-bold text-white shrink-0">
                      {ws.speaker[0]}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">{ws.speaker}</div>
                      <div className="text-[11px] text-slate-400">
                        {ws.speakerRole} • <span className="text-cyan-400">{ws.speakerCompany}</span>
                      </div>
                    </div>
                  </div>

                  {/* Date & Time info */}
                  <div className="space-y-1.5 text-xs text-slate-300 mb-5">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                      <span>{ws.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{ws.time}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-3 border-t border-slate-800/80">
                  <button
                    onClick={() => handleRegister(ws)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      isRegistered
                        ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    {isRegistered ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Pass Confirmed</span>
                      </>
                    ) : (
                      <>
                        <span>Reserve Free Spot</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <div className="text-[10px] text-center text-slate-400 mt-2">
                    {ws.attendees + (isRegistered ? 1 : 0)} students registered
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Confirmation Modal */}
      {activeModalWorkshop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#0F172A] border border-emerald-500/40 rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-white mb-1">Pass Reserved Successfully!</h3>
            <p className="text-xs text-slate-300 mb-4">
              You are confirmed for <strong className="text-cyan-300">{activeModalWorkshop.title}</strong> with {activeModalWorkshop.speaker}.
            </p>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-left text-xs text-slate-300 mb-5 space-y-1">
              <div><strong>Date:</strong> {activeModalWorkshop.date}</div>
              <div><strong>Time:</strong> {activeModalWorkshop.time}</div>
              <div><strong>Access Link:</strong> Calendar invite & Zoom link will be sent to your registered email 2 hours prior to the session.</div>
            </div>

            <button
              onClick={() => setActiveModalWorkshop(null)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-bold text-xs shadow-md"
            >
              Done & Add to Calendar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
