"use client";

import useMounted from "@/hooks/useMounted";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useState } from "react";

const variants = {
  initial: { opacity: 0, rotate: 180 },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: -180 },
};

const transition = { rotate: { type: "spring", stiffness: 400, damping: 10 } };

const ThemeSwitch = () => {
  const mounted = useMounted();
  const { setTheme, resolvedTheme } = useTheme();
  const [isLocked, setLocked] = useState<boolean>();

  const toggleTheme = useCallback(() => {
    if (isLocked) return;
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setLocked(true);
  }, [isLocked, resolvedTheme, setTheme]);

  const onExit = () => setLocked(false);

  return (
    <div className="relative size-6">
      <AnimatePresence onExitComplete={onExit}>
        {mounted &&
          (resolvedTheme === "dark" ? (
            <motion.button
              className="absolute right-0 top-0"
              key="theme-changer-day"
              transition={transition}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Sun onClick={toggleTheme} size={24} />
            </motion.button>
          ) : (
            <motion.button
              className="absolute right-0 top-0"
              key="theme-changer-night"
              transition={transition}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Moon onClick={toggleTheme} size={24} />
            </motion.button>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitch;
