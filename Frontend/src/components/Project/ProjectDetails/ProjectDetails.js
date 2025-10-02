import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Navbar from "../../NavBar";
import Footer from "../../Footer";
import Title from "./Project_Title";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState("images");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/projects_web_image_video/${id}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.error("Error fetching project details:", error));
  }, [id]);

  if (!project) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#f4f9fc'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            border: '2px solid #e2ebf6',
            borderTop: '2px solid #6b8384',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <p style={{
            fontSize: '16px',
            fontWeight: '500',
            color: '#6b8384'
          }}>Loading...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  const shouldShowToggle = project.description.length > 150;
  const truncatedText = project.description.substring(0, 150);
  const toggleText = () => setIsExpanded(!isExpanded);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    dotsClass: 'slick-dots custom-dots'
  };

  return (
    <div>
      <Navbar />
      <Title />

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '32px 16px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          alignItems: 'start'
        }}>
          {/* Left Column: Project Details */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            textAlign: 'left'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <span style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#6b8384',
                fontFamily: 'Poppins, sans-serif'
              }}>Project Name</span>
              <span style={{
                fontSize: '20px',
                fontWeight: '400',
                color: '#163212',
                fontFamily: 'Prata, serif'
              }}>{project.project_name}</span>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <span style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#6b8384',
                fontFamily: 'Poppins, sans-serif'
              }}>Category</span>
              <span style={{
                fontSize: '16px',
                fontWeight: '400',
                color: '#163212',
                fontFamily: 'Prata, serif'
              }}>{project.category_name}</span>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <span style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#6b8384',
                fontFamily: 'Poppins, sans-serif'
              }}>Client</span>
              <span style={{
                fontSize: '16px',
                fontWeight: '400',
                color: '#163212',
                fontFamily: 'Prata, serif'
              }}>{project.client_name}</span>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <span style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#6b8384',
                fontFamily: 'Poppins, sans-serif'
              }}>Description</span>
              <p style={{
                fontSize: '14px',
                color: '#6b8384',
                lineHeight: '1.6',
                fontWeight: '300',
                fontFamily: 'Poppins, sans-serif',
                margin: 0
              }}>
                {shouldShowToggle
                  ? isExpanded
                    ? project.description
                    : `${truncatedText}...`
                  : project.description}
                {shouldShowToggle && (
                  <button
                    onClick={toggleText}
                    style={{
                      marginLeft: '4px',
                      background: 'none',
                      border: 'none',
                      color: '#a0b1c1',
                      fontSize: '12px',
                      fontWeight: '400',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    {isExpanded ? "Show less" : "Show more"}
                  </button>
                )}
              </p>
            </div>
          </div>


        </div>

        {/* Tab Section */}
        <div className="mb-10" style={{ marginTop: '32px' }}>
          <div style={{
            display: 'flex',
            borderBottom: '1px solid #e2ebf6'
          }}>
            <motion.button
              onClick={() => setActiveTab("images")}
              style={{
                padding: '12px 0',
                marginRight: '16px',
                fontSize: '16px',
                fontWeight: activeTab === "images" ? '500' : '300',
                color: activeTab === "images" ? '#163212' : '#a0b1c1',
                border: 'none',
                background: 'none',
                borderBottom: activeTab === "images" ? '2px solid #163212' : 'none',
                cursor: 'pointer',
                fontFamily: 'Poppins, sans-serif'
              }}
              whileHover={{ color: '#163212' }}
            >
              Images
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("videos")}
              style={{
                padding: '12px 0',
                fontSize: '16px',
                fontWeight: activeTab === "videos" ? '500' : '300',
                color: activeTab === "videos" ? '#163212' : '#a0b1c1',
                border: 'none',
                background: 'none',
                borderBottom: activeTab === "videos" ? '2px solid #163212' : 'none',
                cursor: 'pointer',
                fontFamily: 'Poppins, sans-serif'
              }}
              whileHover={{ color: '#163212' }}
            >
              Videos
            </motion.button>
          </div>

          {/* Tab Content */}
          <div style={{ marginTop: '16px' }}>
            {activeTab === "images" && (
              <>
                {/* Slider for mobile view */}
                <div style={{ display: 'block' }}>
                  <Slider {...sliderSettings}>
                    {project.images.map((image) => (
                      <div key={image.image_id} style={{ padding: '0 4px' }}>
                        <img
                          src={image.image_url}
                          alt="Project"
                          style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
                          }}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>

                {/* Grid for desktop view */}
                <div style={{
                  display: 'none',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '16px'
                }}>
                  <style>{`
                    @media (min-width: 768px) {
                      .desktop-grid {
                        display: grid !important;
                      }
                    }
                  `}</style>
                  <div className="desktop-grid">
                    {project.images.map((image) => (
                      <motion.img
                        key={image.image_id}
                        src={image.image_url}
                        alt="Project"
                        style={{
                          width: '100%',
                          height: '250px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                          transition: 'transform 0.3s ease'
                        }}
                        whileHover={{ scale: 1.02 }}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
            {activeTab === "videos" && (
              <>
                {/* Slider for mobile view */}
                <div style={{ display: 'block' }}>
                  <Slider {...sliderSettings}>
                    {project.videos.map((video) => (
                      <div key={video.video_id} style={{ padding: '0 4px' }}>
                        <video
                          controls
                          style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
                          }}
                        >
                          <source src={video.video_url} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ))}
                  </Slider>
                </div>

                {/* Grid for desktop view */}
                <div style={{
                  display: 'none',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '16px'
                }}>
                  <style>{`
                    @media (min-width: 768px) {
                      .desktop-grid-videos {
                        display: grid !important;
                      }
                    }
                  `}</style>
                  <div className="desktop-grid-videos">
                    {project.videos.map((video) => (
                      <video
                        key={video.video_id}
                        controls
                        style={{
                          width: '100%',
                          height: '250px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
                        }}
                      >
                        <source src={video.video_url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          <style>{`
            .custom-dots li button:before {
              color: #a0b1c1;
              font-size: 10px;
            }
            .custom-dots li.slick-active button:before {
              color: #6b8384;
            }
          `}</style>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;