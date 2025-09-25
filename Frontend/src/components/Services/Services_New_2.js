import React from "react";
import { motion } from "framer-motion";

function KandalamaHomes() {
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
        className="mb-4 text-lg font-medium text-center text-black sm:text-xl sm:text-left font-poppins"
      >
        Building Your Vision with
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6 text-4xl text-center text-black sm:text-7xl sm:text-left font-prata"
      >
        Kandalama Homes
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-sm leading-relaxed text-justify text-black sm:text-lg max-w-7xl font-poppins"
      >
        At Kandalama Homes, we bring dreams to life with our unparalleled expertise and dedication to
        excellence. Whether it’s a home that reflects your personality, a cabaña that offers
        tranquility, or a warehouse that powers your business, we specialize in crafting spaces that
        inspire. With a focus on innovation, functionality, and sustainability, Kandalama Homes
        offers a suite of services designed to turn your ideas into stunning realities.
      </motion.p>
    </motion.div>
  );
}

export default KandalamaHomes;
