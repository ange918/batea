"use client";
import { motion } from "framer-motion";
import { UserCircleIcon } from "@heroicons/react/24/outline";

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
  hidden: { opacity: 0, y: 30 },
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
            L&apos;ÉQUIPE FONDATRICE
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            Des talents béninois au service d&apos;une vision africaine.
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {members.map((m, i) => (
            <motion.div
              key={m.name}
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
                borderTop: `4px solid ${m.color}`,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  border: `2px solid ${m.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  backgroundColor: `${m.color}15`,
                  position: "relative",
                }}
              >
                {m.initials ? (
                  <span
                    style={{
                      fontFamily: "var(--font-bebas-neue)",
                      fontSize: 24,
                      color: m.color,
                      letterSpacing: 2,
                    }}
                  >
                    {m.initials}
                  </span>
                ) : (
                  <UserCircleIcon style={{ width: 40, height: 40, color: m.color }} />
                )}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 15,
                  color: "#ffffff",
                  fontWeight: 700,
                  marginBottom: 8,
                  lineHeight: 1.4,
                }}
              >
                {m.name}
              </h3>

              <p
                style={{
                  color: m.color,
                  fontSize: 12,
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: m.desc ? 16 : 0,
                }}
              >
                {m.role}
              </p>

              {m.desc && (
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: 13,
                    fontFamily: "var(--font-dm-sans)",
                    lineHeight: 1.6,
                    fontStyle: "italic",
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
