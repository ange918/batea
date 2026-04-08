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
  {
    num: "01",
    title: "Mode & Design Phosphorescent",
    color: "#ADFF2F",
    icon: SwatchIcon,
  },
  {
    num: "02",
    title: "Décoration, Art & Galeries",
    color: "#C9A84C",
    icon: PaintBrushIcon,
  },
  {
    num: "03",
    title: "Sécurité & Visibilité Nocturne",
    color: "#FF4444",
    icon: ShieldCheckIcon,
  },
  {
    num: "04",
    title: "Tourisme & Hôtellerie",
    color: "#00E5FF",
    icon: BuildingOfficeIcon,
  },
  {
    num: "05",
    title: "Architecture & Design d'Intérieur",
    color: "#B388FF",
    icon: HomeModernIcon,
  },
  {
    num: "06",
    title: "Événementiel & Communication",
    color: "#FF6FA8",
    icon: MegaphoneIcon,
  },
  {
    num: "07",
    title: "Cosmétique & Body Art Lumineux",
    color: "#C9A84C",
    icon: SparklesIcon,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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
          style={{ marginBottom: 60 }}
        >
          <p
            style={{
              color: "#ADFF2F",
              fontSize: 11,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontFamily: "var(--font-dm-sans)",
              marginBottom: 12,
              fontWeight: 600,
            }}
          >
            NOTRE PÉRIMÈTRE D&apos;ACTION
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            7 Secteurs. Une Technologie. Une Vision.
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.num}
              className="shadow-glow-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              variants={fadeUp}
              style={{
                backgroundColor: "#1A1A1A",
                borderRadius: 4,
                padding: 28,
                borderTop: `4px solid ${sector.color}`,
                position: "relative",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: 48,
                  color: `${sector.color}15`,
                  position: "absolute",
                  top: 12,
                  right: 16,
                  lineHeight: 1,
                }}
              >
                {sector.num}
              </span>
              <sector.icon
                style={{
                  width: 32,
                  height: 32,
                  color: sector.color,
                  marginBottom: 16,
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 15,
                  color: "#ffffff",
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}
              >
                {sector.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
