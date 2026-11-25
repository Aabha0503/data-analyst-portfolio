import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { LayoutDashboard } from "lucide-react";
import { Section } from "@/components";
import { skillCategories } from "@/data";

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } }
};

export function SkillsSection() {
  return (
    <Section
      aria-label="Technical Skills"
      className="pb-16 pt-8 sm:pb-24"
      id="skills"
    >
      <div className="mb-6 flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-primary">
          <LayoutDashboard aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase text-dashboard-primary">
            Technical Skills
          </p>
          <h2 className="mt-2 text-3xl font-bold text-dashboard-text sm:text-4xl">
            Analytics Toolkit
          </h2>
        </div>
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-2"
        initial="hidden"
        variants={gridVariants}
        viewport={{ once: true, amount: 0.16 }}
        whileInView="show"
      >
        {skillCategories.map((category) => {
          const CategoryIcon = category.icon;

          return (
            <motion.article
              className="rounded-component border border-dashboard-border bg-dashboard-surface p-4 shadow-dashboard transition-colors duration-300 hover:border-dashboard-primary/60 hover:bg-dashboard-surfaceMuted/70 sm:p-5"
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3">
                <span
                  className={[
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-background/70",
                    category.accent
                  ].join(" ")}
                >
                  <CategoryIcon aria-hidden="true" size={17} />
                </span>
                <h3 className="text-lg font-bold text-dashboard-text">
                  {category.title}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    className="max-w-full rounded-component border border-dashboard-border bg-dashboard-background/70 px-2.5 py-1.5 text-xs font-semibold leading-5 text-dashboard-muted transition-colors duration-300 hover:border-dashboard-primary/50 hover:text-dashboard-text"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
