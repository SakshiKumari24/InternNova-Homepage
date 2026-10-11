import React, { useState } from 'react';
import { ShieldCheck, FileText, Globe, Search, CheckCircle, ExternalLink, Award, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { SAMPLE_CERTIFICATES } from '../data/mockData';

interface StudentCornerProps {
  initialCertId?: string;
}

export const StudentCorner: React.FC<StudentCornerProps> = ({ initialCertId = '' }) => {
  const [activeTab, setActiveTab] = useState<'verify' | 'resume' | 'portfolio'>('verify');

  // Verify Certificate State
  const [certInput, setCertInput] = useState<string>(initialCertId || 'IN-2026-8841');
  const [certResult, setCertResult] = useState<any>(SAMPLE_CERTIFICATES['IN-2026-8841']);
  const [certError, setCertError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);

  const handleVerify = (idToTest?: string) => {
    const id = (idToTest || certInput).trim().toUpperCase();
    setIsVerifying(true);
    setCertError(null);

    setTimeout(() => {
      setIsVerifying(false);
      if (SAMPLE_CERTIFICATES[id]) {
        setCertResult(SAMPLE_CERTIFICATES[id]);
        setCertInput(id);
      } else {
        setCertResult(null);
        setCertError(`No active record found for credential "${id}". Please check the ID or try one of the verified sample IDs below.`);
      }
    }, 400);
  };

  // Resume ATS Grader state
  const [selectedTechRole, setSelectedTechRole] = useState<'fullstack' | 'ai' | 'security'>('fullstack');
  const [checkedSkills, setCheckedSkills] = useState<string[]>(['React 19', 'TypeScript', 'Node.js', 'PostgreSQL']);

  const roleKeywords: Record<string, string[]> = {
    fullstack: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'CI/CD Pipelines', 'REST APIs', 'Tailwind CSS'],
    ai: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI', 'MLOps', 'Vector DBs', 'RAG Systems', 'LoRA Fine-tuning', 'Pandas'],
    security: ['Burp Suite Pro', 'OWASP Top 10', 'Linux Hardening', 'Metasploit', 'Python Automation', 'AWS IAM', 'Network Forensics']
  };

  const toggleSkill = (skill: string) => {
    if (checkedSkills.includes(skill)) {
      setCheckedSkills(checkedSkills.filter((s) => s !== skill));
    } else {
      setCheckedSkills([...checkedSkills, skill]);
    }
  };

  const atsScore = Math.min(98, Math.round((checkedSkills.length / roleKeywords[selectedTechRole].length) * 100));

  return (
    <section id="student-corner" className="py-20 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-800/40 text-indigo-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Intern & Alumni Utilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Student Corner & Verification Hub
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Instant cryptographic certificate validation, ATS resume keyword readiness test, and public capstone portfolios for recruiters.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800/90 shadow-lg">
            <button
              onClick={() => setActiveTab('verify')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'verify'
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Verify Certificate</span>
            </button>

            <button
              onClick={() => setActiveTab('resume')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'resume'
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>AI Resume Scorer</span>
            </button>

            <button
              onClick={() => setActiveTab('portfolio')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'portfolio'
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Portfolio Showcase</span>
            </button>
          </div>
        </div>

        {/* TAB 1: VERIFY CERTIFICATE */}
        {activeTab === 'verify' && (
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-10 border border-slate-800/90">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Public Credential Verification Portal
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Universities and hiring employers can instantly authenticate completion status, mentor assessment grades, and capstone repository links.
              </p>
            </div>

            {/* Input Search Form */}
            <div className="max-w-md mx-auto mb-6">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={certInput}
                    onChange={(e) => setCertInput(e.target.value.toUpperCase())}
                    placeholder="e.g. IN-2026-8841"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-white font-mono placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <button
                  data-testid="verify-cert-btn"
                  onClick={() => handleVerify()}
                  disabled={isVerifying || !certInput}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-bold text-xs sm:text-sm hover:opacity-95 disabled:opacity-50 transition-opacity flex items-center gap-1.5"
                >
                  {isVerifying ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Verify'}
                </button>
              </div>

              {/* Sample Quick-Click Chips */}
              <div className="mt-3 flex items-center justify-center gap-2 flex-wrap text-xs text-slate-400">
                <span>Try sample IDs:</span>
                {['IN-2026-8841', 'IN-2026-7290', 'IN-2026-4412'].map((id) => (
                  <button
                    key={id}
                    onClick={() => handleVerify(id)}
                    className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 hover:bg-slate-700 font-mono text-[11px] transition-colors"
                  >
                    {id}
                  </button>
                ))}
              </div>
            </div>

            {/* Verification Result Display */}
            {certResult && (
              <div className="mt-8 bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500" />
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                      <Award className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/50 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>VERIFIED RECORD ON FILE</span>
                      </div>
                      <h4 className="text-lg font-extrabold text-white mt-1">
                        {certResult.student}
                      </h4>
                    </div>
                  </div>

                  <div className="text-right sm:text-right">
                    <div className="text-xs text-slate-400 font-mono">Credential ID</div>
                    <div className="text-sm font-bold text-cyan-300 font-mono">{certInput}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 text-xs border-b border-slate-800">
                  <div>
                    <span className="text-slate-400 block mb-1">Domain Track</span>
                    <span className="font-semibold text-white text-sm">{certResult.domain}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-1">Evaluation & Grade</span>
                    <span className="font-semibold text-emerald-300 text-sm">{certResult.grade}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-1">Certification Date</span>
                    <span className="font-semibold text-slate-200">{certResult.date}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-1">Lead Reviewing Mentor</span>
                    <span className="font-semibold text-slate-200">{certResult.mentor}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
                  <span>Issued under MSME Registered InternNova EdTech Standards (ISO 9001:2015 Compliant).</span>
                  <span className="text-cyan-400 font-semibold cursor-pointer hover:underline flex items-center gap-1">
                    Download Official Transcript <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            )}

            {certError && (
              <div className="mt-6 p-4 rounded-xl bg-red-950/30 border border-red-800/40 text-xs text-red-300 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{certError}</span>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: AI RESUME SCORER */}
        {activeTab === 'resume' && (
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-10 border border-slate-800/90">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-white mb-2">
                ATS Keyword Readiness Evaluator
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Top companies filter 70% of resumes through automated ATS parsers. Select your target domain and test your core stack density.
              </p>
            </div>

            {/* Role picker */}
            <div className="flex justify-center gap-2 mb-6 flex-wrap">
              {[
                { key: 'fullstack', label: 'Full Stack Web' },
                { key: 'ai', label: 'AI & Machine Learning' },
                { key: 'security', label: 'Cyber Security' },
              ].map((role) => (
                <button
                  key={role.key}
                  onClick={() => {
                    setSelectedTechRole(role.key as any);
                    setCheckedSkills(roleKeywords[role.key].slice(0, 4));
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedTechRole === role.key
                      ? 'bg-violet-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>

            {/* ATS Score Meter */}
            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300">ATS Keyword Optimization Score</span>
                <span className={`text-base font-extrabold ${atsScore >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {atsScore}% {atsScore >= 75 ? '• Strong Candidate' : '• Add More Capstone Keywords'}
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-violet-500 to-cyan-400 h-full transition-all duration-500"
                  style={{ width: `${atsScore}%` }}
                />
              </div>
            </div>

            {/* Keyword checklist */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-slate-400 mb-3">
                Tap keywords currently demonstrated by your projects and internships:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {roleKeywords[selectedTechRole].map((skill) => {
                  const isChecked = checkedSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`p-2.5 rounded-xl text-xs font-medium text-left border flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200'
                          : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span>{skill}</span>
                      {isChecked && <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-800/30 text-xs text-slate-300 flex items-center justify-between flex-wrap gap-2">
              <span>InternNova cohorts ensure all these high-value keywords are actively validated with live GitHub PRs.</span>
              <span className="text-cyan-400 font-semibold">Included free in Pro Cohorts</span>
            </div>
          </div>
        )}

        {/* TAB 3: PORTFOLIO SHOWCASE */}
        {activeTab === 'portfolio' && (
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-10 border border-slate-800/90">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Public Verified Intern Profiles
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Every graduate receives a dedicated public profile containing verifiable capstone repositories, live deployment URLs, and mentor recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-violet-600/30 border border-violet-500/50 flex items-center justify-center font-bold text-white">
                    AS
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Aarav Sharma</h4>
                    <p className="text-[11px] text-cyan-400 font-mono">internnova.dev/@aarav-sde</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  Featured Capstone: High-throughput URL Shortener with Redis caching & Next.js 15 dashboard.
                </p>
                <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-800 text-slate-400">
                  <span>3 Verified Capstones</span>
                  <span className="text-emerald-400 font-semibold">Grade: A+</span>
                </div>
              </div>

              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-600/30 border border-cyan-500/50 flex items-center justify-center font-bold text-white">
                    MN
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Meera Namboodiri</h4>
                    <p className="text-[11px] text-cyan-400 font-mono">internnova.dev/@meera-ai</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  Featured Capstone: Autonomous RAG engine using LangChain, pgvector, and Mistral 7B quantized model.
                </p>
                <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-800 text-slate-400">
                  <span>2 Verified Models</span>
                  <span className="text-emerald-400 font-semibold">Grade: A+</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
