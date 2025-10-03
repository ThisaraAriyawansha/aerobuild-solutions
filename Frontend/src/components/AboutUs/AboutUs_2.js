import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12">
      <div className="mx-auto max-w-7xl">


        {/* Main Content Grid */}
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative overflow-hidden shadow-2xl rounded-3xl">
              <img
                src="/images/Rectangle 25.jpg"
                alt="Construction site"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border-2 border-[#e2ebf6]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center">
                <p className="text-4xl font-bold text-[#6b8384]">10+</p>
                <p className="text-sm text-[#a0b1c1] font-medium">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="inline-block bg-[#e2ebf6] text-[#6b8384] px-4 py-2 rounded-full text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Building Dreams Since 2014
            </motion.div>

            <h2 className="mb-4 text-xl text-center font-prata sm:text-left sm:text-2xl">
              Aerobuild Solutions
            </h2>

            <p className="mb-4 text-black font-poppins sm:leading-[2.5] text-justify sm:text-base leading-normal">
              Welcome to Aerobuild Solutions, your trusted partner in bringing visions to life
              through exceptional construction and design.
            </p>

            <p className="mb-4 text-black font-poppins sm:leading-[2.5] text-justify sm:text-base leading-normal">
              With a focus on innovation, quality, and sustainability, we specialize in creating
              homes, commercial spaces, and custom projects that reflect your unique style and needs.
              Our dedicated team ensures every project is executed with precision and care, blending
              modern design with lasting functionality.
            </p>

            <p className="mb-4 text-black font-poppins sm:leading-[2.5] text-justify sm:text-base leading-normal">
              At Aerobuild Solutions, we transform ideas into reality, delivering spaces that inspire
              and endure – where your dream property begins.
            </p>


          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 gap-6 mt-16 md:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "50+", label: "Team Members" },
            { number: "15+", label: "Awards Won" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#e2ebf6]"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(107, 131, 132, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-[#6b8384] mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-[#a0b1c1]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;