import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#071426]/80 border-t border-[#12243A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-bold tracking-widest text-[#22D3EE] uppercase mb-2">
            Engineered Initiatives
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Projects That Turn Ideas Into Possibilities
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Each project reflects our commitment to solving practical problems under rapid hackathon timelines — applying algorithmic optimization, agentic AI workflows, and thoughtful user-centered design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              expanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
