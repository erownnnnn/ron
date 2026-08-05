"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sparkle } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-gray-line/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#home" className="font-display text-2xl tracking-wider">
          A<span className="text-red-accent">.</span>ROLLORATA
        </a>

        <nav className="hidden md:flex items-center gap-9 font-mono text-xs tracking-[0.15em] uppercase text-gray">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="link-underline hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-gray">
          <Sparkle size={12} className="text-red-accent" />
          Available for Freelance
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-bg border-t border-gray-line/60 px-6 py-6 flex flex-col gap-5 font-mono text-sm tracking-widest uppercase text-gray"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="hover:text-white">
              {link.label}
            </a>
          ))}
          <span className="text-red-accent flex items-center gap-2">
            <Sparkle size={12} /> Available for Freelance
          </span>
        </motion.nav>
      )}
    </motion.header>
  );
}
