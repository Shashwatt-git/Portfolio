"use client";

import { motion } from "framer-motion";

const timeline = [
  "2026 — Springer Nature Research Paper published",
  "2025 — Google Summer of Code — ArduPilot contributions",
  "2025 — Built AURA, CodeSentinel, ThreatSentry, VibeTest",
  "2024 — Deepfake Detection Research Project",
  "2023 — Started open source contributions"
];

export default function Timeline() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="display-section font-display font-extrabold">Timeline</h2>
      <div className="relative mt-10 border-l border-black/20 pl-6">
        {timeline.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="mb-8"
          >
            <p className="text-sm md:text-base">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
