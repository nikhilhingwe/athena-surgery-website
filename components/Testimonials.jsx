"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Star from "../public/assets/img/star.png";

const testimonials = [
  {
    name: "Kevin Rayford",
    stars: 4,
    date_posted: "Posted 1 Week Ago",
    content:
      "Great experiences here! Friendly doctors and staff. Everyone genuinely wants to see the patients get better!",
    image: "/assets/img/f-icon.png",
  },

  {
    name: "Kevin Rayford",
    stars: 4,
    date_posted: "Posted 1 Week Ago",
    content:
      "Great experiences here! Friendly doctors and staff. Everyone genuinely wants to see the patients get better!",
    image: "/assets/img/f-icon.png",
  },

  {
    name: "Kevin Rayford",
    stars: 4,
    date_posted: "Posted 1 Week Ago",
    content:
      "Great experiences here! Friendly doctors and staff. Everyone genuinely wants to see the patients get better!",
    image: "/assets/img/f-icon.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-10 pb-25" id="testimonials">
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
          Client Speaks
        </p>

        <h2 className="text-3xl md:text-5xl font-md text-[#0A2655] mb-3">
          Love from patients treated by <br />
          Athena Surgery Center
        </h2>

        <p className="txt-primary text-base md:text-lg mx-auto mb-20 px-2">
          4.9 Out of 5.0 Rating{" "}
          <span className="text-green-600">★ ★ ★ ★ ★</span>
        </p>
      </motion.div>

      <div className="flex gap-8 flex-wrap items-center justify-center px-0 md:px-10">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="relative group flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.6, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 1 }}
            viewport={{ once: false }}
          >
            <div className="relative w-full max-w-[380px]  bg-[#F6F6F6] rounded-lg px-4 py-8 border border-gray-300">
              <div className="flex justify-between items-center">
                <h3 className="text-[20px] font-medium txt-primary">
                  {t.name}
                </h3>
                <Image src={t.image} alt={t.name} width={30} height={20} />
              </div>
              <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
              <br />
              <p className="font-light mt-2 text-[14px] txt-primary">
                {t.date_posted}
              </p>
              <p className="font-[300] text-[17px] txt-primary mt-2">
                {t.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
