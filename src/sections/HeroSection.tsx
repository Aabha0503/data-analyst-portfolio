import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";
import { Button, Section } from "@/components";
import { resumePath } from "@/data";

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

function openResume() {
  window.open(resumePath, "_blank", "noopener,noreferrer");
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
          animate={{ opacity: 1, x: 0 }}
          className="order-2 relative lg:order-1"
          initial={{ opacity: 0, x: -36 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="overflow-hidden rounded-component border border-dashboard-border bg-dashboard-surface p-2 shadow-dashboard">
            <img
              alt="Aabha Arora, Data Analyst"
              className="h-auto w-full rounded-component object-contain"
              height="1440"
              src="/images/aabha-profile.png"
              width="1080"
            />
          </div>
        </motion.div>

        <motion.div
          animate="show"
          className="order-1 max-w-2xl lg:order-2"
          initial="hidden"
          variants={containerVariants}
        >
          <motion.p
            className="mb-4 inline-flex items-center gap-2 rounded-component border border-dashboard-border bg-dashboard-surface px-3 py-2 text-sm font-semibold text-dashboard-primary"
            variants={itemVariants}
          >
            <TrendingUp aria-hidden="true" size={16} />
            Data Analyst | Machine Learning Enthusiast
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
            Computer Science graduate with hands-on experience in Python, SQL,
            data analysis and machine learning through personal projects and a
            Data Analytics internship at JSW Group.
            <br />
            <br />
            Interested in transforming complex datasets into meaningful insights
            through data analysis, predictive modelling, time-series forecasting
            and machine learning.
            <br />
            <br />
            Passionate about solving analytical problems and developing
            practical, data-driven solutions.
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
              icon={<ExternalLink aria-hidden="true" size={18} />}
              onClick={openResume}
              size="lg"
              variant="secondary"
            >
              View Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
