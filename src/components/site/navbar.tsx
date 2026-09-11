"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/site-data";
import { MobileMenu } from "./mobile-menu";

interface NavbarProps {
  onStartProject: () => void;
}

export function Navbar({ onStartProject }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "absolute inset-0 transition-all duration-500",
            scrolled
              ? "bg-background/80 backdrop-blur-md border-b border-border"
              : "bg-transparent border-b border-transparent"
          )}
        />
        <nav className="relative mx-auto flex h-16 items-center justify-between px-5 md:h-20 md:px-10">
          {/* Logo */}
          <a href="#top" className="group flex items-center gap-2">
            <img
              src="/logo.svg.jpg"
              alt=""
              aria-hidden="true"
              className="h-7 w-7 md:h-8 md:w-8"
            />
            <span className="flex items-baseline">
              <span className="text-base font-semibold tracking-tight md:text-lg">
                BIGPICTURE
              </span>
              <span className="ml-0.5 text-accent text-base md:text-lg">®</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover-underline text-eyebrow text-foreground/70 transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden md:block">
            <button
              onClick={onStartProject}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-eyebrow text-background transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              Start a project
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            className="flex items-center gap-2 text-eyebrow md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span>Menu</span>
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            onClose={() => setMenuOpen(false)}
            onStartProject={() => {
              setMenuOpen(false);
              onStartProject();
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
