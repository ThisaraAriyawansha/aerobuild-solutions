import React from "react";
import { motion } from "framer-motion";

function AerobuildSolutions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col p-5 text-center bg-white sm:p-20 sm:text-left sm:mt-0"

    >
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-4 text-lg font-medium text-center text-[#163212] sm:text-xl sm:text-left font-poppins"
      >
        Building Tomorrow with
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6 text-4xl text-center text-[#163212] sm:text-7xl sm:text-left font-prata"
      >
        Aerobuild Solutions
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-sm leading-relaxed text-justify text-[#6b8384] sm:text-lg max-w-7xl font-poppins"
      >
        At Aerobuild Solutions, we specialize in delivering construction projects that blend 
        innovation, precision, and sustainability. From modern homes that reflect your lifestyle 
        to commercial spaces that empower businesses, our expertise covers a wide spectrum of 
        design and build solutions. Guided by professionalism, creativity, and a commitment to 
        lasting quality, Aerobuild Solutions transforms every idea into a structure that inspires.
      </motion.p>
    </motion.div>
  );
}

export default AerobuildSolutions;