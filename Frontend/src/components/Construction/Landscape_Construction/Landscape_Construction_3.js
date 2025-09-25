import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { motion } from "framer-motion"; // Import motion from framer-motion

const VisionSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl px-4 mx-auto text-center">
        {/* Title with a bounce-in effect */}
        <motion.h2
          className="mb-6 text-xl sm:text-3xl font-prata text-customGreen"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100, damping: 25 }}
        >
          Bring Your Vision to Life
        </motion.h2>

        {/* Paragraph with a fade-in effect and gentle sliding */}
        <motion.p
          className="mb-6 text-base sm:text-lg italic text-black font-prata leading-[2] sm:leading-[3] text-justify p-4 lg:p-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-xl sm:text-5xl">"</span>
          Whether you're dreaming of a lush tropical garden, a modern minimalist landscape, or a resort-inspired outdoor oasis,
          Kandalama Homes is here to make it a reality. Contact us today to start your journey toward a beautifully crafted landscape
          that enhances your property and enriches your life.
          <span className="text-xl sm:text-5xl">"</span>
        </motion.p>

        {/* Button with smoother hover effects */}
        <Link to="/contact">
          <motion.button
            className="px-8 py-3 text-sm text-white transition rounded-md hover:bg-green-700 bg-customGreen font-poppins sm:text-base md:text-lg"
            whileHover={{
              scale: 1.1, // Slightly larger scale on hover
              rotate: 2, // Add a little rotation for extra flair
              transition: { duration: 0.3 },
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} // Fade-in with a slight delay
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default VisionSection;
