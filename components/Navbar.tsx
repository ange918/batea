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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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
          transition: "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 20px",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <SparklesIcon style={{ width: 24, height: 24, color: "#ADFF2F" }} />
            <span
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: 24,
                color: "#ADFF2F",
                letterSpacing: 3,
              }}
            >
              NIGHTGLOW
            </span>
          </a>

          {/* Desktop links — hidden on mobile via CSS */}
          <div className="nav-desktop">
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
                padding: "8px 18px",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans)",
                borderRadius: 6,
                transition: "all 0.2s",
                whiteSpace: "nowrap",
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

          {/* Burger button — hidden on desktop via CSS */}
          <button
            className="nav-burger"
            onClick={() => setOpen((v) => !v)}
            style={{
              background: "none",
              border: "1px solid rgba(173,255,47,0.35)",
              borderRadius: 8,
              color: "#ADFF2F",
              cursor: "pointer",
              padding: "7px 9px",
              transition: "border-color 0.2s, background 0.2s",
            }}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{ display: "flex" }}
                >
                  <XMarkIcon style={{ width: 22, height: 22 }} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{ display: "flex" }}
                >
                  <Bars3Icon style={{ width: 22, height: 22 }} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile drawer — full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="mobile-drawer"
            style={{
              position: "fixed",
              top: 68,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 99,
              backgroundColor: "#0A0A0A",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              padding: "12px 0 40px",
              borderTop: "1px solid rgba(173,255,47,0.12)",
            }}
          >
            {/* Nav links */}
            <div style={{ flex: 1 }}>
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.25 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    color: "#ffffff",
                    textDecoration: "none",
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: 36,
                    letterSpacing: 3,
                    padding: "14px 24px",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#ADFF2F")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#ffffff")
                  }
                >
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: 11,
                      color: "#ADFF2F",
                      letterSpacing: 2,
                      opacity: 0.6,
                      minWidth: 24,
                    }}
                  >
                    0{i + 1}
                  </span>
                  {l.label}
                </motion.a>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.3 }}
              style={{ padding: "24px 24px 0" }}
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  textAlign: "center",
                  backgroundColor: "#ADFF2F",
                  color: "#0A0A0A",
                  padding: "16px 24px",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontFamily: "var(--font-dm-sans)",
                  borderRadius: 10,
                }}
              >
                Nous contacter
              </a>

              {/* Founder info in drawer */}
              <p
                style={{
                  textAlign: "center",
                  color: "rgba(255,255,255,0.25)",
                  fontSize: 11,
                  fontFamily: "var(--font-dm-sans)",
                  marginTop: 20,
                  letterSpacing: 1,
                }}
              >
                NightGlow · Cotonou, Bénin · 2025
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
