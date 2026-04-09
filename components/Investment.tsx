"use client";
import { motion } from "framer-motion";
import {
  BanknotesIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const blocks = [
  {
    icon: BanknotesIcon,
    title: "FINANCEMENT AMORÇAGE",
    color: "#ADFF2F",
    amount: "5 000 000 – 10 000 000 FCFA",
    desc: "Financement initial pour la production de la première collection, l'achat des matériaux phosphorescents, le développement de l'identité de marque et le lancement commercial.",
  },
  {
    icon: BuildingOfficeIcon,
    title: "PARTENARIAT HÔTELIER & TOURISME",
    color: "#C9A84C",
    amount: "Convention de distribution",
    desc: "Collaboration avec les hôtels, lodges et opérateurs touristiques béninois pour intégrer NightGlow dans leurs expériences clients — décoration, uniformes, cadeaux de bienvenue.",
  },
  {
    icon: AcademicCapIcon,
    title: "PARTENARIAT INSTITUTIONNEL",
    color: "#00E5FF",
    amount: "Soutien ADAC / Sèmè City",
    desc: "Appui des institutions publiques et structures d'accompagnement entrepreneurial béninoises : ADAC, Sèmè City, APIEX, pour renforcer la crédibilité et accéder aux marchés régionaux.",
  },
  {
    icon: BriefcaseIcon,
    title: "PARTENARIAT COMMERCIAL B2B",
    color: "#FF6FA8",
    amount: "Contrats de fourniture",
    desc: "Accords avec des enseignes, agences événementielles, studios de création, entreprises de sécurité routière et marques complémentaires pour des commandes régulières et à grande échelle.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Investment() {
  return (
    <section
      id="investissement"
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
          <span className="section-watermark">INVEST</span>
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontFamily: "var(--font-unbounded)",
                fontSize: "clamp(22px, 3.5vw, 40px)",
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              Ce dont NightGlow a besoin pour décoller.
            </h2>
          </div>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              variants={fadeUp}
              whileHover={{ x: 4, boxShadow: `0 10px 40px ${block.color}15` }}
              style={{
                background: "linear-gradient(135deg, #161616 0%, #1c1c1c 100%)",
                borderRadius: 16,
                padding: "28px 28px 28px 0",
                border: `1px solid ${block.color}18`,
                display: "flex",
                alignItems: "flex-start",
                gap: 0,
                overflow: "hidden",
              }}
            >
              {/* Left color strip + icon */}
              <div
                style={{
                  width: 72,
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: 2,
                  gap: 12,
                  borderRight: `1px solid ${block.color}20`,
                  padding: "4px 16px",
                  marginRight: 24,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: `${block.color}15`,
                    border: `1px solid ${block.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <block.icon style={{ width: 22, height: 22, color: block.color }} />
                </div>
                <div
                  style={{
                    width: 2,
                    flex: 1,
                    background: `linear-gradient(180deg, ${block.color}60, transparent)`,
                    borderRadius: 2,
                    minHeight: 20,
                  }}
                />
              </div>

              <div style={{ flex: 1, paddingRight: 4 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-unbounded)",
                      fontSize: 20,
                      color: "#ffffff",
                      letterSpacing: 2,
                      lineHeight: 1.2,
                    }}
                  >
                    {block.title}
                  </h3>
                  <span
                    style={{
                      display: "inline-block",
                      backgroundColor: `${block.color}12`,
                      border: `1px solid ${block.color}30`,
                      borderRadius: 20,
                      padding: "4px 12px",
                      fontFamily: "var(--font-unbounded)",
                      fontSize: 15,
                      color: block.color,
                      letterSpacing: 1,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {block.amount}
                  </span>
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: 13,
                    fontFamily: "var(--font-montserrat)",
                    lineHeight: 1.7,
                  }}
                >
                  {block.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
