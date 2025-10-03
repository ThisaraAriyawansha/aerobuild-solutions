import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white font-poppins">
      {/* Contact Us Section */}
      <div className="py-8 sm:py-12 bg-gradient-to-br from-[#e2ebf6] to-[#f4f9fc]">
        <div className="px-4 mx-auto max-w-7xl">
          <motion.div
            className="mb-6 text-center sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-Prata font-bold text-[#6b8384] mb-2 sm:mb-4">
              Contact Us
            </h2>
            <p className="text-[#a0b1c1] text-sm sm:text-base max-w-2xl mx-auto">
              Get in touch with us to discuss your project or inquire about our services.
            </p>
          </motion.div>

          <motion.div
            className="max-w-lg p-4 mx-auto bg-white rounded-lg shadow-sm sm:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm text-[#6b8384] mb-1 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 sm:p-3 rounded-lg border border-[#a0b1c1] text-xs sm:text-sm text-[#6b8384] focus:outline-none focus:border-[#6b8384] bg-[#f4f9fc]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm text-[#6b8384] mb-1 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 sm:p-3 rounded-lg border border-[#a0b1c1] text-xs sm:text-sm text-[#6b8384] focus:outline-none focus:border-[#6b8384] bg-[#f4f9fc]"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm text-[#6b8384] mb-1 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-2 sm:p-3 rounded-lg border border-[#a0b1c1] text-xs sm:text-sm text-[#6b8384] focus:outline-none focus:border-[#6b8384] bg-[#f4f9fc]"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <motion.button
                type="button"
                className="w-full p-2 sm:p-3 bg-[#6b8384] text-white text-xs sm:text-sm rounded-lg hover:bg-[#5a6e6f] transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;