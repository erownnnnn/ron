"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";

export default function WorkProcess() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <span className="section-label">How I Work</span>
        <h2 className="font-display text-4xl md:text-5xl mt-2 mb-16">WORK PROCESS</h2>

        <div className="relative max-w-2xl">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gray-line" />
          <div className="flex flex-col gap-12">
            {process.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative flex gap-6 items-start"
              >
                <div className="relative z-10 w-14 h-14 shrink-0 rounded-full border border-red-primary bg-bg flex items-center justify-center font-display text-lg text-red-accent">
                  {step.number}
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-2xl tracking-wide text-red-accent mb-1">
                    {step.title.toUpperCase()}
                  </h3>
                  <p className="text-gray text-sm max-w-md leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
