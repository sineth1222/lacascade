"use client";

import { fadeInUp } from "@/lib/framer-variants";
import { motion } from "framer-motion";
import { Map } from "lucide-react";

// components/LaCascadeLocation.tsx
export default function LaCascadeLocation() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="text-center mb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/30 bg-black/40 px-6 py-2 text-[var(--gold)]">
            <Map size={20} />
            <span className="text-sm font-medium uppercase tracking-wider">
              LaCascade Location
            </span>
          </div>
          <h2 className="mt-8 text-5xl font-medium text-white md:text-6xl">
            Find Us Here
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
            Tap golden hotspots to discover hidden gem around Tangalle.
          </p>
        </motion.div>
      </div>

      <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl shadow-gold/10 aspect-[4/3] md:aspect-[16/9]">
        {/* Free Google Maps Embed – no API key needed */}
        <iframe
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d80.7975!3d6.0233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDEnMjQuMCJOIDgwwrA0Nyc1MS4wIkU!5e0!3m2!1sen!2slk!4v1729000000000!5m2!1sen!2slk"
        ></iframe>

        {/* Optional elegant overlay */}
        <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md px-6 py-4 rounded-xl border gold-border z-10">
          <p className="gold-text font-medium text-lg">LaCascade</p>
          <p className="text-gray-300 text-sm mt-1">
            Tangalle Beach Road, Tangalle
          </p>
          <a
            href="https://maps.app.goo.gl/eKhiZueAc4VTPUmc6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 gold-text hover:text-white transition-colors"
          >
            Get Directions
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
