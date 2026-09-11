"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navLinks, socialLinks } from "@/lib/site-data";

interface MobileMenuProps {
  onClose: () => void;
  onStartProject: () => void;
}

export function MobileMenu({ onClose, onStartProject }: MobileMenuProps) {
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease }}
      className="fixed inset-0 z-[60] flex flex-col bg-background md:hidden"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-5">
        <span className="text-base font-semibold tracking-tight">
          BIGPICTURE<span className="text-accent">®</span>
        </span>
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-eyebrow"
          aria-label="Close menu"
        >
          <span>Close</span>
          <span className="text-xl leading-none">×</span>
        </button>
      </div>

      {/* Menu items — sequential reveal */}
      <nav className="flex flex-1 flex-col justify-center gap-1 px-5">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={onClose}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease }}
            className="group flex items-baseline justify-between border-b border-border py-4"
          >
            <span
              className="font-medium tracking-tightest"
              style={{ fontSize: "clamp(2rem, 12vw, 3.5rem)", lineHeight: 0.95 }}
            >
              {link.label}
            </span>
            <span className="text-eyebrow text-muted-foreground">
              0{i + 1}
            </span>
          </motion.a>
        ))}
      </nav>

      {/* Bottom CTA + socials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease }}
        className="px-5 pb-10 pt-4"
      >
        <button
          onClick={onStartProject}
          className="flex w-full items-center justify-between rounded-full bg-foreground px-5 py-4 text-background"
        >
          <span className="text-eyebrow">Start a project</span>
          <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
        </button>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          {Object.entries(socialLinks).map(([key, href]) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-eyebrow text-muted-foreground uppercase hover:text-foreground"
            >
              {key}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
