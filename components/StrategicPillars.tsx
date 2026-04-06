
import React from 'react';

const StrategicPillars: React.FC = () => {
  const pillars = [
    { num: '01', title: 'AI-Led Strategy', desc: 'Signals, segmentation, scenarios.', gradient: 'from-violet-300 to-purple-600' },
    { num: '02', title: 'Execution Ops', desc: 'Content, media, automation.', gradient: 'from-indigo-300 to-indigo-700' },
    { num: '03', title: 'Performance Lab', desc: 'Testing, CRO, reporting.', gradient: 'from-fuchsia-300 to-purple-800' },
    { num: '04', title: 'Brand Systems', desc: 'Design language & assets.', gradient: 'from-blue-300 to-violet-700' },
  ];

  return (
    <section id="simp-pillars" className="relative py-16 md:py-32 px-4 sm:px-6 bg-[#050212] overflow-hidden">
      <div className="absolute inset-[-40%] bg-[radial-gradient(circle_at_10%_0%,rgba(139,92,246,0.1),transparent_60%),radial-gradient(circle_at_90%_100%,rgba(167,139,250,0.05),transparent_60%)] opacity-90 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12 md:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/50 text-[10px] tracking-[0.2em] uppercase text-violet-300 mb-6">
          <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.9)]"></div>
          Strategic Pillars
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-6">
          The <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">SIMP Media</span> Growth Engine
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Four disciplined capabilities orbiting a single objective: predictable, compounding performance for your brand.
        </p>
      </div>

      {/* Desktop Orbital View */}
      <div className="hidden lg:flex relative max-w-2xl mx-auto aspect-square items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-slate-800/50 bg-[radial-gradient(circle,rgba(15,2,28,0.9)_0%,rgba(15,2,28,0.4)_45%,transparent_70%)]"></div>
        
        <div className="absolute inset-[24%] rounded-full flex items-center justify-center z-20">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_20%_0%,rgba(139,92,246,0.45),#050212)] border border-slate-700 shadow-2xl"></div>
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <div className="relative w-20 h-20 mb-2">
              <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(139,92,246,0.9)] animate-core-pulse"></div>
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Outcome Engine</h4>
            <p className="text-[9px] text-slate-400 leading-relaxed max-w-[120px] mx-auto">AI, creative and performance locked into one loop.</p>
          </div>
        </div>

        <div className="absolute inset-0 animate-spin-slow">
          {pillars.map((p, idx) => (
            <div 
              key={idx} 
              className={`absolute group`}
              style={{
                top: idx === 0 ? '0%' : idx === 1 ? '50%' : idx === 2 ? '100%' : '50%',
                left: idx === 0 ? '50%' : idx === 1 ? '100%' : idx === 2 ? '50%' : '0%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className={`w-32 h-32 xl:w-40 xl:h-40 rounded-full bg-gradient-to-br ${p.gradient} border border-slate-900 shadow-xl backdrop-blur-xl flex flex-col items-center justify-center text-center p-4 transition-transform group-hover:scale-110 animate-[simp-spin_26s_linear_infinite_reverse]`}>
                 <span className="absolute top-2 px-2 py-0.5 bg-slate-950/80 border border-white/20 rounded-full text-[9px] font-bold">0{idx + 1}</span>
                 <div className="text-xs font-bold text-white mb-1">{p.title}</div>
                 <div className="text-[9px] text-white/80">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Grid View */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10 max-w-5xl mx-auto">
        {pillars.map((p, idx) => (
          <div key={idx} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl flex items-center gap-6 group hover:bg-slate-900 transition-colors">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.gradient} flex-shrink-0 flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-105 transition-transform`}>
              {p.num}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-snug">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategicPillars;
