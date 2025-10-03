import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageFile from "../../assets/images/img_other03.jpg"; 

const Aerobuild  = () => {
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
                className="absolute top-[48%] left-[8%] font-light text-white text-xl leading-relaxed w-[50%]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                At AeroBuild Solutions, we bring innovation, precision, and strength to
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
              About US
            </motion.h1>
          )}

          {/* Subtitle */}
          {isDesktop && (
            <motion.h2
              className={`absolute ${topPosition} left-[8%] text-[2vw] font-megrim font-[500] leading-tight text-shadow-xl z-30`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 1.2 }}
            >
              Building Dreams Since 2014
            </motion.h2>
          )}

          {/* For mobile or smaller screens */}
          {!isDesktop && (
            <>
              <p 
                style={{ 
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%', 
                  fontSize: '0.875rem', 
                  lineHeight: '1.25', 
                  marginBottom: '0.5rem', 
                  textAlign: 'center',
                  fontWeight: '300'
                }}
              >
                At AeroBuild Solutions, we bring innovation,<br /> precision, and strength to
                every project – creating <br />spaces that inspire and endure.
              </p>
              <h1 
                style={{ 
                  position: 'absolute',
                  top: '55%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100%', 
                  fontSize: 'clamp(4rem, 6vw, 2.5rem)', 
                  marginBottom: '0.25rem', 
                  textAlign: 'center' 
                }} 
                className="font-megrim font-[400] tracking-wide text-shadow-xl"
              >
                About US
              </h1>
              <h2 
                style={{ 
                  position: 'absolute',
                  top: '70%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100%', 
                  fontSize: 'clamp(1rem, 3vw, 1.25rem)', 
                  textAlign: 'center' 
                }} 
                className="font-megrim font-[500] leading-tight text-shadow-xl"
              >
                Building Dreams Since 2014
              </h2>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Aerobuild ;