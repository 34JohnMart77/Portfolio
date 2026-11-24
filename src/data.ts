import profileImage from "../profile1 (1).jpg";
import profile1 from "../profile1 (1).jpg";
import profile2 from "../profile1 (2).jpg";
import profile3 from "../profile1 (3).jpg";
import profile4 from "../profile1 (4).jpg";
import profile5 from "../profile1 (5).jpg";
import profile6 from "../profile1 (6).jpg";
import profile7 from "../profile1 (7).jpg";
import profile8 from "../profile1 (8).jpg";
import locationImage from "../Location.jpg";
import certificateImage from "../certificate.jpg";
import muriLogo from "../muri-logo.jpg";
import payrollLogo from "../rcmeatshop.png";



export const profile = {
  name: "John Mart Murillon",
  initials: "JM",
  avatar: profileImage,
  avatarDirections: [profile1, profile2, profile3, profile4, profile5, profile6, profile7, profile8],
  title: "Full-Stack Developer",
  subtitle: "Node.js • TypeScript • React • MySQL • MongoDB • Laravel • Python • Fast API • Gemini",
  status: "Open to junior roles & internships",
  email: "johnmart.murillon@gmail.com",
  phone: "+63 985 626 0932",
  locationImage: locationImage,
  location: "Caraga Region, Philippines • Remote-friendly",
  focus: "Node.js • TypeScript • React • MySQL • MongoDB • Laravel • Python • Fast API • Gemini",
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
    body: "Embedding Gemini Api —  Muri's its ai power learning apps you get and certificate  when you finish the course.",
  },
  {
    tag: "03",
    title: "Figma",
    body: " I use figma prototype  and desing UX  and UI they two project i build ",
  },
  {
    tag: "04",
    title: "Basic Networking ",
    body: "I learn  about how ip Adress communicate and how cisco packet works",
  },

];

export const education = [
  {
    school: "BS Information Systems",
    place: "Makilala Institute of Science and Technology",
    period: "2026 — Present",
    body: "Relevant coursework: Human-Computer Interaction, Enterprise Architecture, Statistics, Data Structures & Algorithms. Consistently applying theory through self-directed full-stack builds.",
  },
];

export const experience = [
  {
    role: "Full-Stack Developer — Muri (Personal Flagship)",
    period: "2025 — Present",
    body: "AI-powered Learning Management System. Evolved from desktop prototype to mobile-first app: onboarding, streaks, achievements, bookmarks, notes, certificates, and a Gemini AI tutor integrated at the lesson level.",
  },
  {
    role: "Full-Stack Developer — Payroll Monitoring System",
    period: "2025",
    body: "Payroll ops tool for MdBusinessCenter — centralized attendance, deductions, and reporting so admins can audit payroll in one place. Stack: Laravel/PHP, MySQL, deployed on Vercel.",
  },
];

export const skillGroups = [
  {
    key: "frontend",
    label: "Frontend",
    skills: [
      { name: "React / Node.js", level: 50 },
      { name: "TypeScript", level: 50 },
      { name: "Vite / Tooling", level: 50 },
      { name: "HTML / CSS / Motion", level: 50 },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js / Express", level: 50 },
      { name: "Laravel / PHP", level: 50 },
      { name: "REST APIs & Auth", level: 50 },
      { name: "OAuth / JWT", level: 50 },
      { name: "Python / Fast API ", level:50},
    ],
  },
  {
    key: "tools",
    label: "Data & Tools",
    skills: [
      { name: "MySQL / MongoDB", level: 50 },
      { name: "Git / GitHub", level: 50 },
      { name: "Composer / XAMPP", level: 50 },
      { name: "Vercel / Deployment", level: 50 },
      { name: "Render / Deployment", level: 50}
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
    year: "2026",
    summary: "Learn Play and Grow",
    detail:
    "Learning should be fun,not boring.Muri is an AI=powerd learning app that help you study everday",
    stack: ["Python", "React", "Mysql", "Gemini", "Render"],
    logo: muriLogo,
    liveUrl: "https://muri-d93k.onrender.com",
    featured: true,
  },
  {
    title: "Payroll Monitoring System",
    category: "Full-Stack Apps",
    year: "2025",
    summary: "Payroll ops dashboard for tracking deductions & generating reports.",
    detail:
      "Internal tool for MdBusinessCenter. Admins manage employees, monitor deductions, and generate payroll reports in one place — previously scattered across spreadsheets.",
    stack: ["Nodejs", "Reactjs", "MongoDb", "Lovable", "Vercel"],
    logo: payrollLogo,
    liveUrl: "https://qr-pay-monitor.vercel.app/",
    featured: true,
  },
]

export const notes: { date: string; title: string; body: string; image?: string }[] = [
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
    date: "Jan 2026",
    title: "Certificate of National Certificate 2 in CSS",
    body: "I know how to setp-up and Operating System and TroubleShoot Sharing IP Adress in Computer and Print between another computer that have 1 computer usable",
    image: certificateImage,
  },
  {
    date: "November 2026",
    title: "Shipping an AI tutor inside a mobile LMS",
    body: "How Muri's Claude tutor went from a bolted-on chat box to a lesson-native assistant that feels like part of the course.",
  },
];
