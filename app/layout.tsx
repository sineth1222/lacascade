import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import FloatingMenuButton from "@/components/ui/FloatingMenuButton";

// Load Inter with variable font support
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // ← this creates CSS var
  display: "swap",
  weight: ["300", "400", "500", "600", "700"], // add what you need
});

export const metadata: Metadata = {
  title: "LaCascade • Luxury Boutique Hotel • Tangalle, Sri Lanka",
  description: "Experience serene luxury where the jungle meets the ocean.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans">
        <Navbar />
        {children}
        <FloatingMenuButton />
      </body>
    </html>
  );
}
