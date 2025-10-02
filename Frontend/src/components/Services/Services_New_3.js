import React, { useState } from "react";
import { motion } from "framer-motion";
import ResidentialHouse from "../../assets/images/service/residential-house-construction-spi.jpg";
import Cabana from "../../assets/images/service/image-1.png";
import Building from "../../assets/images/service/1_TfIqQpwfXov287CCqjhetg.jpg";
import warehouse from "../../assets/images/service/11-017_1500CX-e1529012845382.jpg";

function ServiceSection() {
  const [activeTab, setActiveTab] = useState("Housing Constructions");
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const tabContent = {
    "Housing Constructions": {
      title: "Housing Construction",
      description:
        "At Aerobuild Solutions, we create homes that reflect your lifestyle and aspirations. Every project is designed with precision, blending comfort, modern design, and sustainability. From concept to completion, we build living spaces that are both timeless and uniquely yours.",
      image: ResidentialHouse,
    },
    "Cabana Constructions": {
      title: "Cabana Construction",
      description:
        "Experience peace and leisure with our custom-designed cabanas. Thoughtfully crafted to harmonize with natural surroundings, our cabanas offer the perfect balance of rustic charm and contemporary comfort, ideal for relaxation and recreation.",
      image: Cabana
    },
    "Building Constructions": {
      title: "Building Construction",
      description:
        "Aerobuild Solutions delivers commercial and residential buildings that showcase innovation, strength, and functionality. From office complexes to multi-story structures, we focus on quality, sustainability, and future-ready designs.",
      image: Building
    },
    "Warehouse Constructions": {
      title: "Warehouse Construction",
      description:
        "Maximize your business efficiency with Aerobuild's expertly engineered warehouses. Built with durability and smart design, our warehouses are tailored to optimize space, streamline operations, and support long-term growth.",
      image: warehouse
    },
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      const tabKeys = Object.keys(tabContent);
      const currentIndex = tabKeys.indexOf(activeTab);
      const nextTab = tabKeys[(currentIndex + 1) % tabKeys.length];
      setActiveTab(nextTab);
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right
      const tabKeys = Object.keys(tabContent);
      const currentIndex = tabKeys.indexOf(activeTab);
      const prevTab = tabKeys[(currentIndex - 1 + tabKeys.length) % tabKeys.length];
      setActiveTab(prevTab);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1rem',
      backgroundColor: '#f4f9fc',
      minHeight: '100vh',
    },
    innerWrapper: {
      maxWidth: '60rem',
      width: '100%',
    },
    headerSection: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    mainTitle: {
      fontSize: '2rem',
      fontWeight: '300',
      color: '#163212',
      marginBottom: '1rem',
      fontFamily: 'Prata, serif',
      letterSpacing: '0.05em',
    },
    titleUnderline: {
      width: '4rem',
      height: '2px',
      backgroundColor: '#6b8384',
      margin: '0 auto',
    },
    contentCard: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
      overflow: 'hidden',
      marginBottom: '2rem',
    },
    cardInner: {
      display: 'flex',
      flexDirection: 'column',
    },
    imageSection: {
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
    },
    imageContainer: {
      width: '100%',
      height: '15rem',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    textSection: {
      width: '100%',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom right, #f4f9fc, #e2ebf6)',
    },
    contentTitle: {
      fontSize: '1.5rem',
      fontWeight: '300',
      color: '#163212',
      marginBottom: '1.5rem',
      fontFamily: 'Prata, serif',
    },
    contentDescription: {
      color: '#6b8384',
      lineHeight: '1.75',
      fontSize: '0.875rem',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '300',
    },
    navDesktop: {
      display: 'none',
      justifyContent: 'center',
      gap: '1rem',
      flexWrap: 'wrap',
    },
    navButton: {
      padding: '0.5rem 1rem',
      fontWeight: '300',
      fontSize: '0.75rem',
      outline: 'none',
      transition: 'all 0.3s',
      fontFamily: 'Poppins, sans-serif',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
    },
    navButtonActive: {
      backgroundColor: '#163212',
      color: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    navButtonInactive: {
      backgroundColor: 'white',
      color: '#6b8384',
    },
    navMobile: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.75rem',
      padding: '1rem 0',
    },
    dotButton: {
      width: '8px',
      height: '8px',
      borderRadius: '9999px',
      transition: 'all 0.3s',
      border: 'none',
      cursor: 'pointer',
    },
    dotButtonActive: {
      backgroundColor: '#163212',
      width: '24px',
    },
    dotButtonInactive: {
      backgroundColor: '#c8d7e6',
    },
  };

  // Media query styles
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
  const isTablet = typeof window !== 'undefined' && window.innerWidth >= 640;

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        {/* Header Section */}
        <div style={styles.headerSection}>
          <motion.h1
            style={{
              ...styles.mainTitle,
              fontSize: isDesktop ? '2.5rem' : '2rem',
            }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.div
            style={styles.titleUnderline}
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Content Card */}
        <motion.div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={styles.contentCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{
            ...styles.cardInner,
            flexDirection: isDesktop ? 'row' : 'column',
          }}>
            {/* Image Section */}
            <div style={{
              ...styles.imageSection,
              width: isDesktop ? '50%' : '100%',
            }}>
              <motion.div
                key={activeTab}
                style={{
                  ...styles.imageContainer,
                  height: isDesktop ? '18rem' : '15rem',
                }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src={tabContent[activeTab].image}
                  alt={tabContent[activeTab].title}
                  style={styles.image}
                />
              </motion.div>
            </div>

            {/* Text Section */}
            <div style={{
              ...styles.textSection,
              width: isDesktop ? '50%' : '100%',
              padding: isDesktop ? '2rem' : '1.5rem',
            }}>
              <motion.h2
                key={`title-${activeTab}`}
                style={{
                  ...styles.contentTitle,
                  fontSize: isDesktop ? '1.75rem' : '1.5rem',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {tabContent[activeTab].title}
              </motion.h2>
              <motion.p
                key={`desc-${activeTab}`}
                style={{
                  ...styles.contentDescription,
                  fontSize: isDesktop ? '1rem' : '0.875rem',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {tabContent[activeTab].description}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs - Desktop */}
        <div style={{
          ...styles.navDesktop,
          display: isTablet ? 'flex' : 'none',
        }}>
          {Object.keys(tabContent).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.navButton,
                fontSize: isDesktop ? '0.875rem' : '0.75rem',
                ...(activeTab === tab ? styles.navButtonActive : styles.navButtonInactive),
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) {
                  e.target.style.backgroundColor = '#e2ebf6';
                  e.target.style.color = '#163212';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#6b8384';
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.replace(" Constructions", "")}
            </motion.button>
          ))}
        </div>

        {/* Navigation Dots - Mobile */}
        <div style={{
          ...styles.navMobile,
          display: isTablet ? 'none' : 'flex',
        }}>
          {Object.keys(tabContent).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.dotButton,
                ...(activeTab === tab ? styles.dotButtonActive : styles.dotButtonInactive),
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) {
                  e.target.style.backgroundColor = '#a0b1c1';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) {
                  e.target.style.backgroundColor = '#c8d7e6';
                }
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;