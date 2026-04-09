"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type Particle = { id: number; left: string; size: number; duration: number; delay: number };

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const particles: Particle[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${seededRandom(i * 3) * 100}%`,
  size: seededRandom(i * 3 + 1) * 3 + 2,
  duration: seededRandom(i * 3 + 2) * 5 + 4,
  delay: seededRandom(i * 5) * 4,
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle ambient glow background */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          maxWidth: 600,
          maxHeight: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(173,255,47,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle rising particles */}
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
            boxShadow: `0 0 ${p.size * 3}px rgba(173,255,47,0.7)`,
            zIndex: 0,
          }}
          animate={{ y: [0, -800], opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 680,
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Eyebrow pill — like Meetup's clean label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "rgba(173,255,47,0.08)",
              border: "1px solid rgba(173,255,47,0.2)",
              borderRadius: 40,
              padding: "8px 20px",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#ADFF2F",
                display: "inline-block",
                boxShadow: "0 0 8px rgba(173,255,47,1)",
                animation: "glow-pulse 1.5s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "#ADFF2F",
              }}
            >
              Marque africaine · Cotonou, Bénin
            </span>
          </div>
        </motion.div>

        {/* Main headline — Unbounded, bold, centered like Meetup */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-unbounded)",
            fontWeight: 800,
            fontSize: "clamp(28px, 7vw, 72px)",
            lineHeight: 1.15,
            marginBottom: 24,
            letterSpacing: -1,
          }}
        >
          <span style={{ color: "#ffffff" }}>L&apos;Afrique brille.{" "}</span>
          <span
            className="glow-text-pulse"
            style={{ color: "#ADFF2F" }}
          >
            Même dans le noir.
          </span>
        </motion.h1>

        {/* Subtitle — Montserrat, clean like Meetup's description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "clamp(15px, 2vw, 17px)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.8,
            marginBottom: 40,
            maxWidth: 520,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Produits phosphorescents qui absorbent la lumière le jour et la restituent la nuit —
          sans électricité, sans pile, sans artifice. Mode, Art, Décoration &amp; Innovation.
        </motion.p>

        {/* Single wide pill CTA — exactly like Meetup's "Join Meetup" button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 64 }}
        >
          <a
            href="#collection"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              backgroundColor: "#ADFF2F",
              color: "#0A0A0A",
              padding: "18px 56px",
              fontSize: 15,
              fontWeight: 700,
              fontFamily: "var(--font-montserrat)",
              letterSpacing: 0.5,
              textDecoration: "none",
              borderRadius: 50,
              border: "none",
              transition: "background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
              minWidth: 240,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#c8f23a";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 10px 40px rgba(173,255,47,0.4)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#ADFF2F";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            Découvrir la collection
            <ArrowRightIcon style={{ width: 18, height: 18 }} />
          </a>
        </motion.div>

        {/* Visual illustration below — like Meetup's group photo section */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          style={{ position: "relative", display: "flex", justifyContent: "center" }}
        >
          {/* Glow blob behind — like Meetup's purple blobs */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 320,
              height: 140,
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(173,255,47,0.18) 0%, transparent 70%)",
              filter: "blur(20px)",
              zIndex: 0,
            }}
          />

          {/* SVG phosphorescent figure + decorative dots */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <svg
              width={260}
              height={300}
              viewBox="0 0 260 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: "drop-shadow(0 0 24px rgba(173,255,47,0.5))" }}
            >
              {/* Person silhouette — phosphorescent */}
              <circle cx="130" cy="55" r="28" stroke="#ADFF2F" strokeWidth="2" />
              <path d="M100 83 C80 120 70 155 80 200 H180 C190 155 180 120 160 83 Z" stroke="#ADFF2F" strokeWidth="2" fill="rgba(173,255,47,0.04)" />
              <path d="M80 200 L55 260 H105 L130 230 L155 260 H205 L180 200 Z" stroke="#ADFF2F" strokeWidth="2" fill="rgba(173,255,47,0.04)" />
              {/* Arms out */}
              <path d="M100 120 L40 100 M160 120 L220 100" stroke="#ADFF2F" strokeWidth="2" />
              {/* Glow dots on arms */}
              <circle cx="40" cy="100" r="5" fill="#ADFF2F" opacity="0.9" />
              <circle cx="220" cy="100" r="5" fill="#ADFF2F" opacity="0.9" />
              {/* Shirt motif lines */}
              <path d="M110 130 Q130 145 150 130" stroke="#ADFF2F" strokeWidth="1.5" fill="none" opacity="0.6" />
              <path d="M115 145 Q130 158 145 145" stroke="#ADFF2F" strokeWidth="1" fill="none" opacity="0.4" />
              {/* Ambient glow dots */}
              <circle cx="20" cy="60" r="3" fill="#ADFF2F" opacity="0.5" />
              <circle cx="240" cy="80" r="4" fill="#ADFF2F" opacity="0.4" />
              <circle cx="15" cy="180" r="2" fill="#ADFF2F" opacity="0.6" />
              <circle cx="245" cy="200" r="3" fill="#ADFF2F" opacity="0.35" />
              <circle cx="50" cy="250" r="2" fill="#ADFF2F" opacity="0.3" />
              <circle cx="210" cy="260" r="2.5" fill="#ADFF2F" opacity="0.4" />
            </svg>

            {/* Floating stats badge — like Meetup cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 20,
                right: -20,
                backgroundColor: "#1A1A1A",
                border: "1px solid rgba(173,255,47,0.25)",
                borderRadius: 14,
                padding: "10px 16px",
                textAlign: "left",
              }}
            >
              <p style={{ fontFamily: "var(--font-unbounded)", fontSize: 20, fontWeight: 700, color: "#ADFF2F", lineHeight: 1 }}>7</p>
              <p style={{ fontFamily: "var(--font-montserrat)", fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>Secteurs</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: 40,
                left: -30,
                backgroundColor: "#1A1A1A",
                border: "1px solid rgba(173,255,47,0.25)",
                borderRadius: 14,
                padding: "10px 16px",
                textAlign: "left",
              }}
            >
              <p style={{ fontFamily: "var(--font-unbounded)", fontSize: 20, fontWeight: 700, color: "#C9A84C", lineHeight: 1 }}>17</p>
              <p style={{ fontFamily: "var(--font-montserrat)", fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>Pays OAPI</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
