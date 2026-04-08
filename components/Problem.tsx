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
  },
  {
    icon: FaceFrownIcon,
    title: "Mode sans âme",
    desc: "Le streetwear africain souffre d'une saturation visuelle. Les créations sont souvent imitées, peu différenciantes, sans innovation esthétique réelle.",
    stat: "0 marque",
    sub: "phosphorescente africaine identifiée",
  },
  {
    icon: BanknotesIcon,
    title: "Valeur non capturée",
    desc: "L'Afrique exporte son talent culturel, ses motifs, ses symboles, son histoire ; sans en capturer la valeur économique à travers des marques premium.",
    stat: "~10 milliards $",
    sub: "de valeur mode africaine non exploitée",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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
          style={{ marginBottom: 60 }}
        >
          <p
            style={{
              color: "#FF4444",
              fontSize: 11,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontFamily: "var(--font-dm-sans)",
              marginBottom: 12,
              fontWeight: 600,
            }}
          >
            LE PROBLÈME
          </p>
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
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="shadow-glow-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={fadeUp}
              style={{
                backgroundColor: "#1A1A1A",
                borderRadius: 4,
                padding: 32,
                borderTop: "4px solid #FF4444",
              }}
            >
              <card.icon
                style={{
                  width: 32,
                  height: 32,
                  color: "#FF4444",
                  marginBottom: 16,
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: 28,
                  color: "#ffffff",
                  marginBottom: 12,
                  letterSpacing: 1,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 14,
                  fontFamily: "var(--font-dm-sans)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                {card.desc}
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: 36,
                    color: "#C9A84C",
                    lineHeight: 1,
                  }}
                >
                  {card.stat}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: 12,
                    fontFamily: "var(--font-dm-sans)",
                    fontStyle: "italic",
                    marginTop: 4,
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
