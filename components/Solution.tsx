"use client";
import { motion } from "framer-motion";
import {
  BeakerIcon,
  PaintBrushIcon,
  BoltSlashIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const items = [
  {
    icon: BeakerIcon,
    title: "TECHNOLOGIE",
    desc: "Encres, vinyles et poudres phosphorescentes à longue persistance (strontium aluminate).",
  },
  {
    icon: PaintBrushIcon,
    title: "CULTURE",
    desc: "Chaque motif tire de l'iconographie béninoise : poteries, architecture, symboles spirituels.",
  },
  {
    icon: BoltSlashIcon,
    title: "IMPACT",
    desc: "Une solution passive, sans énergie, adaptée au contexte africain.",
  },
  {
    icon: SunIcon,
    title: "INNOVATION",
    desc: "Double vie du produit : élégant le jour, spectaculaire la nuit.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Solution() {
  return (
    <section
      id="solution"
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
              fontWeight: 600,
            }}
          >
            LA SOLUTION
          </p>
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div
              style={{
                width: 4,
                backgroundColor: "#ADFF2F",
                alignSelf: "stretch",
                minHeight: 60,
                flexShrink: 0,
                boxShadow: "0 0 12px rgba(173,255,47,0.5)",
              }}
            />
            <h2
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(36px, 5vw, 64px)",
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              Le phosphorescent comme langage universel.
            </h2>
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              variants={fadeUp}
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: 16,
                fontFamily: "var(--font-dm-sans)",
                lineHeight: 1.8,
                marginBottom: 40,
              }}
            >
              NightGlow transforme des matériaux phosphorescents en créations culturelles, artistiques et commerciales. Nos produits absorbent la lumière le jour et la restituent la nuit sans électricité, sans pile, sans artifice.
            </motion.p>

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  variants={fadeUp}
                  style={{ display: "flex", gap: 20, alignItems: "flex-start" }}
                >
                  <item.icon
                    style={{
                      width: 28,
                      height: 28,
                      color: "#ADFF2F",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        color: "#ADFF2F",
                        fontSize: 13,
                        letterSpacing: 3,
                        fontFamily: "var(--font-dm-sans)",
                        fontWeight: 700,
                        marginBottom: 6,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: 14,
                        fontFamily: "var(--font-dm-sans)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <svg
              width={280}
              height={360}
              viewBox="0 0 280 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: "drop-shadow(0 0 24px rgba(255,80,0,0.5))",
              }}
            >
              <ellipse cx="140" cy="320" rx="70" ry="10" stroke="#FF6020" strokeWidth="1.5" opacity="0.4" />
              <rect x="80" y="260" width="120" height="60" rx="4" stroke="#FF6020" strokeWidth="2" />
              <path d="M60 260 C60 200 100 160 140 120" stroke="#FF5500" strokeWidth="2" fill="none" />
              <path d="M220 260 C220 200 180 160 140 120" stroke="#FF5500" strokeWidth="2" fill="none" />
              <ellipse cx="140" cy="100" rx="40" ry="60" stroke="#FF6020" strokeWidth="2" />
              <path d="M100 120 Q120 140 140 130 Q160 140 180 120" stroke="#FF8040" strokeWidth="1.5" fill="none" />
              <circle cx="140" cy="80" r="12" stroke="#FF8040" strokeWidth="2" />
              <path d="M110 300 L90 310 M130 300 L120 315 M150 300 L150 315 M170 300 L180 310" stroke="#FF6020" strokeWidth="1.5" opacity="0.6" />
              <circle cx="50" cy="180" r="3" fill="#FF6020" opacity="0.7" />
              <circle cx="230" cy="150" r="4" fill="#FF8040" opacity="0.5" />
              <circle cx="40" cy="240" r="2" fill="#FF4000" opacity="0.6" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
