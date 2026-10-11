import React, { useState, useMemo } from 'react';
import { Search, Sparkles, CheckCircle2, ArrowRight, Layers, BookOpen, Star, Calendar, X } from 'lucide-react';
import { DOMAINS_DATA, type DomainTrack } from '../data/mockData';

interface DomainCardsProps {
  onSelectDomainForApply: (domainId: string) => void;
}

export const DomainCards: React.FC<DomainCardsProps> = ({ onSelectDomainForApply }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCurriculumTrack, setSelectedCurriculumTrack] = useState<DomainTrack | null>(null);

  const categories = [
    { id: 'all', label: 'All Domains' },
    { id: 'development', label: 'Web & Mobile' },
    { id: 'ai-data', label: 'AI & Data Science' },
    { id: 'security', label: 'Cyber Security' },
    { id: 'cloud', label: 'Cloud & DevOps' },
  ];

  const filteredDomains = useMemo(() => {
    return DOMAINS_DATA.filter((domain) => {
      const matchesCategory = activeCategory === 'all' || domain.category === activeCategory;
      const matchesSearch =
        domain.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        domain.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        domain.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="domains" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-800/40 text-violet-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Domain Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered For Industry Roles, Not Just Certifications
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Choose your specialty track. Every cohort features rigorous code reviews, production deployments, and verifiable capstones tailored for your campus placement portfolio.
          </p>
        </div>

        {/* Filter Controls: Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-slate-900/60 p-3 rounded-2xl border border-slate-800/80 backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white shadow-md shadow-[#7C3AED]/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech stack or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#07090E] border border-slate-700/80 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Counter / Filter status */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <span>
            Showing <strong className="text-white">{filteredDomains.length}</strong> available tracks
            {searchQuery && <span> matching "{searchQuery}"</span>}
          </span>
          <span className="hidden sm:inline text-slate-400">
            * Both Basic (4-Week) and Pro (8-12 Week) tracks available for all domains
          </span>
        </div>

        {/* Domain Cards Grid */}
        {filteredDomains.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDomains.map((domain) => (
              <div
                key={domain.id}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800/80 hover:border-violet-500/40 relative overflow-hidden group"
              >
                {/* Popular or High Demand Badge */}
                {domain.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-600/30 to-cyan-500/30 text-cyan-300 border border-cyan-500/30">
                      <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                      {domain.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Category Pill */}
                  <span className="text-[11px] font-bold text-violet-400 uppercase tracking-wider">
                    {domain.categoryLabel}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mt-1.5 mb-2 leading-snug group-hover:text-cyan-200 transition-colors">
                    {domain.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {domain.shortDesc}
                  </p>

                  {/* Basic vs Pro Pill Info */}
                  <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800/70 mb-4 text-xs">
                    <div className="flex items-center justify-between text-slate-300 pb-1.5 border-b border-slate-800">
                      <span className="text-slate-400 font-medium">Foundational Track:</span>
                      <span className="font-semibold text-slate-200">{domain.durationBasic}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300 pt-1.5">
                      <span className="text-cyan-400 font-medium">Pro Mentorship:</span>
                      <span className="font-semibold text-cyan-200">{domain.durationPro}</span>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="mb-4">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Core Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-200 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Capstone Projects Highlight */}
                  <div className="mb-5">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Capstone Deliverables
                    </div>
                    <ul className="space-y-1">
                      {domain.capstoneProjects.slice(0, 2).map((proj, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer of Card: Next Cohort, Curriculum link & Apply button */}
                <div className="pt-4 border-t border-slate-800/80 mt-auto">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-violet-400" />
                      {domain.nextCohort}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-slate-300">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      {domain.rating} ({domain.reviewCount})
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedCurriculumTrack(domain)}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800/70 hover:bg-slate-700 hover:text-white border border-slate-700/60 transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Syllabus</span>
                    </button>

                    <button
                      onClick={() => onSelectDomainForApply(domain.id)}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] hover:opacity-95 shadow-md shadow-[#7C3AED]/20 transition-all hover:scale-[1.02]"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Graceful Fallback for Empty Search/Filter results (PRD ERR.1) */
          <div className="text-center py-16 px-4 bg-slate-900/40 rounded-2xl border border-slate-800 max-w-lg mx-auto">
            <div className="w-12 h-12 mx-auto rounded-full bg-slate-800 flex items-center justify-center mb-3 text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">No internship tracks found</h4>
            <p className="text-xs text-slate-400 mt-1 mb-4">
              We couldn't find any domains matching "{searchQuery}". Try searching for terms like "React", "AI", "Python", or "Security".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-xs font-semibold text-cyan-400 hover:underline"
            >
              Reset filters & view all tracks
            </button>
          </div>
        )}
      </div>

      {/* Curriculum Modal */}
      {selectedCurriculumTrack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#0F172A] border border-slate-700/80 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCurriculumTrack(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-violet-400 uppercase tracking-wider">
              Curriculum Roadmap
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">
              {selectedCurriculumTrack.title}
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Detailed breakdown of sprint milestones, production deliverables, and mentor evaluation criteria.
            </p>

            <div className="space-y-3 mb-6">
              {selectedCurriculumTrack.syllabusWeeks.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <span className="text-xs font-bold px-2 py-1 rounded bg-[#7C3AED]/20 text-[#A78BFA] border border-[#7C3AED]/30 shrink-0">
                    {item.week}
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200">{item.topic}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 mb-6">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                Included Benefits & Outcomes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {selectedCurriculumTrack.perks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => setSelectedCurriculumTrack(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const id = selectedCurriculumTrack.id;
                  setSelectedCurriculumTrack(null);
                  onSelectDomainForApply(id);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] shadow-md hover:opacity-95"
              >
                Apply for this Track
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
