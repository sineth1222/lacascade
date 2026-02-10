"use client";

import { motion } from "framer-motion";
import { ChefHat, ArrowRight } from "lucide-react";
import { RestaurantCard } from "./RestaurantCard";
import { staggerContainer, fadeInUp } from "@/lib/framer-variants";
import Link from "next/link";

const featuredDishes = [
  {
    title: "Chips & Crab Curry",
    description:
      "Fresh lagoon crab simmered in creamy coconut milk with curry leaves, pandan, and spices — a coastal Sri Lankan classic.",
    image: "/images/food/crab.jpg",
    price: "LKR 4,200",
    tags: ["Signature", "Seafood"],
  },
  {
    title: "Wood-fired Tuna Loin",
    description:
      "Line-caught yellowfin tuna, seared rare, with tamarind glaze, green mango salad and coconut sambol.",
    image: "/images/food/fish2.jpg",
    price: "LKR 5,800",
    tags: ["Chef's Special", "Gluten-Free"],
  },
  {
    title: "King Prawn Moilee",
    description:
      "Tiger prawns in a fragrant turmeric-coconut broth with mustard seeds and curry leaves — mild yet deeply aromatic.",
    image: "/images/food/prowns.jpg",
    price: "LKR 4,900",
    tags: ["Spicy Option", "Popular"],
  },
  {
    title: "Sri Lankan Rice & Curry",
    description:
      "Young jackfruit and roasted cashews layered with basmati, saffron, and whole spices — vegetarian elegance.",
    image: "/images/food/rice-curry.jpg",
    price: "LKR 3,600",
    tags: ["Vegetarian", "Signature"],
  },
];

export function RestaurantSection() {
  return (
    <section id="restaurant" className="py-32">
      <div className="mt-30 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/30 bg-black/40 px-6 py-2 text-[var(--gold)]">
            <ChefHat size={20} />
            <span className="text-sm font-medium uppercase tracking-wider">
              LaCascade Dining
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-medium text-white md:text-6xl lg:text-7xl">
            Culinary Serenity
          </h2>

          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Locally-sourced ingredients meet refined coastal cuisine — where
            every dish tells a story of Tangalle’s land and sea.
          </p>
        </motion.div>

        {/* Featured Dishes Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={staggerContainer}
          className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featuredDishes.map((dish) => (
            <RestaurantCard key={dish.title} {...dish} />
          ))}
        </motion.div>

        {/* See More / Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="mt-20 text-center"
        >
          <Link
            href="/menu" // ← you can create app/menu/page.tsx later
            className="group inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/40 bg-black/40 px-10 py-5 text-lg font-medium text-[var(--gold)] transition-all hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-black"
          >
            View Full Menu
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <p className="mt-6 text-sm text-gray-500">
            Seasonal tasting menus available upon request
          </p>
        </motion.div>
      </div>
    </section>
  );
}
