
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [liveROAS, setLiveROAS] = useState(4.8);

  const phrases = [
    "AI-native marketing systems",
    "full-funnel growth engines",
    "UGC + AI performance loops",
    "automation-driven brand ops"
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveROAS(prev => {
        const diff = (Math.random() - 0.5) * 0.1;
        return parseFloat((prev + diff).toFixed(1));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleType = () => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    if (isDeleting) {
      setText(fullText.substring(0, text.length - 1));
      setTypingSpeed(50);
    } else {
      setText(fullText.substring(0, text.length + 1));
      setTypingSpeed(100);
    }

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500);
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-48 md:pb-40 overflow-hidden bg-[radial-gradient(circle_at_top,#1e1140_0%,transparent_60%),radial-gradient(circle_at_bottom,#050212_0%,transparent_55%)]">
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[200%] rotate-[30deg] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/5 mb-6 md:mb-8 mx-auto lg:mx-0">
            <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.8)] animate-pulse"></div>
            <span className="text-[10px] md:text-sm font-medium text-purple-300 typewriter-cursor pr-1">{text}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 md:mb-8 tracking-tighter text-white">
            We build <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">next generation brands with AI</span> <br className="hidden md:block" />
            powered growth engines.
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0">
            From automated UGC to deep-funnel optimization — we build the systems that help brands scale faster with AI, data, and creativity.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a href="#cta" className="bg-gradient-to-br from-violet-600 to-indigo-700 px-6 sm:px-10 py-3.5 sm:py-5 rounded-2xl text-sm sm:text-lg font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all transform hover:-translate-y-1 text-center text-white">
Let’s build your Brand 
            </a>
            <a href="#simp-system" className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 sm:px-10 py-3.5 sm:py-5 rounded-2xl text-sm sm:text-lg font-bold hover:bg-white/10 transition-all text-center text-white">
Explore our Services 
            </a>
          </div>
        </div>

        <div className="relative flex justify-center perspective-2000 mt-10 lg:mt-0">
          <div className="relative w-full max-w-[480px] aspect-[1/1.15] rounded-[2.5rem] p-1.5 bg-gradient-to-br from-slate-700 to-slate-900 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] transform lg:rotate-y-[-8deg] lg:rotate-x-[5deg] animate-float">
            <div className="w-full h-full bg-[#0a0f1d] rounded-[2.3rem] overflow-hidden flex flex-col border border-white/5 shadow-inner relative">
              
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.3rem]">
                <div className="w-full h-24 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-scan"></div>
              </div>

              <div className="h-10 bg-slate-900/90 border-b border-white/5 flex items-center px-5 gap-3 shrink-0 relative z-10">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="ml-auto flex items-center gap-4">
                  <div className="h-1.5 w-16 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-600 w-1/2 animate-[pulse_2s_infinite]"></div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8 flex-1 flex flex-col gap-5 sm:gap-8 overflow-hidden relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-3 sm:mb-4">
                      <div className="relative w-1.5 h-1.5">
                        <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping-slow"></div>
                        <div className="absolute inset-0 bg-purple-400 rounded-full"></div>
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-purple-300 font-bold uppercase tracking-widest whitespace-nowrap">Campaign: Processing</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl text-white font-bold mb-1 tracking-tight">Revenue Impact</h4>
                    <p className="text-[10px] sm:text-[12px] text-slate-500 max-w-[200px] sm:max-w-[280px]">AI-optimized UGC campaigns driving 24/7 conversion cycles.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase mb-1">Growth</div>
                    <div className="text-xl sm:text-3xl font-black text-violet-400">+418%</div>
                  </div>
                </div>

                <div className="relative h-24 sm:h-36 w-full mt-2 group/chart">
                   <div className="absolute inset-0 flex flex-col justify-between py-2">
                     <div className="w-full h-px bg-white/5"></div>
                     <div className="w-full h-px bg-white/5"></div>
                     <div className="w-full h-px bg-white/5"></div>
                   </div>
                   
                   <svg viewBox="0 0 400 120" className="w-full h-full relative z-10 overflow-visible">
                      <defs>
                        <linearGradient id="grad-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="grad-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      
                      <path 
                        d="M0,110 Q40,105 80,85 T160,75 T240,45 T320,35 T400,10" 
                        fill="none" 
                        stroke="rgba(255,255,255,0.05)" 
                        strokeWidth="8" 
                        strokeLinecap="round"
                      />

                      <path 
                        d="M0,110 Q40,105 80,85 T160,75 T240,45 T320,35 T400,10 V120 H0 Z" 
                        fill="url(#grad-fill)"
                        className="opacity-40"
                      />

                      <path 
                        d="M0,110 Q40,105 80,85 T160,75 T240,45 T320,35 T400,10" 
                        fill="none" 
                        stroke="url(#grad-stroke)" 
                        strokeWidth="5" 
                        strokeLinecap="round"
                        style={{ strokeDasharray: 500, strokeDashoffset: 500 }}
                        className="animate-[dash_4s_ease-out_infinite]"
                      />

                      <circle cx="80" cy="85" r="3" fill="#a78bfa" className="animate-pulse shadow-[0_0_10px_#a78bfa]" />
                      <circle cx="240" cy="45" r="3" fill="#818cf8" className="animate-pulse shadow-[0_0_10px_#818cf8]" style={{animationDelay: '1s'}} />
                      
                      <g className="animate-float">
                        <circle cx="400" cy="10" r="6" fill="#818cf8" className="shadow-[0_0_15px_#818cf8]" />
                        <circle cx="400" cy="10" r="10" stroke="#818cf8" strokeWidth="1" fill="none" className="animate-ping" />
                      </g>
                   </svg>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-white/5 group hover:border-white/20 transition-all overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-purple-400/5 blur-xl group-hover:bg-purple-400/20 transition-all"></div>
                    <div className="text-2xl sm:text-3xl font-black text-purple-400">{liveROAS}x</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">UGC ROAS</div>
                  </div>
                  <div className="bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-white/5 group hover:border-white/20 transition-all overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-indigo-400/5 blur-xl group-hover:bg-indigo-400/20 transition-all"></div>
                    <div className="text-2xl sm:text-3xl font-black text-indigo-400">32ms</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Latent Sync</div>
                  </div>
                </div>

                <div className="mt-auto space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-widest">Model Training</span>
                       <span className="text-[9px] sm:text-[10px] text-purple-400 font-bold">96% Complete</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden relative">
                       <div className="h-full bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 w-[96%] rounded-full relative">
                          <div className="absolute inset-0 bg-white/20 animate-[pulse_1s_infinite]"></div>
                       </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                     <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-purple-400/40 w-full animate-pulse"></div>
                     </div>
                     <div className="flex-1 h-1 bg-white/5 rounded-full"></div>
                     <div className="flex-1 h-1 bg-indigo-500/40 rounded-full animate-pulse"></div>
                     <div className="flex-1 h-1 bg-white/5 rounded-full"></div>
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

export default Hero;
