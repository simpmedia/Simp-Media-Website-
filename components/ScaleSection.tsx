
import React from 'react';

const ScaleSection: React.FC = () => {
  return (
    <section className="bg-[#050212] py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-10 md:mb-16 tracking-tighter leading-tight text-center lg:text-left">
          Scale without<br className="hidden md:block" />switching tools
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="relative group p-6 sm:p-8 bg-slate-900/50 rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col">
             <div className="absolute -left-16 -bottom-20 w-80 h-72 bg-violet-600/20 blur-[80px] rounded-full pointer-events-none"></div>
             
             <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-1">Analytics & insights</h3>
                <p className="text-slate-400 text-sm mb-4">Track traffic, measure performance, and monitor conversions.</p>
                <a href="#" className="text-white text-sm font-bold hover:underline mb-8 inline-block">Learn more →</a>

                <div className="bg-black border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl mt-auto overflow-hidden">
                   <div className="text-xs sm:text-sm font-bold text-slate-200 mb-6">Overview</div>
                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-b border-slate-900 pb-6 mb-6">
                      <div>
                        <div className="flex items-center gap-1.5 text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">
                          Live Visitors <div className="w-1 h-1 rounded-full bg-violet-500 shadow-[0_0_8px_#8b5cf6]"></div>
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-white">416</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Unique</div>
                        <div className="text-2xl sm:text-3xl font-black text-white">1.7M</div>
                      </div>
                      <div className="hidden sm:block">
                        <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Pageviews</div>
                        <div className="text-2xl sm:text-3xl font-black text-white">3.2M</div>
                      </div>
                   </div>

                   <div className="h-40 sm:h-44 relative bg-slate-950/50 rounded-2xl overflow-hidden border border-slate-900/50">
                      <svg viewBox="0 0 420 180" className="w-full h-full">
                        <polyline points="0,150 70,135 140,120 210,135 280,110 350,130 420,118" fill="none" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" />
                        <polyline points="0,165 70,155 140,145 210,150 280,140 350,158 420,150" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeOpacity="0.8" strokeLinecap="round" />
                      </svg>
                   </div>
                </div>
             </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
             <div className="relative group p-6 sm:p-8 bg-slate-900/50 rounded-[2.5rem] border border-white/5 overflow-hidden flex-1 flex flex-col">
                <div className="absolute -right-16 -top-20 w-80 h-72 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none"></div>
                
                <h3 className="text-lg font-bold text-white mb-1">A/B Testing & optimization</h3>
                <p className="text-slate-400 text-sm mb-6">Built-in growth insights for better performance.</p>
                <a href="#" className="text-white text-sm font-bold hover:underline mb-8 inline-block">Learn more →</a>

                <div className="bg-black border border-slate-800 rounded-3xl overflow-hidden shadow-2xl mt-auto">
                   <div className="bg-slate-900/50 h-8 flex items-center px-4 gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-violet-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                   </div>
                   <div className="flex h-40 sm:h-48">
                      <div className="w-1/3 border-r border-slate-900 p-4 space-y-2">
                         <div className="text-[9px] font-bold text-white mb-2 uppercase">Pages</div>
                         <div className="bg-violet-600/20 text-violet-400 text-[8px] font-bold px-2 py-1 rounded-md">Variant A</div>
                      </div>
                      <div className="flex-1 p-6 flex items-end gap-2 sm:gap-3 justify-center">
                         <div className="w-3 sm:w-4 bg-violet-500 rounded-t h-16"></div>
                         <div className="w-3 sm:w-4 bg-purple-600 rounded-t h-28"></div>
                         <div className="w-3 sm:w-4 bg-indigo-500 rounded-t h-36"></div>
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

export default ScaleSection;
