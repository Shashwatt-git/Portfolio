"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const letters = "shashwatchandel".split("");

export default function ScatterText() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} className="relative flex h-screen items-center justify-center overflow-hidden">
      {letters.map((letter, index) => {
        const spread = 220 + index * 10;
        const x = useTransform(scrollYProgress, [0, 1], [0, ((index % 2 === 0 ? 1 : -1) * spread)]);
        const y = useTransform(scrollYProgress, [0, 1], [0, ((index % 3 === 0 ? -1 : 1) * (120 + index * 8))]);
        const rotate = useTransform(scrollYProgress, [0, 1], [0, (index % 2 === 0 ? 1 : -1) * 65]);
        const opacity = useTransform(scrollYProgress, [0, 0.15, 1], [0.1, 1, 0.25]);

        return (
          <motion.span
            key={`${letter}-${index}`}
            style={{ x, y, rotate, opacity }}
            className="absolute text-4xl font-display font-extrabold uppercase md:text-6xl"
            transition={{ delay: index * 0.04 }}
          >
            {letter}
          </motion.span>
        );
      })}
    </section>
  );
}
