import profileImage from "../Profile.jpg";
import locationImage from "../Location.jpg";

export const profile = {
  name: "John Mart Murillon",
  initials: "JM",
  avatar: profileImage,
  title: "Full-Stack Developer",
  subtitle: "Node.js • TypeScript • React",
  status: "Open to junior roles & internships",
  email: "johnmart.murillon@gmail.com",
  phone: "+63 985 260 9323",
  location: "Caraga Region, Philippines • Remote-friendly",
  locationImage,
  focus: "Node.js • TypeScript • React • MySQL • MongoDB • Laravel",
  tagline: "I build end-to-end products — from REST APIs & database design to polished React interfaces.",
  socials: [
    { label: "GitHub", href: "https://github.com/34JohnMart77" },
    { label: "LinkedIn", href: "https://linkedin.com/in/johnmartmurillon" },
    { label: "Email", href: "mailto:johnmart.murillon@gmail.com" },
    { label: "Facebook", href: "https://www.facebook.com/Murillon.JohnMart" },
  ],
};

export const stats = [
  { value: "2", label: "Built projects" },
  { value: "React", label: "Frontend focus" },
  { value: "Node.js", label: "Backend focus" },
];

export const doing = [
  {
    tag: "01",
    title: "Full-Stack Applications",
    body: "Designing REST APIs (Node.js / Laravel), modeling MySQL/MongoDB schemas, and shipping responsive React + TypeScript UIs — from npm init to deployment.",
  },
  {
    tag: "02",
    title: "AI-Integrated Features",
    body: "Embedding Claude AI into products — like Muri's in-lesson tutor — to turn static content into conversational, adaptive learning.",
  },
  {
    tag: "03",
    title: "Enterprise Architecture",
    body: "Translating business goals into aligned application, data & technology architectures — documented and traceable for real organizations.",
  },
  {
    tag: "04",
    title: "UX & Interaction Design",
    body: "Mapping user flows and validating usability (HCI) before coding, so interfaces feel intentional, not accidental.",
  },
  {
    tag: "05",
    title: "Internal Tools & Ops Systems",
    body: "Building ops-focused systems like payroll monitoring and agri-livestock dashboards that make reporting and tracking actually usable.",
  },
];

export const education = [
  {
    school: "BS Information Systems",
    place: "Makilala Institute of Science and Technology",
    period: "2022 — Present",
    body: "Relevant coursework: Human-Computer Interaction, Enterprise Architecture, Statistics, Data Structures & Algorithms. Consistently applying theory through self-directed full-stack builds.",
  },
];

export const experience = [
  {
    role: "Full-Stack Developer — Muri (Personal Flagship)",
    period: "2025 — Present",
    body: "AI-powered Learning Management System. Evolved from desktop prototype to mobile-first app: onboarding, streaks, achievements, bookmarks, notes, certificates, and a Claude-powered AI tutor integrated at the lesson level.",
  },
  {
    role: "Full-Stack Developer — Ledger (Personal Project)",
    period: "2025",
    body: "Stock portfolio dashboard with a terminal-inspired UI — live equity curves, sector filtering, holdings table, and a complete MongoDB/Mongoose + OAuth architecture.",
  },
  {
    role: "Enterprise Architecture — Course Lead Projects",
    period: "2024 — 2025",
    body: "Authored full EA alignment profiles for two organizations (AR E-School AI Chatbot & Kalinga AgriLivestock Enterprise) covering business → application → data → technology traceability.",
  },
  {
    role: "Full-Stack Developer — Payroll Monitoring System",
    period: "2024",
    body: "Payroll ops tool for MdBusinessCenter — centralized attendance, deductions, and reporting so admins can audit payroll in one place. Stack: Laravel/PHP, MySQL, deployed on Vercel.",
  },
];

export const skillGroups = [
  {
    key: "frontend",
    label: "Frontend",
    skills: [
      { name: "React / Next.js", level: 88 },
      { name: "TypeScript", level: 84 },
      { name: "Vite / Tooling", level: 82 },
      { name: "HTML / CSS / Motion", level: 85 },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js / Express", level: 86 },
      { name: "Laravel / PHP", level: 80 },
      { name: "REST APIs & Auth", level: 83 },
      { name: "OAuth / JWT", level: 78 },
    ],
  },
  {
    key: "tools",
    label: "Data & Tools",
    skills: [
      { name: "MySQL / MongoDB", level: 82 },
      { name: "Git / GitHub", level: 85 },
      { name: "Composer / XAMPP", level: 80 },
      { name: "Vercel / Deployment", level: 78 },
    ],
  },
];

export type ProjectCategory = "Full-Stack Apps" | "Concepts" | "Mobile";

export interface Project {
  title: string;
  category: ProjectCategory;
  year?: string;
  summary: string;
  detail: string;
  stack: string[];
  status?: "Planned concept";
  logo?: string;
  demoType?: "chatbot";
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Muri",
    category: "Mobile",
    year: "2025",
    summary: "AI-powered mobile LMS with an in-lesson Claude tutor, streaks & certificates.",
    detail:
      "Flagship mobile learning system. Started as a desktop prototype, shipped as a feature-rich mobile app: auth & onboarding, streak/achievement system, bookmarks, notes, completion certificates, and a Claude API tutor that answers in context — without leaving the lesson.",
    stack: ["React", "TypeScript", "Laravel", "MySQL", "Claude API"],
    logo: "/muri-logo.svg",
    demoType: "chatbot",
    featured: true,
  },
  {
    title: "TaskFlow",
    category: "Concepts",
    summary: "A team task board for planning work, tracking issues, and sharing progress.",
    detail:
      "Planned concept, not yet built. The goal is a full-stack project tracker with workspaces, kanban boards, task assignments, due dates, comments, and filtered views. A strong build would include authenticated APIs, input validation, and clear loading and error states.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    status: "Planned concept",
  },
  {
    title: "Payroll Monitoring System",
    category: "Full-Stack Apps",
    year: "2024",
    summary: "Payroll ops dashboard for tracking deductions & generating reports.",
    detail:
      "Internal tool for MdBusinessCenter. Admins manage employees, monitor deductions, and generate payroll reports in one place — previously scattered across spreadsheets.",
    stack: ["Laravel", "PHP", "MySQL", "Vercel"],
    logo: "/payroll-logo.svg",
    liveUrl: "https://qr-pay-monitor.vercel.app/",
    githubUrl: "https://github.com/34JohnMart77",
    featured: true,
  },
  {
    title: "ShopStack",
    category: "Concepts",
    summary: "A responsive online store with product browsing and an admin inventory view.",
    detail:
      "Planned concept, not yet built. Build a product catalogue, search and filters, shopping cart, order history, and a protected admin area for products and stock. The focus is reliable CRUD workflows, server-side validation, and a relational data model.",
    stack: ["React", "TypeScript", "Laravel", "PHP", "MySQL"],
    status: "Planned concept",
  },
  {
    title: "API Monitor",
    category: "Concepts",
    summary: "A developer dashboard for organizing API endpoints and reviewing check history.",
    detail:
      "Planned concept, not yet built. Create a dashboard to register endpoints, configure check intervals, and review response status and latency history. The project would demonstrate API design, scheduled jobs, persistence, and charts that communicate service health clearly.",
    stack: ["React", "TypeScript", "Node.js", "REST API", "MySQL"],
    status: "Planned concept",
  },
  {
    title: "DevNotes",
    category: "Concepts",
    summary: "A publishing workspace for writing, organizing, and searching developer notes.",
    detail:
      "Planned concept, not yet built. Build a small content-management system with a markdown editor, drafts, tags, search, and a public article view. Add authentication and publishing permissions to demonstrate a complete content workflow.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    status: "Planned concept",
  },
];

export const notes = [
  {
    date: "Aug 2025",
    title: "Getting Composer & XAMPP to stop fighting Windows",
    body: "OpenSSL, SSL/TLS cert errors, and a missing zip extension — three small config fixes that saved an entire afternoon. Documented for next setup.",
  },
  {
    date: "Jul 2025",
    title: "What EA domain-alignment tables are actually for",
    body: "After building two org profiles end-to-end, here's why business → tech traceability matters — and what breaks when you skip it.",
  },
  {
    date: "Jun 2025",
    title: "Shipping an AI tutor inside a mobile LMS",
    body: "How Muri's Claude tutor went from a bolted-on chat box to a lesson-native assistant that feels like part of the course.",
  },
];
