"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowUpRight } from "lucide-react";
import { projectTypes, budgetRanges } from "@/lib/site-data";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  budget: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const initialData: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
  budget: "",
};

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactForm({ open, onOpenChange }: ContactFormProps) {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!data.name.trim()) next.name = "Please tell us your name.";
    if (!data.email.trim()) next.email = "Please add your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "That email looks off — please double-check.";
    if (!data.projectType) next.projectType = "Pick what you need.";
    if (!data.message.trim()) next.message = "Tell us a little about your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      // Simulated submit — replace with real API call when ready.
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("success");
      setData(initialData);
    } catch {
      setStatus("error");
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset state after close animation
    setTimeout(() => {
      setStatus("idle");
      setErrors({});
    }, 400);
  };

  const update = (key: keyof FormData, value: string) => {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease }}
          className="fixed inset-0 z-[80] flex items-stretch justify-end"
        >
          {/* Backdrop */}
          <button
            aria-label="Close form"
            onClick={handleClose}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease }}
            className="relative z-10 flex h-full w-full max-w-[680px] flex-col bg-background"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-5 md:px-10">
              <div>
                <span className="text-eyebrow text-muted-foreground">Project Inquiry</span>
                <h3 className="mt-1 font-medium tracking-tight text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                  Start a project
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10">
              {status === "success" ? (
                <SuccessState onClose={handleClose} />
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {/* Name + Company */}
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Field
                      label="Name"
                      required
                      value={data.name}
                      onChange={(v) => update("name", v)}
                      error={errors.name}
                      placeholder="Your name"
                      type="text"
                    />
                    <Field
                      label="Company"
                      value={data.company}
                      onChange={(v) => update("company", v)}
                      error={errors.company}
                      placeholder="Company name"
                      type="text"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Field
                      label="Email"
                      required
                      value={data.email}
                      onChange={(v) => update("email", v)}
                      error={errors.email}
                      placeholder="you@company.com"
                      type="email"
                    />
                    <Field
                      label="Phone"
                      value={data.phone}
                      onChange={(v) => update("phone", v)}
                      error={errors.phone}
                      placeholder="Optional"
                      type="tel"
                    />
                  </div>

                  {/* Project type — chips */}
                  <div>
                    <Label required>What do you need?</Label>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {projectTypes.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => update("projectType", t)}
                          className={cn(
                            "rounded-full border px-4 py-2 text-eyebrow transition-all",
                            data.projectType === t
                              ? "border-foreground bg-foreground text-background"
                              : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    {errors.projectType && (
                      <p className="mt-2 text-sm text-accent">{errors.projectType}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <Label required>Tell us about your project</Label>
                    <textarea
                      value={data.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="What are you building, launching or imagining?"
                      rows={4}
                      className="mt-3 w-full resize-none border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-accent">{errors.message}</p>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <Label>Estimated budget</Label>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => update("budget", b)}
                          className={cn(
                            "rounded-full border px-4 py-2 text-eyebrow transition-all",
                            data.budget === b
                              ? "border-accent bg-accent text-accent-foreground"
                              : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                          )}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="mt-4 flex flex-col gap-4">
                    {status === "error" && (
                      <p className="text-sm text-accent">
                        Something went wrong on our end. Please try again, or email us directly.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-5 text-eyebrow text-background transition-colors duration-300 hover:bg-accent hover:text-accent-foreground disabled:opacity-60"
                    >
                      {status === "submitting" ? "Sending…" : "Send Inquiry"}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <span className="text-eyebrow text-muted-foreground">
      {children}
      {required && <span className="ml-1 text-accent">*</span>}
    </span>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
  type,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
      />
      {error && <p className="mt-2 text-sm text-accent">{error}</p>}
    </div>
  );
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
      className="flex h-full flex-col items-start justify-center gap-6"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
        <Check className="h-7 w-7" strokeWidth={2} />
      </div>
      <h4
        className="font-medium tracking-tightest text-foreground"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}
      >
        Inquiry received.
      </h4>
      <p className="max-w-md text-pretty text-muted-foreground md:text-lg">
        Thanks for reaching out. We'll get back to you within 1–2 business
        days. In the meantime, feel free to browse our work.
      </p>
      <button
        onClick={onClose}
        className="group mt-4 inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-eyebrow transition-colors hover:bg-foreground hover:text-background"
      >
        Back to site
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </motion.div>
  );
}
