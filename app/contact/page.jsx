"use client";

import ContactHero from "@/components/ContactHero";
import ContactMain from "@/components/ContactMain";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Topbar from "@/components/Topbar";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Contact() {
  const pathname = usePathname();

  return (
    <div>
      <Topbar />
      <Header />
      <ContactHero />
      <ContactMain />
      <Footer />
    </div>
  );
}
