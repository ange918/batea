"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  SunIcon,
  MoonIcon,
  ShoppingBagIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const products = [
  {
    name: "Jaquette Denim Phosphorescente",
    price: "45 000 FCFA",
    motif: "M1",
  },
  {
    name: "Boxy-Fit Homme & Femme",
    price: "35 000 FCFA",
    motif: "M2",
  },
  {
    name: "Gilet NightGlow",
    price: "28 000 FCFA",
    motif: "M3",
  },
  {
    name: "Tote Bag Phosphorescent",
    price: "15 000 FCFA",
    motif: "M4",
  },
];

const motifPaths = [
  "M40 80 L80 20 L120 80 Z M60 80 L80 40 L100 80 Z",
  "M20 60 Q80 10 140 60 Q80 110 20 60 Z",
  "M70 20 L90 20 L90 100 L70 100 Z M30 60 L130 60",
  "M20 20 L120 20 L120 120 L20 120 Z M40 40 L100 40 L100 100 L40 100 Z",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Collection() {
  const [night, setNight] = useState(false);

  return (
    <section
      id="collection"
      style={{
        backgroundColor: night ? "#000000" : "#0A0A0A",
        padding: "100px 24px",
        transition: "background-color 0.5s ease",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          style={{ marginBottom: 20, position: "relative" }}
        >
          <span className="section-watermark">COLLECTION</span>
          <div style={{ position: "relative", zIndex: 1 }}>
          <div className="eyebrow-pill">
            <span className="eyebrow-pill-dot" />
            PRODUIT ACTUEL
          </div>
          <h2
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: 12,
            }}
          >
            Collection Let There be Light — Saison N°1
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 15,
              fontStyle: "italic",
              fontFamily: "var(--font-dm-sans)",
              marginBottom: 40,
            }}
          >
            Chaque pièce raconte une histoire culturelle africaine, le jour, comme la nuit.
          </p>
          </div>
        </motion.div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "#1A1A1A",
              borderRadius: 40,
              padding: 4,
              gap: 4,
              border: "1px solid rgba(173,255,47,0.2)",
            }}
          >
            <button
              onClick={() => setNight(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 24px",
                borderRadius: 40,
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 600,
                letterSpacing: 1,
                transition: "all 0.3s",
                backgroundColor: !night ? "#ADFF2F" : "transparent",
                color: !night ? "#0A0A0A" : "rgba(255,255,255,0.5)",
              }}
            >
              <SunIcon style={{ width: 18, height: 18 }} />
              JOUR
            </button>
            <button
              onClick={() => setNight(true)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 24px",
                borderRadius: 40,
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 600,
                letterSpacing: 1,
                transition: "all 0.3s",
                backgroundColor: night ? "#ADFF2F" : "transparent",
                color: night ? "#0A0A0A" : "rgba(255,255,255,0.5)",
              }}
            >
              <MoonIcon style={{ width: 18, height: 18 }} />
              NUIT
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginBottom: 48,
          }}
        >
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={fadeUp}
              className="shadow-glow-hover"
              style={{
                backgroundColor: night ? "#000000" : "#1A1A1A",
                borderRadius: 4,
                overflow: "hidden",
                border: night
                  ? "1px solid rgba(173,255,47,0.3)"
                  : "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.5s ease",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  height: 220,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: night ? "#050505" : "#222222",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <svg
                  width={140}
                  height={160}
                  viewBox="0 0 140 160"
                  fill="none"
                  style={{
                    filter: night
                      ? `drop-shadow(0 0 20px rgba(173,255,47,0.9)) drop-shadow(0 0 40px rgba(173,255,47,0.5))`
                      : "none",
                    transition: "filter 0.5s ease",
                  }}
                >
                  <path
                    d={motifPaths[i]}
                    stroke={night ? "#ADFF2F" : "rgba(255,255,255,0.3)"}
                    strokeWidth="2"
                    fill={night ? "rgba(173,255,47,0.05)" : "rgba(255,255,255,0.03)"}
                  />
                  <circle
                    cx="70"
                    cy="80"
                    r="30"
                    stroke={night ? "#ADFF2F" : "rgba(255,255,255,0.2)"}
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <text
                    x="70"
                    y="86"
                    textAnchor="middle"
                    fontSize="20"
                    fontFamily="var(--font-bebas-neue)"
                    fill={night ? "#ADFF2F" : "rgba(255,255,255,0.4)"}
                  >
                    {product.motif}
                  </text>
                </svg>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0,0,0,0)",
                    opacity: 0,
                    transition: "all 0.3s",
                  }}
                  className="card-overlay"
                >
                  <ShoppingBagIcon
                    style={{ width: 36, height: 36, color: "#ADFF2F" }}
                  />
                </div>
              </div>
              <div style={{ padding: "20px 24px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: 22,
                    color: "#ffffff",
                    marginBottom: 8,
                    letterSpacing: 1,
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: 24,
                    color: "#ADFF2F",
                    letterSpacing: 1,
                  }}
                >
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid #ADFF2F",
              color: "#ADFF2F",
              padding: "14px 32px",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans)",
              borderRadius: 2,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#ADFF2F";
              el.style.color = "#0A0A0A";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.color = "#ADFF2F";
            }}
          >
            Voir toute la collection
            <ArrowRightIcon style={{ width: 18, height: 18 }} />
          </a>
        </div>
      </div>
    </section>
  );
}
