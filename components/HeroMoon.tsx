
import React from 'react';
import { openCalendly } from './openCalendly';

const HeroMoon: React.FC = () => {
  return (
    <section className="relative bg-[#050212] py-32 md:py-48 px-6 overflow-hidden text-center border-t border-white/5">
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Nebula Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.12)_0%,transparent_70%)] blur-[120px]"></div>
        
        {/* Star Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: `radial-gradient(circle, white 0.5px, transparent 0.5px)`, backgroundSize: '50px 50px' }}></div>
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '120px 120px', backgroundPosition: '30px 30px' }}></div>

        {/* The Rising Moon */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full animate-[moon-rise_25s_ease-out_forwards] bottom-[-150px] md:bottom-[-300px]">
          {/* Main Moon Body */}
          <div className="absolute inset-0 rounded-full bg-slate-300 shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.5),0_0_80px_rgba(167,139,250,0.15)] overflow-hidden">
             {/* Crater textures */}
             <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-black/10 rounded-full blur-md"></div>
             <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-black/10 rounded-full blur-lg"></div>
             <div className="absolute bottom-1/4 left-1/2 w-8 h-8 bg-black/10 rounded-full blur-sm"></div>
             {/* Moon Glow Mask */}
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/20 to-white/40"></div>
          </div>
          {/* Moon External Atmosphere/Glow */}
          <div className="absolute inset-[-40px] rounded-full bg-purple-500/5 blur-[40px]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-purple-300 mb-8 uppercase tracking-[0.2em] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
          The Future of Work
        </div>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-12 leading-[1.1] tracking-tighter">
          Turn Your Brand Into<br className="hidden md:block" />
           a Growth System that is <br className="hidden md:block" />
           Built to  <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">Perform for You.</span>
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
        <button
  onClick={() =>
    window.open(
      "https://wa.me/9625052551?text=Hi%20I%20want%20to%20get%20started%20for%20free",
      "_blank",
      "noopener,noreferrer"
    )
  }
  className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-bold text-base hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(139,92,246,0.2)]"
>
  Get Started for free
</button>

          <button onClick={() => openCalendly()} className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white rounded-full font-bold text-base hover:bg-white/5 transition-all flex items-center justify-center gap-2 group backdrop-blur-sm">
            Book a demo <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
        
        {/* Decorative divider */}
        <div className="mt-24 h-px w-full max-w-sm mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes moon-rise {
          0% { 
            transform: translate(-50%, 100%) scale(0.8); 
            opacity: 0;
          }
          100% { 
            transform: translate(-50%, 0%) scale(1); 
            opacity: 1;
          }
        }
      `}} />
    </section>
  );
};

export default HeroMoon;
