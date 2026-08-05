"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 bg-bg-secondary overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(193,18,31,0.25), transparent 70%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <span className="font-display text-8xl md:text-9xl text-red-primary/40 leading-none block mb-2">
          &ldquo;
        </span>
        <p className="font-display text-3xl md:text-5xl leading-[1.15] mb-8">
          TECHNOLOGY SHOULD NOT ONLY SOLVE PROBLEMS
          <br className="hidden md:block" />
          &mdash; IT SHOULD CREATE MEANINGFUL EXPERIENCES.
        </p>
        <p className="font-mono text-sm tracking-[0.2em] uppercase text-red-accent">
          &mdash; Aaron Bryan Rollorata
        </p>
      </motion.div>
    </section>
  );
}
