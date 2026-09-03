import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { transitionLux } from "@/lib/motion";

/** Floating back-to-top control, appears after one viewport of scroll. */
export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={transitionLux(0.4)}
          whileHover={{ y: -4 }}
          className="fixed right-5 bottom-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-lift)] transition-colors duration-500 hover:bg-accent hover:text-accent-foreground md:right-8 md:bottom-8"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
