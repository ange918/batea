"use client";
import { motion } from "framer-motion";

const members = [
  {
    name: "GBETOENONMON Sèdami Mike",
    initials: "GSM",
    color: "#ADFF2F",
    role: "Fondateur & Directeur Général",
    desc: "Visionnaire du projet. Stratégie, business development, direction artistique. Architecte de l'ambition NightGlow.",
  },
  {
    name: "Arif KARIMOU",
    initials: "AK",
    color: "#C9A84C",
    role: "Consultant Marketing",
    desc: null,
  },
  {
    name: "Mohamed ASSANI",
    initials: "MA",
    color: "#00E5FF",
    role: "Designer Graphique",
    desc: null,
  },
  {
    name: "Marie-Fushia SOSSOU",
    initials: "MFS",
    color: "#FF6FA8",
    role: "Styliste",
    desc: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Team() {
  return (
    <section
      id="equipe"
      style={{ backgroundColor: "#0A0A0A", padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          style={{
            marginBottom: 64,
            position: "relative",
            minHeight: 130,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <span className="section-watermark">ÉQUIPE</span>
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontFamily: "var(--font-unbounded)",
                fontSize: "clamp(22px, 3.5vw, 40px)",
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              Des talents béninois au service d&apos;une vision africaine.
            </h2>
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: `0 20px 50px ${m.color}20` }}
              style={{
                background: `linear-gradient(160deg, #161616 0%, #1e1e1e 100%)`,
                borderRadius: 20,
                padding: "36px 24px 28px",
                border: `1px solid ${m.color}20`,
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Radial glow bg behind avatar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 140,
                  height: 100,
                  background: `radial-gradient(ellipse, ${m.color}15 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Avatar */}
              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background: `radial-gradient(circle at 30% 30%, ${m.color}25, ${m.color}08)`,
                  border: `2px solid ${m.color}50`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  position: "relative",
                  boxShadow: `0 0 30px ${m.color}20`,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-unbounded)",
                    fontSize: 26,
                    color: m.color,
                    letterSpacing: 1,
                  }}
                >
                  {m.initials}
                </span>

                {/* Ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: -6,
                    borderRadius: "50%",
                    border: `1px solid ${m.color}20`,
                  }}
                />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: 15,
                  color: "#ffffff",
                  fontWeight: 700,
                  marginBottom: 8,
                  lineHeight: 1.4,
                }}
              >
                {m.name}
              </h3>

              <div
                style={{
                  display: "inline-block",
                  backgroundColor: `${m.color}12`,
                  border: `1px solid ${m.color}30`,
                  borderRadius: 20,
                  padding: "4px 14px",
                  marginBottom: m.desc ? 16 : 0,
                }}
              >
                <p
                  style={{
                    color: m.color,
                    fontSize: 11,
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 600,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  {m.role}
                </p>
              </div>

              {m.desc && (
                <p
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: 13,
                    fontFamily: "var(--font-montserrat)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    marginTop: 4,
                  }}
                >
                  {m.desc}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
