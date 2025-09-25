import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div
      className="w-full h-40 bg-customGreen rounded-b-[40px]"
      initial={{ opacity: 0, y: -50 }} // Initial state: invisible and slightly above
      whileInView={{ opacity: 1, y: 0 }} // On view: fully visible and at normal position
      transition={{ duration: 0.8 }} // Transition duration for the animation
    >
      <h2 className="p-16 text-3xl text-center text-white sm:text-left sm:text-3xl font-prata">
        Contact Us
      </h2>
    </motion.div>
  );
};

export default ContactUs;
