import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageFile from "../../assets/images/man-in-construction-jumpsuit-carrying-hard-hat-5ggs63mi0pwec8ol.jpg";

// Custom hook for responsive design
const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const AboutUs = () => {
  const isMobile = useResponsive();

  // Responsive styles
  const containerStyle = {
    minHeight: "100vh",
    padding: isMobile ? "1rem" : "2rem 3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  const innerContainerStyle = {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto"
  };

  const gridStyle = {
    display: "grid",
    gap: isMobile ? "2rem" : "3rem",
    alignItems: "center",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr"
  };

  const imageStyle = {
    width: "100%",
    height: isMobile ? "300px" : "500px",
    objectFit: "cover",
    borderRadius: "1.5rem",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  };

    const headingStyle = {
      fontSize: isMobile ? "1.5rem" : "1.875rem",
      fontWeight: "600",
      textAlign: isMobile ? "center" : "left",
      marginBottom: "1rem",
      fontFamily: "Prata", 
    };


  const paragraphStyle = {
    color: "black",
    lineHeight: isMobile ? "1.6" : "2.5",
    textAlign: "justify",
    fontSize: isMobile ? "0.875rem" : "1rem",
    marginBottom: "1rem",
    fontFamily: "font-poppins",
  };

  const statsGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
    gap: "1.5rem",
    marginTop: "4rem"
  };

  const statNumberStyle = {
    fontSize: isMobile ? "1.875rem" : "2.25rem",
    fontWeight: "bold",
    color: "#6b8384",
    marginBottom: "0.5rem"
  };

  return (
    <div className="mt-8" style={containerStyle}>
      <div style={innerContainerStyle}>
        {/* Main Content Grid - Reversed order for desktop */}
        <div style={gridStyle}>
          {/* Text Content Section - Now on LEFT side */}
          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              style={{
                display: "inline-block",
                color: "#6b8384",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: "500"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Building Dreams Since 2014
            </motion.div>

            <h2 style={headingStyle}>
              Aerobuild Solutions
            </h2>

            <p style={paragraphStyle}>
              Welcome to Aerobuild Solutions, your trusted partner in bringing visions to life
              through exceptional construction and design.
            </p>

            <p style={paragraphStyle}>
              With a focus on innovation, quality, and sustainability, we specialize in creating
              homes, commercial spaces, and custom projects that reflect your unique style and needs.
              Our dedicated team ensures every project is executed with precision and care, blending
              modern design with lasting functionality.
            </p>

            <p style={paragraphStyle}>
              At Aerobuild Solutions, we transform ideas into reality, delivering spaces that inspire
              and endure – where your dream property begins.
            </p>
          </motion.div>

          {/* Image Section - Now on RIGHT side */}
          <motion.div
            style={{ position: "relative" }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img
                src={ImageFile}
                alt="Construction site"
                style={imageStyle}
              />
            </div>
            
            {/* Floating Card - Adjusted position for right side */}
            <motion.div
              style={{
                position: "absolute",
                bottom: isMobile ? "-1rem" : "-1.5rem",
                left: isMobile ? "-1rem" : "-1.5rem", // Changed from right to left
                background: "white",
                borderRadius: "1rem",
                padding: isMobile ? "1rem" : "1.5rem",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                border: "2px solid #e2ebf6"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div style={{ textAlign: "center" }}>
                <p style={{ 
                  fontSize: isMobile ? "1.875rem" : "2.25rem", 
                  fontWeight: "bold", 
                  color: "#6b8384", 
                  margin: 0 
                }}>
                  10+
                </p>
                <p style={{ 
                  fontSize: "0.875rem", 
                  color: "#a0b1c1", 
                  fontWeight: "500", 
                  margin: 0 
                }}>
                  Years Experience
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          style={statsGridStyle}
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
              style={{
                background: "white",
                borderRadius: "1rem",
                padding: "1.5rem",
                textAlign: "center",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e2ebf6"
              }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(107, 131, 132, 0.1)" 
              }}
              transition={{ duration: 0.3 }}
            >
              <p style={statNumberStyle}>
                {stat.number}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#a0b1c1" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;