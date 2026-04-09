import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Unbounded, Montserrat } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NightGlow — L'Afrique brille. Même dans le noir.",
  description:
    "NightGlow est une marque africaine de design phosphorescent fondée à Cotonou, Bénin. Vêtements, accessoires et objets décoratifs qui brillent dans le noir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${unbounded.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
