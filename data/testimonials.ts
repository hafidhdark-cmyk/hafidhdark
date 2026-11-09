export interface Testimonial {
  id: string;
  badge: string;
  badgeColor: "emerald" | "violet";
  quote: string;
  avatar: string;
  author: string;
  organization: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "darul-hifdh",
    badge: "Verified Client Delivery",
    badgeColor: "emerald",
    quote:
      "Seriously I like how you makes our imaginations possible in this website development wallah 🥰",
    avatar: "DH",
    author: "Client Feedback — Darul-Hifdh",
    organization: "Online Islamic Institution",
  },
  {
    id: "trueminds-innovations",
    badge: "Verified Internship Deliverable",
    badgeColor: "violet",
    quote:
      "Demonstrated consistent ownership in delivering responsive UI components and collaborative frontend modules ahead of production sprints.",
    avatar: "TM",
    author: "Engineering Lead Review — Trueminds Innovations Ltd",
    organization: "Chuks Kitchen & TalentFlow Landing Page",
  },
];
