import React from 'react';
import TechText from './TechText';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Decorative Tech Grid & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Radial Ambient Gradient */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-[#84CC16]/15 via-[#22D3EE]/10 to-transparent rounded-full blur-3xl opacity-75" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#0A1E14]/40 rounded-full blur-2xl" />

        {/* Subtle Engineering Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #22D3EE 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-7">
        {/* Event Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2A] border border-[#356DFF]/40 shadow-sm text-xs font-semibold tracking-wide text-[#52D6FF]">
          <span className="w-2 h-2 rounded-full bg-[#356DFF] animate-ping" />
          <span className="uppercase font-mono">TRIWIZATHON 2026 · SANJAY GHODAWAT UNIVERSITY</span>
        </div>

        {/* Team InnovateX Card in the Middle */}
        <div
          className="w-full max-w-xl mx-auto relative rounded-2xl bg-[#0D1B2A]/80 border border-[#1A2E4C] hover:border-[#356DFF]/60 backdrop-blur-md overflow-hidden p-2 shadow-2xl shadow-[#84CC16]/10 transition-all duration-300 group hover:-translate-y-1"
          style={{ height: '140px' }}
          title="Team InnovateX — Interactive Wordmark"
        >
          {/* Subtle Top Header inside Card */}
          <div
            className="absolute flex items-center justify-between pointer-events-none select-none z-10"
            style={{ top: '10px', left: '16px', right: '16px' }}
          >
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              TEAM // INNOVATEX
            </span>
            <span className="text-[10px] font-mono text-[#52D6FF] uppercase tracking-wider bg-[#12243A]/80 px-2 py-0.5 rounded border border-[#356DFF]/30">
              v2026.1
            </span>
          </div>

          <TechText
            text="InnovateX"
            fontWeight={800}
            fontSize={72}
            fontFamily="Inter, sans-serif"
            color="#FFFFFF"
            accentColor="#22D3EE"
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={16}
            selection={false}
            labels={false}
            draggable={true}
            sweep={true}
            speed={1}
          />
        </div>

        {/* Master Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] max-w-4xl mx-auto">
          Ideas Into Innovation.{' '}
          <span className="bg-gradient-to-r from-[#22D3EE] via-[#84CC16] to-[#F97316] bg-clip-text text-transparent">
            Technology Into Impact.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          We are <span className="text-white font-semibold">InnovateX</span> — a four-member technology team combining software engineering, artificial intelligence, research, and business thinking to explore practical solutions to real-world problems.
        </p>

        {/* Primary & Secondary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 w-full sm:w-auto">
          <button
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#84CC16] to-[#65A30D] text-[#020D0A] hover:from-[#A3E635] hover:to-[#84CC16] shadow-lg shadow-[#84CC16]/30 hover:shadow-[#84CC16]/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Our Projects</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <button
            onClick={() => scrollTo('team')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#0D1B2A] hover:bg-[#12243A] text-slate-200 hover:text-white border border-[#1A2E4C] hover:border-[#356DFF]/60 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Meet the Team</span>
            <svg className="w-4 h-4 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Real Hackathon Track Record Metrics */}
        <div className="pt-6 border-t border-[#12243A] w-full max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3 text-center">
            Verified Hackathon Results
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full text-left">
            <div className="p-4 rounded-xl bg-[#0D1B2A]/90 border border-[#84CC16]/30 flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-[#22D3EE] font-mono">Top 10</span>
              <span className="text-sm font-medium text-slate-300">Fusion 2026</span>
              <span className="text-xs text-slate-400">SKN Pune</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0D1B2A]/90 border border-[#F97316]/30 flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-[#FB923C] font-mono">Top 30</span>
              <span className="text-sm font-medium text-slate-300">CodeRush 2.0</span>
              <span className="text-xs text-slate-400">Nagpur</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0D1B2A]/90 border border-[#84CC16]/30 flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-[#A3E635] font-mono">2× Finalist</span>
              <span className="text-sm font-medium text-slate-300">HackWave &amp; CuriousPARC</span>
              <span className="text-xs text-slate-400">Indore &amp; VIT Pune</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
