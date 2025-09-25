import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Link } from "react-router-dom"; // Import Link from React Router

const CabanaSection = () => {
  return (
    <div className="p-10 -mt-20 bg-white">
      <div className="w-full px-4 py-12">
        <h2 className="mb-8 text-xl text-center font-poppins text-customGreen sm:text-left sm:text-3xl">
        Why Build a Cabana in Sri Lanka?
        </h2>
        <div className="grid gap-8 mx-auto md:grid-cols-1 lg:grid-cols-3">
          {/* Tropical Paradise */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-2 rounded-md mx-auto w-[90%] sm:w-[18rem] md:w-[19rem] bg-[#005A4E26]">
              <h3 className="text-lg text-black font-poppins">Blend with Nature</h3>
            </div>
            <p className="text-justify text-black font-poppins w-[90%] sm:w-[18rem] md:w-[19rem] mx-auto mt-4">
            Cabanas integrate seamlessly with Sri Lanka’s diverse environments, from coastal areas to lush forests.
            </p>
          </motion.div>

          {/* Tourism Potential */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-2 rounded-md mx-auto w-[90%] sm:w-[18rem] md:w-[19rem] bg-[#005A4E26]">
              <h3 className="text-lg text-black font-poppins">Tourism Appeal</h3>
            </div>
            <p className="text-justify text-black font-poppins w-[90%] sm:w-[18rem] md:w-[19rem] mx-auto mt-4">
            With increasing demand for unique and eco-friendly accommodations, cabanas offer an excellent return on investment.            </p>
          </motion.div>

          {/* Cultural Richness */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-2 rounded-md mx-auto w-[90%] sm:w-[18rem] md:w-[19rem] bg-[#005A4E26]">
              <h3 className="text-lg text-black font-poppins">Cultural Richness</h3>
            </div>
            <p className="text-justify text-black font-poppins w-[90%] sm:w-[18rem] md:w-[19rem] mx-auto mt-4">
            Cabanas often use natural and locally sourced materials, keeping costs manageable.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full py-8 bg-gray-100">
        <div className="text-center">
          <h3 className="p-6 mb-4 text-xl text-black font-prata sm:text-3xl md:text-4xl">
          Do you also want a beautiful Cabana?
                    </h3>
          <Link to="/contact">
            <motion.button
              className="px-8 py-3 text-sm text-white transition rounded-md hover:bg-green-700 bg-customGreen font-poppins sm:text-base md:text-lg"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CabanaSection;
