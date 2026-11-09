export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeType: "microsoft" | "trueminds" | "jobberman" | "niit" | "uopeople";
  summary: string;
  tags: string[];
  link?: string;
}

export const certifications: Certification[] = [
  {
    id: "azure-ai-900",
    title: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft Elevate · Digital Skills Nigeria",
    date: "April 2026",
    badgeType: "microsoft",
    summary:
      "Demonstrated core proficiency in Artificial Intelligence and Machine Learning workloads, including computer vision, natural language processing, and conversational AI on Microsoft Azure.",
    tags: ["Microsoft Azure", "AI Fundamentals", "Machine Learning", "Cloud AI"],
    link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
  },
  {
    id: "trueminds-frontend",
    title: "Frontend Developer Internship Certificate",
    issuer: "Trueminds Innovations Ltd · Cohort One",
    date: "April 2026",
    credentialId: "INT-CERT-CAR216417189338",
    badgeType: "trueminds",
    summary:
      "Awarded for exceptional performance in delivering production-grade responsive UI components, Storybook design systems, and frontend features ahead of sprint deadlines.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Agile Sprints"],
  },
  {
    id: "global-gig-work",
    title: "Global Gig Work Mastery",
    issuer: "Jobberman · Mastercard Foundation · Propel",
    date: "December 2025",
    badgeType: "jobberman",
    summary:
      "Comprehensive certification in international freelance and contract engineering, client stakeholder management, cross-border remote collaboration, and high-standard project delivery.",
    tags: ["Remote Engineering", "Client Delivery", "Global Contracts", "Professional Practice"],
  },
  {
    id: "niit-fullstack",
    title: "Full Stack Software Developer Program",
    issuer: "NIIT, Nigeria",
    date: "Semester 3 of 4 · In Progress",
    badgeType: "niit",
    summary:
      "Four-semester rigorous software engineering diploma covering enterprise systems development, modern full-stack workflows, database modeling, and Spring Boot architecture.",
    tags: ["Java", "Spring Boot", "SQL", "MongoDB", "Enterprise Systems"],
  },
  {
    id: "uopeople-cs",
    title: "Bachelor of Science, Computer Science",
    issuer: "University of the People",
    date: "Currently Enrolled",
    badgeType: "uopeople",
    summary:
      "Degree coursework covering foundational computing theory, data structures, algorithms, operating systems, and discrete mathematics.",
    tags: ["Computer Science", "Algorithms", "Data Structures", "System Design"],
  },
];
