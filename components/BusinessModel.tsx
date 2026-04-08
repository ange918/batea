"use client";
import { motion } from "framer-motion";
import {
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  SparklesIcon,
  DocumentTextIcon,
  CalculatorIcon,
} from "@heroicons/react/24/outline";

const cards = [
  {
    num: "01",
    title: "Vente Directe",
    icon: ShoppingCartIcon,
    price: "15K–80K FCFA",
    desc: "Collections vêtements & accessoires. Vente en ligne, pop-up stores, événements. Marges élevées sur éditions limitées.",
  },
  {
    num: "02",
    title: "B2B & Sur Mesure",
    icon: BuildingStorefrontIcon,
    price: "100K–2M FCFA",
    desc: "Créations sur mesure pour entreprises, hôtels, événements, campagnes marketing, institutions.",
  },
  {
    num: "03",
    title: "Cosmétique & Body Art",
    icon: SparklesIcon,
    price: "Kit à partir de 10K FCFA",
    desc: "Poudres et gels phosphorescents pour MUA, salons, événements. Fort volume, marge préservée.",
  },
  {
    num: "04",
    title: "Licences & Co-branding",
    icon: DocumentTextIcon,
    price: "200K–1M FCFA",
    desc: "Partenariats artistes, marques, organisateurs. Licences de design, éditions co-brandées.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function BusinessModel() {
  return (
    <section
      id="modele"
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
            MODÈLE ÉCONOMIQUE
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            Comment NightGlow génère ses revenus.
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginBottom: 32,
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
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
                position: "relative",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: 64,
                  color: "rgba(173,255,47,0.08)",
                  position: "absolute",
                  top: 16,
                  right: 20,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {card.num}
              </span>
              <card.icon
                style={{
                  width: 32,
                  height: 32,
                  color: "#ADFF2F",
                  marginBottom: 16,
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: 26,
                  color: "#ffffff",
                  marginBottom: 8,
                  letterSpacing: 1,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: 22,
                  color: "#ADFF2F",
                  marginBottom: 16,
                  letterSpacing: 1,
                }}
              >
                {card.price}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 14,
                  fontFamily: "var(--font-dm-sans)",
                  lineHeight: 1.6,
                }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          style={{
            backgroundColor: "#1A1A1A",
            borderRadius: 4,
            padding: "24px 32px",
            border: "1px solid rgba(201,168,76,0.4)",
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <CalculatorIcon style={{ width: 28, height: 28, color: "#C9A84C", flexShrink: 0 }} />
          <div
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 14,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.8,
              flex: 1,
            }}
          >
            <span style={{ color: "#C9A84C", fontWeight: 700 }}>PRÉVISIONNEL AN 1 :</span>{" "}
            CA →{" "}
            <span style={{ color: "#ADFF2F", fontWeight: 600 }}>13 150 000 FCFA</span>
            {" · "}Charges →{" "}
            <span style={{ color: "#FF6FA8", fontWeight: 600 }}>4 560 900 FCFA</span>
            {" · "}Bénéfice estimé →{" "}
            <span style={{ color: "#ADFF2F", fontWeight: 700, fontSize: 16 }}>8 589 100 FCFA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
