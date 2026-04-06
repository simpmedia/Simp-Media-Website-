
import React from 'react';
import { openCalendly } from './openCalendly';

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="py-24 px-6 bg-[#050212]">
       <div className="max-w-6xl mx-auto">
          <div className="relative p-12 md:p-20 bg-slate-900/50 rounded-[40px] border border-white/10 overflow-hidden text-center backdrop-blur-xl">
            <div className="absolute top-[-100px] right-[-100px] w-80 h-80 bg-violet-500/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-[-150px] left-[-100px] w-96 h-96 bg-purple-500/10 rounded-full blur-[80px]"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 border border-slate-800 text-xs font-bold text-violet-300 mb-8">
                 <div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_8px_#8b5cf6]"></div>
                 Ready to Transform?
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
                Let's Put <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">AI to Work</span> for Your Brand
              </h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                The future belongs to brands that move faster and think smarter. We build ecosystems that think, adapt, and perform.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-violet-500/20 transition-all">
                   <div className="text-2xl font-black text-violet-500 mb-1">42%</div>
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg. Growth</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-violet-500/20 transition-all">
                   <div className="text-2xl font-black text-purple-400 mb-1">98%</div>
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Retention</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-violet-500/20 transition-all">
                   <div className="text-2xl font-black text-indigo-400 mb-1">4.9/5</div>
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg. Rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button
  onClick={() => openCalendly()}
  className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform text-white"
>
  Book Free Strategy Call →
</button>
                <a href="#services" className="w-full sm:w-auto px-10 py-4 border border-slate-700 rounded-full font-bold hover:bg-slate-800 transition-colors text-white">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
       </div>
    </section>
  );
};

export default CtaSection;
