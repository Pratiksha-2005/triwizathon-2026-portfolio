import React from 'react';
import type { TeamMember } from '../data/team';

interface TeamCardProps {
  member: TeamMember;
  expanded: boolean;
  onToggle: () => void;
}

/* ── Social icon SVGs ── */
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`w-3.5 h-3.5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    fill="none" viewBox="0 0 24 24" stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export const TeamCard: React.FC<TeamCardProps> = ({ member, expanded, onToggle }) => {

  return (
    <div className="w-full flex flex-col justify-between p-6 rounded-2xl bg-[#0D1B2A] border border-[#1A2E4C] hover:border-[#356DFF]/60 shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
      {/* Decorative top accent glow */}
      <div
        className="absolute top-0 left-0 right-0 h-1 transition-all group-hover:h-1.5"
        style={{ backgroundColor: member.accentColor }}
      />

      <div>
        {/* Centered Photo/Avatar + Badge */}
        <div className="flex flex-col items-center mb-6 pt-2">
          {/* Avatar — large centered photo with initials fallback */}
          <div className="relative mb-4">
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = 'flex';
                }}
                className="rounded-2xl object-cover object-top shadow-lg border"
                style={{
                  width: '150px',
                  height: '150px', borderColor: `${member.accentColor}60`,
                  boxShadow: `0 8px 18px -4px ${member.accentColor}25`,
                }}
              />
            ) : null}
            {/* Initials fallback */}
            <div
              className="rounded-2xl items-center justify-center text-xl font-bold font-mono tracking-wider text-white shadow-lg border"
              style={{
                width: '150px',
                height: '150px',
                backgroundColor: '#0A1E14',
                borderColor: `${member.accentColor}60`,
                boxShadow: `0 8px 18px -4px ${member.accentColor}25`,
                display: member.photo ? 'none' : 'flex',
              }}
            >
              {member.initials}
            </div>
            <div
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-[#0D1B2A]"
              style={{ backgroundColor: member.accentColor }}
              title="Active Team Role"
            />
          </div>

          {/* Role Badge */}
          <span
            className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border shadow-sm"
            style={{
              backgroundColor: '#0A1E14',
              color: member.accentColor,
              borderColor: `${member.accentColor}40`,
            }}
          >
            {member.badge}
          </span>
        </div>

        {/* Member Name — with extra spacing */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#22D3EE] transition-colors text-center">
          {member.name}
        </h3>

        {/* Role — with decorative divider below */}
        <p className="text-xs font-semibold text-[#22D3EE] mb-1 tracking-tight text-center">
          {member.role}
        </p>
        <div
          className="w-10 h-0.5 rounded-full mx-auto mb-5 opacity-40"
          style={{ backgroundColor: member.accentColor }}
        />

        {/* Education & CGPA */}
        {member.education && (
          <p className="text-[11px] text-slate-400 font-mono mb-3.5 leading-snug text-center">
            🎓 {member.education}
            {member.cgpa && <span className="ml-1.5 text-[#22D3EE] font-semibold">· CGPA {member.cgpa}</span>}
          </p>
        )}

        {/* Member Bio */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          {member.bio}
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              title={member.email}
              className="flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-lg border border-[#0D2A1A] text-slate-300 hover:text-white hover:border-[#84CC16]/60 bg-[#0A1E14] transition-colors"
            >
              <EmailIcon /> Email
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-lg border border-[#0D2A1A] text-slate-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/60 bg-[#0A1E14] transition-colors"
            >
              <LinkedInIcon /> LinkedIn
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-lg border border-[#0D2A1A] text-slate-300 hover:text-white hover:border-slate-400/60 bg-[#0A1E14] transition-colors"
            >
              <GitHubIcon /> GitHub
            </a>
          )}
          {member.phone && (
            <a
              href={`tel:+91${member.phone}`}
              title={`+91 ${member.phone}`}
              className="flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-lg border border-[#0D2A1A] text-slate-300 hover:text-[#22D3EE] hover:border-[#22D3EE]/60 bg-[#0A1E14] transition-colors"
            >
              <PhoneIcon /> {member.phone}
            </a>
          )}
        </div>
      </div>

      {/* Responsibilities Checklist */}
      <div className="pt-4 border-t border-[#0A1E14]">
        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
          Team Responsibilities
        </div>
        <ul className="space-y-1.5 mb-4">
          {member.responsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <svg
                className="w-3.5 h-3.5 flex-shrink-0"
                style={{ color: member.accentColor }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>{resp}</span>
            </li>
          ))}
        </ul>

        {/* Expandable: Skills + Key Projects */}
        {(member.skills?.length || member.keyProjects?.length) && (
          <>
            <button
              onClick={onToggle}
              className="w-full flex items-center justify-between text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-200 transition-colors py-1.5 focus:outline-none"
              aria-expanded={expanded}
            >
              <span>{expanded ? 'Show less' : 'Skills & Projects'}</span>
              <ChevronIcon open={expanded} />
            </button>

            {expanded && (
              <div className="mt-3 space-y-4 animate-expand-in">
                {/* Skills */}
                {member.skills?.length && (
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">
                      Technical Skills
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A1E14] border border-[#0D2A1A] text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Projects */}
                {member.keyProjects?.length && (
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">
                      Key Projects
                    </div>
                    <ul className="space-y-1.5">
                      {member.keyProjects.map((proj, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <span style={{ color: member.accentColor }} className="mt-0.5 font-bold flex-shrink-0">›</span>
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
