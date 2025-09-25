import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function KandalamaHomes() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create animations based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, 50]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale, y }}
      className="flex flex-col p-5 mb-10 text-center bg-white sm:p-20 sm:text-left"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut" 
      }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="mb-8 text-xl font-bold text-center text-black sm:text-3xl sm:text-left font-prata"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ 
          delay: 0.2, 
          duration: 0.5 
        }}
      >
        Why Choose Kandalama Homes?
      </motion.h2>

      <motion.p 
        className="text-sm leading-relaxed text-justify text-black sm:text-xl max-w-7xl font-poppins"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ 
          delay: 0.4, 
          duration: 0.5 
        }}
      >
        At Kandalama Homes, every project is a masterpiece in the making. With years of experience in 
        the Sri Lankan construction landscape, we understand the unique challenges and opportunities of 
        local building projects. Our commitment to quality, creativity, and client satisfaction ensures 
        that we not only meet your expectations but exceed them. Let's create something extraordinary together. 
        Contact Kandalama Homes today and take the first step toward building your dream!
      </motion.p>
    </motion.div>
  );
}

export default KandalamaHomes;