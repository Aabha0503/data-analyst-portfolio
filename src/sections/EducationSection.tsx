import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "@/components";
import { education } from "@/data";

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

export function EducationSection() {
  return (
    <Section
      aria-label="Education and Academic Journey"
      className="pb-20 pt-8 sm:pb-28"
      id="education"
    >
      <div className="mb-8 flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-primary">
          <GraduationCap aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase text-dashboard-primary">
            Education
          </p>
          <h2 className="mt-2 text-3xl font-bold text-dashboard-text sm:text-4xl">
            Education & Academic Journey
          </h2>
        </div>
      </div>

      <motion.div
        className="relative mx-auto max-w-5xl"
        initial="hidden"
        variants={listVariants}
        viewport={{ once: true, amount: 0.18 }}
        whileInView="show"
      >
        <motion.div
          aria-hidden="true"
          className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-dashboard-border"
          initial={{ scaleY: 0 }}
          style={{ originY: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ scaleY: 1 }}
        />

        <div className="grid gap-5">
          {education.map((record, index) => {
            const Icon = record.icon;

            return (
              <motion.article
                className="relative pl-16"
                key={record.title}
                variants={itemVariants}
              >
                <motion.div
                  className="absolute left-0 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-background text-dashboard-primary"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  whileHover={{ scale: 1.08 }}
                >
                  <Icon aria-hidden="true" size={18} />
                </motion.div>

                <div className="rounded-component border border-dashboard-border bg-dashboard-surface p-5 shadow-dashboard transition-colors duration-300 hover:border-dashboard-primary/60 hover:bg-dashboard-surfaceMuted/70 sm:p-6">
                  <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
                    <div>
                      <p className="text-xs font-semibold uppercase text-dashboard-primary">
                        Stage {index + 1}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-dashboard-text">
                        {record.title}
                      </h3>
                      <p className="mt-2 text-base font-semibold text-dashboard-text">
                        {record.qualification}
                      </p>
                      <p className="mt-3 text-sm font-medium text-dashboard-muted">
                        {record.institution}
                      </p>
                      {record.location ? (
                        <p className="mt-1 text-sm text-dashboard-muted">
                          {record.location}
                        </p>
                      ) : null}
                    </div>

                    <div className="rounded-component border border-dashboard-border bg-dashboard-background/70 p-4 md:min-w-[150px] md:text-right">
                      <p className="text-xs font-semibold uppercase text-dashboard-subtle">
                        {record.resultLabel}
                      </p>
                      <p className="mt-2 text-xl font-bold text-dashboard-success">
                        {record.result}
                      </p>
                      <p className="mt-3 text-sm text-dashboard-muted">
                        {record.period}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
