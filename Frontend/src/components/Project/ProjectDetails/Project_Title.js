
import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../../assets/images/workers-in-construction-wear-safety-helmets-while-new-technologies-and-ai-tools-shape-the-future-of-real-estate-photo.jpg";

const Title = () => {
  return (
    <motion.div
      style={{
        width: '100%',
        height: '50vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        opacity: 0,
        transform: 'translateY(-50px)'
      }}
      initial={{ opacity: 0, y: -50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderBottomLeftRadius: '40px',
          borderBottomRightRadius: '40px'
        }}
      />
      <div style={{
        position: 'relative',
        zIndex: 10,
        padding: '16px 16px 32px',
        textAlign: 'center',
        color: 'white',
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        <span style={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '14px',
          fontWeight: '300',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontFamily: 'Poppins, sans-serif'
        }}>
          Our Work
        </span>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: '300',
          marginBottom: '24px',
          fontFamily: 'Prata, serif'
        }}>
          Project Details
        </h2>
        <div style={{
          width: '96px',
          height: '2px',
          background: 'white',
          margin: '0 auto 24px'
        }}></div>

      </div>
    </motion.div>
  );
};

export default Title;