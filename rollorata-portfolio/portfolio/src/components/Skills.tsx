"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education, skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10 bg-bg-secondary">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Background</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2 mb-10">EDUCATION &amp; SKILLS</h2>

          <div className="mb-12">
            <p className="text-red-accent font-mono text-xs tracking-[0.2em] uppercase mb-4">
              Education
            </p>
            <div className="flex gap-4 items-start border-l border-gray-line pl-5">
              <GraduationCap size={22} className="text-red-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-2xl leading-snug">{education.degree}</h3>
                <p className="text-gray text-sm mt-1">{education.school}</p>
                <p className="text-gray/70 font-mono text-xs mt-1">{education.period}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-red-accent font-mono text-xs tracking-[0.2em] uppercase mb-4">
              Skills
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="glow-hover px-4 py-2 border border-gray-line text-xs font-mono tracking-wide uppercase text-white/80 hover:text-white cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <span className="hero-bgtype absolute inset-0 flex items-center justify-center text-[10rem] md:text-[13rem] select-none pointer-events-none">
              AR
            </span>
            <div
              className="absolute inset-0 border border-gray-line"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(193,18,31,0.08), transparent 70%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
