"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AboutImg from "../public/assets/img/about-speciality.avif";

const AboutSpecialities = () => {
  return (
    <div className="pt-20 pb-10 md:14" id="about">
      <div className="custom-container2 flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-6 gap-10">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
          className="w-full md:w-1/2 text-center md:text-left space-y-2"
        >
          {/* <p className="flex items-center justify-center md:justify-start txt-primary text-sm md:text-[18px] italic">
            <span className="w-[20px] md:w-[30px] h-[2px] bg-primary mr-3"></span>
            Who We Are
          </p> */}

          <h1 className="text-[40px] md:text-6xl leading-none text-[#0A2655]">
            Our Specialities
          </h1>

          <p className="text-[#0A2655] text-[19px] mt-6">
            At Athena Surgery Center, we use cutting-edge technology to provide
            safe, precise, and effective care. Our expert surgeons specialize in
            Orthopedic Surgery, Pain Management, General Surgery, Hand Surgery,
            Total Spine, and more. We offer advanced and minimally invasive
            procedures to help you heal faster with less discomfort. Discover
            how our full range of services can support your health and recovery.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link href="#services">
              <button className="mt-4 mb-2 w-[270px] sm:w-[210px] h-[45px] flex items-center justify-between group bg-secondary rounded-[2rem] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-[#0A2655] cursor-pointer">
                <div className="flex-1 text-center font-medium text-md text-[#0A2655] transition-colors duration-300">
                  Our Services
                </div>
              </button>
            </Link>
          </div>
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
              src={AboutImg}
              alt="hero1"
              className="w-full h-auto object-cover rounded-[10px]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSpecialities;
