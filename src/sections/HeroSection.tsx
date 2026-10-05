import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Download, Mail, TrendingUp } from "lucide-react";
import { Button, Section } from "@/components";

const kpis = [
  { label: "Projects Completed", value: "4", trend: "Projects" },
  { label: "Internship Experience", value: "1", trend: "Internship" },
  { label: "Analytics Dashboards", value: "2", trend: "Dashboards" },
  { label: "Forecasting Models", value: "1", trend: "Model" }
];

const currentFocusItems = [
  "SQL Analytics",
  "Feature Engineering",
  "KPI Reporting",
  "Tableau Dashboard"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

function downloadResume() {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Aabha-Arora-Resume.pdf";
  link.click();
}

export function HeroSection() {
  return (
    <Section
      aria-label="Hero"
      className="overflow-hidden pb-14 pt-10 sm:pb-20 sm:pt-14"
      id="home"
    >
      <div className="grid min-h-[calc(100vh-8rem)] items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <motion.div
          animate="show"
          className="max-w-2xl"
          initial="hidden"
          variants={containerVariants}
        >
          <motion.p
            className="mb-4 inline-flex items-center gap-2 rounded-component border border-dashboard-border bg-dashboard-surface px-3 py-2 text-sm font-semibold text-dashboard-primary"
            variants={itemVariants}
          >
            <TrendingUp aria-hidden="true" size={16} />
            Data Analyst
          </motion.p>

          <motion.h1
            className="text-5xl font-bold leading-tight tracking-normal text-dashboard-text sm:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Aabha Arora
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl text-base font-semibold text-dashboard-primary sm:text-lg"
            variants={itemVariants}
          >
            SQL • Python • Tableau • Excel • Machine Learning
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-8 text-dashboard-muted sm:text-xl"
            variants={itemVariants}
          >
            Data Analyst with practical experience in analytics,
            visualization, predictive modeling, and business reporting through
            an industry internship and real-world analytics projects.
            Passionate about transforming raw data into meaningful business
            insights.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            variants={itemVariants}
          >
            <Button
              icon={<ArrowRight aria-hidden="true" size={18} />}
              onClick={() => scrollToSection("projects")}
              size="lg"
            >
              View Projects
            </Button>
            <Button
              icon={<Download aria-hidden="true" size={18} />}
              onClick={downloadResume}
              size="lg"
              variant="secondary"
            >
              Resume
            </Button>
            <Button
              icon={<Mail aria-hidden="true" size={18} />}
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="ghost"
            >
              Contact
            </Button>
          </motion.div>
        </motion.div>

        <AnalyticsMockup />
      </div>
    </Section>
  );
}

function AnalyticsMockup() {
  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      className="relative"
      initial={{ opacity: 0, x: 36 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
    >
      <section
        className="relative overflow-hidden rounded-component border border-dashboard-border bg-dashboard-surface p-4 shadow-dashboard sm:p-5"
        aria-label="Analytics dashboard preview"
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-dashboard-muted">
              Portfolio Overview
            </p>
            <h2 className="mt-1 text-xl font-bold text-dashboard-text">
              Analytics Snapshot
            </h2>
          </div>
          <span className="rounded-component bg-dashboard-success/15 px-3 py-1 text-sm font-semibold text-dashboard-success">
            Live
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {kpis.map((kpi, index) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="rounded-component border border-dashboard-border bg-dashboard-background/60 p-4"
              initial={{ opacity: 0, y: 16 }}
              key={kpi.label}
              transition={{ duration: 0.4, delay: 0.35 + index * 0.08 }}
            >
              <p className="text-xs font-medium uppercase text-dashboard-subtle">
                {kpi.label}
              </p>
              <div className="mt-3 flex items-end justify-between gap-2">
                <span className="text-2xl font-bold text-dashboard-text">
                  {kpi.value}
                </span>
                <span className="text-sm font-semibold text-dashboard-success">
                  {kpi.trend}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="h-64 rounded-component border border-dashboard-border bg-dashboard-background/60 p-4 lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-dashboard-text">
                Current Focus
              </h3>
              <span className="text-xs font-medium text-dashboard-muted">
                In Progress
              </span>
            </div>
            <div className="grid h-[82%] content-start gap-3">
              <p className="text-2xl font-bold text-dashboard-text">
                Sales & Customer Analytics Platform
              </p>
              <div className="grid gap-2">
                {currentFocusItems.map((item) => (
                  <div
                    className="flex items-center gap-3 rounded-component border border-dashboard-border bg-dashboard-surface/80 px-3 py-2.5"
                    key={item}
                  >
                    <span className="text-sm font-semibold text-dashboard-success">
                      ✓
                    </span>
                    <span className="text-sm font-medium text-dashboard-muted">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
}
