
import React, { useState } from 'react';

type ServiceId = 'ugdex' | 'autodex' | 'webdex' | 'addex';

interface Config {
  pill: string;
  label: string;
  heading: string;
  sub: string;
  kpi: string;
  kpiLabel: string;
  status: string;
  color: string;
  bg: string;
  delivered: string;
  graphPoints: string;

  divisionTitle: string;
  description: string;
  steps: string[];
  quote: string;
}

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ServiceId>('ugdex');

 const configs: Record<ServiceId, Config> = {
    ugdex: {
      pill: "UGDex · Active",
      label: "UGDex",
      heading: "Creator Performance",
      sub: "32 active creators · 147 assets",
      kpi: "+68%",
      kpiLabel: "UGC ROAS",
      status: "Optimizing",
      color: "#a78bfa",
      bg: "rgba(167,139,250,0.12)",
      delivered: "248+",
      graphPoints: "M0,60 L20,55 L40,65 L60,40 L80,30 L100,10",

      divisionTitle: "UGDEX — UGC Growth Division",
      description: "Content systems that turn attention into conversions.",
      steps: [
        "Deep analysis of audience behavior, content patterns, and conversion triggers.",
        "UGC strategy mapping with rapid testing of hooks, formats, and narratives.",
        "Full-scale deployment of creator-led content across organic and paid channels."
      ],
      quote:
        "We don’t just create content; we build repeatable UGC systems that scale trust and demand."
    },

    webdex: {
      pill: "WebDex · Active",
      label: "WebDex",
      heading: "E-comm Performance",
      sub: "1.7s avg load · 3.1% CVR",
      kpi: "+54%",
      kpiLabel: "Completion Rate",
      status: "High Flow",
      color: "#a855f7",
      bg: "rgba(168,85,247,0.15)",
      delivered: "94+",
      graphPoints: "M0,70 L20,60 L40,40 L60,30 L80,25 L100,5",

      divisionTitle: "WEBDEX — Website Growth Division",
      description: "Web experiences engineered to convert and compound.",
      steps: [
        "Audit of user journeys, drop-offs, and on-site conversion friction points.",
        "Page-level experimentation across copy, layout, and behavioral triggers.",
        "Conversion-optimized deployment built for speed, clarity, and scale."
      ],
      quote:
        "Every page is designed to guide attention, reduce friction, and increase intent."
    },

    addex: {
      pill: "AdDex · Active",
      label: "AdDex",
      heading: "Paid Media Analysis",
      sub: "9 active campaigns · 2.8x ROAS",
      kpi: "+89%",
      kpiLabel: "Engagement",
      status: "Scaling",
      color: "#c084fc",
      bg: "rgba(192,132,252,0.14)",
      delivered: "312+",
      graphPoints: "M0,50 L20,55 L40,30 L60,45 L80,10 L100,0",

      divisionTitle: "ADDEX — Performance Growth Division",
      description: "Paid media systems built for predictable scale.",
      steps: [
        "Deep analysis of funnel economics, creatives, and audience performance data.",
        "Creative and audience testing frameworks for efficient scale discovery.",
        "Performance-led deployment across platforms with continuous optimization loops."
      ],
      quote:
        "We don’t chase ROAS spikes; we build stable systems that scale profitably."
    },

    autodex: {
      pill: "AutoDex · Active",
      label: "AutoDex",
      heading: "Efficiency Dashboard",
      sub: "24 live automations · 4.7k tasks",
      kpi: "-42%",
      kpiLabel: "Response Time",
      status: "Flowing",
      color: "#8b5cf6",
      bg: "rgba(139,92,246,0.12)",
      delivered: "132+",
      graphPoints: "M0,65 L20,60 L40,50 L60,55 L80,20 L100,15",

      divisionTitle: "AUTODEX — Automation Growth Division",
      description: "Operational systems that remove friction and unlock scale.",
      steps: [
        "Mapping of internal workflows, handoffs, and operational bottlenecks.",
        "Automation design across CRM, marketing, and reporting systems.",
        "Full-stack deployment of workflows that reduce effort and increase output."
      ],
      quote:
        "Automation isn’t about replacing people—it’s about removing drag from growth."
    }
  };

  const current = configs[activeTab];

  return (
    <section id="services" className="py-24 px-6 bg-[#050212]">
       <div className="max-w-7xl mx-auto">
         <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 lg:gap-12 mb-12 text-center lg:text-left">
           <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-xs font-bold text-violet-300 mb-6 lg:mb-4 mx-auto lg:mx-0">
                <div className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
                Our Services
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Growth Services, <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">Engineered for Scale</span>
              </h2>
              <p className="mt-4 text-slate-400 text-sm md:text-base">Every service is a building block of intelligence. Together, they create self-learning, self-selling systems.</p>
           </div>
           <a href="#cta" className="w-full sm:w-auto text-center bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3.5 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-purple-500/20 text-white">
             Build My Engine →
           </a>
         </div>

       <section id="services" className="py-24 px-6 bg-[#050212]">
      <div className="max-w-7xl mx-auto">

        {/* Tabs */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
          {(Object.keys(configs) as ServiceId[]).map(id => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl text-sm font-bold border transition-all duration-300 ${
                activeTab === id
                  ? 'bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/30 scale-105'
                  : 'bg-slate-900/50 border-slate-800 text-slate-500 hover:text-slate-300'
              }`}
            >
              {id.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-slate-900/40 rounded-[40px] border border-white/5 overflow-hidden backdrop-blur-xl shadow-2xl">

          {/* LEFT SIDE */}
          <div className="lg:col-span-7 p-14 border-r border-slate-800">

            <h3 className="text-2xl font-bold text-white mb-2">
              {current.divisionTitle}
            </h3>

            <p className="text-slate-400 mb-10">
              {current.description}
            </p>

            <ul className="space-y-6 mb-12">
              {current.steps.map((text, idx) => (
                <li key={idx} className="flex gap-4 text-slate-300">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ color: current.color }}
                  >
                    0{idx + 1}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/50">
              <p className="italic text-slate-400">
                “{current.quote}”
              </p>
            </div>
          </div>

          {/* RIGHT SIDE – ORIGINAL UI */}
          <div className="lg:col-span-5 p-14 flex items-center justify-center bg-slate-950/20">
            <div className="w-full max-w-sm">
              <div className="rounded-[2rem] bg-[#0a0f1d] border border-white/10 overflow-hidden">

                <div className="h-10 bg-slate-900 border-b border-white/5 flex items-center px-6">
                  <div className="ml-auto text-[8px] text-slate-500 font-black tracking-widest">
                    INTEL v4.2
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4"
                      style={{
                        backgroundColor: current.bg,
                        borderColor: `${current.color}33`,
                        color: current.color
                      }}
                    >
                      <span className="text-[9px] font-black uppercase">
                        {current.pill}
                      </span>
                    </div>

                    <h4 className="text-white font-bold text-lg">
                      {current.heading}
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      {current.sub}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-5 rounded-2xl">
                      <div className="text-[9px] text-slate-500 font-bold uppercase">
                        Impact
                      </div>
                      <div
                        className="text-3xl font-black"
                        style={{ color: current.color }}
                      >
                        {current.kpi}
                      </div>
                      <div className="text-[8px] text-slate-600 font-black uppercase">
                        {current.kpiLabel}
                      </div>
                    </div>

                    <div className="bg-white/5 p-5 rounded-2xl">
                      <div className="text-[9px] text-slate-500 font-bold uppercase">
                        Delivered
                      </div>
                      <div className="text-3xl font-black text-white">
                        {current.delivered}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400">
                    Status: <span className="text-white font-bold">{current.status}</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  
       </div>
    </section>
  );
};

export default Services;
