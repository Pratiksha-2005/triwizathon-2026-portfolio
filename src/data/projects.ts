export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  achievementBadge: string;
  associatedHackathon: string;
  resultPlacement: string;
  tags: string[];
  features: string[];
  accentColor: string;
  teamMembers?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "self-evolving-research-agent",
    name: "Self-Evolving Research Agent",
    category: "Agentic AI / Research Automation",
    description: "An autonomous agentic AI system that automates research workflows by gathering information, applying retrieval-augmented generation (RAG), and iteratively refining its own research process through governed self-improvement loops.",
    achievementBadge: "CodeRush 2.0 · Top 30",
    associatedHackathon: "CodeRush 2.0",
    resultPlacement: "Top 30",
    tags: ["Agentic AI", "RAG", "Autonomous Workflow", "Task Orchestration", "Python"],
    features: [
      "Autonomous multi-step research pipeline orchestration",
      "Retrieval-augmented generation (RAG) for grounded information gathering",
      "Dynamic prompt decomposition & iterative synthesis",
      "Governed self-improvement loop with structured output validation",
      "Citation tracing & adaptive recursive task refinement"
    ],
    accentColor: "#8B5CF6",
    teamMembers: ["Pravin Aadake", "Pratiksha Bhaskare"]
  },
  {
    id: "orbitopt",
    name: "OrbitOpt",
    category: "Optimization / Satellite Technology",
    description: "A satellite downlink scheduling system using OR-Tools CP-SAT constraint optimisation to significantly outperform First-Come, First-Served (FCFS) scheduling, maximising communication windows across multiple satellites and ground stations.",
    achievementBadge: "Fusion 2026 · Top 10",
    associatedHackathon: "Fusion 2026",
    resultPlacement: "Top 10",
    tags: ["CP-SAT", "OR-Tools", "Constraint Optimisation", "Satellite Scheduling", "Python"],
    features: [
      "Multi-satellite / multi-ground-station constraint scheduling engine",
      "CP-SAT solver with priority, visibility window & resource constraints",
      "Benchmark comparison: optimised schedule vs. FCFS baseline",
      "Interactive parameter tuning & telemetry visualisation",
      "Modular scoring and real-time resource utilisation analysis"
    ],
    accentColor: "#356DFF",
    teamMembers: ["Samarth Kumbhar", "Pratiksha Bhaskare"]
  },
  {
    id: "safetour",
    name: "SafeTour / Smart Tourist Safety",
    category: "Tourism Safety / Mobile App",
    description: "A tourist safety application providing location-based risk information, one-tap emergency SOS, incident reporting, real-time safety alerts, and offline safety guidelines — helping travellers stay informed and protected in unfamiliar regions.",
    achievementBadge: "HackWave 3.0 · Finalist",
    associatedHackathon: "HackWave 3.0",
    resultPlacement: "Finalist",
    tags: ["Safety Tech", "Geolocation", "Emergency SOS", "Incident Reporting", "Mobile First"],
    features: [
      "Location-based real-time risk zone awareness & safety advisories",
      "One-tap emergency SOS with rapid telemetry beacon",
      "Incident reporting with community-sourced hazard data",
      "Offline-first regional safety guidelines cache",
      "Trusted contact real-time status check-in & alert relay"
    ],
    accentColor: "#52D6FF",
    teamMembers: ["Pratiksha Bhaskare", "Shreyas Suryawanshi"]
  },
  {
    id: "innovafarm-ai",
    name: "InnovaFarm AI",
    category: "Smart Agriculture / AI",
    description: "A smart agriculture AI platform providing crop health diagnosis, irrigation recommendations, soil and meteorological analysis, and yield risk assessments — empowering farmers with actionable, data-driven agricultural insights.",
    achievementBadge: "CuriousPARC at VIT Pune · Finalist",
    associatedHackathon: "CuriousPARC @ VIT Pune",
    resultPlacement: "Finalist",
    tags: ["AgriTech", "Computer Vision", "Decision Support", "Crop Intelligence", "FastAPI"],
    features: [
      "AI-powered crop health visual diagnostic assistance",
      "Soil condition & meteorological heuristics for irrigation support",
      "Localised yield risk assessment & weather-based suggestions",
      "Crop recommendation engine with region-aware variety selection",
      "Actionable resource conservation & smart farming advisories"
    ],
    accentColor: "#10B981",
    teamMembers: ["Pravin Aadake", "Samarth Kumbhar"]
  }
];
