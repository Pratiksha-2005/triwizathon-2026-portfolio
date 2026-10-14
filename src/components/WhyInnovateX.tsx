import React from 'react';
import { ElectricBorder } from './ElectricBorder';

export const WhyInnovateX: React.FC = () => {
  const principles = [
    {
      title: 'Collaboration',
      description: 'Work across roles rather than in isolated silos, joining technical implementation with user intuition.',
      accent: '#84CC16',
      icon: (
        <svg className="w-5 h-5 text-[#84CC16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Practical Innovation',
      description: 'Prioritize real problems and usable solutions over theoretical complexity without utility.',
      accent: '#22D3EE',
      icon: (
        <svg className="w-5 h-5 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Continuous Learning',
      description: 'Use experimentation, judge critiques, and real-time feedback to iterate and improve rapidly.',
      accent: '#F97316',
      icon: (
        <svg className="w-5 h-5 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Responsible Engineering',
      description: 'Be honest about capabilities, results, and limitations without exaggerating benchmarks or data.',
      accent: '#A3E635',
      icon: (
        <svg className="w-5 h-5 text-[#A3E635]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#071426]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-bold tracking-widest text-[#22D3EE] uppercase mb-2">
            Core Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Four Perspectives. One Shared Mission.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            What unites InnovateX is a culture of respect, continuous curiosity, and transparent engineering.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {principles.map((p, idx) => (
            <ElectricBorder
              key={idx}
              color={p.accent}
              glowColor="#22D3EE"
              borderRadius={16}
              thickness={1.5}
              speed={0.6}
              chaos={0.35}
              spread={0.4}
              glow={0.5}
              className="h-full"
            >
              <div
                className="p-6 rounded-2xl bg-[#0D1B2A] border border-[#1A2E4C] hover:border-[#84CC16]/60 shadow-lg transition-all duration-300 h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A1E14] border border-[#0F3020] flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </ElectricBorder>
          ))}
        </div>

        {/* Motto Callout Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0D1B2A] via-[#12243A] to-[#0D1B2A] border border-[#356DFF]/50 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-[#84CC16]/10 to-transparent pointer-events-none" />
          <div className="text-xs font-mono uppercase tracking-widest text-[#22D3EE] mb-2 font-bold">
            Team Motto
          </div>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            “Think Innovatively. Build Intelligently. Create Impact.”
          </div>
          <div className="mt-3 text-xs sm:text-sm text-slate-400 font-mono">
            InnovateX · Triwizathon 2026 at Sanjay Ghodawat University, Kolhapur
          </div>
        </div>
      </div>
    </section>
  );
};
