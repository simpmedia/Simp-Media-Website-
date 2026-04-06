
import React from 'react';
import { openCalendly } from './openCalendly';

const Testimonials: React.FC = () => {
  const testimonialsLeft = [
    { 
      name: "Santhiroo", 
      handle: "@santhiroo", 
      text: "This tool completely changed the way we manage clients. It keeps everything organized and saves us hours every week.", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      color: "border-violet-500/50" 
    },
    { 
      name: "Oscar Olsen Sendrail", 
      handle: "UI Designer", 
      text: "This tool really kills the competition and saves you a lot of time. You don't need three different platforms when you have this.", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      color: "border-purple-500/50" 
    },
    { 
      name: "Lionel Selio", 
      handle: "@leo_at_zapier", 
      text: "I've given this a try and wow, what an easy client portal. Minimal yet powerful — it's the perfect way for us to onboard clients.", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      color: "border-indigo-500/50" 
    },
  ];

  const testimonialsRight = [
    { 
      name: "Seraphim", 
      handle: "Founder of JoyRive", 
      text: "Game changer. It keeps all our client work in one place so the team can move faster without chasing details.", 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      color: "border-violet-500/50" 
    },
    { 
      name: "David Kimacio", 
      handle: "@dkimcala", 
      text: "It simplifies everything about managing projects. No more jumping between tools — we can see the whole pipeline at a glance.", 
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
      color: "border-fuchsia-500/50" 
    },
    { 
      name: "Swati Pindri", 
      handle: "Product Lead", 
      text: "Great tool. Clean, fast, and surprisingly flexible. Our team finally has one place where everyone can stay aligned.", 
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
      color: "border-purple-500/50" 
    },
  ];

  return (
    <section className="bg-[#050212] py-32 px-6 overflow-hidden">
       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          <div className="lg:w-[45%] lg:sticky lg:top-32">
             <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-10 tracking-tight leading-[1.1]">
               We succeed if you do.
             </h2>
             
             <ul className="space-y-6 mb-12">
               {[
                 'Direct access to fast support, every step of the way.',
                 'Personalized 1-on-1 onboarding by our founder.',
                 'No hidden fees, no upsells, no BS.',
                 'Dedicated support when you need it.'
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start gap-4 text-slate-200">
                    <div className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-[0_0_12px_#8b5cf6]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-lg font-medium tracking-tight leading-snug">{item}</span>
                 </li>
               ))}
             </ul>

             <div className="flex flex-wrap gap-4">
               <button className="bg-white text-black px-8 py-3.5 rounded-full font-bold text-sm hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-xl">
                 Get started now
               </button>
               <button
  onClick={() => openCalendly()}
  className="border border-slate-700 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white/5 transition-all flex items-center gap-2"
>
  Book a strategy call <span className="text-lg">→</span>
</button>

             </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="space-y-6">
              {testimonialsLeft.map((t, i) => (
                <div key={i} className={`group bg-[#0a0f1d] p-8 rounded-[2rem] border border-white/5 shadow-2xl hover:border-violet-500/20 transition-all duration-500`}>
                  <p className="text-base text-slate-300 leading-relaxed mb-8 font-medium">
                    “{t.text}”
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/10 group-hover:border-violet-500/30 transition-all" />
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">{t.handle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 sm:mt-12">
              {testimonialsRight.map((t, i) => (
                <div key={i} className={`group bg-[#0a0f1d] p-8 rounded-[2rem] border border-white/5 shadow-2xl hover:border-violet-500/20 transition-all duration-500`}>
                  <p className="text-base text-slate-300 leading-relaxed mb-8 font-medium">
                    “{t.text}”
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/10 group-hover:border-violet-500/30 transition-all" />
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">{t.handle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
       </div>
    </section>
  );
};

export default Testimonials;
