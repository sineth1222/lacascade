import Hero from "@/components/ui/Hero";
import BookingBar from "@/components/ui/BookingBar";
import { RestaurantSection } from "@/components/ui/RestaurantSection";
import { ExperiencesSection } from "@/components/ui/ExperiencesSection";
import TangalleMap from "@/components/ui/TangalleMap";
import GalleryMasonry from "@/components/ui/GalleryMasonry";
import ContactForm from "@/components/ui/ContactForm";
import Footer from "@/components/ui/Footer";
import LaCascadeLocation from "@/components/ui/LaCascadeLocation";

export default function Home() {
  return (
    <main className="relative bg-black">
      <Hero />

      <div className="relative z-10 -mt-32 pb-32">
        {/*<BookingBar />*/}
        <RestaurantSection />
        <ExperiencesSection />
        <GalleryMasonry />
        <LaCascadeLocation />
        <ContactForm />
      </div>

      {/* Footer spacer */}
      <Footer />
      {/*<div className="h-32" />*/}
    </main>
  );
}
