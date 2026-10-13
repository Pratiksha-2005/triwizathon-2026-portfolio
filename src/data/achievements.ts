export interface Achievement {
  id: string;
  event: string;
  reportedLevel: string;
  locationOrInstitution: string;
  project: string;
  result: "Top 10" | "Top 30" | "Finalist";
  resultType: "top-tier" | "finalist";
  badgeText: string;
  description: string;
  metricsLabel: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "coderush-2-0",
    event: "CodeRush 2.0",
    reportedLevel: "International-level hackathon",
    locationOrInstitution: "Nagpur",
    project: "Self-Evolving Research Agent",
    result: "Top 30",
    resultType: "top-tier",
    badgeText: "Top 30 Placement",
    description: "Competed with the Self-Evolving Research Agent project, exploring autonomous multi-step reasoning and research synthesis.",
    metricsLabel: "Top 30 Finish"
  },
  {
    id: "fusion-2026",
    event: "Fusion 2026",
    reportedLevel: "International-level hackathon",
    locationOrInstitution: "SKN, Pune",
    project: "OrbitOpt",
    result: "Top 10",
    resultType: "top-tier",
    badgeText: "Top 10 Placement",
    description: "Presented the OrbitOpt algorithmic optimization model, achieving a Top 10 finish in competitive technical evaluations.",
    metricsLabel: "Top 10 Final Standing"
  },
  {
    id: "hackwave-3-0",
    event: "HackWave 3.0",
    reportedLevel: "Hackathon",
    locationOrInstitution: "Indore",
    project: "SafeTour",
    result: "Finalist",
    resultType: "finalist",
    badgeText: "Finalist Recognition",
    description: "Reached the final evaluation round presenting SafeTour, addressing traveler distress alerting and safety networks.",
    metricsLabel: "Finalist Round"
  },
  {
    id: "curiousparc",
    event: "CuriousPARC",
    reportedLevel: "Hackathon",
    locationOrInstitution: "VIT Pune",
    project: "InnovaFarm AI",
    result: "Finalist",
    resultType: "finalist",
    badgeText: "Finalist Recognition",
    description: "Selected as a finalist presenting InnovaFarm AI, exploring computer vision and decision support for agriculture.",
    metricsLabel: "Finalist Round"
  }
];

export const ACHIEVEMENTS_SUMMARY =
  "Across four hackathon experiences, InnovateX has earned Top 10 and Top 30 placements and two finalist recognitions, building experience in technical problem-solving, project development, and presenting ideas under time constraints.";
