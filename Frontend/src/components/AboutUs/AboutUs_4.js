import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    const updateHeight = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        setHeight(heroSection.offsetHeight);
      }
    };

    updateHeight();

    window.addEventListener("resize", () => {
      handleResize();
      updateHeight();
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const topPosition = height >= 1080 ? "top-[68%]" : "top-[78%]";

  return (
    <div className="min-h-screen overflow-hidden bg-white font-poppins">
      {/* Hero Section */}
      

      {/* Content Section */}
      

      {/* Our Values Section */}
      <div className="py-8 bg-white sm:py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <motion.div
            className="mb-6 text-center sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-Prata font-bold text-[#6b8384] mb-2 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-[#a0b1c1] text-sm sm:text-base max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {[
              {
                icon: "🎯",
                title: "Excellence",
                description: "We strive for perfection in every project, ensuring the highest quality standards and attention to detail in all our work."
              },
              {
                icon: "🤝",
                title: "Integrity",
                description: "Honesty and transparency form the foundation of our relationships with clients, partners, and team members."
              },
              {
                icon: "🌱",
                title: "Sustainability",
                description: "We're committed to eco-friendly practices and sustainable building solutions that benefit both our clients and the planet."
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "We embrace cutting-edge technologies and creative solutions to deliver modern, efficient construction projects."
              },
              {
                icon: "⏱️",
                title: "Reliability",
                description: "Meeting deadlines and staying within budget are promises we consistently keep, project after project."
              },
              {
                icon: "❤️",
                title: "Customer Focus",
                description: "Your satisfaction is our priority. We listen, adapt, and deliver results that exceed expectations."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#f4f9fc] to-[#e2ebf6] p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
              >
                <div 
                  style={{ 
                    color: 'transparent', 
                    textShadow: '0 0 0 #6b8384' 
                  }} 
                  className="mb-2 text-2xl sm:mb-3 sm:text-3xl"
                >
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-Prata font-bold text-[#6b8384] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#a0b1c1] text-xs sm:text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Journey Section */}
      <div className="bg-gradient-to-br from-[#e2ebf6] to-[#f4f9fc] py-8 sm:py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <motion.div
            className="mb-6 text-center sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-Prata font-bold text-[#6b8384] mb-2 sm:mb-4">
              Our Journey
            </h2>
            <p className="text-[#a0b1c1] text-sm sm:text-base max-w-2xl mx-auto">
              A decade of growth, innovation, and successful projects
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2014",
                title: "The Beginning",
                description: "Aerobuild Solutions was founded with a vision to revolutionize the construction industry through quality and innovation."
              },
              {
                year: "2016",
                title: "Major Expansion",
                description: "Expanded our team to 20+ professionals and completed our first major commercial project."
              },
              {
                year: "2018",
                title: "Award Recognition",
                description: "Received the 'Best Construction Company' award and launched our sustainability initiative."
              },
              {
                year: "2020",
                title: "Digital Transformation",
                description: "Integrated advanced 3D modeling and project management technologies into our workflow."
              },
              {
                year: "2023",
                title: "500th Project",
                description: "Celebrated completing our 500th successful project with a 98% client satisfaction rate."
              },
              {
                year: "2024",
                title: "Present Day",
                description: "Leading the industry with 50+ team members and pioneering green building solutions."
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                className="flex flex-col mb-6 md:flex-row md:gap-4 lg:gap-6 sm:mb-8 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
              >
                {/* Year Badge */}
                <div className="self-center flex-shrink-0 mb-3 md:self-start md:mb-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-sm border-2 border-[#6b8384]">
                    <span className="text-[#6b8384] font-bold text-xs sm:text-sm md:text-base">
                      {milestone.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <motion.div
                  className="flex-grow p-2 bg-white rounded-lg shadow-sm sm:p-4"
                  whileHover={{ scale: 1.01, boxShadow: "0 5px 10px -2px rgba(107, 131, 132, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg sm:text-xl font-Prata font-bold text-[#6b8384] mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-[#a0b1c1] text-xs sm:text-sm">
                    {milestone.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-8 bg-white sm:py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-Prata font-bold text-[#6b8384] mb-3 sm:mb-4">
                Why Choose Aerobuild?
              </h2>
              <p className="text-[#a0b1c1] text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                With over a decade of experience, we've built a reputation for delivering exceptional results that stand the test of time.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    title: "Expert Team",
                    description: "Our certified professionals bring decades of combined experience to every project."
                  },
                  {
                    title: "Proven Track Record",
                    description: "500+ successfully completed projects with a 98% client satisfaction rate."
                  },
                  {
                    title: "End-to-End Service",
                    description: "From design to completion, we handle every aspect of your construction needs."
                  },
                  {
                    title: "Quality Guarantee",
                    description: "We use premium materials and follow strict quality control processes."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2 sm:gap-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-[#6b8384] rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-sm text-white">✓</span>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-lg font-semibold text-[#6b8384] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[#a0b1c1] text-xs sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

<motion.div
  className="relative hidden md:block !hidden md:!block"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                <motion.div
                  className="bg-gradient-to-br from-[#f4f9fc] to-[#e2ebf6] p-3 sm:p-4 rounded-lg shadow-sm"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-[#6b8384] mb-0.5 sm:mb-1">10+</p>
                  <p className="text-[#a0b1c1] text-xs">Years Experience</p>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-[#e2ebf6] to-[#c8d7e6] p-3 sm:p-4 rounded-lg shadow-sm sm:mt-3"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-[#6b8384] mb-0.5 sm:mb-1">500+</p>
                  <p className="text-[#a0b1c1] text-xs">Projects Done</p>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-[#c8d7e6] to-[#a0b1c1] p-3 sm:p-4 rounded-lg shadow-sm"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mb-0.5 sm:mb-1 text-2xl sm:text-3xl font-bold text-white">98%</p>
                  <p className="text-xs text-white">Happy Clients</p>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-[#a0b1c1] to-[#6b8384] p-3 sm:p-4 rounded-lg shadow-sm sm:mt-3"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mb-0.5 sm:mb-1 text-2xl sm:text-3xl font-bold text-white">15+</p>
                  <p className="text-xs text-white">Awards Won</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AboutUs;