import React, { useState, useMemo } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Building, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const Testimonials: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(0);

  const filterTabs = [
    { id: 'all', label: 'All Reviews' },
    { id: 'development', label: 'Web Development' },
    { id: 'ai-data', label: 'AI & Data Science' },
    { id: 'security', label: 'Cyber Security' },
  ];

  const filteredReviews = useMemo(() => {
    if (activeFilter === 'all') return TESTIMONIALS_DATA;
    return TESTIMONIALS_DATA.filter((r) => r.domain === activeFilter);
  }, [activeFilter]);

  // We display cards cleanly in pages of 3 to avoid infinite scrolling walls
  const PAGE_SIZE = 3;
  const totalPages = Math.ceil(filteredReviews.length / PAGE_SIZE);

  const currentReviews = filteredReviews.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  const handleFilterChange = (tabId: string) => {
    setActiveFilter(tabId);
    setCurrentPage(0);
  };

  return (
    <section id="reviews" className="py-20 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-semibold mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-cyan-400" />
            <span>Alumni Placement Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Curated Graduate Reviews & Placements
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Real outcomes from students who turned their InternNova capstones into full-time offers and top-tier internships.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleFilterChange(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white shadow-md shadow-[#7C3AED]/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Paginated Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {currentReviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-violet-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Placed Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  {rev.placedAt && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                      <Building className="w-3 h-3" />
                      {rev.placedAt}
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                  "{rev.reviewText}"
                </p>
              </div>

              <div>
                {/* Project Built Tag */}
                <div className="mb-4 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300">
                  <span className="text-cyan-400 font-semibold block mb-0.5">Capstone Built:</span>
                  <span>{rev.projectBuilt}</span>
                </div>

                {/* Student Profile Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                  <img
                    src={rev.avatarUrl}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                    loading="lazy"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-white">{rev.name}</h4>
                      {rev.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400">{rev.collegeOrCompany}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel / Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:hover:text-slate-300"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs text-slate-400 font-medium">
              Page {currentPage + 1} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:hover:text-slate-300"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
