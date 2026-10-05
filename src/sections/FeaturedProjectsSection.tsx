import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ExternalLink,
  Github,
  MonitorDot,
  TrendingUp,
  UsersRound
} from "lucide-react";
import { Section } from "@/components";

const projects = [
  {
    title: "Employee Attrition Analysis & Prediction Dashboard",
    label: "HR Analytics · Machine Learning",
    icon: UsersRound,
    description:
      "An end-to-end HR analytics project focused on understanding employee attrition patterns and building a predictive classification model.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Tableau"],
    link: "https://github.com/Aabha0503/Employee-Attrition-Analysis-Prediction-Dashboard",
    linkLabel: "GitHub",
    accent: "primary",
    linkType: "github"
  },
  {
    title: "Concept Drift & Anomaly Detection System",
    label: "ML Monitoring · Anomaly Detection",
    icon: MonitorDot,
    description:
      "A real-time monitoring system for detecting concept drift, data distribution changes, and anomalous behavior in time-series data.",
    techStack: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "Plotly"],
    link: "https://github.com/Aabha0503/concept-drift-engine",
    linkLabel: "GitHub",
    accent: "success",
    linkType: "github"
  },
  {
    title: "Time-Series Forecasting using SARIMAX",
    label: "Time-Series · Forecasting",
    icon: TrendingUp,
    description:
      "A time-series forecasting project using SARIMAX to model temporal patterns and generate hourly forecasts.",
    techStack: ["Python", "Pandas", "Statsmodels", "Matplotlib", "Seaborn"],
    link: "https://www.kaggle.com/code/aabhaaroratanu/hourly-forecast-of-goog-twitter-vol-using-sarimax",
    linkLabel: "View Project",
    accent: "primary",
    linkType: "external"
  },
  {
    title: "Predictive Analysis of Residential Property Prices",
    label: "Predictive Analytics · Regression",
    icon: TrendingUp,
    description:
      "A machine-learning project focused on analyzing residential property data and predicting property prices.",
    techStack: ["Python", "Pandas", "Scikit-learn"],
    link: "https://www.kaggle.com/code/aabhaaroratanu/predictive-analysis-of-residential-property-prices",
    linkLabel: "View Project",
    accent: "success",
    linkType: "external"
  }
];

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } }
};

export function FeaturedProjectsSection() {
  return (
    <Section
      aria-label="Featured Projects"
      className="pb-20 pt-8 sm:pb-28"
      id="projects"
    >
      <div className="mb-7 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-primary">
            <BriefcaseBusiness aria-hidden="true" size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase text-dashboard-primary">
              Featured Projects
            </p>
            <h2 className="mt-2 text-3xl font-bold text-dashboard-text sm:text-4xl">
              Business Intelligence Reports
            </h2>
          </div>
        </div>

        <p className="max-w-xl text-sm leading-7 text-dashboard-muted sm:text-base">
          Selected analytics and machine-learning projects with clear scope,
          tools, and external project links.
        </p>
      </div>

      <motion.div
        className="grid gap-5 xl:grid-cols-3"
        initial="hidden"
        variants={gridVariants}
        viewport={{ once: true, amount: 0.16 }}
        whileInView="show"
      >
        {projects.map((project) => {
          const Icon = project.icon;
          const isSuccess = project.accent === "success";

          return (
            <motion.article
              className="group flex min-h-full flex-col overflow-hidden rounded-component border border-dashboard-border bg-dashboard-surface shadow-dashboard transition-colors duration-300 hover:border-dashboard-primary/60 hover:bg-dashboard-surfaceMuted/70"
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -7 }}
            >
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p
                      className={[
                        "text-xs font-semibold uppercase",
                        isSuccess
                          ? "text-dashboard-success"
                          : "text-dashboard-primary"
                      ].join(" ")}
                    >
                      {project.label}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold leading-tight text-dashboard-text">
                      {project.title}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-background/70 text-dashboard-muted transition-colors duration-300 group-hover:border-dashboard-primary/50 group-hover:text-dashboard-primary">
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </span>
                </div>

                <p className="text-sm leading-7 text-dashboard-muted">
                  {project.description}
                </p>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase text-dashboard-subtle">
                    Tech Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        className="rounded-component border border-dashboard-border bg-dashboard-background/70 px-3 py-1.5 text-xs font-semibold text-dashboard-muted"
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <a
                    className={[
                      "inline-flex h-10 w-full items-center justify-center gap-2 rounded-component px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dashboard-background",
                      isSuccess
                        ? "bg-dashboard-success text-slate-950 hover:bg-green-400 active:bg-green-300"
                        : "border border-dashboard-border bg-dashboard-surface text-dashboard-text hover:bg-dashboard-surfaceMuted"
                    ].join(" ")}
                    href={project.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {project.linkType === "github" ? (
                      <Github aria-hidden="true" size={17} />
                    ) : (
                      <ExternalLink aria-hidden="true" size={17} />
                    )}
                    {project.linkLabel}
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
