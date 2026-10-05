import { motion } from "framer-motion";
import { Activity, BarChart3, Code2, Database } from "lucide-react";
import { Card, Section } from "@/components";

const summaryStats = [
  { label: "SQL", value: "Advanced Queries & Data Analysis", icon: Database },
  { label: "Python", value: "EDA • Machine Learning • Automation", icon: Code2 },
  { label: "Tableau", value: "Dashboards & Business Visualization", icon: BarChart3 }
];

export function AboutSection() {
  return (
    <Section aria-label="About" className="pt-6 sm:pt-8" id="about">
      <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
        <motion.div
          className="flex items-start gap-3"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-primary">
            <Activity aria-hidden="true" size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase text-dashboard-primary">
              About
            </p>
            <h2 className="mt-2 text-3xl font-bold text-dashboard-text sm:text-4xl">
              Professional Summary
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Card
            as="section"
            className="transition-colors duration-300 hover:border-dashboard-primary/60 hover:bg-dashboard-surfaceMuted/70"
          >
            <p className="text-base leading-8 text-dashboard-muted sm:text-lg">
              Data Analyst with practical experience using SQL, Python,
              Tableau, machine learning, and statistical analysis to solve
              analytics problems. I work on predictive modeling, forecasting,
              anomaly detection, and business reporting that turns raw data into
              clear findings and useful business insights.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {summaryStats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="rounded-component border border-dashboard-border bg-dashboard-background/60 p-4"
                    key={item.label}
                  >
                    <Icon
                      aria-hidden="true"
                      className="mb-4 text-dashboard-primary"
                      size={20}
                    />
                    <p className="text-xs font-semibold uppercase text-dashboard-subtle">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-bold text-dashboard-text">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
