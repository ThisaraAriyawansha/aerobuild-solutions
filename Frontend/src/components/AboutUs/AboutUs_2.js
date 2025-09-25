import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const OurHistory = () => {
  return (
    <div className="px-6 py-12 bg-white md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.h2
  className="mb-8 text-4xl text-center text-green-800 sm:text-5xl md:text-6xl font-prata"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  Our History
</motion.h2>


        {/* Content Section */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            >
            <h3 className="mb-4 text-xl text-center font-prata sm:text-left sm:text-2xl">
                WHO WE ARE
            </h3>
            <p className="mb-4 text-black font-poppins sm:leading-[2.5] text-justify sm:text-base leading-normal">
            Kandalama Homes was founded with a vision to redefine construction and landscape architecture in Sri Lanka. From humble
             beginnings, we have grown into a trusted name, known for delivering exceptional projects that blend creativity,
              functionality, and sustainability. With years of experience and a passion for excellence, our journey has been 
              marked by countless success stories and lasting relationships with our clients. At Kandalama Homes, our history 
              is built on a foundation of trust, innovation, and a commitment to creating spaces that stand the test of time
            </p>

            </motion.div>


          {/* Right - Image Grid */}
          <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-6 ">
            {/* Top Left Image (Larger, based on Golden Ratio) */}
            <motion.img
              src="/images/Rectangle 77.jpg"
              alt="Top Left"
              className="w-full col-span-2 row-span-2 rounded-lg shadow-md h-80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Top Right Image (Smaller) */}
            <motion.img
              src="/images/Rectangle 12.jpg"
              alt="Top Right"
              className="w-2/3 h-auto rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Middle Left Image */}
            <motion.img
              src="/images/Rectangle 18 (1).jpg"
              alt="Middle Left"
              className="w-2/3 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Middle Right Image */}
            <motion.img
              src="/images/Rectangle 7.jpg"
              alt="Middle Right"
              className="w-2/3 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Bottom Left Image */}
            <motion.img
              src="/images/c861a4893f6ffd31eb73ddf4678e2ee6.jpeg"
              alt="Bottom Left"
              className="w-2/3 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Bottom Right Image */}
            <motion.img
              src="/images/Rectangle 18.jpg"
              alt="Bottom Right"
              className="w-2/3 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
