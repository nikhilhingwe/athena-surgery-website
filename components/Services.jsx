"use client";

import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Star from "../public/assets/img/star.png";

const services = [
  {
    title: "Plastic Surgery",
    image: "/assets/img/plastic.png",
  },
  {
    title: "Pain Management",
    image: "/assets/img/pain.png",
  },
  {
    title: "Orthopedics",
    image: "/assets/img/pediatry.png",
    highlight: true,
  },
  {
    title: "Spine Injuries",
    image: "/assets/img/spine.png",
  },
  {
    title: "Pediatry Services",
    image: "/assets/img/pediatry.png",
  },
];

export default function Services() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-2 md:py-15"
      id="services"
      style={{ backgroundImage: "url('/assets/img/bg-service.png')" }}
    >
      <motion.div
        className="text-center text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <div className="flex justify-center items-center mb-4">
          <Image src={Star} alt="star" />
        </div>
        <p className="txt-primary font-semibold text-sm md:text-base mb-2 italic">
          What We Do
        </p>

        <h2 className="text-3xl md:text-5xl font-md text-[#0A2655] mb-3">
          Our Surgical Services
        </h2>

        <p className="txt-primary text-base md:text-lg max-w-2xl mx-auto mb-20 px-4">
          At Athena Surgery Center, we specialize in advanced surgical solutions
          including Plastic Surgery, Pain Management, Orthopedics, Spine, and
          Podiatry.
        </p>
      </motion.div>

      <div className="flex gap-8 flex-wrap items-center justify-center px-10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="relative group flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.6, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 1 }}
            viewport={{ once: false }}
          >
            <div className="relative w-[240px] h-[240px] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <p className="mt-3 font-semibold text-[#0A2655] text-[18px] md:text-base relative after:content-[''] after:block after:w-[20px] after:h-[2px] after:bg-blue-900 after:mt-1">
              {service.title}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex justify-center mt-16 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link href="#services">
          <button className="mt-2 mb-2 w-[300px] sm:w-[320px] h-[47px] flex items-center justify-between group bg-secondary rounded-[2rem] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-[#0A2655] cursor-pointer">
            <div className="flex-1 text-center font-medium text-md text-[#0A2655] transition-colors duration-300">
              Schedule Your Consultation Today
            </div>
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
