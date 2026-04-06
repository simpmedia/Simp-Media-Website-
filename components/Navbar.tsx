
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050212d9] backdrop-blur-md border-b border-white/5 py-0' 
          : 'bg-transparent border-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a href="#" className="flex items-center">
  <img 
    src="/logo.jpeg" 
    alt="Simp Media Logo" 
    className="h-8 md:h-10 w-auto"
  />
</a>


          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-300 hover:text-white font-medium text-sm transition-colors relative group">
              Services
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#simp-system" className="text-slate-300 hover:text-white font-medium text-sm transition-colors relative group">
              Solutions
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#process" className="text-slate-300 hover:text-white font-medium text-sm transition-colors relative group">
              Process
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#cta" className="bg-gradient-to-br from-violet-600 to-indigo-700 px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all transform hover:-translate-y-0.5 text-white">
              Get Started
            </a>
          </div>

          {/* Mobile Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden w-10 h-8 flex flex-col justify-around p-1 focus:outline-none"
          >
            <span className={`w-full h-0.5 bg-white rounded-full transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white rounded-full transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white rounded-full transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#050212] border-t border-white/5 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
          <a href="#services" onClick={() => setIsOpen(false)} className="text-slate-300 text-lg">Services</a>
          <a href="#simp-system" onClick={() => setIsOpen(false)} className="text-slate-300 text-lg">Solutions</a>
          <a href="#process" onClick={() => setIsOpen(false)} className="text-slate-300 text-lg">Process</a>
          <a href="#cta" onClick={() => setIsOpen(false)} className="w-full text-center bg-gradient-to-br from-violet-600 to-indigo-700 py-3 rounded-full font-bold text-white">Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
