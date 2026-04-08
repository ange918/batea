"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

type Particle = { id: number; left: string; size: number; duration: number; delay: number };

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const particles: Particle[] = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${seededRandom(i * 3) * 100}%`,
  size: seededRandom(i * 3 + 1) * 4 + 2,
  duration: seededRandom(i * 3 + 2) * 4 + 3,
  delay: seededRandom(i * 5) * 3,
}));

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          backgroundColor: "#ADFF2F",
          boxShadow: "0 0 20px rgba(173,255,47,0.6)",
        }}
      />

      {mounted && particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left: p.left,
            bottom: 0,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: "#ADFF2F",
            boxShadow: `0 0 ${p.size * 3}px rgba(173,255,47,0.8)`,
          }}
          animate={{
            y: [0, -900],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div
        className="hero-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "120px 24px 80px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p
            style={{
              color: "#ADFF2F",
              fontSize: 11,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontFamily: "var(--font-dm-sans)",
              marginBottom: 24,
              fontWeight: 500,
            }}
          >
            PITCH DECK · 2025–2026
          </p>

          <h1
            style={{
              fontFamily: "var(--font-bebas-neue)",
              lineHeight: 1,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "clamp(72px, 12vw, 140px)",
                color: "#ffffff",
              }}
            >
              NIGHT
            </span>
            <span
              className="glow-text-pulse"
              style={{
                display: "block",
                fontSize: "clamp(72px, 12vw, 140px)",
                color: "#ADFF2F",
              }}
            >
              GLOW
            </span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "clamp(16px, 2vw, 22px)",
              fontStyle: "italic",
              marginBottom: 12,
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            L&apos;Afrique brille. Même dans le noir.
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 14,
              fontFamily: "var(--font-dm-sans)",
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            Marque africaine de design phosphorescent · Mode, Art, Événements,
            Décoration &amp; Innovation
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.12)",
              paddingTop: 28,
              marginBottom: 28,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {[
              { icon: PhoneIcon, text: "+229 01 52 51 45 53" },
              { icon: EnvelopeIcon, text: "mikegtnm15@gmail.com" },
              { icon: MapPinIcon, text: "Cotonou, République du Bénin" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <Icon
                  style={{
                    width: 18,
                    height: 18,
                    color: "#ADFF2F",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 14,
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#collection"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid #ADFF2F",
              color: "#ADFF2F",
              padding: "14px 28px",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans)",
              transition: "all 0.2s",
              borderRadius: 2,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#ADFF2F";
              el.style.color = "#0A0A0A";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.color = "#ADFF2F";
            }}
          >
            Découvrir la collection
            <ArrowRightIcon style={{ width: 18, height: 18 }} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="hero-svg"
        >
          <svg
            width={320}
            height={420}
            viewBox="0 0 320 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: "drop-shadow(0 0 30px rgba(173,255,47,0.4))",
            }}
          >
            <rect x="100" y="340" width="120" height="20" rx="2" stroke="#ADFF2F" strokeWidth="2" />
            <rect x="115" y="280" width="90" height="64" rx="2" stroke="#ADFF2F" strokeWidth="2" />
            <rect x="130" y="240" width="60" height="44" rx="2" stroke="#ADFF2F" strokeWidth="2" />
            <path d="M160 100 L200 240 H120 Z" stroke="#ADFF2F" strokeWidth="2" fill="none" />
            <circle cx="160" cy="90" r="14" stroke="#ADFF2F" strokeWidth="2" />
            <path d="M80 340 Q60 280 80 240" stroke="#ADFF2F" strokeWidth="1.5" opacity="0.5" />
            <path d="M240 340 Q260 280 240 240" stroke="#ADFF2F" strokeWidth="1.5" opacity="0.5" />
            <line x1="100" y1="360" x2="60" y2="380" stroke="#ADFF2F" strokeWidth="1.5" opacity="0.4" />
            <line x1="220" y1="360" x2="260" y2="380" stroke="#ADFF2F" strokeWidth="1.5" opacity="0.4" />
            <circle cx="40" cy="200" r="3" fill="#ADFF2F" opacity="0.6" />
            <circle cx="280" cy="150" r="4" fill="#ADFF2F" opacity="0.5" />
            <circle cx="60" cy="120" r="2" fill="#ADFF2F" opacity="0.7" />
            <circle cx="290" cy="300" r="3" fill="#ADFF2F" opacity="0.4" />
            <path d="M30 180 Q40 160 50 180" stroke="#ADFF2F" strokeWidth="1" opacity="0.4" fill="none" />
            <path d="M265 130 Q275 110 285 130" stroke="#ADFF2F" strokeWidth="1" opacity="0.4" fill="none" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
