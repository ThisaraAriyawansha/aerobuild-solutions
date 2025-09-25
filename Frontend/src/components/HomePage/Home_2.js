import React from "react";
import { motion } from "framer-motion";
import ImageFile from "../../assets/images/95_e3148434-9bf2-451d-b467-ec210679eb22_800x.webp"; 

const AboutUs = () => {
  return (
  <section className="flex flex-col items-center px-6 py-8 mt-10 bg-white lg:flex-row lg:px-12 lg:mt-20">
      {/* Circular Image with Scroll Animation */}
      <motion.div
        className="flex justify-center mb-6 lg:w-1/2 lg:mb-0"
        initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and translate Y by 50px
        whileInView={{ opacity: 1, y: 0 }} // Animate to opacity 1 and translate Y to 0
        transition={{ duration: 1.2 }} // Increased duration to make the animation slower (1.2s)
        viewport={{ once: true }} // Trigger animation once when the element is in view
      >
        <div className="overflow-hidden rounded-full shadow-lg w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
          <img
            src={ImageFile}
            alt="Interior Design"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      {/* Text Content with Scroll Animation */}
      <motion.div
        className="text-center lg:w-1/2 lg:text-left"
        initial={{ opacity: 0, x: -100 }} // Start with opacity 0 and translate X by -100px
        whileInView={{ opacity: 1, x: 0 }} // Animate to opacity 1 and translate X to 0
        transition={{ duration: 1.2 }} // Increased duration to make the animation slower (1.2s)
        viewport={{ once: true }} // Trigger animation once when the element is in view
      >
      <h2 className="mb-4 text-[48px] sm:text-[72px] font-prata font-[400] leading-[56px] text-[#c8d7e6]">
        About Us
      </h2>


        <p className="text-[12px] sm:text-[16px] font-poppins font-[300] leading-[40px] text-black text-justify">
        Welcome to <span className="font-semibold">AeroBuild Solutions</span> – where innovation meets construction. We are dedicated to building strong foundations and modern spaces that inspire progress and stand the test of time. With a focus on precision, sustainability, and design excellence, our team transforms ideas into structures that reflect quality and vision. At AeroBuild Solutions, every project is more than construction – it’s about creating lasting value and shaping the future of communities. Let us build your tomorrow, today.
        </p>

      </motion.div>
    </section>
  );
};

export default AboutUs;
