import React from 'react';
import { TEAM_MEMBERS } from '../data/team';
import { TeamCard } from './TeamCard';
import ElectricBorder from './ElectricBorder';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#071426]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-bold tracking-widest text-[#52D6FF] uppercase mb-2">
            The InnovateX Roster
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Four Focused Minds. <span className="text-[#356DFF]">One United Execution.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our team is structured with distinct technical and strategic disciplines, ensuring every phase of hackathon innovation — from initial problem analysis to high-fidelity frontend execution — is owned with precision.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-slate-400 bg-[#0D1B2A] px-3 py-1 rounded-md border border-[#1A2E4C]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52D6FF]" />
            Roles represent team project responsibilities for Triwizathon 2026.
          </div>
        </div>

        {/* 4 Members Grid: 4-cols on desktop, 2-cols on tablet, 1-col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <ElectricBorder
              key={member.id}
              color={member.accentColor}
              speed={0.75}
              chaos={0.38}
              spread={0.48}
              strands={2}
              thickness={1.3}
              glow={0.75}
              intensity={0.9}
              arcs={1}
              flicker={0.38}
              borderRadius={16}
              interactive
              intro
            >
              <TeamCard member={member} />
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  );
};
