"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero1 from "../public/assets/img/hero1.png";
import Hero2 from "../public/assets/img/hero2.png";

export default function Hero() {
  return (
    <div className="bg-primary pt-14 md:14">
      <div className="custom-container flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-6 gap-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-center md:text-left space-y-3 md:mt-[-70px]"
        >
          <p className="flex items-center justify-center md:justify-start text-yellow-400 text-sm md:text-[18px] italic">
            <span className="w-[20px] md:w-[30px] h-[2px] bg-yellow-400 mr-3"></span>
            Specialize in advanced surgical solutions
          </p>

          <h1 className="text-[40px] md:text-6xl font-md leading-none text-white">
            Comprehensive <br /> Surgical Care, <br /> Close to Home
          </h1>

          <div className="flex justify-center md:justify-start">
            <Link href="#services">
              <button className="mt-4 mb-2 w-[270px] sm:w-[290px] h-[45px] flex items-center justify-between group bg-secondary rounded-[2rem] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-white cursor-pointer">
                <div className="flex-1 text-center font-medium text-md text-[#0A2655] transition-colors duration-300">
                  Learn More About Our Services
                </div>
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="flex items-end justify-end mb-[-4px] md:mb-[-6.5px] mr-[-30px] z-10">
            <Image src={Hero2} alt="hero2" />
          </div>
          <div>
            <Image src={Hero1} alt="hero1" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
