import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/construction-background-7t8pzcrvkc42exlu.jpg";

const Service_1 = () => {
  return (
    <motion.div
      className="w-full h-[50vh] lg:h-96 rounded-b-[40px] bg-cover bg-center flex justify-center items-center relative before:absolute before:inset-0 before:bg-black/30 before:rounded-b-[40px]"
      style={{ backgroundImage: `url(${bgImage})` }} 
      initial={{ opacity: 0, y: -50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
    >
      <h2 className="relative z-10 px-4 py-8 text-3xl text-center text-white lg:p-16 font-prata">
        Our Services
      </h2>
    </motion.div>
  );
};

export default Service_1;