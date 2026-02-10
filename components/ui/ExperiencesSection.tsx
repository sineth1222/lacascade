// components/ui/ExperiencesSection.tsx
"use client";

import { motion } from "framer-motion";
import { Kayak, Moon, Palmtree, RussianRuble, Sparkle } from "lucide-react";
import { ExperienceCard } from "./ExperienceCard";
import { staggerContainer, fadeInUp } from "@/lib/framer-variants";

const experiences = [
  {
    title: "Kayak Rides",
    description:
      "Glide through calm lagoons and mangroves at sunrise or sunset — pure tranquility.",
    image: "/images/kayak2.jpg",
    icon: <Kayak size={32} />,
  },
  {
    title: "Turtle Watching",
    description:
      "Witness endangered sea turtles nesting on Rekawa Beach under the stars.",
    image: "/images/turtul.jpg",
    icon: <Moon size={32} />,
  },
  {
    title: "Jungle & Beach Nightlife",
    description:
      "From quiet beach bonfires to intimate local bars — evenings made unforgettable.",
    image: "/images/night.jpg",
    icon: <Palmtree size={32} />,
  },
];

export function ExperiencesSection() {
  return (
    <section id="experiences" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/30 bg-black/40 px-6 py-2 text-[var(--gold)]">
            <Sparkle size={20} />
            <span className="text-sm font-medium uppercase tracking-wider">
              LaCascade Timeless
            </span>
          </div>
          <h2 className="mt-8 text-5xl font-medium text-white md:text-6xl">
            Signature Experiences
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
            Curated moments that blend nature, adventure, and serenity.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-10 md:grid-cols-3"
        >
          {experiences.map((exp) => (
            <ExperienceCard key={exp.title} {...exp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
