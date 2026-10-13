export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  responsibilities: string[];
  initials: string;
  badge: string;
  accentColor: string;
  education?: string;
  cgpa?: string;
  skills?: string[];
  keyProjects?: string[];
  email?: string;
  linkedin?: string;
  github?: string;
  phone?: string;
  photo?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "pravin-aadake",
    name: "Pravin Aadake",
    role: "Team Leader · Frontend Developer & UI/UX Designer",
    bio: "Leads team coordination and frontend development, with a focus on responsive interfaces, user experience, and presenting the product through a clear, polished interface. Contributes to project planning, feature design, and full-stack integration.",
    responsibilities: [
      "Team coordination & leadership",
      "Frontend development",
      "UI/UX design",
      "Responsive interfaces",
      "Product demonstration"
    ],
    initials: "PA",
    badge: "Leadership & Frontend",
    accentColor: "#356DFF",
    education: "B.Tech CSE (AI/ML) — KIT, Kolhapur · 3rd Year",
    skills: [
      "Python", "Java", "C++", "JavaScript", "TypeScript",
      "React", "HTML", "CSS", "Kotlin", "Jetpack Compose",
      "FastAPI", "REST APIs", "PostgreSQL", "MongoDB",
      "Firebase", "Git/GitHub", "AI/ML"
    ],
    keyProjects: [
      "Editora — Android video editor with AI captions & silence removal",
      "KalaSetu — platform connecting traditional artists with digital opportunities",
      "InnovaFarm AI — smart agriculture with crop recommendations & irrigation support",
      "Self-Evolving Research Agent — agentic AI with RAG-powered iterative research"
    ],
    email: "adakepravin885@gmail.com",
    linkedin: "https://www.linkedin.com/in/pravin-aadake-2a61ab345",
    github: "https://github.com/pravina045",
    phone: "8329147815",
    photo: "/src/assets/team/pravin.jpg"
  },
  {
    id: "samarth-kumbhar",
    name: "Samarth Kumbhar",
    role: "Backend Developer & Database Engineer",
    bio: "Specialises in backend engineering and database-driven applications, developing APIs, designing database structures, implementing optimisation algorithms, and integrating backend services with frontend applications. Has contributed to an aviation industry software project.",
    responsibilities: [
      "Backend development",
      "API design and integration",
      "Database schema design",
      "Optimisation logic",
      "System integration"
    ],
    initials: "SK",
    badge: "Backend & Systems",
    accentColor: "#52D6FF",
    education: "B.Tech — AI/ML & Software Development",
    skills: [
      "Python", "Java", "JavaScript", "FastAPI", "Node.js",
      "Express.js", "React", "TypeScript", "PostgreSQL", "MySQL",
      "MongoDB", "SQLAlchemy", "Alembic", "OR-Tools CP-SAT",
      "Git/GitHub", "Docker"
    ],
    keyProjects: [
      "OrbitOpt — satellite downlink scheduling with CP-SAT constraint optimisation vs. FCFS",
      "SkyConnect / SkyAviation — platform connecting aircraft owners with aviation training institutions",
      "Blockchain Student Project Ownership Registry — verifiable on-chain project authorship records",
      "AI Placement Preparation Portal — tech-assisted platform for student placement readiness"
    ],
    email: "samarthkumbhar2510@gmail.com",
    linkedin: "https://www.linkedin.com/in/samarth-kumbhar-a54a23327",
    github: "https://github.com/Samarthkumbhar99",
    phone: "8625086644",
    photo: "/src/assets/team/samarth.jpg"
  },
  {
    id: "pratiksha-bhaskare",
    name: "Pratiksha Bhaskare",
    role: "AI/ML Engineer & Research Lead",
    bio: "Focuses on AI/ML, Generative AI, research, and full-stack development. Researches technical approaches, designs intelligent application features, integrates APIs, and builds practical solutions across healthcare, tourism safety, cultural platforms, and optimisation systems.",
    responsibilities: [
      "AI/ML development",
      "Technical research",
      "Model and algorithm evaluation",
      "Backend & API integration",
      "AI feature design & validation"
    ],
    initials: "PB",
    badge: "AI/ML & Research",
    accentColor: "#8B5CF6",
    education: "B.Tech CSE (AI/ML) — 3rd Year",
    skills: [
      "Python", "Java", "JavaScript", "TypeScript", "React",
      "Node.js", "Express.js", "REST APIs", "PostgreSQL",
      "MongoDB", "Redis", "HTML", "CSS", "Tailwind CSS",
      "Git/GitHub", "AI/ML"
    ],
    keyProjects: [
      "KalaSetu — digital platform for artist and artisan visibility & opportunity access",
      "Smart Tourist Safety — location-based risk info, emergency SOS, and incident reporting",
      "Satellite Downlink Scheduling — multi-satellite / ground-station optimisation system",
      "Lumora Healthcare Dashboard — organised healthcare information presentation platform"
    ],
    email: "pratibhaskare005@gmail.com",
    linkedin: "https://www.linkedin.com/in/pratiksha-bhaskare-1a8644333",
    github: "https://github.com/Pratiksha-2005",
    phone: "8999618090",
    photo: "/src/assets/team/pratiksha.jpg"
  },
  {
    id: "shreyas-suryawanshi",
    name: "Shreyas Suryawanshi",
    role: "Business & Research Lead / Presenter",
    bio: "Brings a business-oriented perspective to the team — identifying user problems, understanding market needs, communicating project value, and coordinating activities. Founder of Saksham Pravesh, a career-guidance initiative that has supported 100+ students across Maharashtra.",
    responsibilities: [
      "Problem and market research",
      "User needs analysis",
      "Business value proposition",
      "Presentation & documentation",
      "Judge communication"
    ],
    initials: "SS",
    badge: "Strategy & Presentation",
    accentColor: "#10B981",
    education: "B.Tech CSBS (Computer Science & Business Systems) — 3rd Year",
    skills: [
      "C/C++", "Java", "Python", "HTML", "CSS", "JavaScript",
      "Business Research", "Communication", "Leadership",
      "Event Coordination", "Presentation"
    ],
    keyProjects: [
      "Saksham Pravesh — founder of admission & career guidance initiative for 100+ Maharashtra students",
      "Student Leadership — student organisations, event coordination, and team management",
      "Community Engagement — educational guidance and student community initiatives"
    ],
    email: "shreyashsuryawanshi06@gmail.com",
    linkedin: "https://www.linkedin.com/in/shreyash-suryawanshi-2885a030a",
    github: "https://github.com/shreyash220706",
    phone: "9011388302",
    photo: "/src/assets/team/shreyas.jpg"
  }
];
