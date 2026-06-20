import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Section } from "@/components";

const contactLinks = [
  {
    label: "Email",
    value: "aabha.arora@example.com",
    href: "mailto:aabha.arora@example.com",
    icon: Mail
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aabhaarora",
    href: "https://www.linkedin.com/in/aabhaarora",
    icon: Linkedin
  },
  {
    label: "GitHub",
    value: "github.com/aabhaarora",
    href: "https://github.com/aabhaarora",
    icon: Github
  }
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" } }
};

export function ContactSection() {
  return (
    <Section aria-label="Contact" className="pb-20 pt-8 sm:pb-28" id="contact">
      <div className="mb-7 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-primary">
            <Send aria-hidden="true" size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase text-dashboard-primary">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-bold text-dashboard-text sm:text-4xl">
              Connect With Me
            </h2>
          </div>
        </div>

        <p className="max-w-xl text-sm leading-7 text-dashboard-muted sm:text-base">
          Open to analytics projects, dashboard development, and data-focused
          opportunities.
        </p>
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-3"
        initial="hidden"
        variants={gridVariants}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
      >
        {contactLinks.map((item) => {
          const Icon = item.icon;

          return (
            <motion.a
              className="group rounded-component border border-dashboard-border bg-dashboard-surface p-5 shadow-dashboard transition-colors duration-300 hover:border-dashboard-primary/60 hover:bg-dashboard-surfaceMuted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dashboard-background"
              href={item.href}
              key={item.label}
              rel="noreferrer"
              target={item.href.startsWith("http") ? "_blank" : undefined}
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-background/70 text-dashboard-primary transition-colors duration-300 group-hover:border-dashboard-primary/50">
                  <Icon aria-hidden="true" size={21} />
                </span>
                <span className="rounded-component bg-dashboard-background/70 px-3 py-1 text-xs font-semibold uppercase text-dashboard-subtle">
                  Link
                </span>
              </div>

              <p className="text-sm font-semibold uppercase text-dashboard-primary">
                {item.label}
              </p>
              <p className="mt-3 break-words text-base font-bold text-dashboard-text">
                {item.value}
              </p>
            </motion.a>
          );
        })}
      </motion.div>
    </Section>
  );
}
