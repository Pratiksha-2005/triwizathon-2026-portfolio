import React from 'react';
import { ACHIEVEMENTS, ACHIEVEMENTS_SUMMARY } from '../data/achievements';
import { AchievementCard } from './AchievementCard';
import ElectricBorder from './ElectricBorder';

const resultColor = (result: string) => {
  if (result === 'Top 10') return { color: '#52D6FF', glow: '#356DFF' };
  if (result === 'Top 30') return { color: '#A78BFA', glow: '#7C3AED' };
  return { color: '#34D399', glow: '#059669' };
};

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#071426]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-[#52D6FF] uppercase mb-2">
            Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Recognition Earned Through Innovation
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            Demonstrated performance across intense hackathons, solving real-world challenges alongside multidisciplinary collegiate and international teams.
          </p>

          {/* Verified Summary Callout */}
          <div className="p-4 rounded-xl bg-[#0D1B2A] border border-[#356DFF]/40 flex items-start gap-3 shadow-md">
            <div className="w-8 h-8 rounded-lg bg-[#356DFF]/20 text-[#52D6FF] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {ACHIEVEMENTS_SUMMARY}
            </p>
          </div>
        </div>

        {/* 4 Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((achievement) => {
            const { color, glow } = resultColor(achievement.result);
            return (
              <ElectricBorder
                key={achievement.id}
                color={color}
                glowColor={glow}
                speed={0.8}
                chaos={0.4}
                spread={0.5}
                strands={2}
                thickness={1.3}
                glow={0.8}
                intensity={0.9}
                arcs={1}
                flicker={0.35}
                borderRadius={16}
                interactive
                intro
              >
                <AchievementCard achievement={achievement} />
              </ElectricBorder>
            );
          })}
        </div>
      </div>
    </section>
  );
};
