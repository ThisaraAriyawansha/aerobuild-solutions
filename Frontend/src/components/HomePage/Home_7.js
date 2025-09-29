import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import img1 from "../../assets/images/contact/Modern-House-Designs-in-Sri-Lanka-8.jpg"; 
import img2 from "../../assets/images/contact/top-view-diverse-team-people-600nw-2486679585.webp"; 

const ContactUs = () => {
  return (
    <div className="w-full p-10 bg-white">
      {/* Title Section */}
      <div className="py-6 text-center">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="mb-2 text-3xl font-medium tracking-tight" style={{ color: '#163212' }}>
              Inspired Living
            </h2>
            <div className="w-16 h-0.5 mx-auto" style={{ background: 'linear-gradient(to right, #6b8384, #a0b1c1)' }}></div>
          </motion.div>
                    <motion.p
            className="max-w-xl mx-auto mt-4 text-base font-light sm:text-lg" style={{ color: '#6b8384' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Design-driven homes built for tomorrow
          </motion.p>
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
