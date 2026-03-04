"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { damping: 24, stiffness: 260 });
  const smoothY = useSpring(y, { damping: 24, stiffness: 260 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 9);
      y.set(e.clientY - 9);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return <motion.div style={{ x: smoothX, y: smoothY }} className="pointer-events-none fixed z-[60] hidden h-[18px] w-[18px] rounded-full bg-accent mix-blend-multiply md:block" />;
}
