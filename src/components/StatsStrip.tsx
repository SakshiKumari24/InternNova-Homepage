import React from 'react';
import { Users, Building2, Star, TrendingUp } from 'lucide-react';
import { STATS_DATA } from '../data/mockData';

export const StatsStrip: React.FC = () => {
  const icons = [
    <Users className="w-6 h-6 text-violet-400" />,
    <Building2 className="w-6 h-6 text-cyan-400" />,
    <Star className="w-6 h-6 text-amber-400 fill-amber-400/20" />,
    <TrendingUp className="w-6 h-6 text-emerald-400" />,
  ];

  return (
    <section className="relative z-10 py-10 bg-[#0A0F1D]/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((item, index) => (
            <div
              key={item.label}
              className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-800/70 hover:border-violet-500/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:scale-105 transition-transform">
                  {icons[index]}
                </div>
                <span className="text-[11px] font-medium text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded-full">
                  {item.change}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
