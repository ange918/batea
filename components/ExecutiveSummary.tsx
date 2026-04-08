"use client";
import { motion } from "framer-motion";
import {
  LightBulbIcon,
  GlobeAltIcon,
  Squares2X2Icon,
  ChartBarIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const cards = [
  {
    label: "CONCEPT",
    color: "#ADFF2F",
    icon: LightBulbIcon,
    desc: "Produits qui brillent dans le noir sans électricité, sans pile, sans artifice.",
    num: "01",
  },
  {
    label: "ORIGINE",
    color: "#C9A84C",
    icon: GlobeAltIcon,
    desc: "Fondé à Cotonou, Bénin, 2025 — équipe pluridisciplinaire béninoise.",
    num: "02",
  },
  {
    label: "SECTEURS",
    color: "#00E5FF",
    icon: Squares2X2Icon,
    desc: "7 secteurs actifs : Mode, Déco, Sécurité, Tourisme, Architecture, Événementiel, Cosmétique.",
    num: "03",
  },
  {
    label: "MARCHÉ",
    color: "#B388FF",
    icon: ChartBarIcon,
    desc: "Croissance 8–10%/an · Streetwear mondial 347 Mds$ · Phosphorescent 285 M$.",
    num: "04",
  },
  {
    label: "MODÈLE",
    color: "#00E5FF",
    icon: CurrencyDollarIcon,
    desc: "Vente directe + B2B + Licences · Bénéfice an 1 estimé : 8,5 M FCFA.",
    num: "05",
  },
  {
    label: "VISION",
    color: "#FF6FA8",
    icon: RocketLaunchIcon,
    desc: "Référence africaine dans 17 pays OAPI + diaspora mondiale.",
    num: "06",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ExecutiveSummary() {
  return (
    <section
      id="resume"
      style={{ backgroundColor: "#0A0A0A", padding: "100px 24px" }}
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
          <span className="section-watermark">RÉSUMÉ</span>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="eyebrow-pill">
              <span className="eyebrow-pill-dot" />
              RÉSUMÉ EXÉCUTIF
            </div>
            <h2
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(40px, 6vw, 72px)",
                color: "#ffffff",
                lineHeight: 1,
              }}
            >
              NightGlow en un coup d&apos;œil
            </h2>
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: 20,
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              variants={fadeUp}
              style={{
                position: "relative",
                background: "linear-gradient(135deg, #161616 0%, #1e1e1e 100%)",
                borderRadius: 16,
                padding: "28px 28px 24px",
                border: "1px solid rgba(255,255,255,0.06)",
                overflow: "hidden",
                cursor: "default",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 50px ${card.color}22`,
                borderColor: `${card.color}44`,
              }}
            >
              {/* Corner number */}
              <span
                style={{
                  position: "absolute",
                  top: 16,
                  right: 20,
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: 52,
                  color: `${card.color}10`,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {card.num}
              </span>

              {/* Icon container */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  backgroundColor: `${card.color}15`,
                  border: `1px solid ${card.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <card.icon style={{ width: 26, height: 26, color: card.color }} />
              </div>

              {/* Label */}
              <p
                style={{
                  color: card.color,
                  fontSize: 11,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  fontFamily: "var(--font-dm-sans)",
                  marginBottom: 8,
                  fontWeight: 700,
                }}
              >
                {card.label}
              </p>

              {/* Desc */}
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 14,
                  fontFamily: "var(--font-dm-sans)",
                  lineHeight: 1.7,
                }}
              >
                {card.desc}
              </p>

              {/* Bottom accent line */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, ${card.color}80, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
