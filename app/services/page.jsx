"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceHero from "@/components/ServiceHero";
import ServicePageServiceSection from "@/components/ServicePageServiceSection";
import Topbar from "@/components/Topbar";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Contact from "../../components/Contact";

export default function Services() {
  const pathname = usePathname();

  return (
    <div>
      <Topbar />
      <Header />
      <ServiceHero />
      <ServicePageServiceSection />
      <Contact />
      <Footer />
    </div>
  );
}
