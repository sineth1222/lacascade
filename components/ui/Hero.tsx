"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Facebook,
  Instagram,
  MousePointer,
  MoveDown,
} from "lucide-react";
import Image from "next/image";
import { Great_Vibes, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const images = [
  "/images/hero5.jpeg",
  "/images/hero2.png",
  "/images/hero4.jpg",
  "/images/hero3.jpg",
];

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.4, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 1.2 } },
} as const;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  // Social links (ඔයාගේ real links මෙතන update කරගන්න!)
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook size={28} />,
      url: "https://www.facebook.com/LaCascadeTangalle", // ← real FB link
    },
    {
      name: "TripAdvisor",
      icon: (
        <div className="w-8 h-10 flex items-center justify-center">
          <Image
            src="/images/tripadvisor.png"
            alt="TripAdvisor"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
            priority
          />
        </div>
      ),
      url: "https://www.tripadvisor.com/Restaurant_Review-g1234567-d12345678-Reviews-LaCascade-Tangalle_Southern_Province.html", // ← real TripAdvisor link මෙතන දාන්න
    },
    {
      name: "Instagram",
      icon: <Instagram size={28} />,
      url: "https://www.instagram.com/lacascadetangalle", // ← real IG link
    },
  ];

  // Smooth scroll to next section (ඊළඟ section එකේ ID එක "next-section" කියලා දාලා තියෙනවා කියලා assume කරලා)
  const scrollToNext = () => {
    const nextSection = document.getElementById("next-section"); // ඔයාගේ next section එකේ id එක මෙතන දාන්න
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images with Ken Burns effect */}
      {images.map((src, idx) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{
            scale: idx === activeIndex ? 1.08 : 1.05,
            opacity: idx === activeIndex ? 1 : 0,
          }}
          transition={{ duration: 8, ease: "easeInOut" }}
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
        </motion.div>
      ))}
      {/*images.map((src, idx) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial="initial"
          animate={idx === activeIndex ? "animate" : "exit"}
          variants={variants}
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />
        </motion.div>
      ))*/}

      <div className="mt-42 relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="text-5xl font-medium tracking-tight gold-text md:text-7xl lg:text-8xl"
        >
          LaCascade
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 1 }}
          className={`mt-6 max-w-2xl text-xl font-light text-gray-300 md:text-2xl ${greatVibes.className}`}
        >
          Close your eyes for a second… feel that calm? <br />
          That’s the sound of peace. <br className="md:hidden" />
          Jungle whispers, ocean songs, and you — right here in Tangalle. <br />
        </motion.p>

        {/* Social Icons (Discover button එක ඉවත් කරලා මෙතන දැම්මා) /}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.9 }}
          className="mt-10 flex items-center justify-center gap-8 md:gap-12"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--gold)] hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer block"
              aria-label={`Visit us on ${social.name}`}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>*/}

        {/* Floating Circle Button - social icons ඉවත් කරලා මෙතන දැම්මා */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToNext}
          className="mt-6 flex h-15 w-15 items-center justify-center rounded-full  gold-text shadow-2xl shadow-gold/40 hover:gold-text transition-all duration-300"
          aria-label="Discover more"
        >
          <div className="flex flex-col items-center">
            <MoveDown size={28} className="mt-1 animate-bounce" />
          </div>
        </motion.button>
      </div>
    </section>
  );
}
