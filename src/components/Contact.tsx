"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { contactCards } from "@/lib/data";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.15c-3.16.69-3.83-1.52-3.83-1.52-.52-1.32-1.26-1.67-1.26-1.67-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 5.74 0c2.19-1.47 3.15-1.16 3.15-1.16.62 1.58.23 2.75.11 3.04.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7.9h2.65l.4-3.08h-3.05V8.06c0-.89.25-1.5 1.53-1.5h1.63V3.8c-.28-.04-1.25-.12-2.37-.12-2.35 0-3.95 1.43-3.95 4.06v2.26H7.7v3.08h2.64V21h3.16Z" />
    </svg>
  );
}

const icons = {
  Email: Mail,
  Phone: Phone,
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Facebook: FacebookIcon,
  Location: MapPin,
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-6xl mt-2 leading-[0.95]">
            LET&apos;S BUILD SOMETHING
            <br />
            AMAZING TOGETHER
          </h2>
          <p className="text-gray text-sm mt-5 max-w-md">
            I&apos;m currently open for new projects, internships, and
            collaborations. Let&apos;s create something that makes an impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contactCards.map((card, i) => {
            const Icon = icons[card.label as keyof typeof icons];
            return (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glow-hover group flex items-center gap-4 border border-gray-line bg-bg-secondary px-6 py-5"
              >
                <div className="w-11 h-11 shrink-0 rounded-full border border-red-primary flex items-center justify-center text-red-accent group-hover:bg-red-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray text-[11px] font-mono tracking-[0.15em] uppercase">
                    {card.label}
                  </p>
                  <p className="text-white text-sm truncate">{card.value}</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-gray group-hover:text-red-accent group-hover:rotate-45 transition-all duration-300 shrink-0"
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
