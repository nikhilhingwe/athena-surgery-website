"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Topbar from "@/components/Topbar";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function MedicalRecords() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Topbar />
        <Header />
        About
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
