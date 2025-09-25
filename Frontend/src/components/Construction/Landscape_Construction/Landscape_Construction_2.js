import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const LandSection = () => {
  return (
    <div className="p-10 -mt-20 bg-white">
      <div className="w-full px-4 py-12">
        <h2 className="mb-8 text-xl text-center font-poppins text-customGreen sm:text-left sm:text-3xl">
        What We Offer......
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
              <h3 className="text-lg text-black font-poppins">Garden Design</h3>
            </div>
            <p className="text-justify text-black font-poppins w-[90%] sm:w-[18rem] md:w-[19rem] mx-auto mt-4">
            Tailored gardens with lush greenery, vibrant flowers, and tranquil water features to suit your style and space.         
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
              <h3 className="text-lg text-black font-poppins">Eco-Friendly Solutions</h3>
            </div>
            <p className="text-justify text-black font-poppins w-[90%] sm:w-[18rem] md:w-[19rem] mx-auto mt-4">
            Vertical gardens and green roofs & Composting areas and organic garden setups.                </p>
          </motion.div>

          {/* Cultural Richness */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-2 rounded-md mx-auto w-[90%] sm:w-[18rem] md:w-[19rem] bg-[#005A4E26]">
              <h3 className="text-lg text-black font-poppins">Hardscaping</h3>
            </div>
            <p className="text-justify text-black font-poppins w-[90%] sm:w-[18rem] md:w-[19rem] mx-auto mt-4">
            Stone pathways, retaining walls, and elegant driveways. & Modern lighting to elevate your space at night.
                        </p>
          </motion.div>
        </div>
      </div>


    </div>
  );
};

export default LandSection;
