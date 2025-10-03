import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function AerobuildSolutions() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  const features = [
    {
      number: "01",
      title: "Innovation & Design",
      description: "Cutting-edge architectural solutions that blend creativity with functionality for spaces that inspire."
    },
    {
      number: "02",
      title: "Sustainable Building",
      description: "Eco-conscious construction practices that minimize environmental impact while maximizing efficiency."
    },
    {
      number: "03",
      title: "Premium Craftsmanship",
      description: "Meticulous attention to detail and superior quality materials in every project we undertake."
    },
    {
      number: "04",
      title: "Timely Delivery",
      description: "Efficient project management ensuring your vision comes to life on schedule and within budget."
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Expert Team" }
  ];

  return (
    <div style={{
      background: '#f4f9fc',
      padding: '8px 24px'
    }}>
      <motion.div 
        ref={ref}
        style={{ 
          opacity, 
          y,
          maxWidth: '1280px',
          margin: '0 auto'
        }}
      >
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ display: 'inline-block' }}
          >
            <span style={{
              color: '#6b8384',
              fontSize: '14px',
              fontWeight: '300',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '8px',
              display: 'block',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Excellence in Construction
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '300',
              color: '#163212',
              marginBottom: '24px',
              fontFamily: 'Prata, serif'
            }}>
              Why Choose Aerobuild Solutions?
            </h2>
            <div style={{
              width: '96px',
              height: '2px',
              background: '#6b8384',
              margin: '0 auto 32px'
            }}></div>
          </motion.div>

          <motion.p 
            style={{
              color: '#6b8384',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: '1.8',
              maxWidth: '896px',
              margin: '0 auto',
              fontWeight: '300',
              fontFamily: 'Poppins, sans-serif'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            At Aerobuild Solutions, we don't just construct buildings—we craft lasting landmarks. 
            With a strong foundation in innovation, sustainability, and premium craftsmanship, 
            we deliver projects that combine modern design with practical functionality.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
          marginBottom: '80px'
        }}
        className="feature-grid"
        >
        <style>{`
          @media (max-width: 768px) {
            .feature-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '24px'
              }}>
                <span style={{
                  fontSize: '3rem',
                  fontWeight: '300',
                  color: '#c8d7e6',
                  fontFamily: 'Prata, serif'
                }}>
                  {feature.number}
                </span>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                    fontWeight: '300',
                    color: '#163212',
                    marginBottom: '12px',
                    fontFamily: 'Prata, serif'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    color: '#6b8384',
                    lineHeight: '1.8',
                    fontWeight: '300',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, #a0b1c1 0%, #6b8384 100%)',
            borderRadius: '24px',
            padding: 'clamp(48px, 8vw, 64px)'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '32px'
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3rem)',
                  fontWeight: '300',
                  color: 'white',
                  marginBottom: '8px',
                  fontFamily: 'Prata, serif'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  color: '#e2ebf6',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  fontWeight: '300',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: '80px'
          }}
        >
          <p style={{
            color: '#6b8384',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            marginBottom: '32px',
            fontWeight: '300',
            fontFamily: 'Poppins, sans-serif',
            maxWidth: '768px',
            margin: '0 auto 32px'
          }}>
            Partner with Aerobuild Solutions today, and let's bring your vision to life with precision and passion.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: '#6b8384',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: '300',
              fontFamily: 'Poppins, sans-serif',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(22, 50, 18, 0.3)',
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = '#6b8384'}
            onMouseLeave={(e) => e.target.style.background = '#6b8384'}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AerobuildSolutions;