"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t gold-border text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-heading gold-text mb-4 tracking-wide">
              LaCascade
            </h3>
            <p className="text-gray-400 max-w-md mb-6">
              Where the jungle whispers and the ocean sings. Luxury beachfront
              dining and serene escapes in Tangalle, Sri Lanka.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6 mt-6">
              <motion.a
                href="https://www.facebook.com/LaCascadeTangalle"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-text hover:text-white transition-colors"
                whileHover={{ scale: 1.15 }}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>

              <motion.a
                href="https://www.tripadvisor.com/Restaurant_Review-g1234567-d12345678-Reviews-LaCascade-Tangalle_Southern_Province.html"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-text hover:text-white transition-colors"
                whileHover={{ scale: 1.15 }}
                aria-label="Instagram"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <Image
                    src="/images/tripadvisor.png"
                    alt="TripAdvisor"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                    priority
                  />
                </div>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/lacascadetangalle"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-text hover:text-white transition-colors"
                whileHover={{ scale: 1.15 }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>

              {/* TripAdvisor එකත් ඕන නම් මෙතන එකතු කරන්න */}
              {/* <motion.a href="YOUR_TRIPADVISOR_LINK" ... > ... </motion.a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-gold transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-gold transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="gold-text mt-1 flex-shrink-0" />
                <span>Tangalle Beach Road, Tangalle, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="gold-text" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="gold-text" />
                <span>info@lacascade.lk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t gold-border text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} PraDha. All rights reserved.</p>
          <p className="mt-2">Designed with passion in Tangalle, Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
