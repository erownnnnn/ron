"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, CircuitBoard, Database, BrainCircuit } from "lucide-react";
import { education, skillCategories } from "@/lib/data";

const iconMap = {
  Code2,
  CircuitBoard,
  Database,
  BrainCircuit,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-10 bg-bg-secondary">
      <span id="about" className="block -mt-24 pt-24 lg:-mt-32 lg:pt-32" aria-hidden="true" />
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Background</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2 mb-10">EDUCATION &amp; SKILLS</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-red-accent font-mono text-xs tracking-[0.2em] uppercase mb-4">
            Education
          </p>
          <div className="flex gap-4 items-start border-l border-gray-line pl-5 max-w-2xl">
            <GraduationCap size={22} className="text-red-accent mt-1 shrink-0" />
            <div>
              <h3 className="font-display text-2xl leading-snug">{education.degree}</h3>
              <p className="text-gray text-sm mt-1">{education.school}</p>
              <p className="text-gray/70 font-mono text-xs mt-1">{education.period}</p>
            </div>
          </div>
        </motion.div>

        <div>
          <p className="text-red-accent font-mono text-xs tracking-[0.2em] uppercase mb-6">
            Skills
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillCategories.map((group, i) => {
              const Icon = iconMap[group.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glow-hover border border-gray-line bg-bg px-5 py-6"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 shrink-0 rounded-full border border-red-primary flex items-center justify-center text-red-accent">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-lg tracking-wide leading-tight">
                      {group.category.toUpperCase()}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 border border-gray-line text-[11px] font-mono tracking-wide uppercase text-white/75 hover:text-white hover:border-red-accent/60 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}