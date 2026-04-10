"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Collection from "@/components/Collection";
import Market from "@/components/Market";
import BusinessModel from "@/components/BusinessModel";
import Sectors from "@/components/Sectors";
import Team from "@/components/Team";
import Investment from "@/components/Investment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#0A0A0A", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <ExecutiveSummary />
      <Problem />
      <Solution />
      <Collection />
      <Market />
      <BusinessModel />
      <Sectors />
      <Team />
      <Investment />
      <Contact />
      <Footer />
    </main>
  );
}
