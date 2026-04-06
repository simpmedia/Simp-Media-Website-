
import React from 'react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      tags: ["AutoDex + UGDex", "D2C Brand"],
      title: "Scaling a D2C Brand with AI-Powered Content",
      challenge: "Sales stagnated as generic creator content failed to convert.",
      solution: "Built automated CRM funnel + launched 15-creator UGDex campaign with AI-hooks.",
      results: ["+62% higher CVR in 45 days", "+48% engagement increase", "40% reduction in response time"],
      color: "violet"
    },
    {
      tags: ["Web & Tech", "Skincare"],
      title: "Transforming E-commerce with AI Personalization",
      challenge: "Premium Shopify store underperforming on conversions.",
      solution: "Custom-coded site with AI-recommendation engine & visual UGC modules.",
      results: ["2.3x ROAS improvement", "27% lift in AOV", "3x faster load speed"],
      color: "purple"
    },
    {
      tags: ["Creative", "SaaS Startup"],
      title: "Revolutionizing SaaS Growth with AI-Powered Ads",
      challenge: "High ad spend with low engagement and conversions.",
      solution: "AI-backed ad framework with predictive analytics and data-driven redesign.",
      results: ["+89% engagement rate", "35% lower CAC", "200% increase in sign-ups"],
      color: "indigo"
    }
  ];

  return (
    <section id="case-studies" className="py-24 px-6 bg-[#050212] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.03)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(167,139,250,0.03)_0%,transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-xs font-bold text-violet-300 mb-6 uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_#8b5cf6]"></div>
            Case Studies
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Just We Don't Pitch <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">Potential</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Here's how we've re-engineered growth for brands that believed in AI before it was cool.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group relative bg-slate-900/60 p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-2">
              <div className="flex justify-between items-center mb-6">
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full border bg-violet-500/10 border-violet-500/30 text-violet-400`}>{c.tags[0]}</span>
                <span className="text-[10px] font-bold text-slate-500 bg-slate-950 px-2 py-0.5 rounded-full">{c.tags[1]}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6">{c.title}</h3>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-6"></div>
              
              <div className="space-y-6 mb-8">
                <div>
                  <div className="text-[10px] text-violet-300 font-bold uppercase tracking-widest mb-1">Challenge</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <div className="text-[10px] text-violet-300 font-bold uppercase tracking-widest mb-1">Solution</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{c.solution}</p>
                </div>
              </div>

              <div className="space-y-3">
                 {c.results.map((r, ri) => (
                   <div key={ri} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-bold bg-violet-500/20 text-violet-400`}>✓</div>
                      <span className="text-xs text-slate-300"><strong>{r.split(' ')[0]}</strong> {r.substring(r.indexOf(' ') + 1)}</span>
                   </div>
                 ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
