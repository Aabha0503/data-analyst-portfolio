import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";

export type Experience = {
  company: string;
  position: string;
  duration: string;
  icon: LucideIcon;
  responsibilities: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    company: "JSW Group",
    position: "Data Analytics Intern",
    duration: "December 2025 – February 2026",
    icon: BriefcaseBusiness,
    responsibilities: [
      "Generated monthly energy performance reports in Microsoft Excel by comparing actual energy consumption against planned targets.",
      "Performed variance and deviation analysis to identify abnormal consumption patterns and support operational decision-making.",
      "Analyzed and validated operational datasets to ensure reporting accuracy and consistency.",
      "Conducted stock market data analysis using Python to examine historical price trends, OHLC data (Open, High, Low, Close) and market volatility.",
      "Collaborated with cross-functional teams to prepare analytical reports and provide data-driven insights.",
      "Assisted in backend feature development using Java and Spring Boot."
    ],
    technologies: [
      "Microsoft Excel",
      "Python",
      "Java",
      "Spring Boot",
      "Data Analysis"
    ]
  }
];
