import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Database,
  LayoutDashboard,
  Route
} from "lucide-react";
import { Section } from "@/components";

const timelineStages = [
  {
    title: "Programming Fundamentals",
    description: "Build a clear technical foundation for solving problems with code.",
    icon: Code2
  },
  {
    title: "SQL & Databases",
    description: "Query, structure, and connect data from reliable database systems.",
    icon: Database
  },
  {
    title: "Data Analysis",
    description: "Clean, explore, and interpret datasets to uncover useful patterns.",
    icon: BarChart3
  },
  {
    title: "Dashboard Development",
    description: "Convert analysis into visual reporting experiences for decision-makers.",
    icon: LayoutDashboard
  },
  {
    title: "Career Opportunities",
    description: "Apply analytics skills to business problems, teams, and roles.",
    icon: BriefcaseBusiness
  }
];

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

export function TimelineSection() {
  return (
    <Section
      aria-label="Learning Timeline"
      className="pb-20 pt-8 sm:pb-28"
      id="timeline"
    >
      <div className="mb-8 flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-primary">
          <Route aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase text-dashboard-primary">
            Timeline
          </p>
          <h2 className="mt-2 text-3xl font-bold text-dashboard-text sm:text-4xl">
            Analytics Career Roadmap
          </h2>
        </div>
      </div>

      <motion.div
        className="relative mx-auto max-w-4xl"
        initial="hidden"
        variants={listVariants}
        viewport={{ once: true, amount: 0.18 }}
        whileInView="show"
      >
        <motion.div
          aria-hidden="true"
          className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-dashboard-border md:left-1/2 md:-translate-x-1/2"
          initial={{ scaleY: 0 }}
          style={{ originY: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ scaleY: 1 }}
        />

        <div className="grid gap-5">
          {timelineStages.map((stage, index) => {
            const Icon = stage.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.article
                className={[
                  "relative grid gap-4 pl-16 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:pl-0",
                  isEven ? "" : "md:[&>div:first-child]:col-start-3"
                ].join(" ")}
                key={stage.title}
                variants={itemVariants}
              >
                <div
                  className={[
                    "rounded-component border border-dashboard-border bg-dashboard-surface p-5 shadow-dashboard transition-colors duration-300 hover:border-dashboard-primary/60 hover:bg-dashboard-surfaceMuted/70",
                    isEven ? "md:text-right" : "md:col-start-3"
                  ].join(" ")}
                >
                  <p className="text-sm font-semibold text-dashboard-primary">
                    Stage {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-dashboard-text">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-dashboard-muted">
                    {stage.description}
                  </p>
                </div>

                <motion.div
                  className="absolute left-0 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-background text-dashboard-primary md:static md:col-start-2 md:row-start-1"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  whileHover={{ scale: 1.08 }}
                >
                  <Icon aria-hidden="true" size={18} />
                </motion.div>

                {index < timelineStages.length - 1 ? (
                  <div
                    aria-hidden="true"
                    className="absolute left-4 top-[4.2rem] text-dashboard-subtle md:hidden"
                  >
                    ↓
                  </div>
                ) : null}

                <div
                  aria-hidden="true"
                  className={[
                    "hidden text-center text-dashboard-subtle md:block",
                    isEven ? "md:col-start-3" : "md:col-start-1 md:row-start-1"
                  ].join(" ")}
                >
                  {index < timelineStages.length - 1 ? "↓" : ""}
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
