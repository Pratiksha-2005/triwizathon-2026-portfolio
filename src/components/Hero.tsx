import React from 'react';
import TechText from './TechText';
import ElectricBorder from './ElectricBorder';

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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-[#356DFF]/15 via-[#52D6FF]/10 to-transparent rounded-full blur-3xl opacity-75" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#12243A]/40 rounded-full blur-2xl" />

        {/* Subtle Engineering Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #52D6FF 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Event Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2A] border border-[#356DFF]/40 shadow-sm text-xs font-semibold tracking-wide text-[#52D6FF]">
            <span className="w-2 h-2 rounded-full bg-[#356DFF] animate-ping" />
            <span className="uppercase font-mono">TRIWIZATHON 2026 · SANJAY GHODAWAT UNIVERSITY</span>
          </div>

          {/* Interactive React Bits TechText Wordmark */}
          <div className="w-full h-24 sm:h-28 relative my-1 rounded-xl bg-[#0D1B2A]/40 border border-[#1A2E4C]/60 backdrop-blur-sm overflow-hidden p-1 shadow-inner shadow-[#356DFF]/10" title="Interactive wordmark: hover or drag letters">
            <TechText
              text="InnovateX"
              fontWeight={800}
              fontSize={100}
              fontFamily="Inter, sans-serif"
              color="#FFFFFF"
              accentColor="#52D6FF"
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={16}
              selection={true}
              labels={true}
              draggable={true}
              sweep={true}
              speed={1}
            />
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Ideas Into Innovation.{' '}
            <span className="bg-gradient-to-r from-[#52D6FF] via-[#356DFF] to-[#8B5CF6] bg-clip-text text-transparent">
              Technology Into Impact.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            We are <span className="text-white font-semibold">InnovateX</span> — a four-member technology team combining software engineering, artificial intelligence, research, and business thinking to explore practical solutions to real-world problems.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#356DFF] to-[#1E4ECC] text-white hover:from-[#477CFF] hover:to-[#356DFF] shadow-lg shadow-[#356DFF]/30 hover:shadow-[#356DFF]/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <span>Explore Our Projects</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button
              onClick={() => scrollTo('team')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#0D1B2A] hover:bg-[#12243A] text-slate-200 hover:text-white border border-[#1A2E4C] hover:border-[#356DFF]/60 shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Meet the Team</span>
              <svg className="w-4 h-4 text-[#52D6FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Real Hackathon Track Record Metrics */}
          <div className="pt-6 border-t border-[#12243A] w-full">
            <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
              Verified Hackathon Results
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
              <div className="p-3 rounded-xl bg-[#0D1B2A]/90 border border-[#356DFF]/30 flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-[#52D6FF] font-mono">Top 10</span>
                <span className="text-xs font-medium text-slate-300">Fusion 2026</span>
                <span className="text-[10px] text-slate-400">SKN Pune</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0D1B2A]/90 border border-[#8B5CF6]/30 flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-[#A78BFA] font-mono">Top 30</span>
                <span className="text-xs font-medium text-slate-300">CodeRush 2.0</span>
                <span className="text-[10px] text-slate-400">Nagpur</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0D1B2A]/90 border border-[#10B981]/30 flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-[#34D399] font-mono">2× Finalist</span>
                <span className="text-xs font-medium text-slate-300">HackWave & CuriousPARC</span>
                <span className="text-[10px] text-slate-400">Indore & VIT Pune</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Custom Innovation Graphic & Architecture Telemetry */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Card Frame with Interactive Geometric Node Network */}
          <ElectricBorder
            color="#356DFF"
            glowColor="#52D6FF"
            speed={0.8}
            chaos={0.4}
            spread={0.5}
            strands={2}
            thickness={1.5}
            glow={0.8}
            intensity={0.9}
            arcs={1}
            flicker={0.3}
            borderRadius={16}
            interactive
            intro
            className="w-full max-w-md"
          >
          <div className="w-full p-6 rounded-2xl bg-gradient-to-b from-[#0D1B2A] to-[#071426] border border-[#1E3A5F] shadow-2xl relative overflow-hidden group">
            {/* Corner Decorative Dots */}
            <div className="flex items-center justify-between border-b border-[#1A2E4C] pb-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[11px] text-slate-400">innovatex-core.v26</span>
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#12243A] text-[#52D6FF] border border-[#356DFF]/30">
                ACTIVE
              </span>
            </div>

            {/* Central Connected Geometric Graphic */}
            <div className="relative h-64 flex items-center justify-center my-2">
              <svg className="w-full h-full" viewBox="0 0 300 240" fill="none">
                {/* Connecting Lines */}
                <line x1="150" y1="45" x2="65" y2="120" stroke="#1E3A5F" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="150" y1="45" x2="235" y2="120" stroke="#1E3A5F" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="65" y1="120" x2="150" y2="195" stroke="#356DFF" strokeWidth="1.5" />
                <line x1="235" y1="120" x2="150" y2="195" stroke="#52D6FF" strokeWidth="1.5" />
                <line x1="65" y1="120" x2="235" y2="120" stroke="#1E3A5F" strokeWidth="1.5" />
                <line x1="150" y1="45" x2="150" y2="195" stroke="#356DFF" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Center Core Node */}
                <circle cx="150" cy="120" r="28" fill="#0D1B2A" stroke="#356DFF" strokeWidth="2.5" />
                <circle cx="150" cy="120" r="14" fill="#356DFF" fillOpacity="0.25" />
                <circle cx="150" cy="120" r="6" fill="#52D6FF" />

                {/* Node 1: Frontend */}
                <g className="cursor-pointer transform transition-transform hover:scale-105">
                  <circle cx="150" cy="45" r="18" fill="#12243A" stroke="#356DFF" strokeWidth="2" />
                  <text x="150" y="49" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">UI</text>
                </g>

                {/* Node 2: Backend */}
                <g className="cursor-pointer transform transition-transform hover:scale-105">
                  <circle cx="65" cy="120" r="18" fill="#12243A" stroke="#52D6FF" strokeWidth="2" />
                  <text x="65" y="124" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">API</text>
                </g>

                {/* Node 3: AI / ML */}
                <g className="cursor-pointer transform transition-transform hover:scale-105">
                  <circle cx="235" cy="120" r="18" fill="#12243A" stroke="#8B5CF6" strokeWidth="2" />
                  <text x="235" y="124" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">AI</text>
                </g>

                {/* Node 4: Strategy */}
                <g className="cursor-pointer transform transition-transform hover:scale-105">
                  <circle cx="150" cy="195" r="18" fill="#12243A" stroke="#10B981" strokeWidth="2" />
                  <text x="150" y="199" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">BIZ</text>
                </g>
              </svg>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[9px] uppercase tracking-widest text-[#52D6FF] font-mono mt-14 bg-[#071426]/90 px-2 py-0.5 rounded border border-[#356DFF]/40">
                  4 Disciplines · 1 Mission
                </span>
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="pt-3 border-t border-[#1A2E4C] flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Triwizathon Prep Ready
              </span>
              <span className="text-[#52D6FF]">4 Hackathons Verified</span>
            </div>
          </div>
          </ElectricBorder>
        </div>
      </div>
    </section>
  );
};
