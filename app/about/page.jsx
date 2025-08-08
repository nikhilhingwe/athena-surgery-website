"use client";

import AboutHero from "@/components/AboutHero";
import AboutPageMission from "@/components/AboutPageMission";
import AboutSpecialities from "@/components/AboutSpecialities";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Topbar from "@/components/Topbar";
// import { motion, AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";
import Contact from "../../components/Contact";

export default function About() {
  // const pathname = usePathname();

  return (
    <div>
      <Topbar />
      <Header />
      <AboutHero />
      <AboutPageMission />
      <AboutSpecialities />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
