"use client";
import { useState, useEffect } from "react";
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

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(173,255,47,0.2)" : "1px solid transparent",
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
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
          }}
        >
          <SparklesIcon style={{ width: 28, height: 28, color: "#ADFF2F" }} />
          <span
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: 28,
              color: "#ADFF2F",
              letterSpacing: 3,
            }}
          >
            NIGHTGLOW
          </span>
        </a>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden md:flex"
        >
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
              transition: "all 0.2s",
              borderRadius: 2,
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

        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#ADFF2F",
            cursor: "pointer",
          }}
          className="flex md:hidden"
          aria-label="Menu"
        >
          {open ? (
            <XMarkIcon style={{ width: 28, height: 28 }} />
          ) : (
            <Bars3Icon style={{ width: 28, height: 28 }} />
          )}
        </button>
      </div>

      {open && (
        <div
          style={{
            backgroundColor: "#0A0A0A",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            borderTop: "1px solid rgba(173,255,47,0.2)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              border: "1px solid #ADFF2F",
              color: "#ADFF2F",
              padding: "10px 20px",
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Nous contacter
          </a>
        </div>
      )}
    </nav>
  );
}
