
import React, { useState, useEffect, useRef } from 'react';

const ProcessImpact: React.FC = () => {
  const [metrics, setMetrics] = useState({ eff: 0, roas: 0, ugc: 0, cr: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateMetrics();
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateMetrics = () => {
    const targets = { eff: 78, roas: 3.2, ugc: 142, cr: 65 };
    const duration = 2000;
    const start = Date.now();

    const update = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / duration, 1);
      
      setMetrics({
        eff: Math.floor(progress * targets.eff),
        roas: Number((progress * targets.roas).toFixed(1)),
        ugc: Math.floor(progress * targets.ugc),
        cr: Math.floor(progress * targets.cr)
      });

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  return (
    <section id="process" ref={sectionRef} className="py-16 md:py-24 px-4 sm:px-6 bg-[#050212] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-violet-300 mb-6 uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]"></div>
            Our Process
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            The <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">SIMP</span> Growth Formula
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">Growth isn’t random — it’s engineered. Our process blends AI automation, human creativity, and data precision.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            {[
              { id: '01', title: 'Discovery & Audit', color: 'bg-violet-500/20 text-violet-400', desc: 'We map your systems and hidden opportunities to identify where AI delivers the biggest lift.' },
              { id: '02', title: 'AI-Powered Strategy', color: 'bg-indigo-500/20 text-indigo-400', desc: 'A hybrid human + AI engine builds a roadmap: content, funnels, and data-rooted optimizations.' },
              { id: '03', title: 'Execution', color: 'bg-purple-500/20 text-purple-400', desc: 'Content, tech, and marketing operate in one system — each amplifying the other.' },
              { id: '04', title: 'Optimization & Scale', color: 'bg-fuchsia-500/20 text-fuchsia-400', desc: 'AI-driven learning loops improve performance and evolve your system monthly.' },
            ].map(step => (
              <div key={step.id} className="group bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl backdrop-blur-md transition-all hover:-translate-y-1 hover:border-slate-700">
                <div className="flex gap-4 md:gap-6">
                  <div className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-xl flex items-center justify-center font-bold text-base md:text-lg ${step.color}`}>{step.id}</div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 order-1 lg:order-2">
             <div className="bg-slate-900/80 border border-white/10 rounded-[22px] overflow-hidden shadow-2xl backdrop-blur-xl">
               <div className="p-5 md:p-6 border-b border-white/5 flex justify-between items-center">
                  <div>
                    <div className="text-white font-bold text-base md:text-lg">Impact Dashboard</div>
                    <div className="text-slate-500 text-[10px] md:text-xs">Live growth performance indicators</div>
                  </div>
                  <div className="px-2.5 py-1 bg-violet-500/10 rounded-full border border-violet-500/20 text-[9px] md:text-[10px] text-violet-400 font-bold flex items-center gap-1.5 md:gap-2">
                    <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse"></span>
                    LIVE
                  </div>
               </div>

               <div className="p-6 md:p-8">
                  <div className="h-32 sm:h-44 relative mb-10 md:mb-12">
                    <svg viewBox="0 0 400 140" className="w-full h-full overflow-visible">
                      <path 
                        className={`transition-all duration-[2000ms] ease-in-out`}
                        d="M0,100 C50,90 100,60 150,50 C200,40 250,30 300,20 C350,10 400,5 400,5" 
                        fill="none" 
                        stroke="#8b5cf6" 
                        strokeWidth="3" 
                        strokeDasharray="1000"
                        strokeDashoffset={hasAnimated ? 0 : 1000}
                      />
                      <path 
                        className={`transition-all duration-[2000ms] delay-300 ease-in-out`}
                        d="M0,120 C50,100 100,80 150,60 C200,40 250,70 300,50 C350,30 400,40 400,40" 
                        fill="none" 
                        stroke="#a855f7" 
                        strokeWidth="3"
                        strokeDasharray="1000"
                        strokeDashoffset={hasAnimated ? 0 : 1000}
                      />
                    </svg>
                    <div className="absolute -bottom-6 left-0 w-full flex justify-between px-2 md:px-4 text-[8px] md:text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      <span>Start</span>
                      <span>Month 3</span>
                      <span>Month 6</span>
                      <span>Now</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="p-3 md:p-4 bg-slate-950/40 border border-white/5 rounded-2xl">
                       <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2 text-[10px] md:text-xs text-slate-500">
                         <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-violet-500"></div>
                         Efficiency
                       </div>
                       <div className="text-xl md:text-3xl font-black text-white">{metrics.eff}%</div>
                    </div>
                    <div className="p-3 md:p-4 bg-slate-950/40 border border-white/5 rounded-2xl">
                       <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2 text-[10px] md:text-xs text-slate-500">
                         <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500"></div>
                         ROAS
                       </div>
                       <div className="text-xl md:text-3xl font-black text-white">{metrics.roas}x</div>
                    </div>
                    <div className="p-3 md:p-4 bg-slate-950/40 border border-white/5 rounded-2xl">
                       <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2 text-[10px] md:text-xs text-slate-500">
                         <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-indigo-500"></div>
                         UGC
                       </div>
                       <div className="text-xl md:text-3xl font-black text-white">{metrics.ugc}%</div>
                    </div>
                    <div className="p-3 md:p-4 bg-slate-950/40 border border-white/5 rounded-2xl">
                       <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2 text-[10px] md:text-xs text-slate-500">
                         <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-fuchsia-500"></div>
                         CVR
                       </div>
                       <div className="text-xl md:text-3xl font-black text-white">{metrics.cr}%</div>
                    </div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessImpact;
