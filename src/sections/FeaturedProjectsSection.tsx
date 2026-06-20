import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Github,
  LineChart,
  MonitorDot,
  ShoppingCart,
  UsersRound
} from "lucide-react";
import { Button, Section } from "@/components";

const projects = [
  {
    title: "Employee Attrition Analysis",
    label: "Workforce Intelligence",
    icon: UsersRound,
    description:
      "A people analytics report designed to identify attrition drivers, risk segments, and retention opportunities across departments.",
    techStack: ["Python", "Pandas", "Power BI", "HR Analytics"],
    insights: ["Risk by department", "Tenure patterns", "Satisfaction signals"],
    metric: "16.8%",
    metricLabel: "Attrition rate",
    accent: "primary"
  },
  {
    title: "Real-Time Monitoring System",
    label: "Operational Analytics",
    icon: MonitorDot,
    description:
      "A monitoring dashboard concept for tracking live system health, incident signals, and operational performance indicators.",
    techStack: ["React", "Recharts", "SQL", "APIs"],
    insights: ["Live KPI tracking", "Alert signals", "Uptime visibility"],
    metric: "99.2%",
    metricLabel: "System uptime",
    accent: "success"
  },
  {
    title: "Superstore Sales Analysis",
    label: "Sales Performance",
    icon: ShoppingCart,
    description:
      "A business intelligence report for analyzing sales trends, profit performance, category mix, and regional opportunities.",
    techStack: ["Excel", "Tableau", "SQL", "Data Cleaning"],
    insights: ["Profit leakage", "Regional trends", "Category performance"],
    metric: "$2.3M",
    metricLabel: "Sales reviewed",
    accent: "primary"
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
          Premium project cards structured like executive report previews, with
          summary metrics, stack context, and decision-ready insights.
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
              <div className="p-4 pb-0">
                <ReportPreview
                  icon={<Icon aria-hidden="true" size={21} />}
                  isSuccess={isSuccess}
                  metric={project.metric}
                  metricLabel={project.metricLabel}
                  title={project.label}
                />
              </div>

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

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase text-dashboard-subtle">
                    Key Insights
                  </p>
                  <div className="mt-3 grid gap-2">
                    {project.insights.map((insight) => (
                      <div
                        className="flex items-center gap-3 rounded-component border border-dashboard-border bg-dashboard-background/60 px-3 py-2.5"
                        key={insight}
                      >
                        <span
                          className={[
                            "h-2 w-2 rounded-sm",
                            isSuccess
                              ? "bg-dashboard-success"
                              : "bg-dashboard-primary"
                          ].join(" ")}
                        />
                        <span className="text-sm font-medium text-dashboard-muted">
                          {insight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto grid gap-3 pt-6 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                  <Button
                    className="w-full"
                    icon={<Github aria-hidden="true" size={17} />}
                    variant="secondary"
                  >
                    GitHub
                  </Button>
                  <Button
                    className="w-full"
                    icon={<BarChart3 aria-hidden="true" size={17} />}
                    variant={isSuccess ? "success" : "primary"}
                  >
                    Case Study
                  </Button>
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}

type ReportPreviewProps = {
  icon: ReactNode;
  isSuccess: boolean;
  metric: string;
  metricLabel: string;
  title: string;
};

function ReportPreview({
  icon,
  isSuccess,
  metric,
  metricLabel,
  title
}: ReportPreviewProps) {
  const accentClass = isSuccess ? "bg-dashboard-success" : "bg-dashboard-primary";
  const textClass = isSuccess ? "text-dashboard-success" : "text-dashboard-primary";

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-component border border-dashboard-border bg-dashboard-background/80 p-4">
      <div
        aria-label={`${title} dashboard report preview image`}
        className="pointer-events-none absolute inset-0"
        role="img"
      />
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className={[
              "flex h-10 w-10 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface",
              textClass
            ].join(" ")}
          >
            {icon}
          </span>
          <div>
            <p className="text-xs font-semibold uppercase text-dashboard-subtle">
              BI Report
            </p>
            <p className="mt-1 text-sm font-bold text-dashboard-text">{title}</p>
          </div>
        </div>
        <span className="rounded-component bg-dashboard-surface px-2.5 py-1 text-xs font-semibold text-dashboard-muted">
          Draft
        </span>
      </div>

      <div className="grid h-[calc(100%-3.5rem)] gap-3 sm:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-component border border-dashboard-border bg-dashboard-surface/80 p-3">
          <p className="text-xs font-semibold uppercase text-dashboard-subtle">
            {metricLabel}
          </p>
          <p className="mt-2 text-2xl font-bold text-dashboard-text">{metric}</p>
          <div className="mt-4 grid gap-2">
            {[62, 84, 48].map((width) => (
              <span
                className="h-2 rounded-sm bg-dashboard-border"
                key={width}
                style={{ width: `${width}%` }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-component border border-dashboard-border bg-dashboard-surface/80 p-3">
          <div className="flex h-full items-end gap-2">
            {[44, 68, 52, 78, 64, 88].map((height, index) => (
              <motion.span
                animate={{ scaleY: 1 }}
                className={[
                  "flex-1 origin-bottom rounded-sm",
                  index % 2 === 0 ? "bg-dashboard-border" : accentClass
                ].join(" ")}
                initial={{ scaleY: 0.35 }}
                key={`${height}-${index}`}
                style={{ height: `${height}%` }}
                transition={{
                  duration: 0.55,
                  delay: 0.12 + index * 0.04,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <LineChart
        aria-hidden="true"
        className={[
          "absolute bottom-4 right-4 opacity-20",
          textClass
        ].join(" ")}
        size={56}
      />
    </div>
  );
}
