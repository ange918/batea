"use client";
import { SparklesIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0A0A0A",
        borderTop: "1px solid rgba(173,255,47,0.15)",
        padding: "60px 24px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <SparklesIcon style={{ width: 24, height: 24, color: "#ADFF2F" }} />
              <span
                style={{
                  fontFamily: "var(--font-unbounded)",
                  fontSize: 16,
                  color: "#ADFF2F",
                  letterSpacing: 1,
                }}
              >
                NIGHTGLOW
              </span>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: 13,
                fontStyle: "italic",
                fontFamily: "var(--font-montserrat)",
                lineHeight: 1.6,
                maxWidth: 280,
              }}
            >
              L&apos;Afrique brille. Même dans le noir.
            </p>
          </div>

          <div>
            <p
              style={{
                color: "#ADFF2F",
                fontSize: 11,
                letterSpacing: 1,
                textTransform: "uppercase",
                fontFamily: "var(--font-montserrat)",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Navigation
            </p>
            {["Accueil", "Collection", "Marché", "Modèle", "Équipe", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace("é", "e").replace("è", "e")}`}
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 13,
                  fontFamily: "var(--font-montserrat)",
                  textDecoration: "none",
                  marginBottom: 8,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#ADFF2F")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)")
                }
              >
                {link}
              </a>
            ))}
          </div>

          <div>
            <p
              style={{
                color: "#ADFF2F",
                fontSize: 11,
                letterSpacing: 1,
                textTransform: "uppercase",
                fontFamily: "var(--font-montserrat)",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Contact
            </p>
            {[
              "+229 01 52 51 45 53",
              "mikegtnm15@gmail.com",
              "Cotonou, République du Bénin",
            ].map((line) => (
              <p
                key={line}
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 13,
                  fontFamily: "var(--font-montserrat)",
                  marginBottom: 8,
                  lineHeight: 1.5,
                }}
              >
                {line}
              </p>
            ))}
          </div>

          <div>
            <p
              style={{
                color: "#ADFF2F",
                fontSize: 11,
                letterSpacing: 1,
                textTransform: "uppercase",
                fontFamily: "var(--font-montserrat)",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Réseaux Sociaux
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: 13,
                fontFamily: "var(--font-montserrat)",
                marginBottom: 8,
              }}
            >
              @night_glow_city
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <CheckBadgeIcon style={{ width: 18, height: 18, color: "#ADFF2F" }} />
            <p
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: 12,
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Marque déposée OAPI — 4 classes — 17 pays africains protégés
            </p>
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: 12,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            © 2025 NightGlow. Tous droits réservés. Cotonou, République du Bénin.
          </p>
        </div>
      </div>
    </footer>
  );
}
