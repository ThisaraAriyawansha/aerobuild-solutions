import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const ContactUs = () => {
  return (
    <div className="w-full p-10 bg-white">
      {/* Title Section */}
      <div className="py-6 text-center">
        <motion.h2
          className="text-3xl text-black uppercase font-quando"
          initial={{ opacity: 0, y: -50 }} // Start with invisible and slightly moved up
          animate={{ opacity: 1, y: 0 }} // Animate to full opacity and reset position
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        >
          Housing Construction
        </motion.h2>
      </div>

      {/* Container Section with Two Parts */}
      <div className="flex flex-wrap justify-center w-full px-6 py-4 mx-auto">
        {/* Left Section */}
        <div className="w-full px-4 mb-6 text-center sm:w-1/2">
          <motion.img
            src="/images/Rectangle 77.jpg"
            alt="Image 1"
            className="object-cover w-3/4 h-56 mx-auto transition-transform duration-300 transform rounded-lg shadow-md sm:h-96 hover:scale-105" // Adjusted height for mobile
            initial={{ opacity: 0, scale: 0.9 }} // Start with reduced opacity and smaller scale
            whileInView={{ opacity: 1, scale: 1 }} // Animate to full opacity and normal scale when in view
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} // Smooth transition with slight delay
          />
          <motion.h3
            className="mt-4 text-lg font-poppins hover:text-blue-500"
            initial={{ opacity: 0, y: 30 }} // Start with invisible and slightly moved down
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and reset position
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          >
            Modern Housing Development
          </motion.h3>
          <p className="mt-2 text-black font-poppins hover:text-blue-500">
            Developing affordable and modern homes with eco-<br />friendly designs.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full px-4 mb-6 text-center sm:w-1/2">
          <motion.img
            src="/images/Rectangle 78.jpg"
            alt="Image 2"
            className="object-cover w-3/4 h-56 mx-auto transition-transform duration-300 transform rounded-lg shadow-md sm:h-96 hover:scale-105" // Adjusted height for mobile
            initial={{ opacity: 0, scale: 0.9 }} // Start with reduced opacity and smaller scale
            whileInView={{ opacity: 1, scale: 1 }} // Animate to full opacity and normal scale when in view
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} // Smooth transition with slight delay
          />
          <motion.h3
            className="mt-4 text-lg text-black font-poppins hover:text-blue-500"
            initial={{ opacity: 0, y: 30 }} // Start with invisible and slightly moved down
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and reset position
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          >
            Residential Community
          </motion.h3>
          <p className="mt-2 text-black font-poppins hover:text-blue-500">
            Building sustainable communities with all necessary <br/>amenities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
