import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050E1A] border-t border-[#12243A] py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs no-print">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Wordmark */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#12243A] border border-[#356DFF]/50 flex items-center justify-center text-[#52D6FF] font-mono font-bold text-xs">
              IX
            </div>
            <span className="text-lg font-bold text-white font-mono tracking-tight">
              Innovate<span className="text-[#52D6FF]">X</span>
            </span>
          </div>
          <p className="text-slate-400 text-center md:text-left max-w-sm">
            Ideas Into Innovation. Technology Into Impact. A four-member student technology team participating in Triwizathon 2026.
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-medium">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-white transition-colors">Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors">About</a>
          <a href="#team" onClick={(e) => handleNavClick(e, '#team')} className="hover:text-white transition-colors">Team</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-white transition-colors">Projects</a>
          <a href="#achievements" onClick={(e) => handleNavClick(e, '#achievements')} className="hover:text-white transition-colors">Achievements</a>
          <a href="#workflow" onClick={(e) => handleNavClick(e, '#workflow')} className="hover:text-white transition-colors">Workflow</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Legal & Hackathon Reference */}
        <div className="text-center md:text-right space-y-1">
          <div>
            &copy; {currentYear} <strong className="text-slate-200">InnovateX</strong>. Built for Triwizathon 2026.
          </div>
          <div className="text-[11px] text-slate-400">
            Sanjay Ghodawat University, Kolhapur
          </div>
          <div className="text-[10px] text-slate-400 italic">
            Student team portfolio. Not an official university or event endorsement.
          </div>
        </div>
      </div>
    </footer>
  );
};
