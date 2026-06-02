"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { peopleData, Person } from "@/data/people";
import ProfileModal from "@/components/ProfileModal";

export default function PeopleCard() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <section id="people">
      <div className="wrapper">
        <div className="section-title">
          <h2>Pendiri KKT</h2>
          <p>Tokoh-tokoh yang membangun komunitas solid ini</p>
        </div>

        <div className="card-grid">
          {peopleData.map((person, index) => (
            <motion.div
              key={index}
              className="club-card people-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="people-image-wrapper">
                <Image
                  src={person.image}
                  alt={`${person.name} - ${person.role}`}
                  width={300}
                  height={300}
                  className="club-img people-img"
                  loading="lazy"
                />
                <div className="people-role-badge">{person.role}</div>
              </div>

              <h3>{person.name}</h3>

              <p className="people-desc">{person.desc}</p>

              <div className="people-buttons">
                <button
                  onClick={() => setSelectedPerson(person)}
                  className="btn btn-primary"
                  aria-label={`Lihat profil lengkap ${person.name}`}
                >
                  Selengkapnya
                </button>

                <a
                  href={person.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  aria-label={`Kunjungi Instagram ${person.name}`}
                >
                  <FaInstagram />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />
    </section>
  );
}