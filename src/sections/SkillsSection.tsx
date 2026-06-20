import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  BarChart3,
  Database,
  LayoutDashboard,
  Settings2,
  Sigma
} from "lucide-react";
import { Section } from "@/components";

const skillCategories = [
  {
    title: "Data Analysis",
    icon: Sigma,
    accent: "text-dashboard-primary",
    skills: ["Exploratory Analysis", "Data Cleaning", "Trend Analysis"]
  },
  {
    title: "Databases",
    icon: Database,
    accent: "text-dashboard-success",
    skills: ["SQL Queries", "Relational Data", "Data Modeling"]
  },
  {
    title: "Visualization",
    icon: BarChart3,
    accent: "text-dashboard-primary",
    skills: ["Dashboard Design", "Chart Selection", "Storytelling"]
  },
  {
    title: "Tools",
    icon: Settings2,
    accent: "text-dashboard-success",
    skills: ["Excel", "Power BI", "Python"]
  }
];

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" } }
};

export function SkillsSection() {
  return (
    <Section aria-label="Skills" className="pb-16 pt-8 sm:pb-24" id="skills">
      <div className="mb-6 flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-primary">
          <LayoutDashboard aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase text-dashboard-primary">
            Skills
          </p>
          <h2 className="mt-2 text-3xl font-bold text-dashboard-text sm:text-4xl">
            Analytics Capabilities
          </h2>
        </div>
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        initial="hidden"
        variants={gridVariants}
        viewport={{ once: true, amount: 0.2 }}
        whileInView="show"
      >
        {skillCategories.map((category) => {
          const Icon = category.icon;

          return (
            <motion.article
              className="group rounded-component border border-dashboard-border bg-dashboard-surface p-5 shadow-dashboard transition-colors duration-300 hover:border-dashboard-primary/60 hover:bg-dashboard-surfaceMuted/70"
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <span
                  className={[
                    "flex h-11 w-11 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-background/70 transition-colors duration-300 group-hover:border-dashboard-primary/50",
                    category.accent
                  ].join(" ")}
                >
                  <Icon aria-hidden="true" size={21} />
                </span>
                <span className="rounded-component bg-dashboard-background/70 px-3 py-1 text-xs font-semibold uppercase text-dashboard-subtle">
                  Category
                </span>
              </div>

              <h3 className="text-xl font-bold text-dashboard-text">
                {category.title}
              </h3>

              <div className="mt-5 grid gap-3">
                {category.skills.map((skill) => (
                  <div
                    className="flex items-center justify-between gap-3 rounded-component border border-dashboard-border bg-dashboard-background/60 px-3 py-3"
                    key={skill}
                  >
                    <span className="text-sm font-medium text-dashboard-muted">
                      {skill}
                    </span>
                    <span className="h-2 w-2 rounded-sm bg-dashboard-primary" />
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
