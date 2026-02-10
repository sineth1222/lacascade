// lib/framer-variants.ts
import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // smooth premium easing
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,     // calm stagger ~180ms between items
      delayChildren: 0.3,
    },
  },
};

export const scaleUp: Variants = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const parallaxY: Variants = {
  hidden: { y: 80 },
  visible: {
    y: 0,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
  },
};