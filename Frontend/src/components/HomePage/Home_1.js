import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home_1.css";
import ImageFile from "../../assets/images/engineering-pictures-upbco4jbz7ndjny6.jpg"; 


const KandalamaHomes = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [height, setHeight] = useState(0); // State to track height

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    const updateHeight = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        setHeight(heroSection.offsetHeight); // Get the height of the hero section
      }
    };

    // Initialize height on load
    updateHeight();

    // Listen for window resize events
    window.addEventListener("resize", () => {
      handleResize();
      updateHeight(); // Update height on resize as well
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Dynamic top value based on height
  const topPosition = height >= 1080 ? "top-[68%]" : "top-[78%]";

  return (
    <div className="min-h-screen overflow-hidden text-white bg-white border-4 border-white sm:h-screen sm:rounded-[47px]">
      {/* Hero Section */}
      <section id="hero-section" className="relative flex items-center justify-center w-full h-screen">
        {/* Background Image */}
        <img
          src={ImageFile}
          alt="Kandalama Homes"
          className="object-cover w-full h-screen"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col px-4 text-left items-start justify-start bg-gradient-to-r from-black/40 to-[#542C01]/20 rounded-[47px] z-10">
          {/* Description Text */}
          {isDesktop && (
            <motion.p
              className="absolute top-[45%] left-[8%] transform -translate-y-50 font-light text-white text-lg leading-relaxed z-20 w-[80%]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
          At AeroBuild Solutions, we bring innovation, precision, and strength to<br></br>
           every project – creating spaces that inspire and endure.
            </motion.p>
          )}

          {/* Main Title */}
          {isDesktop && (
            <motion.h1
              className="absolute top-[55%] left-[8%] text-[8vw] font-megrim font-[400] tracking-wide text-shadow-xl z-20"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1.2 }}
            >
              Aero Build 
            </motion.h1>
          )}

          {/* Subtitle */}
          {isDesktop && (
            <motion.h2
              className={`absolute ${topPosition} left-[8%] text-[6vw] font-megrim font-[500] leading-tight text-shadow-xl z-30`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 1.2 }}
            >
              Solutions
            </motion.h2>
          )}

          {/* For mobile or smaller screens */}
          {!isDesktop && (
            <>
              <p className="absolute top-[50%] left-[10%] transform -translate-y-50 font-light text-white text-lg leading-relaxed z-20 w-[80%]">
              At AeroBuild Solutions, we bring innovation,<br></br> precision, and strength to
              every project – creating <br></br>spaces that inspire and endure.
              </p>
              <h1 className="absolute top-[60%] left-[10%] text-[8vw] font-megrim font-[400] tracking-wide text-shadow-xl z-20" id="main-title">
                AeroBuild
              </h1>
              <h2 className="absolute top-[70%] left-[10%] text-[6vw] font-megrim font-[500] leading-tight text-shadow-xl z-30">
                Solutions
              </h2>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default KandalamaHomes;
