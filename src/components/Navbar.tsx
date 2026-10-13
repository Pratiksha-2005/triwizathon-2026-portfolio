import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenPdfModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPdfModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'team', 'projects', 'achievements', 'workflow', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Workflow', href: '#workflow', id: 'workflow' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        isScrolled
          ? 'bg-[#071426]/90 backdrop-blur-md border-b border-[#1A2E4C] shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#84CC16] rounded-lg px-2 py-1"
            aria-label="InnovateX Home"
          >
            {/* Geometric Innovation Symbol */}
            <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0A1E14] to-[#061510] border border-[#84CC16]/40 shadow-inner shadow-[#84CC16]/20 group-hover:border-[#22D3EE] transition-colors">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#22D3EE] transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  d="M6 8L16 3L26 8V24L16 29L6 24V8Z"
                  stroke="#84CC16"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11L21 21M21 11L11 21"
                  stroke="#22D3EE"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" />
              </svg>
              <div className="absolute -inset-0.5 rounded-xl bg-[#84CC16]/20 blur-sm -z-10 group-hover:bg-[#22D3EE]/30 transition-all" />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1 font-mono">
                Innovate<span className="text-[#22D3EE]">X</span>
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 uppercase font-semibold">
                Student Tech Team
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-white bg-[#0A1E14] border border-[#84CC16]/50 shadow-sm shadow-[#84CC16]/20'
                    : 'text-slate-300 hover:text-white hover:bg-[#061510]/60'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header CTAs & Event Badge */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="px-3 py-1 rounded-full text-xs font-medium bg-[#0A1E14]/80 border border-[#84CC16]/40 text-[#22D3EE] flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              Triwizathon 2026
            </div>

            <button
              onClick={onOpenPdfModal}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#22D3EE] border border-[#22D3EE] hover:bg-[#06B6D4] hover:border-[#06B6D4] text-[#020D0A] transition-all flex items-center gap-1.5"
              title="Download clean portfolio backup PDF"
              aria-label="Download PDF Backup"
            >
              <svg className="w-3.5 h-3.5 text-[#020D0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              PDF Backup
            </button>

            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="px-4 py-1.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#84CC16] to-[#65A30D] text-[#020D0A] hover:from-[#A3E635] hover:to-[#84CC16] shadow-md shadow-[#84CC16]/25 transition-all duration-200 focus:ring-2 focus:ring-[#22D3EE]"
            >
              Explore Our Work
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenPdfModal}
              className="p-1.5 text-xs rounded-lg bg-[#22D3EE] border border-[#22D3EE] text-[#020D0A] hover:bg-[#06B6D4] transition-all"
              aria-label="Download PDF"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#061510] border border-[#0D2A1A] text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#84CC16]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#0D1B2A] rounded-2xl border border-[#1A2E4C] shadow-2xl animate-fade-slide-in">
            <div className="mb-3 px-2 py-1.5 rounded-lg bg-[#12243A] border border-[#356DFF]/30 text-xs text-[#52D6FF] flex items-center justify-between">
              <span>Triwizathon 2026</span>
              <span className="text-[10px] text-slate-400">Sanjay Ghodawat Univ.</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'text-white bg-[#0A1E14] border border-[#84CC16]/40'
                      : 'text-slate-300 hover:text-white hover:bg-[#0A1E14]/50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-slate-800 flex flex-col gap-2">
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, '#projects')}
                  className="w-full text-center py-2 text-sm font-semibold rounded-lg bg-[#84CC16] text-[#020D0A]"
                >
                  Explore Our Work
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPdfModal();
                  }}
                  className="w-full text-center py-2 text-xs font-semibold rounded-lg bg-[#0A1E14] text-slate-200 border border-[#0D2A1A]"
                >
                  Download Portfolio PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
