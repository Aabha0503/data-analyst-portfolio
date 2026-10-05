import type { LucideIcon } from "lucide-react";
import { BadgeCheck, BarChart3, Bot, PieChart } from "lucide-react";

export type Certification = {
  name: string;
  provider: string;
  status: "Completed" | "In Progress";
  date?: string;
  certificateUrl?: string;
  icon: LucideIcon;
};

export const certifications: Certification[] = [
  {
    name: "Google Advanced Data Analytics",
    provider: "Google · Coursera",
    status: "Completed",
    date: "April 11, 2026",
    certificateUrl: "/certificates/google-advanced-data-analytics.pdf",
    icon: BarChart3
  },
  {
    name: "Generative AI Data Analyst",
    provider: "Vanderbilt University · Coursera",
    status: "Completed",
    date: "October 25, 2025",
    certificateUrl: "/certificates/generative-ai-data-analyst.pdf",
    icon: Bot
  },
  {
    name: "Google Data Analytics",
    provider: "Google · Coursera",
    status: "Completed",
    date: "August 27, 2025",
    certificateUrl: "/certificates/google-data-analytics.pdf",
    icon: PieChart
  },
  {
    name: "Microsoft Power BI Data Analyst Professional Certificate",
    provider: "Microsoft",
    status: "In Progress",
    icon: BadgeCheck
  }
];
