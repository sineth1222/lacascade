"use client";

import { motion } from "framer-motion";
import { Calendar, Users } from "lucide-react";

export default function BookingBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mx-auto max-w-6xl px-6"
    >
      <div className="glass relative -top-16 flex flex-col gap-6 rounded-3xl p-8 md:flex-row md:items-center md:justify-between lg:p-12">
        <div>
          <h3 className="text-3xl font-medium text-white">Find Your Dates</h3>
          <p className="mt-2 text-gray-400">
            Luxury awaits — limited availability
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:gap-6">
          <div className="flex flex-1 items-center gap-4 rounded-xl bg-black/40 px-6 py-5">
            <Calendar className="h-7 w-7 text-[var(--gold)]" />
            <div>
              <label className="block text-sm text-gray-400">Check-in</label>
              <input
                type="date"
                className="bg-transparent text-white outline-none"
              />
            </div>
          </div>

          <div className="flex flex-1 items-center gap-4 rounded-xl bg-black/40 px-6 py-5">
            <Users className="h-7 w-7 text-[var(--gold)]" />
            <div>
              <label className="block text-sm text-gray-400">Guests</label>
              <select className="bg-transparent text-white outline-none">
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>
          </div>
        </div>

        <button className="rounded-xl bg-[var(--gold)] px-10 py-6 font-medium text-black transition hover:bg-[var(--gold-dark)]">
          Check Availability
        </button>
      </div>
    </motion.div>
  );
}
