import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClubCard from "@/components/ClubCard";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import PeopleCard from "@/components/PeopleCard";
import EventSection from "@/components/EventSection";
import MemoryGallery from "@/components/MemoryGallery";
import GuestBook from "@/components/GuestBook";
import ScrollProgress from "@/components/ScrollProgress";
import StatsSection from "@/components/StatsSection";
import BackToTop from "@/components/BackToTop";
import SectionDivider from "@/components/SectionDivider";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <Hero />

      {/* Stats Counter */}
      <StatsSection />

      <SectionDivider variant="wave" color="rgba(0,0,0,0.08)" />

      {/* The Club */}
      <section id="club">
        <div className="wrapper">
          <div className="section-title">
            <h2>The Club</h2>
            <p>Berbagi momen indah dan kebersamaan</p>
          </div>

          <div className="card-grid">
            {/* LIBURAN */}
            <ClubCard
              image="/coverpantai.jpeg"
              title="Acara Liburan"
              desc="Momen bahagia bersama keluarga kecil Tekkom."
              galleryImages={[
                "/unnes.jpeg",
                "/curug.jpeg",
                "/kaca.jpeg",
                "/jenguk.jpeg",
                "/biru.jpeg",
                "/mall.jpeg",
              ]}
            />

            {/* MAKAN */}
            <ClubCard
              image="/covermakan.jpeg"
              title="Makan Bersama"
              desc="Menikmati waktu bersama keluarga besar."
              galleryImages={[
                "/mam.jpeg",
                "/bukber.jpeg",
                "/jajan.jpeg",
                "/gacoan.jpeg",
                "/kotak.jpeg",
                "/ayam.jpeg",
              ]}
            />

            {/* FOTO */}
            <ClubCard
              image="/coverloh.jpeg"
              title="Foto Keluarga"
              desc="Kenangan terbaik bersama KKT."
              galleryImages={[
                "/yey.jpeg",
                "/merdeka.jpeg",
                "/almet.jpeg",
                "/hitam.jpeg",
                "/putih.jpeg",
                "/waduu.jpeg",
              ]}
            />
          </div>
        </div>

        <SectionDivider variant="curve" color="rgba(0,0,0,0.05)" />

        {/* PEOPLE */}
        <PeopleCard />

        <SectionDivider variant="wave" color="rgba(0,0,0,0.12)" />

        {/* EVENTS */}
        <EventSection />

        <SectionDivider variant="curve" color="rgba(0,0,0,0.08)" flip />

        {/* TESTIMONIALS */}
        <TestimonialsSection />

        <SectionDivider variant="wave" color="rgba(0,0,0,0.06)" />

        {/* MEMORY GALLERY */}
        <MemoryGallery />

        <SectionDivider variant="curve" color="rgba(0,0,0,0.1)" />

        {/* GUEST BOOK */}
        <GuestBook />

        <SectionDivider variant="wave" color="rgba(0,0,0,0.08)" flip />

        {/* CONTACT */}
        <ContactSection />
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}