import React from 'react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, expanded, onToggle }) => {

  return (
    <div className="w-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0D1B2A] border border-[#1A2E4C] hover:border-[#356DFF]/60 shadow-xl transition-all duration-300 group hover:-translate-y-1 relative">
      <div>
        {/* Top Header: Category Tag & Hackathon Achievement Pill */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-mono text-slate-400 bg-[#12243A] px-2.5 py-1 rounded-md border border-[#1E3A5F]">
            {project.category}
          </span>
          <span
            className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border flex items-center gap-1.5 shadow-sm"
            style={{
              backgroundColor: '#12243A',
              color: project.accentColor,
              borderColor: `${project.accentColor}50`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accentColor }} />
            {project.achievementBadge}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#22D3EE] transition-colors">
          {project.name}
        </h3>

        {/* Project Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#12243A] text-slate-300 border border-slate-800"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Collapsible Architecture & Implementation Scope */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-[#12243A] space-y-2 text-xs text-slate-300 animate-expand-in">
            <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Key Focus Areas:
            </div>
            {project.features.map((feat, fIdx) => (
              <div key={fIdx} className="flex items-start gap-2">
                <span className="text-[#22D3EE] mt-0.5 font-bold">›</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer: Detail Toggle & Event Reference */}
      <div className="pt-4 border-t border-[#12243A] flex items-center justify-between mt-4">
        <div>
          <span className="text-xs font-mono text-slate-400">
            Evaluated at <strong className="text-slate-200">{project.associatedHackathon}</strong>
          </span>
          {project.teamMembers && project.teamMembers.length > 0 && (
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">
              Built by: {project.teamMembers.join(', ')}
            </div>
          )}
        </div>

        <button
          onClick={onToggle}
          className="text-xs font-semibold text-[#22D3EE] hover:text-white flex items-center gap-1 transition-colors focus:outline-none"
          aria-expanded={expanded}
        >
          <span>{expanded ? 'Hide details' : 'Explore scope'}</span>
          <svg
            className={`w-3.5 h-3.5 transform transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

