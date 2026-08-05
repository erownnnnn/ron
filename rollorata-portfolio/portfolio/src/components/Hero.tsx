"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { stats } from "@/lib/data";

const SURNAME = "PORTFOLIO";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-end pt-32"
    >
      {/* Giant background typography */}
      <div className="pointer-events-none absolute inset-x-0 top-[6%] md:top-[4%] flex justify-center select-none">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="hero-bgtype text-[22vw] md:text-[19vw] leading-[0.78] tracking-tight whitespace-nowrap"
        >
          {SURNAME}
        </motion.h1>
      </div>

      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="relative mx-auto mt-24 md:mt-16 h-[62svh] md:h-[78svh] w-[78%] md:w-[42%] max-w-[560px]"
      >
        <Image
          src="/images/portrait.png"
          alt="Aaron Bryan Rollorata"
          fill
          priority
          className="object-contain object-bottom grayscale contrast-125 brightness-[0.92]"
        />
        {/* red rim light tint */}
        <div
          className="absolute inset-0 mix-blend-color"
          style={{
            background:
              "radial-gradient(60% 55% at 50% 28%, rgba(230,57,70,0.65) 0%, rgba(193,18,31,0.25) 45%, transparent 75%)",
          }}
        />
        {/* soften edges into page background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(65% 60% at 50% 40%, transparent 55%, #050505 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent" />
      </motion.div>

      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        className="absolute left-6 md:left-10 top-[30%] md:top-[26%] max-w-xs md:max-w-sm z-20"
      >
        <p className="font-mono italic text-lg text-white/90 mb-2">Hello, I&apos;m</p>
        <h2 className="font-display text-4xl md:text-5xl leading-[0.95] mb-3">
          AARON BRYAN
          <br />
          ROLLORATA
        </h2>
        <p className="text-red-accent font-mono text-xs md:text-sm tracking-[0.15em] uppercase leading-relaxed mb-4">
          Computer Engineering Student
          <br />
          Embedded Systems Developer
          <br />
          Full Stack Developer
        </p>
        <p className="text-gray text-sm leading-relaxed mb-5 hidden md:block">
          I build modern web applications, embedded systems, IoT projects,
          AI-powered applications, and interactive digital experiences. I
          enjoy combining software engineering with hardware development to
          create innovative solutions.
        </p>
        <div className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-white/80">
          <Globe size={14} className="text-red-accent" />
          Available for Freelance
        </div>
      </motion.div>

      {/* Stats - right edge */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
        className="absolute right-6 md:right-10 top-[32%] md:top-[30%] z-20 flex flex-col gap-8 items-end text-right"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-4xl md:text-5xl text-red-accent leading-none">
              {s.value}
            </p>
            <p className="text-gray text-[11px] md:text-xs tracking-[0.1em] uppercase mt-1 max-w-[9rem]">
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>

      <div className="relative z-10 h-10 md:h-16 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
    </section>
  );
}
