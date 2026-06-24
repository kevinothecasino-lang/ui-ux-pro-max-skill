"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

type Status = "idle" | "submitting" | "success";

const fieldClass =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-line-strong focus:bg-surface-strong";

export function ContactForm() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");

  // Demo handler — no backend. Simulates submit + success feedback
  // (skill UX guideline: always show feedback after submit).
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass flex flex-col items-start gap-3 p-8"
        role="status"
        aria-live="polite"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
          ✓
        </span>
        <h3 className="font-serif text-2xl">Message received.</h3>
        <p className="text-sm leading-relaxed text-muted">
          Thank you — we&apos;ll be in touch within two business days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass space-y-5 p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="mb-2 block text-sm text-foreground">
          Budget
        </label>
        <select id="budget" name="budget" className={fieldClass} defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          <option value="essential">Essential — $700</option>
          <option value="signature">Signature — $1,300</option>
          <option value="monthly">Monthly retainer</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-foreground">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what you're building and when you'd like to launch."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={status}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {status === "submitting" ? "Sending…" : "Send message"}
          </motion.span>
        </AnimatePresence>
      </button>
    </form>
  );
}
