import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import img1 from "../../assets/images/contact/Modern-House-Designs-in-Sri-Lanka-8.jpg"; 
import img2 from "../../assets/images/contact/top-view-diverse-team-people-600nw-2486679585.webp"; 

const ContactUs = () => {
  return (
    <div className="w-full p-4 bg-white sm:p-10">
      {/* Title Section */}
      <div className="py-4 text-center sm:py-6">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="mb-2 text-2xl font-medium tracking-tight sm:text-3xl" style={{ color: '#163212' }}>
              Inspired Living
            </h2>
            <div className="w-16 h-0.5 mx-auto" style={{ background: 'linear-gradient(to right, #6b8384, #a0b1c1)' }}></div>
          </motion.div>

          <p className="mt-2 text-gray-400 font-poppins">
            Design-driven homes built for tomorrow
          </p>
      </div>

      {/* Container Section with Two Parts */}
      <div className="flex flex-col justify-center w-full gap-6 px-4 py-4 mx-auto sm:flex-row sm:px-6 sm:gap-0">
        {/* Left Section */}
        <div className="w-full px-4 mb-6 text-center">
          <motion.img
            src={img1}
            alt="Image 1"
            className="object-cover w-full h-48 max-w-md mx-auto transition-transform duration-300 transform rounded-lg shadow-md sm:h-96 hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.h3
            className="mt-4 text-base sm:text-lg font-poppins "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Innovative Home Design
          </motion.h3>
          <p className="mt-2 text-gray-400 font-poppins ">
            Sleek, energy-efficient homes crafted with precision and modern technology.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full px-4 mb-6 text-center">
          <motion.img
            src={img2}
            alt="Image 2"
            className="object-cover w-full h-48 max-w-md mx-auto transition-transform duration-300 transform rounded-lg shadow-md sm:h-96 hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.h3
            className="mt-4 text-base text-black sm:text-lg font-poppins "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Connected Communities
          </motion.h3>

          <p className="mt-2 text-gray-400 font-poppins ">
            Thoughtfully designed spaces fostering connection and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;