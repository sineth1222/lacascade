"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, scaleUp } from "@/lib/framer-variants";

type Experience = {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode; // optional Lucide icon
};

export function ExperienceCard({
  title,
  description,
  image,
  icon,
}: Experience) {
  return (
    <motion.div
      variants={scaleUp}
      whileHover={{ y: -12, transition: { duration: 0.4 } }}
      className="group glass overflow-hidden rounded-2xl border border-[var(--gold)]/20"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="p-8">
        <div className="flex items-center gap-4">
          {icon && <div className="text-[var(--gold)]">{icon}</div>}
          <h3 className="text-2xl font-medium text-white">{title}</h3>
        </div>
        <p className="mt-4 text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
