import React from 'react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      summary: 'Understand the problem, target users, constraints, and intended impact.',
      detail: 'Analyze real-world operational challenges, determine user pain points, and define a tightly bounded scope suitable for rigorous hackathon execution.',
      accent: '#356DFF',
    },
    {
      num: '02',
      title: 'Research',
      summary: 'Evaluate technical approaches, AI/ML possibilities, feasibility, and business relevance.',
      detail: 'Benchmark available models, test feasibility of algorithms, and outline realistic business and product viability.',
      accent: '#52D6FF',
    },
    {
      num: '03',
      title: 'Build & Integrate',
      summary: 'Develop the frontend, backend, data layer, and relevant intelligent features.',
      detail: 'Engineered synchronization across frontend components, database systems, API connections, and intelligent agent workflows.',
      accent: '#8B5CF6',
    },
    {
      num: '04',
      title: 'Test & Present',
      summary: 'Validate the solution, demonstrate the workflow, explain limitations, and communicate the value.',
      detail: 'Perform live user flows, ensure edge cases are handled responsibly, and present transparent evidence to hackathon judges.',
      accent: '#10B981',
    },
  ];

  return (
    <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#071426]/90 border-t border-[#12243A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-bold tracking-widest text-[#52D6FF] uppercase mb-2">
            Execution Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            How We Turn Ideas Into Working Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A disciplined, four-stage approach that balances agile hackathon velocity with structural software engineering rigor.
          </p>
        </div>

        {/* Timeline on Desktop (4-step horizontal) & Mobile (vertical) */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-[#356DFF] via-[#52D6FF] to-[#10B981] opacity-40 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0D1B2A] border border-[#1A2E4C] hover:border-[#356DFF]/60 shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Step Number Circle */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-lg text-white shadow-md border"
                      style={{
                        backgroundColor: '#12243A',
                        borderColor: `${step.accent}50`,
                      }}
                    >
                      {step.num}
                    </div>
                    <span
                      className="text-[10px] font-mono uppercase px-2 py-0.5 rounded border"
                      style={{
                        backgroundColor: '#12243A',
                        color: step.accent,
                        borderColor: `${step.accent}40`,
                      }}
                    >
                      Step {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#52D6FF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3 font-medium">
                    {step.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#12243A] text-xs text-slate-400 leading-normal">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
