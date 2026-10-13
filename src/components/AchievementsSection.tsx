import React from 'react';
import { ACHIEVEMENTS, ACHIEVEMENTS_SUMMARY } from '../data/achievements';
import { AchievementCard } from './AchievementCard';

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
          {ACHIEVEMENTS.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};
