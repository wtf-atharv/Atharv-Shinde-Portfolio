import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Oracle from '../assets/certs/Oracle.png';
import Data from "../../public/certs/Data_Science.jpg";
import Adira from "../../public/certs/adira.png";
import Application from '../assets/certs/app_dev.jpg';
import Cyber from "../../public/certs/cyber_security.jpg";
import Micro from '../assets/certs/microprocessor.jpg';
import Networking from '../assets/certs/networking.jpg';   
import Operating from '../assets/certs/os.jpg';
import Quality from '../assets/certs/quality.jpg';
import Robotics from '../assets/certs/robotics.jpg';  
import Software from '../assets/certs/testing.jpg';



// ✅ Certificates data (added URLs for View button)
const CERTS = {
  tech: [
    {
      title: "Cloud Computing",
      org: "Oracle",
      date: "2025",
      img: Oracle ,
      link: "/Atharv-Shinde-Portfolio/certs/Oracle.png",
    },
    {
      title: "Data Science",
      org: "Codewithharry",
      date: "2025",
      img: Data,
      link: "/Atharv-Shinde-Portfolio/certs/Data_Science.png",
    },
    {
      title: "ADira",
      org: "SCET AI Club",
      date: "2025",
      img: Adira,
      link: "/Atharv-Shinde-Portfolio/certs/adira.png",
    },
  ],
  other: [
    {
      title: "Application Development",
      org: "SCET tech fest",
      date: "2025",
      img: Application,
      link: "/Atharv-Shinde-Portfolio/certs/app_dev.png",
    },
    {
      title: "Cyber Security",
      org: "SCET tech fest",
      date: "2024",
      img: Cyber,
      link: "/Atharv-Shinde-Portfolio/certs/cyber_security.png",
    },
    {
      title: "Microprocessor",     
      org: "SCET",
      date: "2024",
      img: Micro,
      link: "/Atharv-Shinde-Portfolio/certs/microprocessor.png",
    },
    {
      title: "Networking",
      org: "SCET",
      date: "2025",
      img: Networking,
      link: "/Atharv-Shinde-Portfolio/certs/networking.png",
    },
    {
      title: "Operating Systems",
      org: "SCET",
      date: "2024",
      img: Operating,
      link: "/Atharv-Shinde-Portfolio/certs/operating_systems.png",
    },
    {
      title: "Quality Assurance",
      org: "SCET",
      date: "2025",
      img: Quality,
      link: "/Atharv-Shinde-Portfolio/certs/quality_assurance.png",
    },
    {
      title: "Robotics",
      org: "SCET",
      date: "2023",
      img: Robotics,
      link: "/Atharv-Shinde-Portfolio/certs/robotics.png",
    },
    {
      title: "Software Testing",
      org: "SCET",
      date: "2025",
      img: Software,
      link: "/Atharv-Shinde-Portfolio/certs/software_testing.png",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
