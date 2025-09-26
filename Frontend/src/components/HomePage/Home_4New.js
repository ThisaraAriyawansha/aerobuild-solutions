import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ServicesSection.css";
import Housing from "../../assets/images/service/new-home-build-at-construction-site.jpg";
import Villa from "../../assets/images/service/private-villa-republic-bentota-sri-lanka.webp";
import Cabana from "../../assets/images/service/pX0aDVaRjDCguNOoBRwL.jpg";
import Landscape from "../../assets/images/service/CP-1-1-scaled.jpg";
import Warehouse from "../../assets/images/service/warehouse-construction-rosenberg-tx.jpg";
import Interior from "../../assets/images/service/Step inside the most photogenic house in Sri Lanka.webp";


  const services = [
    {
      title: "Housing Constructions",
      image: Housing,
      description: "Modern residential solutions"
    },
    {
      title: "Villa Construction",
      image: Villa,
      description: "Luxury living spaces"
    },
    {
      title: "Cabana Construction",
      image: Cabana,
      description: "Coastal retreats"
    },
    {
      title: "Landscape Architecture",
      image: Landscape,
      description: "Harmonious outdoor designs"
    },
    {
      title: "Warehouse Construction",
      image: Warehouse,
      description: "Industrial excellence"
    },
    {
      title: "Interior Design",
      image: Interior,
      description: "Customized indoor aesthetics"
    }
  ];

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCardClick = (title) => {
    // Navigation logic based on service title
    if (title === 'Villa Construction') {
      window.location.href = '/villaConstruction';
    } else if (title === 'Cabana Construction') {
      window.location.href = '/cabanaConstruction';
    } else if (title === 'Landscape Architecture') {
      window.location.href = '/landscapeConstruction';
    } else if (title === 'Housing Constructions') {
      window.location.href = '/housingConstruction';
    } else if (title === 'Warehouse Construction') {
      window.location.href = '/warehouseConstruction';
    } else if (title === 'Interior Design') {
      window.location.href = '/interiordesign';
    }
    console.log(`Navigating to ${title}`);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      

      <div className="services-container">
        <div className="services-wrapper">
          {/* Header */}
          <div className="services-header">
            <motion.h1 
              className="services-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            <motion.div 
              className="services-divider"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          {/* Services Grid - Desktop */}
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                onClick={() => handleCardClick(service.title)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-image-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                  <div className="service-overlay" />
                </div>

                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-cta">
                    <span className="service-cta-text">Learn More</span>
                    <svg 
                      className="service-cta-arrow" 
                      fill="none" 
                      stroke="#a0b1c1" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="mobile-slider">
            <div className="slider-container">
              <div className="slider-wrapper">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="mobile-card"
                    onClick={() => handleCardClick(services[currentSlide].title)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mobile-image-container">
                      <img
                        src={services[currentSlide].image}
                        alt={services[currentSlide].title}
                        className="mobile-image"
                      />
                      <div className="mobile-overlay" />
                    </div>

                    <div className="mobile-content">
                      <h3 className="mobile-title">{services[currentSlide].title}</h3>
                      <p className="mobile-description">{services[currentSlide].description}</p>
                      
                      <div className="mobile-cta">
                        <span className="mobile-cta-text">Learn More</span>
                        <svg 
                          className="mobile-cta-arrow" 
                          fill="none" 
                          stroke="#a0b1c1" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button onClick={prevSlide} className="nav-arrow nav-arrow-left">
                <svg viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>

              <button onClick={nextSlide} className="nav-arrow nav-arrow-right">
                <svg viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="dots-container">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="slider-counter">
              <span className="counter-text">
                {currentSlide + 1} of {services.length}
              </span>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <motion.div 
            className="bottom-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-button">
              <span className="cta-text">Explore All Services</span>
              <div className="cta-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;