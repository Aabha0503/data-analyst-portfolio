import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import { Section } from "@/components";
import { experience } from "@/data";

const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } }
};

export function ExperienceSection() {
  return (
    <Section
      aria-label="Professional Experience"
      className="pb-20 pt-8 sm:pb-28"
      id="experience"
    >
      <div className="mb-8 flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-primary">
          <BriefcaseBusiness aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase text-dashboard-primary">
            Professional Experience
          </p>
          <h2 className="mt-2 text-3xl font-bold text-dashboard-text sm:text-4xl">
            Data Analytics Internship
          </h2>
        </div>
      </div>

      <motion.div
        className="relative grid gap-5"
        initial="hidden"
        variants={listVariants}
        viewport={{ once: true, amount: 0.18 }}
        whileInView="show"
      >
        {experience.map((item) => {
          const Icon = item.icon;

          return (
            <motion.article
              className="relative rounded-component border border-dashboard-border bg-dashboard-surface p-5 shadow-dashboard transition-colors duration-300 hover:border-dashboard-primary/60 hover:bg-dashboard-surfaceMuted/70 sm:p-6"
              key={`${item.company}-${item.position}`}
              variants={itemVariants}
            >
              <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:gap-8">
                <div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-background/70 text-dashboard-primary">
                      <Icon aria-hidden="true" size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase text-dashboard-primary">
                        Internship
                      </p>
                      <h3 className="mt-1 text-2xl font-bold text-dashboard-text">
                        {item.position}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 text-lg font-semibold text-dashboard-text">
                    {item.company}
                  </p>
                  <p className="mt-2 text-sm font-medium text-dashboard-muted">
                    {item.duration}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-dashboard-subtle">
                    Responsibilities & Contributions
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        className="flex items-start gap-3 text-sm leading-7 text-dashboard-muted"
                        key={responsibility}
                      >
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-1 shrink-0 text-dashboard-success"
                          size={17}
                        />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-dashboard-border pt-5">
                <p className="text-xs font-semibold uppercase text-dashboard-subtle">
                  Technologies
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      className="rounded-component border border-dashboard-border bg-dashboard-background/70 px-3 py-1.5 text-xs font-semibold text-dashboard-muted"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
