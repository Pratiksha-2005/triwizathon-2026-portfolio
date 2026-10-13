import React from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import ElectricBorder from './ElectricBorder';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#071426]/80 border-t border-[#12243A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-bold tracking-widest text-[#52D6FF] uppercase mb-2">
            Engineered Initiatives
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Projects That Turn Ideas Into Possibilities
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Each project reflects our commitment to solving practical problems under rapid hackathon timelines — applying algorithmic optimization, agentic AI workflows, and thoughtful user-centered design.
          </p>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <ElectricBorder
              key={project.id}
              color={project.accentColor}
              speed={0.8}
              chaos={0.4}
              spread={0.5}
              strands={2}
              thickness={1.4}
              glow={0.8}
              intensity={0.9}
              arcs={1}
              flicker={0.35}
              borderRadius={16}
              interactive
              intro
            >
              <ProjectCard project={project} />
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  );
};
