import React from 'react';

export const About: React.FC = () => {
  const capabilities = [
    {
      title: 'User Experience & Frontend',
      roleOwner: 'Pravin Aadake',
      tag: 'Interface & Interaction',
      description:
        'Crafting responsive, intuitive user interfaces that communicate product logic clearly and make complex workflows accessible.',
      accent: '#356DFF',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: ['React & TypeScript', 'Responsive Layouts', 'Design Systems', 'Usability Testing'],
    },
    {
      title: 'Backend & Data Systems',
      roleOwner: 'Samarth Kumbhar',
      tag: 'Server Logic & Architecture',
      description:
        'Building structured server-side logic, data models, and clean API boundaries to ensure stability, performance, and seamless integration.',
      accent: '#52D6FF',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: ['API Architecture', 'Database Schema', 'Server Logic', 'Integration Protocols'],
    },
    {
      title: 'AI/ML & Technical Research',
      roleOwner: 'Pratiksha Bhaskare',
      tag: 'Intelligence & Validation',
      description:
        'Investigating relevant machine learning models, autonomous agents, and algorithmic approaches to validate intelligent functionality.',
      accent: '#8B5CF6',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      skills: ['Model Evaluation', 'Agentic Workflows', 'Experimental Validation', 'Python / ML Stack'],
    },
    {
      title: 'Business Research & Communication',
      roleOwner: 'Shreyas Suryawanshi',
      tag: 'Strategy & Articulation',
      description:
        'Analyzing problem contexts, defining the real-world value proposition, and preparing structured presentations for judge evaluations.',
      accent: '#10B981',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      skills: ['User Needs Analysis', 'Value Proposition', 'Pitch Documentation', 'Judge Communication'],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#071426]/60 border-t border-[#12243A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-bold tracking-widest text-[#52D6FF] uppercase mb-2">
            About InnovateX
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Built on Curiosity.{' '}
            <span className="text-[#356DFF]">Driven by Collaboration.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            InnovateX brings together four complementary areas of responsibility: frontend development and user experience, backend engineering and databases, AI/ML research, and business strategy. We approach innovation by understanding the problem, researching possible solutions, developing and integrating technology, testing our work, and communicating its value.
          </p>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="cursor-target p-6 rounded-2xl bg-[#0D1B2A] border border-[#1A2E4C] hover:border-[#356DFF]/60 shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-inner"
                    style={{
                      backgroundColor: `${item.accent}15`,
                      color: item.accent,
                      border: `1px solid ${item.accent}40`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-[#12243A] px-2 py-0.5 rounded border border-[#1E3A5F]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#52D6FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Focus Skills */}
              <div className="pt-4 border-t border-[#12243A]">
                <div className="text-[11px] font-mono text-slate-400 mb-2">Key Areas:</div>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#12243A] text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
