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
  },
  {
    label: "ORIGINE",
    color: "#C9A84C",
    icon: GlobeAltIcon,
    desc: "Fondé à Cotonou, Bénin, 2025 — équipe pluridisciplinaire béninoise.",
  },
  {
    label: "SECTEURS",
    color: "#00E5FF",
    icon: Squares2X2Icon,
    desc: "7 secteurs actifs : Mode, Déco, Sécurité, Tourisme, Architecture, Événementiel, Cosmétique.",
  },
  {
    label: "MARCHÉ",
    color: "#B388FF",
    icon: ChartBarIcon,
    desc: "Croissance 8–10%/an · Streetwear mondial 347 Mds$ · Phosphorescent 285 M$.",
  },
  {
    label: "MODÈLE",
    color: "#00E5FF",
    icon: CurrencyDollarIcon,
    desc: "Vente directe + B2B + Licences · Bénéfice an 1 estimé : 8,5 M FCFA.",
  },
  {
    label: "VISION",
    color: "#FF6FA8",
    icon: RocketLaunchIcon,
    desc: "Référence africaine dans 17 pays OAPI + diaspora mondiale.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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
          style={{ marginBottom: 60 }}
        >
          <p
            style={{
              color: "#ADFF2F",
              fontSize: 11,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontFamily: "var(--font-dm-sans)",
              marginBottom: 12,
            }}
          >
            RÉSUMÉ EXÉCUTIF
          </p>
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
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              className="shadow-glow-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={fadeUp}
              style={{
                backgroundColor: "#1A1A1A",
                borderRadius: 4,
                padding: 28,
                borderTop: `4px solid ${card.color}`,
                position: "relative",
              }}
            >
              <card.icon
                style={{
                  width: 32,
                  height: 32,
                  color: card.color,
                  marginBottom: 16,
                }}
              />
              <p
                style={{
                  color: "#ADFF2F",
                  fontSize: 11,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  fontFamily: "var(--font-dm-sans)",
                  marginBottom: 10,
                  fontWeight: 600,
                }}
              >
                {card.label}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: 14,
                  fontFamily: "var(--font-dm-sans)",
                  lineHeight: 1.7,
                }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
