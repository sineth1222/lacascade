/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-variants";
import { Contact, Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    // Add real submission logic here (Resend, Formspree, Next server action, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/30 bg-black/40 px-6 py-2 text-[var(--gold)]">
            <Contact size={20} />
            <span className="text-sm font-medium uppercase tracking-wider">
              LaCascade Contact
            </span>
          </div>
          <h2 className="mt-8 text-5xl font-medium text-white md:text-6xl">
            Get in Touch
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you — whether you're planning your escape or
            have questions.
          </p>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          onSubmit={handleSubmit}
          className="mt-16 glass mx-auto max-w-3xl rounded-3xl p-10 md:p-14"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div variants={fadeInUp}>
              <label className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                required
                type="text"
                className="mt-2 w-full rounded-xl bg-black/40 px-5 py-4 text-white outline-none ring-1 ring-[var(--gold)]/30 focus:ring-[var(--gold)] transition"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                required
                type="email"
                className="mt-2 w-full rounded-xl bg-black/40 px-5 py-4 text-white outline-none ring-1 ring-[var(--gold)]/30 focus:ring-[var(--gold)] transition"
                placeholder="hello@example.com"
              />
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8">
            <label className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              required
              rows={5}
              className="mt-2 w-full rounded-xl bg-black/40 px-5 py-4 text-white outline-none ring-1 ring-[var(--gold)]/30 focus:ring-[var(--gold)] transition resize-none"
              placeholder="Tell us about your dream stay..."
            />
          </motion.div>

          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === "loading"}
            className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-[var(--gold)] py-5 text-lg font-medium text-black transition hover:bg-[var(--gold-dark)] disabled:opacity-60 md:w-auto md:px-12"
          >
            <Send size={20} />
            {status === "loading" ? "Sending..." : "Send Message"}
          </motion.button>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-center text-[var(--gold)]"
            >
              Thank you! We'll get back to you soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
