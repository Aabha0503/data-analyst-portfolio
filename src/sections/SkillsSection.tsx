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

const categoryVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" } }
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
      <div className="mb-8 flex items-start gap-3">
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
        className="grid gap-9"
        initial="hidden"
        variants={gridVariants}
        viewport={{ once: true, amount: 0.12 }}
        whileInView="show"
      >
        {skillCategories.map((category, categoryIndex) => {
          const CategoryIcon = category.icon;

          return (
            <motion.section key={category.title} variants={categoryVariants}>
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={[
                    "flex h-10 w-10 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface",
                    category.accent
                  ].join(" ")}
                >
                  <CategoryIcon aria-hidden="true" size={19} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase text-dashboard-subtle">
                    Category {String(categoryIndex + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-dashboard-text">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {category.skills.map((skill) => (
                  <motion.article
                    className="group min-h-[132px] rounded-component border border-dashboard-border bg-dashboard-surface p-4 shadow-dashboard transition-colors duration-300 hover:border-dashboard-primary/60 hover:bg-dashboard-surfaceMuted/70"
                    key={skill.name}
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={[
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-background/70 transition-colors duration-300 group-hover:border-dashboard-primary/50",
                          category.accent
                        ].join(" ")}
                      >
                        <CategoryIcon aria-hidden="true" size={18} />
                      </span>
                      <div>
                        <h4 className="text-base font-bold text-dashboard-text">
                          {skill.name}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-dashboard-muted">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          );
        })}
      </motion.div>
    </Section>
  );
}
