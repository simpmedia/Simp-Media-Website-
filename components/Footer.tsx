
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050212] pt-20 pb-8 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.03)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(79,70,229,0.03)_0%,transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-6">
  <div className="w-auto h-auto overflow-hidden shadow-lg shadow-violet-600/20 flex items-center justify-center bg-white">
    <img 
      src="/logo.jpeg" 
      alt="Simp Media Logo" 
      className="w-full h-full object-cover"
    />
  </div>
</div>

            <p className="text-slate-500 text-sm leading-relaxed mb-6">
 Simp Media is a 360° growth and marketing Ai powered agency helping brands scale through strategy, content, performance, and technology. We combine creativity, systems, and execution to build brands that adapt, perform, and grow sustainably in a fast-changing digital world.

            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-violet-500"></span>
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-slate-400 text-sm hover:text-violet-400 flex items-center gap-2 group">
                 <span className="w-4 h-px bg-slate-800 group-hover:bg-violet-500 group-hover:w-6 transition-all"></span> About Us
              </a>
              <a href="#services" className="text-slate-400 text-sm hover:text-violet-400 flex items-center gap-2 group">
                 <span className="w-4 h-px bg-slate-800 group-hover:bg-violet-500 group-hover:w-6 transition-all"></span> Services
              </a>
              <a href="#process" className="text-slate-400 text-sm hover:text-violet-400 flex items-center gap-2 group">
                 <span className="w-4 h-px bg-slate-800 group-hover:bg-violet-500 group-hover:w-6 transition-all"></span> Our Process
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-violet-500"></span>
            </h4>
          <div className="space-y-6">

  {/* Phone */}
  <div className="flex gap-4">
    <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 flex-shrink-0">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
                 19.79 19.79 0 0 1-8.63-3.07 
                 19.5 19.5 0 0 1-6-6 
                 19.79 19.79 0 0 1-3.07-8.63 
                 A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 
                 12.84 12.84 0 0 0 .7 2.81 
                 2 2 0 0 1-.45 2.11L8.09 9.91 
                 a16 16 0 0 0 6 6l1.27-1.27 
                 a2 2 0 0 1 2.11-.45 
                 12.84 12.84 0 0 0 2.81.7 
                 A2 2 0 0 1 22 16.92z" />
      </svg>
    </div>
    <a 
      href="tel:+919999999999" 
      className="text-slate-500 text-xs hover:text-slate-700 transition"
    >
      +91 9625052551
    </a>
  </div>

  {/* Email */}
  <div className="flex gap-4">
    <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    </div>
    <div className="text-slate-500 text-xs">info.simpmedia@gmail.com
</div>
  </div>

  {/* Address */}
  <div className="flex gap-4">
    <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 flex-shrink-0">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    </div>
    <div className="text-slate-500 text-xs">PD Block, Pitampura, Delhi-110034
</div>
  </div>

</div>

          </div>

          <div>
             <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-violet-500"></span>
            </h4>
            <form className="flex gap-2">
              <input type="email" placeholder="Email" className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-xs focus:outline-none focus:border-violet-500" />
              <button className="bg-gradient-to-r from-violet-600 to-indigo-700 px-4 py-2 rounded-lg font-bold text-xs text-white">Join</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
           <div>© {new Date().getFullYear()} Simp Media. All rights reserved.</div>
           <div className="flex gap-8">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
