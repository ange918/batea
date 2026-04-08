"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SparklesIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "Collection", href: "#collection" },
  { label: "Marché", href: "#marche" },
  { label: "Modèle", href: "#modele" },
  { label: "Équipe", href: "#equipe" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled || open ? "rgba(10,10,10,0.97)" : "transparent",
          backdropFilter: scrolled || open ? "blur(16px)" : "none",
          borderBottom: scrolled || open
            ? "1px solid rgba(173,255,47,0.15)"
            : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <SparklesIcon style={{ width: 26, height: 26, color: "#ADFF2F" }} />
            <span
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: 26,
                color: "#ADFF2F",
                letterSpacing: 3,
              }}
            >
              NIGHTGLOW
            </span>
          </a>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    fontFamily: "var(--font-dm-sans)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#ADFF2F")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#ffffff")
                  }
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                style={{
                  border: "1px solid #ADFF2F",
                  color: "#ADFF2F",
                  padding: "8px 20px",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontFamily: "var(--font-dm-sans)",
                  borderRadius: 4,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.target as HTMLElement;
                  el.style.backgroundColor = "#ADFF2F";
                  el.style.color = "#0A0A0A";
                }}
                onMouseLeave={(e) => {
                  const el = e.target as HTMLElement;
                  el.style.backgroundColor = "transparent";
                  el.style.color = "#ADFF2F";
                }}
              >
                Nous contacter
              </a>
            </div>
          )}

          {/* Burger button */}
          {isMobile && (
            <button
              onClick={() => setOpen(!open)}
              style={{
                background: "none",
                border: "1px solid rgba(173,255,47,0.3)",
                borderRadius: 8,
                color: "#ADFF2F",
                cursor: "pointer",
                padding: "6px 8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {open ? (
                <XMarkIcon style={{ width: 24, height: 24 }} />
              ) : (
                <Bars3Icon style={{ width: 24, height: 24 }} />
              )}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: 72,
              left: 0,
              right: 0,
              zIndex: 99,
              backgroundColor: "rgba(10,10,10,0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(173,255,47,0.15)",
              padding: "8px 0 24px",
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontFamily: "var(--font-dm-sans)",
                  padding: "14px 28px",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "#ADFF2F";
                  el.style.backgroundColor = "rgba(173,255,47,0.04)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "#ffffff";
                  el.style.backgroundColor = "transparent";
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "#ADFF2F",
                    flexShrink: 0,
                  }}
                />
                {l.label}
              </motion.a>
            ))}
            <div style={{ padding: "20px 28px 0" }}>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  textAlign: "center",
                  border: "1px solid #ADFF2F",
                  color: "#ADFF2F",
                  padding: "14px 20px",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontFamily: "var(--font-dm-sans)",
                  borderRadius: 8,
                  backgroundColor: "rgba(173,255,47,0.05)",
                }}
              >
                Nous contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
