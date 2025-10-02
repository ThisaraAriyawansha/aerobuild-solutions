import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/construction-background-7t8pzcrvkc42exlu.jpg";

const Service_1 = () => {
  return (
    <motion.div
      style={{
        width: '100%',
        height: '70vh',
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
          Our Services
        </span>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: '300',
          marginBottom: '24px',
          fontFamily: 'Prata, serif'
        }}>
          What We Offer
        </h2>
        <div style={{
          width: '96px',
          height: '2px',
          background: 'white',
          margin: '0 auto 24px'
        }}></div>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          fontWeight: '300',
          lineHeight: '1.8',
          maxWidth: '768px',
          margin: '0 auto',
          fontFamily: 'Poppins, sans-serif'
        }}>
          Discover our range of professional construction services, designed to deliver quality, innovation, and lasting value. From concept to completion, we build with precision and care to bring your vision to life.        </p>
      </div>
    </motion.div>
  );
};

export default Service_1;