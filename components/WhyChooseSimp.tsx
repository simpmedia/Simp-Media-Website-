
import React from 'react';

const WhyChooseSimp: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "AI at the Core — Not an Add-on",
      desc: "We don't just use AI for the sake of it — we build with it. Every campaign, strategy, and workflow adapts in real time to human behavior.",
      icon: "🤖",
      color: "bg-purple-500/10"
    },
    {
      id: 2,
      title: "End-to-End Execution",
      desc: "Why juggle five vendors when you can have one ecosystem? We handle everything — from concept to code — so your brand speaks one language.",
      icon: "⚡",
      color: "bg-orange-500/10"
    },
    {
      id: 3,
      title: "Human × Machine Creativity",
      desc: "Our creators think emotionally. Our AI refines logically. Together, they produce work that doesn't just impress — it impacts.",
      icon: "💡",
      color: "bg-yellow-500/10"
    },
    {
      id: 4,
      title: "Performance Engineering",
      desc: "Data isn't just numbers; it's the blueprint for scale. We engineer every touchpoint for maximum ROI and long-term brand equity.",
      icon: "📈",
      color: "bg-blue-500/10"
    }
  ];

  return (
    <section className="bg-[#02010a] py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(46,16,101,0.4)_0%,rgba(2,1,10,1)_80%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-bold text-slate-300 mb-6 md:mb-8 uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]"></div>
            Our Edge
          </div>
          <h2 className="text-3xl md:text-7xl font-extrabold text-white mb-6 md:mb-8 tracking-tighter">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">SIMP Media</span>
          </h2>
          <p className="text-slate-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
Everything we build is designed around one outcome measurable growth.


          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[320px] md:max-w-md aspect-square flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-white/5 bg-slate-900/10 backdrop-blur-sm"></div>
              <div className="absolute inset-[15%] rounded-full border border-dashed border-white/10"></div>
              
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_15px_#a78bfa]"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_12px_#6366f1]"></div>
              </div>

              <div className="absolute inset-[15%] animate-spin-fast">
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_15px_#8b5cf6]"></div>
              </div>

              <div className="relative z-20 flex flex-col items-center justify-center text-center p-6 md:p-8">
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-purple-500 shadow-[0_0_25px_#a855f7] mb-4 md:mb-6 animate-pulse"></div>
                <h4 className="text-white font-bold text-xl md:text-2xl mb-2 md:mb-3 tracking-tight">Intelligence Loop</h4>
                <div className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] max-w-[150px] md:max-w-[180px] leading-relaxed">
                  Create <span className="text-purple-500">→</span> Automate <br />
                  Perform <span className="text-purple-500">→</span> Learn <br />
                  <span className="text-purple-500">→</span> Scale
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-2">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="group bg-[#0a0f1d]/80 border border-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[32px] hover:border-white/10 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${feature.color} flex items-center justify-center text-xl mb-6 md:mb-8 group-hover:scale-110 transition-transform relative z-10`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 tracking-tight relative z-10 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed relative z-10">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSimp;
