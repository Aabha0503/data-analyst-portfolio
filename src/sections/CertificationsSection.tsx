import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card, Section } from "@/components";
import { certifications } from "@/data/certifications";

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } }
};

export function CertificationsSection() {
  return (
    <Section
      aria-label="Certifications"
      className="pb-14 pt-8 sm:pb-20"
      id="certifications"
    >
      <div className="mb-6 flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-primary">
          <Award aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase text-dashboard-primary">
            Certifications
          </p>
          <h2 className="mt-2 text-3xl font-bold text-dashboard-text sm:text-4xl">
            Verified Analytics Credentials
          </h2>
        </div>
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        initial="hidden"
        variants={gridVariants}
        viewport={{ once: true, amount: 0.2 }}
        whileInView="show"
      >
        {certifications.map((certification) => {
          const Icon = certification.icon;
          const isCompleted = certification.status === "Completed";

          return (
            <motion.div key={certification.name} variants={cardVariants}>
              <Card
                className={[
                  "flex h-full flex-col transition-colors duration-300 hover:border-dashboard-primary/60 hover:bg-dashboard-surfaceMuted/70",
                  isCompleted ? "border-dashboard-success/40" : "border-dashboard-primary/40"
                ].join(" ")}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span
                    className={[
                      "flex h-11 w-11 items-center justify-center rounded-component border bg-dashboard-background/70",
                      isCompleted
                        ? "border-dashboard-success/40 text-dashboard-success"
                        : "border-dashboard-primary/40 text-dashboard-primary"
                    ].join(" ")}
                  >
                    <Icon aria-hidden="true" size={21} />
                  </span>

                  <span
                    className={[
                      "rounded-component border px-3 py-1 text-xs font-semibold uppercase",
                      isCompleted
                        ? "border-dashboard-success/40 bg-dashboard-success/10 text-dashboard-success"
                        : "border-dashboard-primary/40 bg-dashboard-primary/10 text-dashboard-primary"
                    ].join(" ")}
                  >
                    {certification.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold leading-snug text-dashboard-text">
                  {certification.name}
                </h3>
                <p className="mt-3 text-sm font-medium text-dashboard-muted">
                  {certification.provider}
                </p>

                {certification.date ? (
                  <p className="mt-4 text-sm text-dashboard-subtle">
                    Completed {certification.date}
                  </p>
                ) : (
                  <p className="mt-4 text-sm text-dashboard-subtle">
                    Credential currently in progress
                  </p>
                )}

                <div className="mt-auto pt-6">
                  {certification.certificateUrl ? (
                    <a
                      className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-component border border-dashboard-border bg-dashboard-background/70 px-3 text-sm font-semibold text-dashboard-text transition-colors hover:border-dashboard-primary/60 hover:bg-dashboard-surfaceMuted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dashboard-background"
                      href={certification.certificateUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      View Certificate
                      <ExternalLink aria-hidden="true" size={16} />
                    </a>
                  ) : (
                    <span className="block rounded-component border border-dashboard-border bg-dashboard-background/60 px-3 py-2 text-center text-sm font-semibold text-dashboard-subtle">
                      Certificate pending
                    </span>
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
