"use client";
import { motion } from "framer-motion";
import {
  ExclamationTriangleIcon,
  FaceFrownIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

const cards = [
  {
    icon: ExclamationTriangleIcon,
    title: "Rues sombres",
    desc: "Cotonou et les grandes villes africaines manquent d'éclairage nocturne. Des milliers de motos, piétons et cyclistes circulent chaque nuit sans visibilité.",
    stat: "1 accident/nuit",
    sub: "lié au manque de visibilité (estimé)",
    color: "#FF4444",
  },
  {
    icon: FaceFrownIcon,
    title: "Mode sans âme",
    desc: "Le streetwear africain souffre d'une saturation visuelle. Les créations sont souvent imitées, peu différenciantes, sans innovation esthétique réelle.",
    stat: "0 marque",
    sub: "phosphorescente africaine identifiée",
    color: "#FF6B35",
  },
  {
    icon: BanknotesIcon,
    title: "Valeur non capturée",
    desc: "L'Afrique exporte son talent culturel, ses motifs, ses symboles, son histoire ; sans en capturer la valeur économique à travers des marques premium.",
    stat: "~10 milliards $",
    sub: "de valeur mode africaine non exploitée",
    color: "#FF8C42",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Problem() {
  return (
    <section
      id="probleme"
      style={{ backgroundColor: "#080808", padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          style={{ marginBottom: 64, position: "relative" }}
        >
          <span className="section-watermark" style={{ WebkitTextStroke: "1px rgba(255,68,68,0.06)" }}>PROBLÈME</span>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="eyebrow-pill" style={{ backgroundColor: "rgba(255,68,68,0.07)", borderColor: "rgba(255,68,68,0.2)", color: "#FF4444" }}>
              <span className="eyebrow-pill-dot" style={{ backgroundColor: "#FF4444", boxShadow: "0 0 6px rgba(255,68,68,0.8)" }} />
              LE PROBLÈME
            </div>
            <h2
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(36px, 5vw, 64px)",
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              La nuit africaine est belle — mais invisible.
            </h2>
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: `0 20px 50px ${card.color}22` }}
              style={{
                background: "linear-gradient(160deg, #181818 0%, #141414 100%)",
                borderRadius: 16,
                padding: "32px 28px",
                border: `1px solid ${card.color}25`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top gradient bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${card.color}, ${card.color}00)`,
                }}
              />

              {/* Icon with circle bg */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${card.color}20 0%, ${card.color}05 100%)`,
                  border: `1px solid ${card.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <card.icon style={{ width: 28, height: 28, color: card.color }} />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: 30,
                  color: "#ffffff",
                  marginBottom: 12,
                  letterSpacing: 1,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 14,
                  fontFamily: "var(--font-dm-sans)",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                {card.desc}
              </p>

              {/* Stat box */}
              <div
                style={{
                  background: `${card.color}10`,
                  borderRadius: 10,
                  padding: "14px 16px",
                  borderLeft: `3px solid ${card.color}60`,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: 32,
                    color: "#C9A84C",
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {card.stat}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontSize: 11,
                    fontFamily: "var(--font-dm-sans)",
                    fontStyle: "italic",
                  }}
                >
                  {card.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
