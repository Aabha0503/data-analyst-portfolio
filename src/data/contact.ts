import type { LucideIcon } from "lucide-react";
import { BarChart3, Github, Linkedin, Mail } from "lucide-react";

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "aabha.arora.work@gmail.com",
    href: "mailto:aabha.arora.work@gmail.com",
    icon: Mail,
    external: false
  },
  {
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/aabha-arora-aa0628288/",
    icon: Linkedin,
    external: true
  },
  {
    label: "GitHub",
    value: "GitHub Profile",
    href: "https://github.com/Aabha0503",
    icon: Github,
    external: true
  },
  {
    label: "Kaggle",
    value: "Kaggle Profile",
    href: "https://www.kaggle.com/aabhaaroratanu",
    icon: BarChart3,
    external: true
  }
];
