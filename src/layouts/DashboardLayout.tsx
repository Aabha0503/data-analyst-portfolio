import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BackToTopButton, Navbar } from "@/components";
import { usePrefersReducedMotion } from "@/hooks";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 450);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-dashboard-background text-dashboard-text">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            aria-live="polite"
            className="fixed inset-0 z-[60] grid place-items-center bg-dashboard-background"
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, transition: { duration: 0.28 } }
            }
            role="status"
          >
            <motion.div
              animate={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: [0.45, 1, 0.45] }
              }
              className="rounded-component border border-dashboard-border bg-dashboard-surface px-4 py-3 text-sm font-semibold text-dashboard-primary shadow-dashboard"
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            >
              Loading dashboard
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar />
      <motion.main
        animate={{ opacity: 1, y: 0 }}
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.42, ease: "easeOut" }}
      >
        {children}
      </motion.main>
      <BackToTopButton />
    </div>
  );
}
