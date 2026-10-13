import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/team';
import { PROJECTS } from '../data/projects';
import { ACHIEVEMENTS, ACHIEVEMENTS_SUMMARY } from '../data/achievements';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({ isOpen, onClose }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleGeneratePdf = async () => {
    setIsGenerating(true);
    try {
      // Attempt dynamic import of jsPDF
      const jspdfModule = await import('jspdf').catch(() => null);
      if (jspdfModule && jspdfModule.jsPDF) {
        const { jsPDF } = jspdfModule;
        const doc = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
        });

        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 15;
        const contentWidth = pageWidth - margin * 2;
        let y = 18;

        // Header Banner
        doc.setFillColor(7, 20, 38);
        doc.rect(0, 0, pageWidth, 32, 'F');

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text('InnovateX', margin, 14);

        doc.setFontSize(9);
        doc.setTextColor(82, 214, 255);
        doc.text('TRIWIZATHON 2026 · SANJAY GHODAWAT UNIVERSITY, KOLHAPUR', margin, 21);

        doc.setFontSize(8);
        doc.setTextColor(180, 200, 220);
        doc.text('Official Team Portfolio & Submission Backup Document', margin, 27);

        y = 40;

        // Section: Introduction
        doc.setTextColor(7, 20, 38);
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.text('1. Team Overview & Mission', margin, y);
        y += 6;

        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(40, 50, 60);
        const introText =
          'InnovateX is a four-member student technology team combining software engineering, artificial intelligence, research, and business thinking to explore practical solutions to real-world problems.\n\nMotto: "Think Innovatively. Build Intelligently. Create Impact."';
        const splitIntro = doc.splitTextToSize(introText, contentWidth);
        doc.text(splitIntro, margin, y);
        y += splitIntro.length * 4.5 + 4;

        // Section: Team Members
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(7, 20, 38);
        doc.text('2. Team Structure & Responsibilities', margin, y);
        y += 6;

        TEAM_MEMBERS.forEach((m) => {
          doc.setFillColor(245, 248, 252);
          doc.roundedRect(margin, y, contentWidth, 19, 2, 2, 'F');

          doc.setFontSize(10);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(15, 30, 55);
          doc.text(`${m.name}`, margin + 3, y + 5);

          doc.setFontSize(8.5);
          doc.setFont('helvetica', 'italic');
          doc.setTextColor(53, 109, 255);
          doc.text(m.role, margin + 3, y + 9.5);

          doc.setFontSize(8);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(60, 70, 80);
          doc.text(`Key Responsibilities: ${m.responsibilities.slice(0, 4).join(' • ')}`, margin + 3, y + 14.5);

          y += 22;
        });

        y += 2;

        // Section: Verified Hackathon Achievements
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(7, 20, 38);
        doc.text('3. Verified Hackathon Track Record', margin, y);
        y += 6;

        doc.setFontSize(8.5);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(50, 60, 70);
        const splitAchSummary = doc.splitTextToSize(ACHIEVEMENTS_SUMMARY, contentWidth);
        doc.text(splitAchSummary, margin, y);
        y += splitAchSummary.length * 4 + 4;

        ACHIEVEMENTS.forEach((a) => {
          doc.setFontSize(9);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(7, 20, 38);
          doc.text(`• ${a.event} (${a.locationOrInstitution}) — Result: ${a.result}`, margin + 2, y);
          y += 4.5;
          doc.setFontSize(8);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(70, 80, 90);
          doc.text(`  Project: ${a.project} | ${a.reportedLevel}`, margin + 2, y);
          y += 5.5;
        });

        // Page 2
        doc.addPage();
        y = 18;

        doc.setFillColor(7, 20, 38);
        doc.rect(0, 0, pageWidth, 20, 'F');
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(255, 255, 255);
        doc.text('InnovateX Portfolio — Projects & Execution Workflow', margin, 12);
        y = 30;

        // Section: Projects
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(7, 20, 38);
        doc.text('4. Project Showcase', margin, y);
        y += 6;

        PROJECTS.forEach((p) => {
          doc.setFillColor(245, 248, 252);
          doc.roundedRect(margin, y, contentWidth, 24, 2, 2, 'F');

          doc.setFontSize(10);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(15, 30, 55);
          doc.text(`${p.name} [${p.category}]`, margin + 3, y + 5);

          doc.setFontSize(8.5);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(53, 109, 255);
          doc.text(`Standing: ${p.achievementBadge}`, margin + 3, y + 9.5);

          doc.setFontSize(8);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(60, 70, 80);
          const descLines = doc.splitTextToSize(p.description, contentWidth - 6);
          doc.text(descLines, margin + 3, y + 14);

          doc.setFontSize(7.5);
          doc.setTextColor(90, 100, 110);
          doc.text(`Tags: ${p.tags.join(', ')}`, margin + 3, y + 20.5);

          y += 27;
        });

        y += 3;

        // Section: Workflow
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(7, 20, 38);
        doc.text('5. Problem Solving Workflow', margin, y);
        y += 6;

        const workflowSteps = [
          'Step 1 (Discover): Understand problem, constraints, and user needs.',
          'Step 2 (Research): Evaluate technical feasibility, AI/ML models, and business value.',
          'Step 3 (Build & Integrate): Synchronize frontend, backend, databases, and intelligent modules.',
          'Step 4 (Test & Present): Validate flows, document limitations, and present transparently.',
        ];

        workflowSteps.forEach((s) => {
          doc.setFontSize(8.5);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(40, 50, 60);
          doc.text(`• ${s}`, margin + 2, y);
          y += 5;
        });

        doc.save('InnovateX_Portfolio_Triwizathon2026.pdf');
        setFeedbackMsg('InnovateX_Portfolio_Triwizathon2026.pdf downloaded successfully!');
        setDownloadSuccess(true);
      } else {
        // Fallback to browser print which triggers system print-to-PDF
        setFeedbackMsg('Opening system Print dialog (Select "Save as PDF")...');
        setDownloadSuccess(true);
        setTimeout(() => window.print(), 300);
      }
    } catch (err) {
      console.error('PDF error, falling back to window.print()', err);
      window.print();
    } finally {
      setIsGenerating(false);
      setTimeout(() => setDownloadSuccess(false), 5000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm no-print">
      <div className="w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#0D1B2A] border border-[#1E3A5F] shadow-2xl text-slate-200 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#12243A] transition-colors"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-[#356DFF]/20 border border-[#356DFF]/40 text-[#52D6FF] flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Portfolio PDF Backup</h3>
            <p className="text-xs text-slate-400 font-mono">Triwizathon 2026 Submission Document</p>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          Generate an official submission backup containing all four team members, responsibilities, verified hackathon track record (Fusion 2026 Top 10, CodeRush 2.0 Top 30, and 2× Finalists), projects, and workflow.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleGeneratePdf}
            disabled={isGenerating}
            className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#356DFF] to-[#1E4ECC] text-white hover:from-[#477CFF] hover:to-[#356DFF] shadow-lg shadow-[#356DFF]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-4 h-4 text-[#52D6FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>{isGenerating ? 'Preparing Document...' : 'Download Portfolio PDF'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="w-full py-3 px-4 rounded-xl font-semibold text-xs bg-[#12243A] hover:bg-[#1A2E4C] text-slate-200 hover:text-white border border-[#1A2E4C] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span>Open Browser Print-to-PDF Dialog</span>
          </button>
        </div>

        {downloadSuccess && (
          <div className="mt-4 p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feedbackMsg}</span>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#12243A] flex items-center justify-between text-xs text-slate-400">
          <span>Format: Standard A4 Clean Layout</span>
          <button onClick={onClose} className="hover:text-white cursor-pointer">Close</button>
        </div>
      </div>
    </div>
  );
};
