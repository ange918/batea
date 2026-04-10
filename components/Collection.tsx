"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon, ShoppingBagIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "Jaquette Denim Phosphorescente",
    ref: "NG-SS25-001",
    price: "45 000 FCFA",
    tag: "Signature",
    tagColor: "#ADFF2F",
    inscription: "NIGHT GLOW",
    sub: "Cotonou · Bénin · 2025",
    garment: "jacket",
  },
  {
    id: 2,
    name: "Boxy-Fit Homme & Femme",
    ref: "NG-SS25-002",
    price: "35 000 FCFA",
    tag: "Bestseller",
    tagColor: "#00E5FF",
    inscription: "L'AFRIQUE BRILLE",
    sub: "Même dans le noir.",
    garment: "tshirt",
  },
  {
    id: 3,
    name: "Gilet NightGlow",
    ref: "NG-SS25-003",
    price: "28 000 FCFA",
    tag: "Exclusif",
    tagColor: "#B388FF",
    inscription: "NG",
    sub: "La nuit révèle.",
    garment: "vest",
  },
  {
    id: 4,
    name: "Tote Bag Phosphorescent",
    ref: "NG-SS25-004",
    price: "15 000 FCFA",
    tag: "Accessoire",
    tagColor: "#C9A84C",
    inscription: "COTONOU · BÉNIN",
    sub: "Phosphorescent. Éternel.",
    garment: "tote",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function JacketSVG({ night }: { night: boolean }) {
  const glowFilter = night ? "url(#glow)" : "none";
  const strokeColor = night ? "#ADFF2F" : "rgba(255,255,255,0.22)";
  const inscriptionColor = night ? "#ADFF2F" : "rgba(255,255,255,0.12)";
  return (
    <svg viewBox="0 0 240 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="glowText" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Jacket body */}
      <path d="M60 80 L30 120 L20 220 L80 230 L80 160 L120 170 L160 160 L160 230 L220 220 L210 120 L180 80" stroke={strokeColor} strokeWidth="2" fill={night ? "rgba(173,255,47,0.03)" : "rgba(255,255,255,0.03)"} />
      {/* Left lapel */}
      <path d="M60 80 L80 100 L100 80 L120 170" stroke={strokeColor} strokeWidth="1.5" fill="none"/>
      {/* Right lapel */}
      <path d="M180 80 L160 100 L140 80 L120 170" stroke={strokeColor} strokeWidth="1.5" fill="none"/>
      {/* Left sleeve */}
      <path d="M30 120 L10 180 L30 185 L50 130" stroke={strokeColor} strokeWidth="2" fill={night ? "rgba(173,255,47,0.03)" : "rgba(255,255,255,0.03)"}/>
      {/* Right sleeve */}
      <path d="M210 120 L230 180 L210 185 L190 130" stroke={strokeColor} strokeWidth="2" fill={night ? "rgba(173,255,47,0.03)" : "rgba(255,255,255,0.03)"}/>
      {/* Collar */}
      <path d="M90 75 Q120 60 150 75" stroke={strokeColor} strokeWidth="2" fill="none"/>
      {/* Button placket */}
      <line x1="120" y1="130" x2="120" y2="230" stroke={strokeColor} strokeWidth="1" strokeDasharray="4 4"/>
      <circle cx="120" cy="150" r="3" stroke={strokeColor} strokeWidth="1.5" fill="none"/>
      <circle cx="120" cy="175" r="3" stroke={strokeColor} strokeWidth="1.5" fill="none"/>
      <circle cx="120" cy="200" r="3" stroke={strokeColor} strokeWidth="1.5" fill="none"/>
      {/* Inscription */}
      <text x="120" y="114" textAnchor="middle" fontFamily="var(--font-unbounded)" fontSize="11" fontWeight="900"
        fill={inscriptionColor} filter={night ? "url(#glowText)" : "none"} letterSpacing="3">
        NIGHT GLOW
      </text>
      {/* Geometric motif — triangle pattern */}
      <path d="M90 195 L120 160 L150 195 Z" stroke={strokeColor} strokeWidth="1" fill="none" filter={glowFilter}/>
      <path d="M100 195 L120 170 L140 195 Z" stroke={night ? "rgba(173,255,47,0.4)" : "rgba(255,255,255,0.06)"} strokeWidth="0.8" fill="none"/>
    </svg>
  );
}

function TshirtSVG({ night }: { night: boolean }) {
  const strokeColor = night ? "#ADFF2F" : "rgba(255,255,255,0.22)";
  const inscriptionColor = night ? "#ADFF2F" : "rgba(255,255,255,0.12)";
  return (
    <svg viewBox="0 0 240 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow2" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Boxy T-shirt body */}
      <path d="M55 80 L25 110 L45 130 L60 110 L60 250 L180 250 L180 110 L195 130 L215 110 L185 80" stroke={strokeColor} strokeWidth="2" fill={night ? "rgba(173,255,47,0.03)" : "rgba(255,255,255,0.03)"}/>
      {/* Neck */}
      <path d="M85 80 Q120 65 155 80" stroke={strokeColor} strokeWidth="2" fill="none"/>
      {/* Center motif — African star */}
      {[0,60,120,180,240,300].map((a,i) => {
        const rad = a * Math.PI / 180;
        const r1 = 28, r2 = 14;
        const x1 = 120 + r1 * Math.sin(rad);
        const y1 = 155 + r1 * Math.cos(rad);
        const x2 = 120 + r2 * Math.sin(rad + Math.PI/6);
        const y2 = 155 + r2 * Math.cos(rad + Math.PI/6);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={night ? "rgba(173,255,47,0.5)" : "rgba(255,255,255,0.08)"} strokeWidth="1.5"/>;
      })}
      <circle cx="120" cy="155" r="28" stroke={strokeColor} strokeWidth="1" fill="none" filter={night ? "url(#glow2)" : "none"}/>
      <circle cx="120" cy="155" r="8" stroke={night ? "#ADFF2F" : "rgba(255,255,255,0.3)"} strokeWidth="1.5" fill="none" filter={night ? "url(#glow2)" : "none"}/>
      {/* Inscription */}
      <text x="120" y="108" textAnchor="middle" fontFamily="var(--font-unbounded)" fontSize="9.5" fontWeight="900"
        fill={inscriptionColor} filter={night ? "url(#glow2)" : "none"} letterSpacing="2">
        L'AFRIQUE BRILLE
      </text>
      <text x="120" y="210" textAnchor="middle" fontFamily="var(--font-montserrat)" fontSize="8" fontStyle="italic"
        fill={night ? "rgba(173,255,47,0.7)" : "rgba(255,255,255,0.1)"} letterSpacing="1">
        Même dans le noir.
      </text>
    </svg>
  );
}

function VestSVG({ night }: { night: boolean }) {
  const strokeColor = night ? "#ADFF2F" : "rgba(255,255,255,0.22)";
  const inscriptionColor = night ? "#B388FF" : "rgba(255,255,255,0.12)";
  return (
    <svg viewBox="0 0 240 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow3" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Vest body */}
      <path d="M70 75 L40 95 L35 250 L205 250 L200 95 L170 75 L145 90 L120 80 L95 90 Z" stroke={strokeColor} strokeWidth="2" fill={night ? "rgba(173,255,47,0.03)" : "rgba(255,255,255,0.03)"}/>
      {/* V-neck */}
      <path d="M95 90 L120 140 L145 90" stroke={strokeColor} strokeWidth="1.5" fill="none"/>
      {/* Armholes */}
      <path d="M70 75 Q50 85 40 95" stroke={strokeColor} strokeWidth="2" fill="none"/>
      <path d="M170 75 Q190 85 200 95" stroke={strokeColor} strokeWidth="2" fill="none"/>
      {/* NG monogram large */}
      <text x="120" y="200" textAnchor="middle" fontFamily="var(--font-unbounded)" fontSize="56" fontWeight="900"
        fill="none" stroke={inscriptionColor} strokeWidth={night ? "0.8" : "0.5"} filter={night ? "url(#glow3)" : "none"} letterSpacing="-2">
        NG
      </text>
      {/* Dots decoration */}
      {Array.from({length: 6}).map((_,i) => (
        <circle key={i} cx={60 + i*25} cy={110} r="2" fill={night ? "rgba(173,255,47,0.6)" : "rgba(255,255,255,0.1)"} filter={night ? "url(#glow3)" : "none"}/>
      ))}
      {Array.from({length: 6}).map((_,i) => (
        <circle key={i} cx={60 + i*25} cy={238} r="2" fill={night ? "rgba(173,255,47,0.6)" : "rgba(255,255,255,0.1)"} filter={night ? "url(#glow3)" : "none"}/>
      ))}
      <text x="120" y="130" textAnchor="middle" fontFamily="var(--font-montserrat)" fontSize="7" fontWeight="600"
        fill={night ? "rgba(179,136,255,0.9)" : "rgba(255,255,255,0.08)"} letterSpacing="3">
        NIGHTGLOW · ÉDITION EXCLUSIVE
      </text>
    </svg>
  );
}

function ToteSVG({ night }: { night: boolean }) {
  const strokeColor = night ? "#ADFF2F" : "rgba(255,255,255,0.22)";
  const inscriptionColor = night ? "#C9A84C" : "rgba(255,255,255,0.12)";
  return (
    <svg viewBox="0 0 240 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow4" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Bag body */}
      <path d="M55 100 L55 255 L185 255 L185 100 Z" stroke={strokeColor} strokeWidth="2" fill={night ? "rgba(173,255,47,0.03)" : "rgba(255,255,255,0.03)"}/>
      {/* Handles */}
      <path d="M85 100 Q85 55 120 55 Q155 55 155 100" stroke={strokeColor} strokeWidth="2.5" fill="none"/>
      {/* Handle reinforcement */}
      <line x1="85" y1="100" x2="85" y2="115" stroke={strokeColor} strokeWidth="3"/>
      <line x1="155" y1="100" x2="155" y2="115" stroke={strokeColor} strokeWidth="3"/>
      {/* Seam lines */}
      <line x1="55" y1="125" x2="185" y2="125" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5"/>
      {/* Triangle motif */}
      <path d="M120 140 L90 195 L150 195 Z" stroke={strokeColor} strokeWidth="1.5" fill="none" filter={night ? "url(#glow4)" : "none"}/>
      <path d="M120 152 L100 188 L140 188 Z" stroke={night ? "rgba(173,255,47,0.5)" : "rgba(255,255,255,0.08)"} strokeWidth="1" fill={night ? "rgba(173,255,47,0.04)" : "none"}/>
      {/* Stars */}
      <circle cx="85" cy="167" r="3" fill={night ? "rgba(173,255,47,0.6)" : "rgba(255,255,255,0.08)"} filter={night ? "url(#glow4)" : "none"}/>
      <circle cx="155" cy="167" r="3" fill={night ? "rgba(173,255,47,0.6)" : "rgba(255,255,255,0.08)"} filter={night ? "url(#glow4)" : "none"}/>
      {/* Inscription */}
      <text x="120" y="218" textAnchor="middle" fontFamily="var(--font-unbounded)" fontSize="8.5" fontWeight="900"
        fill={inscriptionColor} filter={night ? "url(#glow4)" : "none"} letterSpacing="2">
        COTONOU · BÉNIN
      </text>
      <text x="120" y="234" textAnchor="middle" fontFamily="var(--font-montserrat)" fontSize="7" fontStyle="italic"
        fill={night ? "rgba(201,168,76,0.7)" : "rgba(255,255,255,0.08)"} letterSpacing="1">
        Phosphorescent. Éternel.
      </text>
    </svg>
  );
}

const GarmentComponents: Record<string, React.ComponentType<{ night: boolean }>> = {
  jacket: JacketSVG,
  tshirt: TshirtSVG,
  vest: VestSVG,
  tote: ToteSVG,
};

export default function Collection() {
  const [night, setNight] = useState(false);

  return (
    <section
      id="collection"
      style={{
        backgroundColor: night ? "#020202" : "#0A0A0A",
        padding: "100px 24px",
        transition: "background-color 0.8s ease",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="section-header"
          style={{
            marginBottom: 24,
            position: "relative",
            paddingTop: "clamp(56px, 10vw, 140px)",
          }}
        >
          <span className="section-watermark">COLLECTION</span>
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontFamily: "var(--font-unbounded)",
                fontSize: "clamp(22px, 3.5vw, 42px)",
                color: "#ffffff",
                lineHeight: 1.1,
                marginBottom: 10,
              }}
            >
              Collection Let There be Light — Saison N°1
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 15,
                fontStyle: "italic",
                fontFamily: "var(--font-montserrat)",
                marginBottom: 40,
              }}
            >
              Chaque pièce raconte une histoire culturelle africaine, le jour, comme la nuit.
            </p>
          </div>
        </motion.div>

        {/* Day / Night toggle */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#111111",
              borderRadius: 50,
              padding: 4,
              gap: 4,
              border: `1px solid ${night ? "rgba(173,255,47,0.3)" : "rgba(255,255,255,0.1)"}`,
              transition: "border-color 0.5s",
            }}
          >
            {[
              { label: "JOUR", icon: <SunIcon style={{ width: 16, height: 16 }} />, active: !night, action: () => setNight(false) },
              { label: "NUIT", icon: <MoonIcon style={{ width: 16, height: 16 }} />, active: night, action: () => setNight(true) },
            ].map(({ label, icon, active, action }) => (
              <button
                key={label}
                onClick={action}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 28px",
                  borderRadius: 50,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 700,
                  letterSpacing: 2,
                  transition: "all 0.4s",
                  backgroundColor: active ? (night ? "#ADFF2F" : "#ffffff") : "transparent",
                  color: active ? "#0A0A0A" : "rgba(255,255,255,0.4)",
                }}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="collection-grid" style={{ marginBottom: 56 }}>
          {products.map((product, i) => {
            const GarmentSVG = GarmentComponents[product.garment];
            return (
              <motion.div
                key={product.id}
                className="collection-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                variants={fadeUp}
                style={{
                  backgroundColor: night ? "#060606" : "#141414",
                  borderRadius: 20,
                  overflow: "hidden",
                  border: night
                    ? `1px solid rgba(173,255,47,0.2)`
                    : "1px solid rgba(255,255,255,0.07)",
                  transition: "all 0.6s ease",
                  cursor: "pointer",
                  position: "relative",
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                {/* Tag badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    zIndex: 10,
                    backgroundColor: night ? "rgba(0,0,0,0.85)" : "rgba(20,20,20,0.9)",
                    border: `1px solid ${product.tagColor}44`,
                    borderRadius: 30,
                    padding: "4px 12px",
                    fontFamily: "var(--font-montserrat)",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: 2,
                    color: product.tagColor,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {product.tag.toUpperCase()}
                </div>

                {/* Garment illustration area */}
                <div
                  className="collection-card-illustration"
                  style={{
                    height: 280,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: night ? "#030303" : "#111111",
                    padding: "24px 32px",
                    transition: "background-color 0.8s ease",
                    position: "relative",
                  }}
                >
                  {/* Night ambient glow */}
                  {night && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(173,255,47,0.07) 0%, transparent 70%)",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                  <GarmentSVG night={night} />
                </div>

                {/* Product info */}
                <div
                  className="collection-card-info"
                  style={{
                    padding: "20px 22px",
                    borderTop: night
                      ? "1px solid rgba(173,255,47,0.1)"
                      : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: 2,
                      color: "rgba(255,255,255,0.3)",
                      marginBottom: 6,
                      textTransform: "uppercase",
                    }}
                  >
                    {product.ref}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-unbounded)",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: 14,
                      lineHeight: 1.3,
                      letterSpacing: -0.3,
                    }}
                  >
                    {product.name}
                  </h3>
                  <div
                    className="collection-price-row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      className="collection-price"
                      style={{
                        fontFamily: "var(--font-unbounded)",
                        fontSize: 16,
                        fontWeight: 800,
                        color: night ? "#ADFF2F" : "#ffffff",
                        transition: "color 0.5s",
                      }}
                    >
                      {product.price}
                    </span>
                    <button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        backgroundColor: night ? "rgba(173,255,47,0.12)" : "rgba(255,255,255,0.07)",
                        border: `1px solid ${night ? "rgba(173,255,47,0.3)" : "rgba(255,255,255,0.12)"}`,
                        borderRadius: 30,
                        padding: "8px 14px",
                        cursor: "pointer",
                        transition: "all 0.3s",
                        color: night ? "#ADFF2F" : "rgba(255,255,255,0.6)",
                      }}
                    >
                      <ShoppingBagIcon style={{ width: 14, height: 14 }} />
                      <span
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: 1.5,
                        }}
                      >
                        COMMANDER
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href="#contact"
            className="btn-pill-ghost"
            style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
          >
            Voir toute la collection
            <ArrowRightIcon style={{ width: 16, height: 16 }} />
          </a>
        </div>
      </div>
    </section>
  );
}
