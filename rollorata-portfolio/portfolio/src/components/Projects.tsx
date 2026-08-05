"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";

function CardPattern({ pattern }: { pattern: Project["pattern"] }) {
  const common = "absolute inset-0 w-full h-full";
  switch (pattern) {
    case "grid":
      return (
        <svg className={common} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M28 0H0V28" fill="none" stroke="#c1121f" strokeOpacity="0.35" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="400" height="300" fill="url(#grid)" />
          <circle cx="200" cy="150" r="70" fill="none" stroke="#e63946" strokeOpacity="0.5" strokeWidth="1.5" />
        </svg>
      );
    case "circuit":
      return (
        <svg className={common} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          <g stroke="#e63946" strokeOpacity="0.45" strokeWidth="1.5" fill="none">
            <path d="M20 60 H140 V20 H260" />
            <path d="M20 150 H100 V220 H220 V150 H340" />
            <path d="M300 40 V120 H380" />
            <circle cx="140" cy="20" r="4" fill="#e63946" />
            <circle cx="220" cy="150" r="4" fill="#e63946" />
            <circle cx="300" cy="40" r="4" fill="#e63946" />
          </g>
        </svg>
      );
    case "court":
      return (
        <svg className={common} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          <g stroke="#e63946" strokeOpacity="0.5" strokeWidth="2" fill="none">
            <rect x="40" y="40" width="320" height="220" />
            <line x1="200" y1="40" x2="200" y2="260" />
            <rect x="40" y="110" width="90" height="80" />
            <rect x="270" y="110" width="90" height="80" />
          </g>
        </svg>
      );
    case "neural":
      return (
        <svg className={common} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          <g stroke="#e63946" strokeOpacity="0.35" strokeWidth="1">
            {[60, 140, 220, 300].map((x) =>
              [60, 130, 200, 270].map((y) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#e63946" fillOpacity="0.6" />
              ))
            )}
            <path d="M60 60 L140 130 L220 60 L300 130 M60 130 L140 200 L220 130 L300 200 M60 200 L140 270 L220 200 L300 270" fill="none" />
          </g>
        </svg>
      );
    case "chip":
      return (
        <svg className={common} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          <g stroke="#e63946" strokeOpacity="0.5" strokeWidth="1.5" fill="none">
            <rect x="140" y="100" width="120" height="100" />
            {[0, 1, 2, 3].map((i) => (
              <g key={i}>
                <line x1={160 + i * 25} y1="100" x2={160 + i * 25} y2="70" />
                <line x1={160 + i * 25} y1="200" x2={160 + i * 25} y2="230" />
                <line x1="140" y1={120 + i * 20} x2="110" y2={120 + i * 20} />
                <line x1="260" y1={120 + i * 20} x2="290" y2={120 + i * 20} />
              </g>
            ))}
          </g>
        </svg>
      );
    case "pixel":
      return (
        <svg className={common} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          <g fill="#e63946" fillOpacity="0.35">
            {Array.from({ length: 24 }).map((_, i) => (
              <rect
                key={i}
                x={(i % 8) * 50}
                y={Math.floor(i / 8) * 50}
                width="42"
                height="42"
                opacity={(i * 37) % 5 === 0 ? 0.9 : 0.3}
              />
            ))}
          </g>
        </svg>
      );
  }
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-14 border-b border-gray-line pb-6">
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="font-display text-4xl md:text-6xl mt-2">SELECTED PROJECTS</h2>
          </div>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-gray hover:text-white transition-colors link-underline"
          >
            View All Projects <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
              className="group relative"
            >
              <div className="relative h-64 overflow-hidden bg-bg-secondary border border-gray-line group-hover:border-red-accent/60 transition-colors duration-500">
                <div className="absolute inset-0 bg-bg-secondary" />
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <CardPattern pattern={p.pattern} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full border border-white/30 flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  <ArrowUpRight size={16} />
                </div>
                <span className="absolute bottom-4 left-4 font-display text-5xl text-white/10 group-hover:text-red-accent/30 transition-colors duration-500">
                  {p.number}
                </span>
              </div>
              <div className="flex items-start justify-between pt-4">
                <div>
                  <h3 className="font-display text-xl tracking-wide">{p.title}</h3>
                  <p className="text-gray text-xs font-mono uppercase tracking-[0.1em] mt-1">
                    {p.category}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="mt-1 text-gray group-hover:text-red-accent group-hover:rotate-45 transition-all duration-400"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
