"use client";
import { motion } from "framer-motion";
import {
  SwatchIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  HomeModernIcon,
  MegaphoneIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const sectors = [
  { num: "01", title: "Mode & Design Phosphorescent", color: "#ADFF2F", icon: SwatchIcon },
  { num: "02", title: "Décoration, Art & Galeries", color: "#C9A84C", icon: PaintBrushIcon },
  { num: "03", title: "Sécurité & Visibilité Nocturne", color: "#FF4444", icon: ShieldCheckIcon },
  { num: "04", title: "Tourisme & Hôtellerie", color: "#00E5FF", icon: BuildingOfficeIcon },
  { num: "05", title: "Architecture & Design d'Intérieur", color: "#B388FF", icon: HomeModernIcon },
  { num: "06", title: "Événementiel & Communication", color: "#FF6FA8", icon: MegaphoneIcon },
  { num: "07", title: "Cosmétique & Body Art Lumineux", color: "#C9A84C", icon: SparklesIcon },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Sectors() {
  return (
    <section
      id="secteurs"
      style={{ backgroundColor: "#080808", padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          style={{ marginBottom: 64, position: "relative" }}
        >
          <span className="section-watermark">SECTEURS</span>
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontFamily: "var(--font-unbounded)",
                fontSize: "clamp(22px, 3.5vw, 40px)",
                color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            7 Secteurs. Une Technologie. Une Vision.
            </h2>
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            gap: 16,
          }}
        >
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              variants={fadeUp}
              whileHover={{
                y: -5,
                boxShadow: `0 16px 40px ${sector.color}20`,
                borderColor: `${sector.color}40`,
              }}
              style={{
                background: "linear-gradient(135deg, #161616 0%, #1a1a1a 100%)",
                borderRadius: 14,
                padding: "24px 22px",
                border: `1px solid rgba(255,255,255,0.06)`,
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {/* Sector number watermark */}
              <span
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 14,
                  fontFamily: "var(--font-unbounded)",
                  fontSize: 56,
                  color: `${sector.color}08`,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {sector.num}
              </span>

              {/* Icon box */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: `${sector.color}12`,
                  border: `1px solid ${sector.color}25`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <sector.icon style={{ width: 24, height: 24, color: sector.color }} />
              </div>

              {/* Number pill */}
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: `${sector.color}15`,
                  color: sector.color,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 2,
                  padding: "2px 8px",
                  borderRadius: 20,
                  fontFamily: "var(--font-montserrat)",
                  marginBottom: 8,
                }}
              >
                N° {sector.num}
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: 14,
                  color: "#ffffff",
                  fontWeight: 600,
                  lineHeight: 1.5,
                }}
              >
                {sector.title}
              </h3>

              {/* Left accent */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "20%",
                  bottom: "20%",
                  width: 3,
                  borderRadius: "0 2px 2px 0",
                  background: `linear-gradient(180deg, transparent, ${sector.color}70, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
