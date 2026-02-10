"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  price?: string;
};

export function RestaurantCard({ title, description, image, price }: Props) {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group glass overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-8">
        <h4 className="text-xl font-medium text-white">{title}</h4>
        {price && <p className="mt-1 text-[var(--gold)]">{price}</p>}
        <p className="mt-4 text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}
