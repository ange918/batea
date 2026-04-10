"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  GlobeAmericasIcon,
  TrophyIcon,
  BeakerIcon,
  ArrowTrendingUpIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

function CountUp({
  end,
  suffix = "",
  prefix = "",
}: {
  end: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          setInView(true);
          animated.current = true;
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const dur = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(end * eased));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end]);

  return (
    <div ref={ref}>
      {prefix}
      {count}
      {suffix}
    </div>
  );
}

const metrics = [
  {
    icon: GlobeAmericasIcon,
    borderColor: "#ADFF2F",
    label: "Marché mondial streetwear",
    value: 347,
    suffix: " Mds$",
  },
  {
    icon: TrophyIcon,
    borderColor: "#C9A84C",
    label: "Streetwear Afrique & M-E 2025",
    value: 24,
    suffix: " Mds$",
  },
  {
    icon: BeakerIcon,
    borderColor: "#00E5FF",
    label: "Marché pigments phosphorescents",
    value: 285,
    suffix: " M$",
  },
  {
    icon: ArrowTrendingUpIcon,
    borderColor: "#B388FF",
    label: "Croissance mode innovante Afrique",
    value: 10,
    prefix: "+",
    suffix: "%/an",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Market() {
  return (
    <section
      id="marche"
      style={{ backgroundColor: "#080808", padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          style={{
            marginBottom: 60,
            position: "relative",
            minHeight: 130,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <span className="section-watermark">MARCHÉ</span>
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontFamily: "var(--font-unbounded)",
                fontSize: "clamp(22px, 3.5vw, 40px)",
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              Un marché en pleine accélération.
            </h2>
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            marginBottom: 48,
          }}
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="shadow-glow-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={fadeUp}
              style={{
                backgroundColor: "#1A1A1A",
                borderRadius: 4,
                padding: 28,
                border: `1px solid ${m.borderColor}40`,
              }}
            >
              <m.icon
                style={{
                  width: 28,
                  height: 28,
                  color: m.borderColor,
                  marginBottom: 16,
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-unbounded)",
                  fontSize: 44,
                  color: m.borderColor,
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                <CountUp
                  end={m.value}
                  suffix={m.suffix}
                  prefix={m.prefix || ""}
                />
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 13,
                  fontFamily: "var(--font-montserrat)",
                  lineHeight: 1.5,
                }}
              >
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            style={{
              backgroundColor: "#1A1A1A",
              borderRadius: 4,
              padding: 32,
              borderLeft: "4px solid #ADFF2F",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <BuildingOffice2Icon style={{ width: 28, height: 28, color: "#ADFF2F" }} />
              <h3
                style={{
                  fontFamily: "var(--font-unbounded)",
                  fontSize: 22,
                  color: "#ADFF2F",
                  letterSpacing: 2,
                }}
              >
                MARCHÉ LOCAL — BÉNIN
              </h3>
            </div>
            {[
              "Bénin Week Fashion : 7e édition 2025 — scène mode en structuration active",
              "Objectif gouvernemental : 2 millions de touristes/an d'ici 2030",
              "1 250 milliards FCFA investis dans les infrastructures touristiques depuis 2016",
              "AUCUN concurrent phosphorescent identifié au Bénin ni en Afrique de l'Ouest",
            ].map((item) => (
              <p
                key={item}
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 14,
                  fontFamily: "var(--font-montserrat)",
                  lineHeight: 1.6,
                  marginBottom: 10,
                  paddingLeft: 16,
                  borderLeft: "2px solid rgba(173,255,47,0.2)",
                }}
              >
                {item}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeUp}
            style={{
              backgroundColor: "#1A1A1A",
              borderRadius: 4,
              padding: 32,
              borderLeft: "4px solid #C9A84C",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <GlobeAltIcon style={{ width: 28, height: 28, color: "#C9A84C" }} />
              <h3
                style={{
                  fontFamily: "var(--font-unbounded)",
                  fontSize: 22,
                  color: "#C9A84C",
                  letterSpacing: 2,
                }}
              >
                MARCHÉ INTERNATIONAL
              </h3>
            </div>
            {[
              "Pigments phospho : 285→397M$ (2024→2032) CAGR 5.7%",
              "63% de la demande : pigments longue persistance (strontium aluminate)",
              "28% des innovations mondiales ciblent mode & déco phosphorescentes",
              "Diaspora africaine : +40 millions personnes en Europe & Amérique du Nord",
            ].map((item) => (
              <p
                key={item}
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 14,
                  fontFamily: "var(--font-montserrat)",
                  lineHeight: 1.6,
                  marginBottom: 10,
                  paddingLeft: 16,
                  borderLeft: "2px solid rgba(201,168,76,0.3)",
                }}
              >
                {item}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
