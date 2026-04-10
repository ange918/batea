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
    color: "#ADFF2F",
  },
  {
    num: "02",
    title: "B2B & Sur Mesure",
    icon: BuildingStorefrontIcon,
    price: "100K–2M FCFA",
    desc: "Créations sur mesure pour entreprises, hôtels, événements, campagnes marketing, institutions.",
    color: "#00E5FF",
  },
  {
    num: "03",
    title: "Cosmétique & Body Art",
    icon: SparklesIcon,
    price: "Kit à partir de 10K FCFA",
    desc: "Poudres et gels phosphorescents pour MUA, salons, événements. Fort volume, marge préservée.",
    color: "#FF6FA8",
  },
  {
    num: "04",
    title: "Licences & Co-branding",
    icon: DocumentTextIcon,
    price: "200K–1M FCFA",
    desc: "Partenariats artistes, marques, organisateurs. Licences de design, éditions co-brandées.",
    color: "#B388FF",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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
          style={{
            marginBottom: 64,
            position: "relative",
            minHeight: 130,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <span className="section-watermark">MODÈLE</span>
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontFamily: "var(--font-unbounded)",
                fontSize: "clamp(22px, 3.5vw, 40px)",
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              Comment NightGlow génère ses revenus.
            </h2>
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            marginBottom: 28,
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: `0 20px 50px ${card.color}20` }}
              style={{
                background: `linear-gradient(145deg, #161616 0%, #1c1c1c 100%)`,
                borderRadius: 16,
                padding: "32px 28px",
                border: `1px solid ${card.color}20`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Ghost number */}
              <span
                style={{
                  position: "absolute",
                  top: 12,
                  right: 18,
                  fontFamily: "var(--font-unbounded)",
                  fontSize: 80,
                  color: `${card.color}08`,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {card.num}
              </span>

              {/* Icon with pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  backgroundColor: `${card.color}12`,
                  border: `1px solid ${card.color}25`,
                  borderRadius: 40,
                  padding: "8px 16px 8px 10px",
                  marginBottom: 24,
                }}
              >
                <card.icon style={{ width: 20, height: 20, color: card.color }} />
                <span
                  style={{
                    color: card.color,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  {card.title}
                </span>
              </div>

              {/* Price badge */}
              <p
                style={{
                  fontFamily: "var(--font-unbounded)",
                  fontSize: 28,
                  color: "#ffffff",
                  letterSpacing: 1,
                  marginBottom: 12,
                  lineHeight: 1.1,
                }}
              >
                {card.price}
              </p>

              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 13,
                  fontFamily: "var(--font-montserrat)",
                  lineHeight: 1.7,
                }}
              >
                {card.desc}
              </p>

              {/* Bottom glow line */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${card.color}60, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Prévisionnel banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          style={{
            background: "linear-gradient(135deg, #1a1a0f 0%, #1a1610 100%)",
            borderRadius: 16,
            padding: "28px 32px",
            border: "1px solid rgba(201,168,76,0.3)",
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              backgroundColor: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <CalculatorIcon style={{ width: 24, height: 24, color: "#C9A84C" }} />
          </div>
          <div
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: 14,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 2,
              flex: 1,
            }}
          >
            <span style={{ color: "#C9A84C", fontWeight: 700, letterSpacing: 1 }}>PRÉVISIONNEL AN 1 ·</span>{" "}
            CA →{" "}
            <span style={{ color: "#ADFF2F", fontWeight: 700 }}>13 150 000 FCFA</span>
            {"  ·  "}Charges →{" "}
            <span style={{ color: "#FF6FA8", fontWeight: 600 }}>4 560 900 FCFA</span>
            {"  ·  "}Bénéfice →{" "}
            <span style={{ color: "#ADFF2F", fontWeight: 700, fontSize: 16 }}>8 589 100 FCFA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
