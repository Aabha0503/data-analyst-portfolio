import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          aria-label="Back to top"
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-component border border-dashboard-border bg-dashboard-surface text-dashboard-primary shadow-dashboard transition-colors hover:border-dashboard-primary/60 hover:bg-dashboard-surfaceMuted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dashboard-background sm:bottom-6 sm:right-6"
          exit={{ opacity: 0, y: 12 }}
          initial={{ opacity: 0, y: 12 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: prefersReducedMotion ? "auto" : "smooth"
            })
          }
          type="button"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
        >
          <ArrowUp aria-hidden="true" size={20} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
