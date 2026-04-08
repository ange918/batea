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
    border: "#ADFF2F",
    amount: "5 000 000 – 10 000 000 FCFA",
    desc: "Financement initial pour la production de la première collection, l'achat des matériaux phosphorescents, le développement de l'identité de marque et le lancement commercial.",
  },
  {
    icon: BuildingOfficeIcon,
    title: "PARTENARIAT HÔTELIER & TOURISME",
    border: "#C9A84C",
    amount: "Convention de distribution",
    desc: "Collaboration avec les hôtels, lodges et opérateurs touristiques béninois pour intégrer NightGlow dans leurs expériences clients — décoration, uniformes, cadeaux de bienvenue.",
  },
  {
    icon: AcademicCapIcon,
    title: "PARTENARIAT INSTITUTIONNEL",
    border: "#00E5FF",
    amount: "Soutien ADAC / Sèmè City",
    desc: "Appui des institutions publiques et structures d'accompagnement entrepreneurial béninoises : ADAC, Sèmè City, APIEX, pour renforcer la crédibilité et accéder aux marchés régionaux.",
  },
  {
    icon: BriefcaseIcon,
    title: "PARTENARIAT COMMERCIAL B2B",
    border: "#FF6FA8",
    amount: "Contrats de fourniture",
    desc: "Accords avec des enseignes, agences événementielles, studios de création, entreprises de sécurité routière et marques complémentaires pour des commandes régulières et à grande échelle.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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
            APPEL À PARTENARIAT & INVESTISSEMENT
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            Ce dont NightGlow a besoin pour décoller.
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
              className="shadow-glow-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={fadeUp}
              style={{
                backgroundColor: "#1A1A1A",
                borderRadius: 4,
                padding: "28px 32px",
                borderLeft: `4px solid ${block.border}`,
                display: "flex",
                alignItems: "flex-start",
                gap: 24,
              }}
            >
              <block.icon
                style={{
                  width: 32,
                  height: 32,
                  color: block.border,
                  flexShrink: 0,
                  marginTop: 4,
                }}
              />
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-bebas-neue)",
                      fontSize: 22,
                      color: "#ffffff",
                      letterSpacing: 2,
                    }}
                  >
                    {block.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-bebas-neue)",
                      fontSize: 18,
                      color: block.border,
                      letterSpacing: 1,
                    }}
                  >
                    {block.amount}
                  </span>
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: 14,
                    fontFamily: "var(--font-dm-sans)",
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
