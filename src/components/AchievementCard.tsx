import React from 'react';
import type { Achievement } from '../data/achievements';

interface AchievementCardProps {
  achievement: Achievement;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const isTopTier = achievement.resultType === 'top-tier';

  return (
    <div
      className={`h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0D1B2A] border shadow-xl transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 ${
        isTopTier
          ? 'border-[#84CC16]/60 hover:border-[#22D3EE] shadow-[#84CC16]/10'
          : 'border-[#1A2E4C] hover:border-slate-500'
      }`}
    >
      {/* Decorative top ribbon for Top 10 / Top 30 */}
      {isTopTier && (
        <div className="absolute top-0 right-0">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider bg-gradient-to-l from-[#84CC16] to-[#65A30D] text-[#020D0A] px-3 py-1 rounded-bl-xl shadow-sm">
            High Standing
          </div>
        </div>
      )}

      <div>
        {/* Top Badges */}
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`text-xs font-mono font-bold px-3 py-1 rounded-lg border flex items-center gap-1.5 ${
              achievement.result === 'Top 10'
                ? 'bg-[#84CC16]/20 text-[#22D3EE] border-[#84CC16]/50'
                : achievement.result === 'Top 30'
                ? 'bg-orange-950/40 text-[#FB923C] border-orange-500/40'
                : 'bg-lime-950/40 text-lime-300 border-lime-500/40'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                achievement.result === 'Top 10'
                  ? 'bg-[#22D3EE]'
                  : achievement.result === 'Top 30'
                  ? 'bg-[#FB923C]'
                  : 'bg-lime-400'
              }`}
            />
            {achievement.badgeText}
          </span>

          <span className="text-[11px] font-mono text-slate-400 bg-[#12243A] px-2 py-0.5 rounded border border-[#1A2E4C]">
            {achievement.reportedLevel}
          </span>
        </div>

        {/* Hackathon Event Title */}
        <h3 className="text-2xl font-extrabold text-white mb-1 group-hover:text-[#22D3EE] transition-colors">
          {achievement.event}
        </h3>

        {/* Location & Institution */}
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-4">
          <svg className="w-3.5 h-3.5 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{achievement.locationOrInstitution}</span>
        </div>

        {/* Associated Project */}
        <div className="p-3 rounded-xl bg-[#12243A] border border-[#1A2E4C] mb-4">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">
            Project Presented:
          </div>
          <div className="text-sm font-bold text-white mt-0.5 flex items-center justify-between">
            <span>{achievement.project}</span>
            <span className="text-xs font-mono text-[#52D6FF]">✓ Verified</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {achievement.description}
        </p>
      </div>

      {/* Footer Standing Result Indicator */}
      <div className="pt-4 mt-4 border-t border-[#12243A] flex items-center justify-between text-xs font-mono">
        <span className="text-slate-400">Official Standing:</span>
        <span
          className={`font-bold ${
            achievement.result === 'Top 10'
              ? 'text-[#22D3EE]'
              : achievement.result === 'Top 30'
              ? 'text-[#FB923C]'
              : 'text-lime-400'
          }`}
        >
          {achievement.result}
        </span>
      </div>
    </div>
  );
};
