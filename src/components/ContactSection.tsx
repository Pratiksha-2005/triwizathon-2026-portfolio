import React, { useState } from 'react';
import ElectricBorder from './ElectricBorder';

interface ContactSectionProps {
  onOpenPdfModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPdfModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(
      'InnovateX - Triwizathon 2026, Sanjay Ghodawat University, Kolhapur | Team Leader: Pravin Aadake'
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#071426] border-t border-[#12243A]">
      <div className="max-w-7xl mx-auto">
        <ElectricBorder
          color="#356DFF"
          glowColor="#52D6FF"
          speed={0.9}
          chaos={0.45}
          spread={0.55}
          strands={3}
          thickness={1.5}
          glow={0.9}
          intensity={1.0}
          arcs={1}
          flicker={0.35}
          borderRadius={24}
          interactive
          intro
          className="max-w-4xl mx-auto"
        >
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0D1B2A] to-[#071426] border border-[#1E3A5F] shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#356DFF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12243A] border border-[#356DFF]/40 text-xs font-semibold tracking-wide text-[#52D6FF]">
              <span className="w-2 h-2 rounded-full bg-[#52D6FF] animate-pulse" />
              TRIWIZATHON 2026 · SANJAY GHODAWAT UNIVERSITY, KOLHAPUR
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's Build Something Meaningful.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We are InnovateX, ready to learn, collaborate, and transform promising ideas into practical technology solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => scrollTo('projects')}
                className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#356DFF] to-[#1E4ECC] text-white hover:from-[#477CFF] hover:to-[#356DFF] shadow-lg shadow-[#356DFF]/30 transition-all transform hover:-translate-y-0.5"
              >
                Explore Our Projects
              </button>

              <button
                onClick={onOpenPdfModal}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#12243A] hover:bg-[#1A2E4C] text-[#52D6FF] border border-[#356DFF]/50 shadow-sm transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Portfolio PDF</span>
              </button>

              <button
                onClick={handleCopyCitation}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm bg-[#071426] hover:bg-[#0D1B2A] text-slate-300 hover:text-white border border-slate-700 transition-all flex items-center gap-2"
                title="Copy team information snippet"
              >
                <span>{copied ? '✓ Copied Details' : 'Copy Team Info'}</span>
              </button>
            </div>

            {/* Event & Location Meta Card */}
            <div className="pt-8 mt-8 border-t border-[#12243A] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-xl bg-[#071426] border border-[#1A2E4C]">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Event</div>
                <div className="text-sm font-bold text-white mt-1">Triwizathon 2026</div>
                <div className="text-xs text-[#52D6FF]">Hackathon Participation</div>
              </div>
              <div className="p-4 rounded-xl bg-[#071426] border border-[#1A2E4C]">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Institution</div>
                <div className="text-sm font-bold text-white mt-1">Sanjay Ghodawat Univ.</div>
                <div className="text-xs text-slate-300">Kolhapur, Maharashtra</div>
              </div>
              <div className="p-4 rounded-xl bg-[#071426] border border-[#1A2E4C]">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Team Size</div>
                <div className="text-sm font-bold text-white mt-1">4 Multidisciplinary Members</div>
                <div className="text-xs text-emerald-400">Ready for Live Demos</div>
              </div>
            </div>
          </div>
        </div>
        </ElectricBorder>
      </div>
    </section>
  );
};
