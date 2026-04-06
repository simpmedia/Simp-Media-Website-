
import React, { useState } from 'react';

const GrowthSystem: React.FC = () => {
  const [clickedId, setClickedId] = useState<string | null>(null);

  const handleIconClick = (id: string) => {
    setClickedId(id);
    setTimeout(() => setClickedId(null), 300);
  };

  const cards = [
    {
      title: "UGDex — UGC Curation",
      desc: "Transform real voices into your brand's storytellers. Authenticity at scale.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12">
          <path d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
        </svg>
      ),
      color: "rgba(167,139,250,0.9)", // Matched violet
      glowColor: "from-violet-500/50",
      id: "ugdex"
    },
    {
      title: "AutoDex — Lab",
      desc: "Build workflows and bots that run your growth cycles automatically.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12">
          <path d="M13,2L3,14H12V22L22,10H13V2Z" />
        </svg>
      ),
      color: "rgba(139,92,246,0.9)",
      glowColor: "from-purple-500/50",
      id: "autodex"
    },
    {
      title: "WebDex — Performance",
      desc: "Adaptive, high-converting, and deeply AI-integrated web systems.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12">
          <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2L12,2ZM11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16C9,17.1 9.9,18 11,18V19.93ZM17.9,17.4C17.61,16.59 16.89,16 16,16H15V13C15,12.45 14.55,12 14,12H8V10H10C10.55,10 11,9.55 11,9V7H13C14.1,7 15,6.1 15,5V4.59C17.93,5.78 20,8.65 20,12C20,14.08 19.2,15.97 17.9,17.4Z" />
        </svg>
      ),
      color: "rgba(167,139,250,0.9)",
      glowColor: "from-indigo-400/50",
      id: "webdex"
    },
    {
      title: "AdDex — Analytics",
      desc: "Paid media engineered with predictive modeling and real-time creative sync.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12">
          <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3ZM9,17H7V10H9V17ZM13,17H11V7H13V17ZM17,17H15V13H17V17Z" />
        </svg>
      ),
      color: "rgba(255,255,255,0.9)",
      glowColor: "from-white/30",
      id: "addex"
    }
  ];

  return (
    <section id="simp-system" className="bg-[#050212] py-20 md:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12 md:mb-20 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-[10px] font-bold text-indigo-300 mb-6 uppercase tracking-widest mx-auto lg:mx-0">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#8b5cf6]"></div>
            The SIMP System
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient inline-block">
            Architecting Exponential Growth
          </h2>
          <p className="mt-6 md:mt-8 text-slate-300 text-base md:text-xl leading-relaxed">
            We don't just provide marketing. We build ecosystems that think, adapt, and scale automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="group cursor-pointer"
              onClick={() => handleIconClick(card.id)}
            >
              <div className="bg-[#0a0f1d] h-full rounded-[2.5rem] border border-white/5 p-5 transition-all duration-500 transform group-hover:-translate-y-4 group-hover:border-white/10 shadow-2xl relative overflow-hidden flex flex-col">
                
                <div className="relative aspect-square sm:aspect-auto sm:h-64 rounded-[2rem] bg-slate-950/80 border border-white/5 overflow-hidden flex items-center justify-center shrink-0">
                  <div className={`absolute bottom-[-20%] inset-x-[10%] h-[60%] bg-gradient-to-t ${card.glowColor} to-transparent opacity-20 blur-3xl transition-all duration-700 group-hover:opacity-60 group-hover:scale-110`}></div>
                  <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/5 transition-transform duration-1000 group-hover:scale-110"></div>
                  
                  <div 
                    className={`w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20 flex items-center justify-center relative bg-gradient-to-br from-slate-900 to-slate-950 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] transition-all duration-500 ${clickedId === card.id ? 'scale-90 opacity-80' : 'group-hover:scale-110'}`}
                    style={{ 
                      boxShadow: `0 0 40px ${card.color}22, 0 10px 50px rgba(0,0,0,0.5)`,
                      color: card.color
                    }}
                  >
                    <div className="relative drop-shadow-[0_0_15px_currentColor]">
                      {card.icon}
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 md:pt-8 px-2 flex flex-col flex-1">
                  <h3 className="text-white text-lg md:text-xl font-bold mb-3 tracking-tight group-hover:text-white transition-colors">{card.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{card.desc}</p>
                  
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-violet-400 opacity-70 group-hover:opacity-100 transition-opacity mt-auto">
                    Access Intelligence 
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </div>
                </div>

                <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${card.glowColor} to-transparent blur-2xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthSystem;
