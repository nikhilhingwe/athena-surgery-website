"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Star from "../public/assets/img/star.png";

import PlasticSurgeryImg from "../public/assets/img/plastic-surgery-s.avif";
import PainManagementImg from "../public/assets/img/pain-management-s.avif";
import OrthopediacImg from "../public/assets/img/orthopediac.avif";
import SpineImg from "../public/assets/img/spine-s.avif";
import PediatryImg from "../public/assets/img/pediatry-s.avif";

const ServicePageServiceSection = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-6 md:py-15"
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

        <p className="txt-primary text-[16px] md:text-[20px] max-w-3xl mx-auto mb-20 px-4">
          At Athena Surgery Center, we specialize in advanced surgical solutions
          including Plastic Surgery, Pain Management, Orthopedics, Spine, and
          Podiatry.
        </p>
      </motion.div>

      <div className="px-3 md:px-10">
        <div className="pt-2 pb-5 md:14">
          <div className="custom-container2 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 py-6 gap-10">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-[500px] h-auto">
                <Image
                  src={PlasticSurgeryImg}
                  alt="hero1"
                  className="w-full h-auto object-cover rounded-[10px]"
                />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.4 }}
              className="w-full md:w-1/2 text-center md:text-left space-y-2"
            >
              <h1 className="text-[34px] md:text-5xl leading-none text-[#0A2655]">
                Plastic Surgery
              </h1>

              <p className="text-[#0A2655] md:text-[20px] text-[16px] mt-6">
                At Athena Surgery Center, our plastic surgery team is committed
                to providing results that are both beautiful and
                natural-looking. We specialize in a range of cosmetic and
                reconstructive procedures designed to enhance your confidence
                and quality of life. Each treatment plan begins with a thorough
                consultation to understand your goals and expectations. Our
                surgeons use advanced techniques to ensure precision, safety,
                and minimal scarring. From subtle enhancements to complex
                reconstructions, we focus on achieving balanced, harmonious
                results. We combine artistry with medical expertise to deliver
                the highest standard of care. Your comfort, privacy, and
                satisfaction are our top priorities throughout your journey.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-10">
        <div className="pt-10 pb-5 md:14">
          <div className="custom-container2 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 py-6 gap-10">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.4 }}
              className="w-full md:w-1/2 text-center md:text-left space-y-2"
            >
              <h1 className="text-[34px] md:text-5xl leading-none text-[#0A2655]">
                Pain Management
              </h1>

              <p className="text-[#0A2655] md:text-[20px] text-[16px] mt-6">
                Our pain management specialists help patients find lasting
                relief from chronic and acute pain. We offer personalized
                treatment plans that may include medication, targeted
                injections, and minimally invasive therapies. Using
                state-of-the-art diagnostic tools, we pinpoint the exact source
                of your discomfort. Our goal is not just to mask symptoms, but
                to address the underlying cause. We focus on improving mobility,
                reducing pain, and restoring your overall quality of life. Each
                step of the process is guided by compassion, understanding, and
                expert medical care. At Athena Surgery Center, we help you move
                forward without the burden of constant pain.
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-[500px] h-auto">
                <Image
                  src={PainManagementImg}
                  alt="hero1"
                  className="w-full h-auto object-cover rounded-[10px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-10">
        <div className="pt-10 pb-5 md:14">
          <div className="custom-container2 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 py-6 gap-10">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-[500px] h-auto">
                <Image
                  src={OrthopediacImg}
                  alt="hero1"
                  className="w-full h-auto object-cover rounded-[10px]"
                />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.4 }}
              className="w-full md:w-1/2 text-center md:text-left space-y-2"
            >
              <h1 className="text-[34px] md:text-5xl leading-none text-[#0A2655]">
                Orthopedics
              </h1>

              <p className="text-[#0A2655] md:text-[20px] text-[16px] mt-6">
                Our orthopedic surgeons provide expert care for bones, joints,
                ligaments, muscles, and tendons. We treat conditions ranging
                from sports injuries and fractures to arthritis and degenerative
                diseases. Treatment plans may include advanced surgical
                techniques or non-surgical solutions based on your needs.
                State-of-the-art imaging and operating technology ensure
                precision and safety in every procedure. Our focus is on
                restoring strength, mobility, and long-term joint health. We aim
                to help you return to work, hobbies, and daily activities
                without discomfort. At Athena Surgery Center, your movement and
                freedom are our top priorities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-10">
        <div className="pt-10 pb-5 md:14">
          <div className="custom-container2 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 py-6 gap-10">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.4 }}
              className="w-full md:w-1/2 text-center md:text-left space-y-2"
            >
              <h1 className="text-[34px] md:text-5xl leading-none text-[#0A2655]">
                Spine Injuries
              </h1>

              <p className="text-[#0A2655] md:text-[20px] text-[16px] mt-6">
                Athena Surgery Center’s spine specialists are experts in
                diagnosing and treating spinal conditions and injuries. We care
                for patients with herniated discs, spinal stenosis, fractures,
                and trauma-related issues. Minimally invasive procedures help
                reduce recovery times and postoperative discomfort. Every
                treatment begins with advanced imaging to accurately identify
                the problem. We focus on restoring mobility, reducing pain, and
                improving spinal function. Our surgeons work closely with each
                patient to develop a safe, effective care plan. You can trust us
                to provide expert care for your spine in a compassionate,
                patient-focused environment.
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-[500px] h-auto">
                <Image
                  src={SpineImg}
                  alt="hero1"
                  className="w-full h-auto object-cover rounded-[10px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-10">
        <div className="pt-10 pb-5 md:14">
          <div className="custom-container2 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 py-6 gap-10">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-[500px] h-auto">
                <Image
                  src={PediatryImg}
                  alt="hero1"
                  className="w-full h-auto object-cover rounded-[10px]"
                />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.4 }}
              className="w-full md:w-1/2 text-center md:text-left space-y-2"
            >
              <h1 className="text-[34px] md:text-5xl leading-none text-[#0A2655]">
                Podiatry Services
              </h1>

              <p className="text-[#0A2655] md:text-[20px] text-[16px] mt-6">
                Our podiatry team specializes in treating conditions affecting
                the foot and ankle. We address everything from sports injuries
                and fractures to bunions, heel pain, and chronic conditions.
                Treatment may involve surgical or non-surgical solutions
                tailored to your lifestyle. Advanced imaging and precise
                techniques ensure targeted, effective care. We aim to restore
                comfort, mobility, and proper function so you can stay active.
                Our podiatrists are committed to helping you prevent future
                injuries and maintain long-term foot health. From routine care
                to complex procedures, Athena Surgery Center keeps you moving
                with confidence.
              </p>
            </motion.div>
          </div>
        </div>
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
};

export default ServicePageServiceSection;
