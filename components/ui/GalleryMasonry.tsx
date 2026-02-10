"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  GalleryHorizontal,
  GalleryThumbnails,
} from "lucide-react"; // npm install lucide-react
import { Great_Vibes, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const galleryImages = [
  {
    src: "/images/gallery/gal1.jpg", // romantic beach table sunset
    alt: "A plate full of ocean love",
    description: "Fresh, honest flavors that taste like home — but better.",
  },
  {
    src: "/images/gallery/gal2.jpg", // elegant seafood closeup
    alt: "Dinner under a blanket of stars",
    description: "Every candle, every laugh, every sip… feels like forever.",
  },
  {
    src: "/images/gallery/gal3.jpg", // pool at dusk ocean view
    alt: "Barefoot and carefree with friends",
    description:
      "Kick off your shoes, call the gang — this spot is waiting for you.",
  },
  {
    src: "/images/gallery/gal7.png", // fine dining table gold accents
    alt: "When the night gets this beautiful",
    description: "Don’t just look at the photos… come live the moment.",
  },
  {
    src: "/images/gallery/gal5.jpg", // outdoor lounge ocean view
    alt: "Breeze, books, and barefoot bliss",
    description: "No rush. No noise. Just you and the moment.",
  },
  {
    src: "/images/gallery/gal6.jpg", // moody night dining setup
    alt: "Traditional Sri Lankan local cuisine",
    description:
      "Experience the fresh, aromatic, and bursting with island flavors.",
  },
  // ඔයාට ඕන නම් තව එකතු කරගන්න (8–12 recommended)
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function GalleryCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, galleryImages.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Optional: Auto-play (comment out if not needed)
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [page]);

  return (
    <section className="py-20 md:py-32 bg-dark-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/30 bg-black/40 px-6 py-2 text-[var(--gold)]">
            <GalleryThumbnails size={20} />
            <span className="text-sm font-medium uppercase tracking-wider">
              LaCascade Moments
            </span>
          </div>
          <h2 className="mt-8 text-5xl font-medium text-white md:text-6xl">
            Captured Elegance
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-400">
            Timeless moments of luxury, nature, and tranquility at LaCascade.
          </p>
        </div>

        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] max-w-5xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.6, ease: "easeOut" },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border gold-border">
                <Image
                  src={galleryImages[imageIndex].src}
                  alt={galleryImages[imageIndex].alt}
                  fill
                  className="object-cover transition-transform duration-700 brightness-75 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority={imageIndex < 2}
                />

                {/* Darker overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/65" />

                {/* Alt text - උඩම, handwritten font එක්ක, no box */}
                <motion.div
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className={`absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center ${greatVibes.className}`}
                >
                  <p className="text-3xl md:text-6xl gold-text tracking-wide drop-shadow-[0_4px_10px_rgba(212,175,55,0.7)]">
                    {galleryImages[imageIndex].alt}
                  </p>
                </motion.div>

                {/* Description - ඊට යටින්, white border එකකින් වටකරලා */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.9 }}
                  className="absolute bottom-16 left-6 right-6 z-20 md:bottom-16"
                >
                  <div
                    className="flex items-center justify-center text-center mx-auto 
    px-3 py-3 md:px-10 md:py-4 
    border-b-2 border-white/60  
    w-[80%] md:w-[70%] lg:w-[60%] "
                  >
                    <p
                      className={`text-sm md:text-xl text-white font-light tracking-wide drop-shadow-md ${playfair.className}`}
                    >
                      {galleryImages[imageIndex].description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - gold icons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/40 gold-text hover:gold-bg hover:text-black transition-all duration-300 shadow-lg"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/40 gold-text hover:gold-bg hover:text-black transition-all duration-300 shadow-lg"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Dots indicator (optional) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
            {galleryImages.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === imageIndex ? "gold-bg scale-125" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
