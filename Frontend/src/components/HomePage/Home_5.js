import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './OurProjects.css'; // Import the CSS file
import Housing from "../../assets/images/service/sri-lanka-villamine-02.jpg";
import Villa from "../../assets/images/service/30c0fc37-cecc-46dd-b94d-c01aada0b9bf.webp";
import Cabana from "../../assets/images/service/90212345.jpg";

  // Projects data
  const projects = [
    {
      title: 'Villa',
      description: 'Crafting luxurious standalone villas that combine elegance, comfort, and modern design for your dream lifestyle.',
      image: Housing,
    },
    {
      title: 'Home',
      description: 'Designing personalized homes tailored to your needs, blending functionality, style, and lasting quality.',
      image: Villa,
    },
    {
      title: 'Cabana',
      description: 'Cabana construction typically involves designing and building a small, standalone structure that combines comfort, elegance, and functionality.',
      image: Cabana,
    },
  ];


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  centerMode: false,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const OurProjects = () => {
  return (
    <section className="our-projects">
      <div className="projects-container">
        {/* Header Section */}
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="projects-title">Our Projects</h2>
          <div className="title-divider"></div>
          <p className="projects-description">
            At Kandalama Homes, every project is a testament to our dedication to quality, innovation, and craftsmanship. 
            Our portfolio showcases a diverse range of construction and landscape architecture endeavors.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="projects-slider">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="slider-item">
                <ProjectCard project={project} index={index} isMobile={true} />
              </div>
            ))}
          </Slider>
        </div>

        {/* View All Projects Link */}
        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link to="/projects" className="view-all-btn">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isMobile }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className={`project-card ${isMobile ? 'mobile-card' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
    >
      <Link 
        to="/projects" 
        className="project-card-link"
      >
        {/* Image Container */}
        <div className="project-image-container">
          <img 
            src={project.image} 
            alt={project.title}
            className="project-image"
          />
          <div className="image-overlay"></div>
        </div>

        {/* Content */}
        <div className="project-content">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            <div className="title-accent"></div>
          </div>
          
          <p className="project-description">{project.description}</p>
          
          <div className="project-cta">
            <span className="cta-text">VIEW PROJECT</span>
            <svg className="cta-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default OurProjects;