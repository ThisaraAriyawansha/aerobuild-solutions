import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/engineering-pictures-upbco4jbz7ndjny6.jpg";

const Service_1 = () => {
  return (
    <motion.div
      className="w-full min-h-[180px] sm:min-h-[220px] lg:h-96 rounded-b-[40px] flex justify-center items-center relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="engineering background"
          className="object-cover object-center w-full "
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-b-[40px]"></div>
      </div>
      
      {/* Content */}
      <h2 className="relative z-10 px-4 text-2xl text-center text-white sm:text-4xl lg:text-5xl font-prata sm:px-8 lg:px-0 drop-shadow-lg">
        Our Services
      </h2>
    </motion.div>
  );
};

export default Service_1;