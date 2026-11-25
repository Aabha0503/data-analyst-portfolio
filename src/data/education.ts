import type { LucideIcon } from "lucide-react";
import { BookOpen, GraduationCap, School } from "lucide-react";

export type EducationRecord = {
  title: string;
  qualification: string;
  institution: string;
  location?: string;
  period: string;
  resultLabel: string;
  result: string;
  icon: LucideIcon;
};

export const education: EducationRecord[] = [
  {
    title: "Class 10",
    qualification: "Secondary Education",
    institution: "DAV Public School",
    location: "Jharsuguda, Odisha",
    period: "2020",
    resultLabel: "Percentage",
    result: "89%",
    icon: School
  },
  {
    title: "Class 12",
    qualification: "Higher Secondary Education",
    institution: "Tamil High School",
    period: "2022",
    resultLabel: "Percentage",
    result: "65%",
    icon: BookOpen
  },
  {
    title: "Graduation",
    qualification: "B.Tech in Computer Science Engineering",
    institution: "Shri Rawatpura Sarkar University",
    location: "Raipur",
    period: "September 2022 – September 2026",
    resultLabel: "CGPA",
    result: "7.5/10",
    icon: GraduationCap
  }
];
