import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Download, Mail, TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis
} from "recharts";
import { Button, Section } from "@/components";

const revenueData = [
  { month: "Jan", value: 38 },
  { month: "Feb", value: 44 },
  { month: "Mar", value: 41 },
  { month: "Apr", value: 58 },
  { month: "May", value: 64 },
  { month: "Jun", value: 72 }
];

const segmentData = [
  { name: "A", value: 42 },
  { name: "B", value: 56 },
  { name: "C", value: 48 },
  { name: "D", value: 68 },
  { name: "E", value: 62 }
];

const kpis = [
  { label: "Revenue", value: "$84.2K", trend: "+18.4%" },
  { label: "Conversion", value: "12.8%", trend: "+4.1%" },
  { label: "Retention", value: "91%", trend: "+7.6%" }
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
            Aspiring Data Analyst
          </motion.p>

          <motion.h1
            className="text-5xl font-bold leading-tight tracking-normal text-dashboard-text sm:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Aabha Arora
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-8 text-dashboard-muted sm:text-xl"
            variants={itemVariants}
          >
            Transforming raw data into actionable insights through data
            analysis, dashboarding, and business intelligence.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            variants={itemVariants}
          >
            <Button icon={<ArrowRight aria-hidden="true" size={18} />} size="lg">
              View Projects
            </Button>
            <Button
              icon={<Download aria-hidden="true" size={18} />}
              size="lg"
              variant="secondary"
            >
              Resume
            </Button>
            <Button
              icon={<Mail aria-hidden="true" size={18} />}
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
              Analytics Overview
            </p>
            <h2 className="mt-1 text-xl font-bold text-dashboard-text">
              Performance Dashboard
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
          <div className="h-64 rounded-component border border-dashboard-border bg-dashboard-background/60 p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-dashboard-text">
                Monthly Growth
              </h3>
              <span className="text-xs font-medium text-dashboard-muted">
                6 months
              </span>
            </div>
            <ResponsiveContainer height="82%" width="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="growthFill" x1="0" x2="0" y1="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="#38BDF8"
                      stopOpacity={0.48}
                    />
                    <stop
                      offset="95%"
                      stopColor="#38BDF8"
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                </defs>
                <XAxis
                  axisLine={false}
                  dataKey="month"
                  tick={{ fill: "#94A3B8", fontSize: 12 }}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#1E293B",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    color: "#E2E8F0"
                  }}
                  cursor={{ stroke: "#38BDF8", strokeOpacity: 0.35 }}
                />
                <Area
                  dataKey="value"
                  fill="url(#growthFill)"
                  stroke="#38BDF8"
                  strokeWidth={3}
                  type="monotone"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="h-64 rounded-component border border-dashboard-border bg-dashboard-background/60 p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-dashboard-text">
                Segments
              </h3>
              <span className="text-xs font-medium text-dashboard-success">
                +12%
              </span>
            </div>
            <ResponsiveContainer height="82%" width="100%">
              <BarChart data={segmentData}>
                <XAxis dataKey="name" hide />
                <Tooltip
                  contentStyle={{
                    background: "#1E293B",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    color: "#E2E8F0"
                  }}
                  cursor={{ fill: "rgba(56, 189, 248, 0.08)" }}
                />
                <Bar
                  dataKey="value"
                  fill="#22C55E"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
