"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactImg from "../public/assets/img/contact.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div
      className="pt-15 pb-15 md:14 bg-[#F6F6F6] bg-cover bg-left-bottom bg-no-repeat"
      id="contact"
      style={{ backgroundImage: "url('/assets/img/bg-service.png')" }}
    >
      <div className="custom-container2 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 py-6 gap-10">
        {/* Image */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
          className="flex justify-center"
        >
          <div>
            <Image src={ContactImg} alt="hero1" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
          className="w-full md:w-1/2 text-center md:text-left space-y-2"
        >
          <p className="flex items-center justify-center md:justify-start txt-primary text-sm md:text-[18px] italic">
            <span className="w-[20px] md:w-[30px] h-[2px] bg-primary mr-3"></span>
            Get Back to What You Love
          </p>

          <h1 className="text-[40px] md:text-5xl leading-none text-[#0A2655]">
            Take the First Step <br /> Toward Pain-Free Movement
          </h1>

          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full max-w-2xl mx-auto pt-3 space-y-4"
            >
              <input
                type="text"
                name="user_name"
                placeholder="YOUR FULL NAME"
                required
                className="w-full px-4 py-3 rounded-md bg-[#0A2655] text-white placeholder-white"
              />

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="number"
                  name="user_phone"
                  placeholder="YOUR PHONE"
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#0A2655] text-white placeholder-white"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="YOUR EMAIL"
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#0A2655] text-white placeholder-white"
                />
              </div>

              <textarea
                name="message"
                placeholder="WRITE YOUR BRIEF MESSAGE HERE.."
                required
                rows="4"
                className="w-full px-4 py-3 rounded-md bg-[#0A2655] text-white placeholder-white resize-none"
              />

              <div className="flex justify-center md:justify-start">
                <button
                  type="submit"
                  className="mt-2 mb-2 w-[270px] sm:w-[210px] h-[45px] flex items-center justify-between group bg-secondary rounded-[2rem] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-[#0A2655] cursor-pointer"
                >
                  <div className="flex-1 text-center font-medium text-md text-[#0A2655] transition-colors duration-300">
                    Book Appointment
                  </div>
                </button>
              </div>

              {success && (
                <p className="text-green-600 text-center mt-2">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
