import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="mt-20 mb-20 sm:mt-0 sm:p-20 sm:mb-0">
      <div className="container px-4 mx-auto lg:px-16">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: inView ? 1 : 0.8,
              rotate: inView ? 0 : -10,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center flex-1 ml-4 space-y-6 text-black"
          >
            <h2 className="mb-10 text-xl text-center sm:text-4xl lg:text-left font-prata">
              Contact Us
            </h2>
            <div className="flex flex-col items-center gap-6 mb-4">
              <motion.span
                className="text-xl text-customGreen sm:text-3xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <i className="fas fa-map-marker-alt"></i>
              </motion.span>
              <p className="text-sm text-center font-poppins sm:text-base">
                Head Office: Kandalama Homes (Pvt) Ltd. <br />
                2nd Mile Post, Kandalama Road, Dambulla
              </p>
            </div>
            <div className="flex flex-col items-center gap-6 mb-4">
              <motion.span
                className="text-xl text-customGreen sm:text-3xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <i className="fas fa-envelope"></i>
              </motion.span>
              <p className="text-sm text-center font-poppins sm:text-base">
                info@kandalamahomes.com
              </p>
            </div>
            <div className="flex flex-col items-center gap-6 mb-4">
              <motion.span
                className="text-xl text-customGreen sm:text-3xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <i className="fas fa-phone-alt"></i>
              </motion.span>
              <p className="text-sm text-center font-poppins sm:text-base">
                +94 76 652 7087
              </p>
            </div>
          </motion.div>

          {/* Vertical Divider */}
          <motion.div
            className="w-[3px] h-auto mx-4 lg:block bg-customGreen"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: inView ? 1 : 0, height: inView ? "100%" : 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          ></motion.div>

          {/* Right Section (Form) */}
          <div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: inView ? 1 : 0.8,
              x: inView ? 0 : 100,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 mr-4"
          >
            <form className="w-full mx-auto mt-5 ml-3 space-y-6">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen font-poppins"
              />
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full p-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen font-poppins"
              />
              <textarea
                placeholder="Enter Message"
                rows="5"
                className="w-full p-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen font-poppins"
              ></textarea>
              <motion.button
                type="submit"
                className="block p-4 mx-auto text-xs text-white transition rounded-lg sm:w-1/4 bg-customGreen hover:bg-green-900 font-poppins sm:text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
