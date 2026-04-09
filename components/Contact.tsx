"use client";
import { motion } from "framer-motion";
import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  AtSymbolIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ backgroundColor: "#0A0A0A", padding: "120px 24px" }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          style={{ marginBottom: 60 }}
        >
          <h2
            style={{
              fontFamily: "var(--font-unbounded)",
              fontSize: "clamp(32px, 5vw, 60px)",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            <span style={{ color: "#ffffff" }}>L&apos;Afrique brille.</span>
            <br />
            <span className="glow-text-pulse" style={{ color: "#ADFF2F" }}>
              Même dans le noir.
            </span>
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 16,
              fontStyle: "italic",
              fontFamily: "var(--font-montserrat)",
              lineHeight: 1.8,
              marginBottom: 8,
            }}
          >
            NightGlow n&apos;est pas un projet de mode. C&apos;est un projet de civilisation.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 15,
              fontStyle: "italic",
              fontFamily: "var(--font-montserrat)",
              lineHeight: 1.8,
            }}
          >
            Celui de montrer que l&apos;Afrique, quand elle crée, éclaire le monde entier.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          variants={fadeUp}
          className="shadow-glow"
          style={{
            backgroundColor: "#1A1A1A",
            borderRadius: 24,
            padding: "40px 48px",
            border: "1px solid rgba(173,255,47,0.3)",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 32,
            }}
          >
            <UserIcon style={{ width: 24, height: 24, color: "#ADFF2F" }} />
            <div>
              <p
                style={{
                  fontFamily: "var(--font-unbounded)",
                  fontSize: 15,
                  color: "#ADFF2F",
                  letterSpacing: 2,
                  lineHeight: 1,
                }}
              >
                GBETOENONMON Sèdami Mike
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 12,
                  fontFamily: "var(--font-montserrat)",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                Fondateur
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginBottom: 36,
            }}
          >
            {[
              { icon: PhoneIcon, text: "+229 01 52 51 45 53" },
              { icon: EnvelopeIcon, text: "mikegtnm15@gmail.com" },
              { icon: AtSymbolIcon, text: "@night_glow_city" },
              { icon: MapPinIcon, text: "Cotonou, République du Bénin" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  justifyContent: "center",
                }}
              >
                <Icon style={{ width: 18, height: 18, color: "#ADFF2F", flexShrink: 0 }} />
                <span
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 15,
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>

          <a
            href="mailto:mikegtnm15@gmail.com"
            className="btn-pill-primary"
            style={{ fontSize: 13 }}
          >
            Envoyer un message
            <PaperAirplaneIcon style={{ width: 16, height: 16 }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
