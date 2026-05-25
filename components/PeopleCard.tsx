"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { peopleData } from "@/data/people";

export default function PeopleCard() {
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
              className="club-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={person.image}
                alt={`${person.name} - Pendiri KKT`}
                width={300}
                height={300}
                className="club-img"
                loading="lazy"
              />

              <h3>{person.name}</h3>

              <p>{person.desc}</p>

              <a
                href={person.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                aria-label={`Kunjungi Instagram ${person.name}`}
              >
                <FaInstagram style={{ marginRight: "8px" }} />
                Selengkapnya
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}