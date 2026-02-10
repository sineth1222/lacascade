"use client";

import { motion } from "framer-motion";
import { Anchor, Waves } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Rooms", href: "#rooms" },
  { name: "Dining", href: "#restaurant" },
  { name: "Experiences", href: "#experiences" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 z-50 w-full px-6 py-6 md:px-12"
    >
      <div className="glass mx-auto max-w-7xl rounded-2xl px-8 py-5">
        <div className="flex items-center justify-center">
          <Link href="/" className="group flex items-center gap-3">
            <Waves className="h-8 w-8 text-[var(--gold)] transition-transform group-hover:rotate-12" />
            <span className="text-2xl font-medium tracking-tight text-white">
              LaCascade
            </span>
          </Link>

          {/*<div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-sm font-medium text-gray-300 transition-colors hover:text-[var(--gold)]"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all group-hover:w-full" />
              </Link>
            ))}
            <button className="rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-medium text-black transition hover:bg-[var(--gold-dark)]">
              Book Now
            </button>
          </div>*/}
        </div>
      </div>
    </motion.nav>
  );
}
