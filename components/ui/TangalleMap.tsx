"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";

type Hotspot = {
  id: string;
  label: string;
  x: number; // % based
  y: number;
  shortDesc: string; // popup එකට කෙටි description
  fullDesc: string; // See More එකට full details
  image?: string; // optional image for detail view
};

const hotspots: Hotspot[] = [
  {
    id: "turtle",
    label: "Rekawa Turtle Beach",
    x: 65, // දකුණට ටිකක් shift කළා
    y: 15,
    shortDesc: "ප්‍රසිද්ධ turtle nesting site එකක්.",
    fullDesc:
      "Rekawa Beach එකේ රාත්‍රියේදී sea turtles nesting process එක witness කරන්න පුළුවන්. Green turtles සහ Olive ridley turtles බොහෝමයක් එනවා. Guided night tours තියෙනවා – eco-friendly විදිහට enjoy කරන්න.",
    image: "/images/turtle-beach.jpg",
  },
  {
    id: "lagoon",
    label: "Kalametiya Lagoon",
    x: 25,
    y: 52,
    shortDesc: "සන්සුන් mangrove kayaking spot එකක්.",
    fullDesc:
      "Kalametiya Bird Sanctuary එක ඇතුළේ තියෙන lagoon එකේ කයාක් ගහලා bird watching කරන්න හොඳම තැන. Migratory birds ගොඩක් එනවා winter කාලේ. Sunrise/sunset kayaking tours ගන්න පුළුවන්.",
    image: "/images/lagoon-kayak.jpg",
  },
  {
    id: "yala",
    label: "Yala National Park",
    x: 88,
    y: 38,
    shortDesc: "Leopards & elephants සදහා famous safari.",
    fullDesc:
      "Sri Lanka එකේ 2nd largest national park එක. Leopards බලන්න ලෝකෙටම ප්‍රසිද්ධයි. Elephants, sloth bears, crocodiles, birds ගොඩක් තියෙනවා. Morning safari ගන්න එක best – Tangalle එකෙන් 2.5-3 hours drive.",
    image: "/images/yala-safari.jpg",
  },
  // ඕන නම් තව එකතු කරන්න (e.g. "Hummanaya Blowhole" x:75, y:10)
];

export default function TangalleMap() {
  const [selected, setSelected] = useState<Hotspot | null>(null);

  return (
    <section className="relative py-32 bg-black">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-5xl font-medium text-white md:text-6xl">
          Explore the South Coast
        </h2>
        <p className="mt-6 text-xl text-gray-400">
          Tap golden hotspots to discover hidden gems around Tangalle
        </p>
      </div>

      <div className="relative mx-auto mt-16 aspect-[4/3] max-w-5xl overflow-hidden rounded-3xl border border-[var(--gold)]/30 bg-gradient-to-br from-gray-950 via-black to-gray-950 shadow-2xl">
        {/* Artistic SVG background - simple south coast focus */}
        <svg
          className="absolute inset-0 h-full w-full opacity-60"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ocean gradient */}
          <rect width="800" height="600" fill="#000814" />

          {/* Simplified south coast land shape (focus on Tangalle area) */}
          <path
            d="M100 500 Q200 420 350 480 Q500 400 650 480 Q750 420 800 500 L800 600 L0 600 L0 500 Q100 450 100 500 Z"
            fill="#0f1a0f"
            stroke="var(--gold)"
            strokeWidth="3"
            opacity="0.5"
          />

          {/* Abstract jungle/land mass */}
          <path
            d="M150 300 Q300 220 450 300 Q600 240 700 320 L750 480 Q500 420 300 480 Q150 420 150 300 Z"
            fill="#111b11"
            stroke="var(--gold)"
            strokeWidth="2"
            opacity="0.4"
          />

          {/* Golden wave accents */}
          <path
            d="M0 480 Q200 440 400 490 Q600 450 800 480"
            stroke="var(--gold)"
            strokeWidth="4"
            strokeOpacity="0.3"
          />

          {/* LaCascade label in elegant font */}
          <text
            x="400"
            y="280"
            fill="var(--gold)"
            fontFamily="Playfair Display, serif"
            fontSize="48"
            fontWeight="600"
            textAnchor="middle"
            opacity="0.8"
          >
            LaCascade
          </text>
        </svg>

        {/* Hotspots */}
        {hotspots.map((spot) => (
          <motion.button
            key={spot.id}
            className="group absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            onClick={() => setSelected(spot)}
            whileHover={{ scale: 1.35 }}
            whileTap={{ scale: 1.1 }}
          >
            <div className="h-6 w-6 rounded-full border-2 border-[var(--gold)] bg-black/70 shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.9)]" />
            <span className="absolute -top-12 whitespace-nowrap rounded-lg bg-black/95 px-5 py-2.5 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              {spot.label}
            </span>
          </motion.button>
        ))}

        {/* Popup Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-30 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 md:p-8"
            >
              <motion.div
                initial={{ scale: 0.85, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.85, y: 40 }}
                className="glass relative w-full max-w-2xl rounded-3xl p-8 md:p-12 text-center shadow-2xl"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-6 top-6 text-gray-400 hover:text-[var(--gold)] transition"
                >
                  <X size={32} />
                </button>

                {selected.image && (
                  <div className="relative mx-auto mb-8 h-48 w-full overflow-hidden rounded-2xl md:h-64">
                    {/* <Image src={selected.image} alt={selected.label} fill className="object-cover" /> */}
                    {/* Image එක දාන්න ඕන නම් public folder එකට දාලා uncomment කරන්න */}
                    <div className="h-full w-full bg-gradient-to-br from-[var(--gold)]/20 to-black" />{" "}
                    {/* placeholder */}
                  </div>
                )}

                <h3 className="text-3xl md:text-4xl font-medium text-[var(--gold)]">
                  {selected.label}
                </h3>

                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                  {selected.shortDesc}
                </p>

                <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:justify-center">
                  <button
                    onClick={() => setSelected(null)}
                    className="rounded-full border border-gray-600 px-8 py-4 text-gray-300 hover:border-gray-400 transition"
                  >
                    Close
                  </button>

                  {/* See More → full detail view (next/link or new modal) */}
                  <Link
                    href={`/destinations/${selected.id}`} // e.g. /destinations/turtle → create dynamic page
                    className="group flex items-center gap-3 rounded-full bg-[var(--gold)] px-10 py-4 font-medium text-black transition hover:bg-[var(--gold-dark)]"
                  >
                    See More Details
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
