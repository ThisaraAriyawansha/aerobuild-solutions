import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: false,
  focusOnSelect: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        infinite: true,
        dots: false,
        arrows: true,
      },
    },
  ],
};

const OngoingProjects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    fetch("http://localhost:8000/projects_web")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <div style={{
      background: '#f4f9fc',
      padding: '80px 24px'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <div className="hidden" style={{
          textAlign: 'center',
          marginBottom: '64px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
              Our Work
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '300',
              color: '#163212',
              marginBottom: '24px',
              fontFamily: 'Prata, serif'
            }}>
              Projects
            </h2>
            <div style={{
              width: '96px',
              height: '2px',
              background: '#6b8384',
              margin: '0 auto 24px'
            }}></div>
            <p style={{
              color: '#6b8384',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              maxWidth: '768px',
              margin: '0 auto',
              fontWeight: '300',
              lineHeight: '1.8',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Explore our portfolio of exceptional projects, each crafted with precision, innovation, and dedication to excellence.
            </p>
          </motion.div>
        </div>

        {/* Desktop view: Show grid with pagination */}
        <div style={{
          display: 'none'
        }}
        className="desktop-grid"
        >
          <style>{`
            @media (min-width: 768px) {
              .desktop-grid {
                display: grid !important;
                grid-template-columns: repeat(3, 1fr);
                gap: 32px;
              }
            }
          `}</style>
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '100%',
                height: '240px',
                overflow: 'hidden'
              }}>
                <img
                  src={project.project_image}
                  alt={project.project_name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{
                padding: '24px',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  color: '#163212',
                  marginBottom: '16px',
                  fontWeight: '300',
                  fontFamily: 'Prata, serif'
                }}>
                  {project.project_name}
                </h3>
                <Link to={`/projectDetails/${project.id}`} style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: '#a0b1c1',
                      color: 'white',
                      padding: '12px 32px',
                      borderRadius: '50px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '300',
                      fontFamily: 'Poppins, sans-serif',
                      transition: 'background 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#6b8384'}
                    onMouseLeave={(e) => e.target.style.background = '#a0b1c1'}
                  >
                    View All Images
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile view: Show slider */}
        <div style={{
          display: 'block'
        }}
        className="mobile-slider"
        >
          <style>{`
            @media (min-width: 768px) {
              .mobile-slider {
                display: none !important;
              }
            }
            .slick-prev, .slick-next {
              z-index: 10;
            }
            .slick-prev:before, .slick-next:before {
              color: #163212;
              font-size: 24px;
            }
          `}</style>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index}>
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  margin: '0 8px'
                }}>
                  <div style={{
                    width: '100%',
                    height: '240px',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={project.project_image}
                      alt={project.project_name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{
                    padding: '24px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      color: '#163212',
                      marginBottom: '16px',
                      fontWeight: '300',
                      fontFamily: 'Prata, serif'
                    }}>
                      {project.project_name}
                    </h3>
                    <Link to={`/projectDetails/${project.id}`} style={{ textDecoration: 'none' }}>
                      <button style={{
                        background: '#a0b1c1',
                        color: 'white',
                        padding: '12px 32px',
                        borderRadius: '50px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        fontWeight: '300',
                        fontFamily: 'Poppins, sans-serif'
                      }}>
                        View All Images
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Pagination for Desktop */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '48px',
          gap: '12px'
        }}
        className="pagination"
        >
          <style>{`
            @media (min-width: 768px) {
              .pagination {
                display: flex !important;
              }
            }
          `}</style>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: currentPage === 1 ? '#e2ebf6' : '#a0b1c1',
              color: currentPage === 1 ? '#c8d7e6' : 'white',
              border: 'none',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ←
          </motion.button>
          
          <div style={{
            display: 'flex',
            gap: '8px'
          }}>
            {[...Array(totalPages)].map((_, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: currentPage === i + 1 ? '#a0b1c1' : '#f4f9fc',
                  color: currentPage === i + 1 ? 'white' : '#6b8384',
                  border: '1px solid #e2ebf6',
                  cursor: 'pointer',
                  fontWeight: '300',
                  fontFamily: 'Poppins, sans-serif',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: currentPage * projectsPerPage >= projects.length ? '#e2ebf6' : '#a0b1c1',
              color: currentPage * projectsPerPage >= projects.length ? '#c8d7e6' : 'white',
              border: 'none',
              cursor: currentPage * projectsPerPage >= projects.length ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage * projectsPerPage >= projects.length}
          >
            →
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default OngoingProjects;