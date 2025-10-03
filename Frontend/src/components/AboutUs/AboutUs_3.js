import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import img1 from "../../assets/images/team/gettyimages-1633557231-612x612.jpg";
import img2 from "../../assets/images/team/professional-indian-woman-confident-poised-business-portrait_606187-8172.jpg";
import img3 from "../../assets/images/team/360_F_396780640_mO95sH5ITG2sD3RdOd7fh3olapEkupXW.jpg";
import img4 from "../../assets/images/team/istockphoto-1036079862-612x612.jpg";

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

  // Slider settings for mobile
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: true
  };

  const teamMembers = [
    {
      name: "Nimal Perera",
      role: "Managing Director",
      image: img1,
      bio: "Over 25 years of experience in Sri Lanka’s construction industry"
    },
    {
      name: "Dilani Fernando",
      role: "Head of Architecture & Design",
      image: img2,
      bio: "Specialist in modern and sustainable home design"
    },
    {
      name: "Kasun Jayawardena",
      role: "Senior Project Manager",
      image: img3,
      bio: "Expert in managing housing, cabana, and commercial projects"
    },
    {
      name: "Shanika Abeysekera",
      role: "Sustainability & Quality Officer",
      image: img4,
      bio: "Focused on eco-friendly practices and quality standards"
    }
  ];


  // Inline styles
  const containerStyle = {
    minHeight: "100vh",
    overflow: "hidden",
    backgroundColor: "white"
  };

  const teamSectionStyle = {
    background: "linear-gradient(135deg, #f4f9fc 0%, #e2ebf6 100%)",
    padding: isDesktop ? "5rem 0" : "3rem 0"
  };

  const innerContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: isDesktop ? "0 2rem" : "0 1rem"
  };

  const headerContainerStyle = {
    marginBottom: isDesktop ? "4rem" : "2rem",
    textAlign: "center"
  };

  const badgeStyle = {
    display: "inline-block",
    backgroundColor: "white",
    color: "#6b8384",
    padding: "0.5rem 1.5rem",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    fontWeight: "500",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e2ebf6",
    marginBottom: "1rem"
  };

  const headingStyle = {
    fontSize: isDesktop ? "2.25rem" : "1.875rem",
    fontWeight: "bold",
    color: "#6b8384",
    marginBottom: "1rem",
    fontFamily: "Prata", 
  };

  const subheadingStyle = {
    color: "#a0b1c1",
    fontSize: isDesktop ? "1.125rem" : "1rem",
    maxWidth: "32rem",
    margin: "0 auto",
    fontFamily: "font-poppins",

  };

  // Card styles
  const cardStyle = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "1.5rem",
    margin: isDesktop ? "0" : "0 0.5rem"
  };

  const imageContainerStyle = {
    position: "relative",
    overflow: "hidden",
    height: isDesktop ? "20rem" : "16rem"
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };

  const infoContainerStyle = {
    padding: isDesktop ? "1.5rem" : "1rem"
  };

  const nameStyle = {
    fontSize: isDesktop ? "1.25rem" : "1.125rem",
    fontWeight: "bold",
    color: "#6b8384",
    marginBottom: "0.25rem"
  };

  const roleStyle = {
    color: "#a0b1c1",
    fontWeight: "500",
    marginBottom: "0.75rem",
    fontSize: isDesktop ? "1rem" : "0.875rem"
  };

  const bioStyle = {
    fontSize: "0.875rem",
    color: "rgba(107, 131, 132, 0.7)"
  };

  const socialContainerStyle = {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "1rem",
    display: "flex",
    justifyContent: "center",
    gap: "0.75rem"
  };

  const socialButtonStyle = {
    width: "2.5rem",
    height: "2.5rem",
    backgroundColor: "white",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6b8384",
    textDecoration: "none",
    fontSize: "0.875rem",
    fontWeight: "bold"
  };

  const decorativeStyle = {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    width: "3rem",
    height: "3rem",
    backgroundColor: "#f4f9fc",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.25rem",
    color: "#6b8384"
  };

  return (
    <div style={containerStyle}>
      {/* Meet Our Team Section */}
      <div style={teamSectionStyle}>
        <div style={innerContainerStyle}>
          {/* Section Header */}
          <motion.div
            style={headerContainerStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              style={badgeStyle}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              The People Behind Our Success
            </motion.div>

            <h2 style={headingStyle}>
              Meet Our Team
            </h2>
            <p style={subheadingStyle}>
              Our talented professionals bring expertise, passion, and dedication to every project
            </p>
          </motion.div>

          {/* Desktop Grid */}
          {isDesktop ? (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem"
            }}>
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  style={cardStyle}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Image Container */}
                  <div style={imageContainerStyle}>
                    <img
                      src={member.image}
                      alt={member.name}
                      style={imageStyle}
                    />
                    {/* Gradient Overlay */}
                    <div style={{
                      position: "absolute",
                      inset: "0",
                      background: "linear-gradient(to top, rgba(107, 131, 132, 0.9) 0%, rgba(107, 131, 132, 0.5) 50%, transparent 100%)",
                      opacity: "0",
                      transition: "opacity 0.5s ease"
                    }} />
                    
                    {/* Social Links */}
                    <div style={{
                      ...socialContainerStyle,
                      opacity: "0",
                      transition: "opacity 0.5s ease"
                    }}>
                      <motion.a
                        href="#"
                        style={socialButtonStyle}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        in
                      </motion.a>
                      <motion.a
                        href="#"
                        style={socialButtonStyle}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        @
                      </motion.a>
                    </div>
                  </div>

                  {/* Info Card */}
                  <div style={infoContainerStyle}>
                    <h3 style={nameStyle}>
                      {member.name}
                    </h3>
                    <p style={roleStyle}>
                      {member.role}
                    </p>
                    <p style={bioStyle}>
                      {member.bio}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div style={decorativeStyle}>
                    ✦
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Mobile Slider */
            <div style={{ maxWidth: "400px", margin: "0 auto" }}>
              <Slider {...sliderSettings}>
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    style={cardStyle}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Image Container */}
                    <div style={imageContainerStyle}>
                      <img
                        src={member.image}
                        alt={member.name}
                        style={imageStyle}
                      />
                      {/* Gradient Overlay */}
                      <div style={{
                        position: "absolute",
                        inset: "0",
                        background: "linear-gradient(to top, rgba(107, 131, 132, 0.9) 0%, rgba(107, 131, 132, 0.5) 50%, transparent 100%)",
                        opacity: "0.7"
                      }} />
                      
                      {/* Social Links */}
                      <div style={socialContainerStyle}>
                        <motion.a
                          href="#"
                          style={socialButtonStyle}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          in
                        </motion.a>
                        <motion.a
                          href="#"
                          style={socialButtonStyle}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          @
                        </motion.a>
                      </div>
                    </div>

                    {/* Info Card */}
                    <div style={infoContainerStyle}>
                      <h3 style={nameStyle}>
                        {member.name}
                      </h3>
                      <p style={roleStyle}>
                        {member.role}
                      </p>
                      <p style={bioStyle}>
                        {member.bio}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div style={decorativeStyle}>
                      ✦
                    </div>
                  </motion.div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;