import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  ChartPie,
  FileText,
  FolderKanban,
  GraduationCap,
  Mail,
  Menu,
  Route,
  Sparkles,
  UserRound,
  X
} from "lucide-react";
import { useState } from "react";
import { useScrollSpy } from "@/hooks";

const navItems = [
  { label: "About", href: "#about", icon: UserRound },
  { label: "Skills", href: "#skills", icon: Sparkles },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Analytics", href: "#analytics", icon: ChartPie },
  { label: "Timeline", href: "#timeline", icon: Route },
  { label: "Certifications", href: "#certifications", icon: GraduationCap },
  { label: "Resume", href: "#resume", icon: FileText },
  { label: "Contact", href: "#contact", icon: Mail }
];

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "analytics",
  "timeline",
  "certifications",
  "resume",
  "contact"
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  return (
    <header className="sticky top-0 z-50 border-b border-dashboard-border/80 bg-dashboard-background/90 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-dashboard items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          aria-current={activeId === "home" ? "page" : undefined}
          className="flex items-center gap-3 text-sm font-semibold text-dashboard-text transition-colors hover:text-dashboard-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dashboard-background"
          href="#home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-primary">
            <BarChart3 aria-hidden="true" size={18} />
          </span>
          <span>Aabha Arora</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1);

            return (
              <a
                aria-current={isActive ? "page" : undefined}
                className={[
                  "rounded-component px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dashboard-background",
                  isActive
                    ? "bg-dashboard-surface text-dashboard-primary"
                    : "text-dashboard-muted hover:bg-dashboard-surface hover:text-dashboard-text"
                ].join(" ")}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden md:block">
          <a
            aria-current={activeId === "contact" ? "page" : undefined}
            className={[
              "inline-flex h-9 items-center justify-center rounded-component border px-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dashboard-background",
              activeId === "contact"
                ? "border-dashboard-primary/60 bg-dashboard-surfaceMuted text-dashboard-primary"
                : "border-dashboard-border bg-dashboard-surface text-dashboard-text hover:bg-dashboard-surfaceMuted"
            ].join(" ")}
            href="#contact"
          >
            Contact
          </a>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-text transition-colors hover:bg-dashboard-surfaceMuted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dashboard-background md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-dashboard-border bg-dashboard-background px-4 py-3 md:hidden"
            exit={{ opacity: 0, y: -8 }}
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <div className="mx-auto grid max-w-dashboard gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    aria-current={
                      activeId === item.href.slice(1) ? "page" : undefined
                    }
                    className={[
                      "flex items-center gap-3 rounded-component border px-3 py-3 text-sm font-medium transition-colors hover:bg-dashboard-surfaceMuted",
                      activeId === item.href.slice(1)
                        ? "border-dashboard-primary/60 bg-dashboard-surfaceMuted text-dashboard-primary"
                        : "border-dashboard-border bg-dashboard-surface text-dashboard-text"
                    ].join(" ")}
                    href={item.href}
                    key={item.label}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon
                      aria-hidden="true"
                      className="text-dashboard-primary"
                      size={18}
                    />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
