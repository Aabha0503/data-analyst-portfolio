import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent
} from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Activity,
  BarChart3,
  Database,
  LayoutDashboard,
  PieChart as PieChartIcon,
  SearchCode
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Section } from "@/components";

const metrics = [
  { label: "Projects Completed", value: 12, suffix: "+", icon: LayoutDashboard },
  { label: "Dashboards Built", value: 8, suffix: "+", icon: BarChart3 },
  { label: "SQL Queries", value: 450, suffix: "+", icon: SearchCode },
  { label: "Datasets Analyzed", value: 25, suffix: "+", icon: Database }
];

const trendData = [
  { month: "Jan", projects: 2, datasets: 4 },
  { month: "Feb", projects: 3, datasets: 6 },
  { month: "Mar", projects: 5, datasets: 8 },
  { month: "Apr", projects: 7, datasets: 12 },
  { month: "May", projects: 9, datasets: 18 },
  { month: "Jun", projects: 12, datasets: 25 }
];

const queryData = [
  { type: "Joins", value: 86 },
  { type: "CTEs", value: 64 },
  { type: "Windows", value: 52 },
  { type: "Aggregates", value: 94 },
  { type: "Cleaning", value: 72 }
];

const portfolioMix = [
  { name: "Analysis", value: 36, color: "#38BDF8" },
  { name: "Dashboards", value: 28, color: "#22C55E" },
  { name: "SQL", value: 22, color: "#94A3B8" },
  { name: "Reporting", value: 14, color: "#64748B" }
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

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } }
};

const tooltipStyle = {
  background: "#1E293B",
  border: "1px solid #334155",
  borderRadius: "8px",
  color: "#E2E8F0"
};

export function AnalyticsDashboardSection() {
  return (
    <Section
      aria-label="Analytics Dashboard"
      className="pb-20 pt-8 sm:pb-28"
      id="analytics"
    >
      <div className="mb-7 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-primary">
            <Activity aria-hidden="true" size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase text-dashboard-primary">
              Analytics Dashboard
            </p>
            <h2 className="mt-2 text-3xl font-bold text-dashboard-text sm:text-4xl">
              Portfolio Performance Snapshot
            </h2>
          </div>
        </div>

        <div className="rounded-component border border-dashboard-border bg-dashboard-surface px-4 py-3">
          <p className="text-xs font-semibold uppercase text-dashboard-subtle">
            Reporting Window
          </p>
          <p className="mt-1 text-sm font-bold text-dashboard-text">
            Current Portfolio Overview
          </p>
        </div>
      </div>

      <motion.div
        className="rounded-component border border-dashboard-border bg-dashboard-surface p-4 shadow-dashboard sm:p-5"
        initial="hidden"
        variants={gridVariants}
        viewport={{ once: true, amount: 0.16 }}
        whileInView="show"
      >
        <motion.div
          className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
          variants={gridVariants}
        >
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <motion.article
                className="rounded-component border border-dashboard-border bg-dashboard-background/70 p-4 transition-colors duration-300 hover:border-dashboard-primary/60 hover:bg-dashboard-background"
                key={metric.label}
                variants={panelVariants}
                whileHover={{ y: -4 }}
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-primary">
                    <Icon aria-hidden="true" size={19} />
                  </span>
                  <span className="rounded-component bg-dashboard-success/15 px-2.5 py-1 text-xs font-semibold text-dashboard-success">
                    Live
                  </span>
                </div>
                <AnimatedCounter
                  className="text-3xl font-bold text-dashboard-text"
                  suffix={metric.suffix}
                  value={metric.value}
                />
                <p className="mt-2 text-sm font-medium text-dashboard-muted">
                  {metric.label}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-4 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]"
          variants={gridVariants}
        >
          <ChartPanel
            eyebrow="Line Chart"
            title="Project and Dataset Growth"
            variants={panelVariants}
          >
            <div className="h-56">
              <ResponsiveContainer height="100%" width="100%">
                <LineChart data={trendData}>
                  <CartesianGrid
                    stroke="#334155"
                    strokeDasharray="3 3"
                    vertical={false}
                  />
                  <XAxis
                    axisLine={false}
                    dataKey="month"
                    tick={{ fill: "#94A3B8", fontSize: 12 }}
                    tickLine={false}
                  />
                  <YAxis
                    axisLine={false}
                    tick={{ fill: "#94A3B8", fontSize: 12 }}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    cursor={{ stroke: "#38BDF8", strokeOpacity: 0.28 }}
                  />
                  <Line
                    dataKey="projects"
                    dot={{ fill: "#38BDF8", r: 4 }}
                    stroke="#38BDF8"
                    strokeWidth={3}
                    type="monotone"
                  />
                  <Line
                    dataKey="datasets"
                    dot={{ fill: "#22C55E", r: 4 }}
                    stroke="#22C55E"
                    strokeWidth={3}
                    type="monotone"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </ChartPanel>

          <ChartPanel
            eyebrow="Pie Chart"
            title="Portfolio Work Mix"
            variants={panelVariants}
          >
            <div className="h-44">
              <ResponsiveContainer height="100%" width="100%">
                <PieChart>
                  <Tooltip contentStyle={tooltipStyle} />
                  <Pie
                    cx="50%"
                    cy="50%"
                    data={portfolioMix}
                    dataKey="value"
                    innerRadius="58%"
                    outerRadius="82%"
                    paddingAngle={4}
                  >
                    {portfolioMix.map((entry) => (
                      <Cell fill={entry.color} key={entry.name} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {portfolioMix.map((item) => (
                <div
                  className="flex items-center justify-between gap-3 rounded-component border border-dashboard-border bg-dashboard-background/60 px-3 py-2"
                  key={item.name}
                >
                  <span className="flex items-center gap-2 text-sm font-medium text-dashboard-muted">
                    <span
                      className="h-2.5 w-2.5 rounded-sm"
                      style={{ backgroundColor: item.color }}
                    />
                    {item.name}
                  </span>
                  <span className="text-sm font-bold text-dashboard-text">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </ChartPanel>
        </motion.div>

        <motion.div className="mt-4" variants={panelVariants}>
          <ChartPanel eyebrow="Bar Chart" title="SQL Query Pattern Usage">
            <div className="h-56">
              <ResponsiveContainer height="100%" width="100%">
                <BarChart data={queryData}>
                  <CartesianGrid
                    stroke="#334155"
                    strokeDasharray="3 3"
                    vertical={false}
                  />
                  <XAxis
                    axisLine={false}
                    dataKey="type"
                    tick={{ fill: "#94A3B8", fontSize: 12 }}
                    tickLine={false}
                  />
                  <YAxis
                    axisLine={false}
                    tick={{ fill: "#94A3B8", fontSize: 12 }}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    cursor={{ fill: "rgba(56, 189, 248, 0.08)" }}
                  />
                  <Bar dataKey="value" fill="#38BDF8" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartPanel>
        </motion.div>
      </motion.div>
    </Section>
  );
}

type AnimatedCounterProps = {
  className?: string;
  suffix?: string;
  value: number;
};

function AnimatedCounter({ className = "", suffix = "", value }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");

  useMotionValueEvent(count, "change", (latest) => {
    setDisplayValue(Math.round(latest).toLocaleString());
  });

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(count, value, {
      duration: 1.4,
      ease: "easeOut"
    });

    return () => controls.stop();
  }, [count, isInView, value]);

  return (
    <span className={className} ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

type ChartPanelProps = {
  children: ReactNode;
  eyebrow: string;
  title: string;
  variants?: Variants;
};

function ChartPanel({ children, eyebrow, title, variants }: ChartPanelProps) {
  return (
    <motion.section
      className="min-h-[320px] rounded-component border border-dashboard-border bg-dashboard-background/70 p-4"
      variants={variants}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase text-dashboard-primary">
            {eyebrow}
          </p>
          <h3 className="mt-1 text-lg font-bold text-dashboard-text">{title}</h3>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-success">
          <PieChartIcon aria-hidden="true" size={18} />
        </span>
      </div>
      {children}
    </motion.section>
  );
}
