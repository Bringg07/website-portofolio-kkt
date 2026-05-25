import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClubCard from "@/components/ClubCard";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import PeopleCard from "@/components/PeopleCard";
import EventSection from "@/components/EventSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <Hero />

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

        {/* PEOPLE */}
        <PeopleCard />

        {/* EVENTS */}
        <EventSection />

        {/* TESTIMONIALS */}
        <TestimonialsSection />
      </section>

      {/* CONTACT */}
      <ContactSection />

      <Footer />
    </>
  );
}