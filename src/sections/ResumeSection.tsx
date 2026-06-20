import { motion } from "framer-motion";
import { Download, FileText, LineChart, ShieldCheck } from "lucide-react";
import { Card, Section } from "@/components";

const resumeHighlights = [
  "Data analysis and BI dashboarding",
  "SQL, visualization, and reporting workflows",
  "Business-focused insight communication"
];

export function ResumeSection() {
  return (
    <Section aria-label="Resume" className="pb-14 pt-8 sm:pb-20" id="resume">
      <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <motion.div
          className="flex items-start gap-3"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-primary">
            <FileText aria-hidden="true" size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase text-dashboard-primary">
              Resume
            </p>
            <h2 className="mt-2 text-3xl font-bold text-dashboard-text sm:text-4xl">
              Professional Snapshot
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
            className="overflow-hidden p-0 transition-colors duration-300 hover:border-dashboard-primary/60"
          >
            <div className="border-b border-dashboard-border bg-dashboard-background/60 p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-primary">
                    <LineChart aria-hidden="true" size={22} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase text-dashboard-subtle">
                      Resume Preview
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-dashboard-text">
                      Aabha Arora
                    </h3>
                  </div>
                </div>

                <a
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-component bg-dashboard-primary px-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dashboard-background"
                  download
                  href="/resume.pdf"
                >
                  <Download aria-hidden="true" size={17} />
                  Download
                </a>
              </div>
            </div>

            <div className="grid gap-5 p-5 md:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-sm leading-7 text-dashboard-muted">
                  Aspiring Data Analyst focused on transforming raw data into
                  reliable dashboards, clear reports, and actionable business
                  insights.
                </p>

                <div className="mt-5 grid gap-3">
                  {resumeHighlights.map((highlight) => (
                    <div
                      className="flex items-center gap-3 rounded-component border border-dashboard-border bg-dashboard-background/60 px-3 py-3"
                      key={highlight}
                    >
                      <ShieldCheck
                        aria-hidden="true"
                        className="text-dashboard-success"
                        size={18}
                      />
                      <span className="text-sm font-medium text-dashboard-muted">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-component border border-dashboard-border bg-dashboard-background/60 p-4">
                <p className="text-xs font-semibold uppercase text-dashboard-subtle">
                  Document Status
                </p>
                <div className="mt-4 grid gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dashboard-muted">Format</span>
                    <span className="text-sm font-bold text-dashboard-text">
                      PDF
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dashboard-muted">Focus</span>
                    <span className="text-sm font-bold text-dashboard-text">
                      Analytics
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dashboard-muted">Availability</span>
                    <span className="text-sm font-bold text-dashboard-success">
                      Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
