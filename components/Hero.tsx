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

const particles: Particle[] = Array.from({ length: 14 }, (_, i) => ({
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
      {/* Left accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          backgroundColor: "#ADFF2F",
          boxShadow: "0 0 20px rgba(173,255,47,0.6)",
          zIndex: 2,
        }}
      />

      {/* Particles */}
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
            zIndex: 1,
          }}
          animate={{ y: [0, -900], opacity: [0, 1, 1, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Vertical editorial label */}
      <div
        className="hero-vert-label"
        style={{
          position: "absolute",
          left: 18,
          top: "50%",
          transform: "translateY(-50%) rotate(-90deg)",
          transformOrigin: "center center",
          whiteSpace: "nowrap",
          fontFamily: "var(--font-dm-sans)",
          fontSize: 9,
          letterSpacing: 5,
          textTransform: "uppercase",
          color: "rgba(173,255,47,0.35)",
          zIndex: 3,
          userSelect: "none",
        }}
      >
        NIGHTGLOW · COTONOU, BÉNIN · PITCH DECK 2025–2026
      </div>

      {/* Giant watermark text — magazine editorial */}
      <div
        style={{
          position: "absolute",
          bottom: -10,
          left: -10,
          right: 0,
          overflow: "hidden",
          zIndex: 1,
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-bebas-neue)",
            fontSize: "clamp(100px, 22vw, 300px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(173,255,47,0.07)",
            letterSpacing: 8,
            whiteSpace: "nowrap",
            display: "block",
          }}
        >
          NIGHTGLOW
        </span>
      </div>

      {/* Main grid */}
      <div
        className="hero-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "110px 40px 80px 60px",
          width: "100%",
          position: "relative",
          zIndex: 4,
        }}
      >
        {/* Content left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Eyebrow pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "rgba(173,255,47,0.08)",
              border: "1px solid rgba(173,255,47,0.2)",
              borderRadius: 40,
              padding: "6px 16px",
              marginBottom: 32,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#ADFF2F",
                display: "inline-block",
                boxShadow: "0 0 8px rgba(173,255,47,0.8)",
              }}
            />
            <span
              style={{
                color: "#ADFF2F",
                fontSize: 10,
                letterSpacing: 4,
                textTransform: "uppercase",
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 600,
              }}
            >
              PITCH DECK · 2025–2026
            </span>
          </div>

          {/* Title — magazine style split */}
          <h1 style={{ fontFamily: "var(--font-bebas-neue)", lineHeight: 0.9, marginBottom: 28 }}>
            <span
              style={{
                display: "block",
                fontSize: "clamp(80px, 14vw, 160px)",
                color: "#ffffff",
                letterSpacing: 2,
              }}
            >
              NIGHT
            </span>
            <span
              className="glow-text-pulse"
              style={{
                display: "block",
                fontSize: "clamp(80px, 14vw, 160px)",
                color: "#ADFF2F",
                letterSpacing: 2,
              }}
            >
              GLOW
            </span>
          </h1>

          {/* Taglines */}
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "clamp(16px, 2vw, 22px)",
              fontStyle: "italic",
              marginBottom: 8,
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
            }}
          >
            L&apos;Afrique brille. Même dans le noir.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 13,
              fontFamily: "var(--font-dm-sans)",
              marginBottom: 36,
              lineHeight: 1.6,
            }}
          >
            Marque africaine de design phosphorescent · Mode, Art, Événements, Décoration &amp; Innovation
          </p>

          {/* Contact info */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 24,
              marginBottom: 32,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {[
              { icon: PhoneIcon, text: "+229 01 52 51 45 53" },
              { icon: EnvelopeIcon, text: "mikegtnm15@gmail.com" },
              { icon: MapPinIcon, text: "Cotonou, République du Bénin" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Icon style={{ width: 16, height: 16, color: "#ADFF2F", flexShrink: 0 }} />
                <span
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 13,
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA — pill style */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#collection"
              className="btn-pill-primary"
            >
              Découvrir la collection
              <ArrowRightIcon style={{ width: 16, height: 16 }} />
            </a>
            <a
              href="#resume"
              className="btn-pill-ghost"
            >
              Le pitch deck
            </a>
          </div>
        </motion.div>

        {/* Decorative right — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
          className="hero-svg"
          style={{ position: "relative" }}
        >
          {/* Outlined big "NightGlow" stacked — magazine style */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 0,
            }}
          >
            {/* Top outlined stroke letters */}
            <span
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(60px, 9vw, 120px)",
                color: "transparent",
                WebkitTextStroke: "2px rgba(173,255,47,0.25)",
                letterSpacing: 4,
                lineHeight: 0.9,
                display: "block",
                userSelect: "none",
              }}
            >
              NIGHT
            </span>
            <span
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(60px, 9vw, 120px)",
                color: "rgba(173,255,47,0.06)",
                WebkitTextStroke: "2px rgba(173,255,47,0.5)",
                letterSpacing: 4,
                lineHeight: 0.9,
                display: "block",
                userSelect: "none",
                textShadow: "0 0 60px rgba(173,255,47,0.15)",
              }}
            >
              GLOW
            </span>

            {/* Phosphorescent glow orb */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 180,
                height: 180,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(173,255,47,0.12) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Small SVG decorative figure */}
            <svg
              width={200}
              height={200}
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                marginTop: 16,
                filter: "drop-shadow(0 0 20px rgba(173,255,47,0.3))",
                opacity: 0.8,
              }}
            >
              <circle cx="100" cy="50" r="20" stroke="#ADFF2F" strokeWidth="1.5" />
              <path d="M85 70 C70 100 60 130 70 160 H130 C140 130 130 100 115 70 Z" stroke="#ADFF2F" strokeWidth="1.5" fill="none" />
              <line x1="70" y1="160" x2="50" y2="180" stroke="#ADFF2F" strokeWidth="1.5" opacity="0.5" />
              <line x1="130" y1="160" x2="150" y2="180" stroke="#ADFF2F" strokeWidth="1.5" opacity="0.5" />
              <path d="M75 110 Q85 120 100 115 Q115 120 125 110" stroke="#ADFF2F" strokeWidth="1" fill="none" opacity="0.6" />
              <circle cx="30" cy="80" r="3" fill="#ADFF2F" opacity="0.5" />
              <circle cx="170" cy="60" r="4" fill="#ADFF2F" opacity="0.4" />
              <circle cx="20" cy="140" r="2" fill="#ADFF2F" opacity="0.6" />
              <circle cx="175" cy="140" r="3" fill="#ADFF2F" opacity="0.35" />
            </svg>

            {/* Founding tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid rgba(173,255,47,0.2)",
                borderRadius: 40,
                padding: "8px 16px",
                marginTop: 20,
              }}
            >
              <span style={{ fontSize: 10, fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.4)", letterSpacing: 3, textTransform: "uppercase" }}>
                Fondé à Cotonou · Bénin · 2025
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
