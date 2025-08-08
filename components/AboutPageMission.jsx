"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AboutImg from "../public/assets/img/about.png";

const AboutPageMission = () => {
  return (
    <div className="pt-20 pb-10 md:14" id="about">
      <div className="custom-container2 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 py-6 gap-10">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
          className="flex justify-center"
        >
          <div>
            <Image src={AboutImg} alt="hero1" />
          </div>
        </motion.div>

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
            Our Mission
          </h1>

          <p className="text-[#0A2655] text-[19px] mt-6">
            Athena Surgery Center’s mission is to provide personalized,
            high-quality care on a preventative basis. We are a practice of
            dedicated, experienced physicians who believe in working with our
            patients to achieve the best possible outcome. Our physicians
            provide comprehensive pain management and orthopedic treatments to
            our patients in a friendly, relaxed atmosphere. Each physician is
            board-certified and comes to our practice with years of experience
            in their area of specialty.
            <br />
            <br /> To schedule an appointment, please contact us.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link href="#services">
              <button className="mt-4 mb-2 w-[270px] sm:w-[210px] h-[45px] flex items-center justify-between group bg-secondary rounded-[2rem] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-[#0A2655] cursor-pointer">
                <div className="flex-1 text-center font-medium text-md text-[#0A2655] transition-colors duration-300">
                  Contact Us
                </div>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPageMission;
