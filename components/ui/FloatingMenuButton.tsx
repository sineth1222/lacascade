"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Utensils,
  X,
  Soup,
  Fish,
  Star,
  Wine,
  CakeSlice, // Desserts සඳහා එකතු කළා
} from "lucide-react";

// 5 categories දැන් තියෙනවා (Desserts එකතු කළා)
const quickCategories = [
  { label: "Starters", icon: Soup, path: "/menu?category=appetizers" },
  { label: "Mains", icon: Fish, path: "/menu?category=mains" },
  { label: "Drinks", icon: Wine, path: "/menu?category=drinks" },
  { label: "Desserts", icon: CakeSlice, path: "/menu?category=desserts" },
  { label: "Specials", icon: Star, path: "/menu?category=specials" },
];

// Positions 5කට adjust කළා (ඔයා දුන් 4ක pattern එකට ගැලපෙන විදිහට)
const positions = [
  { x: 10, y: -90, delay: 0 },
  { x: -45, y: -84, delay: 0.05 },
  { x: -84, y: -45, delay: 0.1 },
  { x: -90, y: 10, delay: 0.15 },
  { x: -105, y: -100, delay: 0.2 },
];

export default function FloatingMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleCategoryClick = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[9999]">
      {/* Main button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[var(--gold)] text-black shadow-xl shadow-gold/50 hover:bg-gold-light transition-all duration-300"
        whileHover={{ scale: 1.09 }}
        whileTap={{ scale: 0.93 }}
        aria-label="Quick menu"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "x" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.22 }}
            //className="fixed bottom-8 right-8 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark text-white shadow-2xl shadow-gold/50 backdrop-blur-sm border border-gold/30 hover:scale-110 hover:shadow-gold/70 transition-all duration-500"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Utensils size={24} strokeWidth={2.6} />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Sub buttons - 5ක් දැන් */}
      <div className="absolute bottom-10 right-10 w-0 h-0 pointer-events-none">
        {quickCategories.map((cat, index) => {
          const pos = positions[index] || { x: -50, y: -50, delay: 0.1 };
          const Icon = cat.icon;

          return (
            <motion.button
              key={cat.label}
              onClick={() => handleCategoryClick(cat.path)}
              className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-gold-border gold-text shadow-md pointer-events-auto hover:bg-gold/40 hover:text-white transition-all duration-200"
              initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
              animate={{
                scale: isOpen ? 1 : 0,
                opacity: isOpen ? 1 : 0,
                x: isOpen ? pos.x : 0,
                y: isOpen ? pos.y : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 24,
                delay: isOpen ? pos.delay : 0.1,
              }}
            >
              <Icon size={22} strokeWidth={2.4} />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
