import React, { useEffect, useRef, useState } from 'react';
import "./Home_6.css";

const CustomerReviews = () => {
  const reviews = [
    {
      name: 'Ruwan Jayasinghe',
      image: '/images/dummy-profile-pic-1.jpg',
      rating: 5,
      company: 'Outstanding Service and Quality!',
      feedback:
        'Aerobuild Solutions delivered beyond our expectations. The workmanship was excellent, and every detail was carefully handled. The project was completed on schedule without any hidden costs.',
    },
    {
      name: 'Madhavi Fernando',
      image: '/images/dummy-profile-pic-female-300n300.jpg',
      rating: 4,
      company: 'Efficient and Reliable Team!',
      feedback:
        'From start to finish, the team was organized and professional. They kept us updated throughout the process, and the final outcome was exactly what we had envisioned.',
    },
    {
      name: 'Kasun Weerasinghe',
      image: '/images/dummy-profile-pic-1.jpg',
      rating: 5,
      company: 'Creative and Modern Designs!',
      feedback:
        'The design team at Aerobuild Solutions brought in fresh and innovative ideas. The end result was not only visually stunning but also very functional for our lifestyle.',
    },
    {
      name: 'Dilani Perera',
      image: '/images/dummy-profile-pic-female-300n300.jpg',
      rating: 4,
      company: 'Professional and Trustworthy!',
      feedback:
        'We were impressed with the professionalism and transparency throughout the project. Aerobuild Solutions proved to be a reliable partner who truly cares about quality.',
    },
    {
      name: 'Nuwan Dissanayake',
      image: '/images/dummy-profile-pic-1.jpg',
      rating: 5,
      company: 'Sustainable and Smart Solutions!',
      feedback:
        'What we loved most was their focus on eco-friendly construction methods. Aerobuild delivered a home that is energy-efficient and modern, perfectly aligned with our vision for the future.',
    },
    {
      name: 'Shanika Abeywardena',
      image: '/images/dummy-profile-pic-female-300n300.jpg',
      rating: 5,
      company: 'Great Attention to Detail!',
      feedback:
        'Every corner of our project reflected precision and craftsmanship. The Aerobuild team truly went above and beyond to make sure everything was perfect.',
    },
    {
      name: 'Chathura Ranasinghe',
      image: '/images/dummy-profile-pic-1.jpg',
      rating: 4,
      company: 'Delivered on Budget and Time!',
      feedback:
        'We were worried about costs, but Aerobuild handled the project transparently and within the agreed budget. The work was completed right on schedule without compromises.',
    },
    {
      name: 'Ishara Wickramasinghe',
      image: '/images/dummy-profile-pic-female-300n300.jpg',
      rating: 5,
      company: 'Friendly and Supportive Team!',
      feedback:
        'The staff was approachable and always available to answer questions. Their friendly approach made the entire building process stress-free and enjoyable.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= reviews.length ? 0 : prevIndex + 1
      );
    }, 5000); // 5-second interval for mobile slider
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section
      style={{
        padding: '3rem 0',
        backgroundColor: '#f4f9fc',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          padding: '0 1rem',
          margin: '0 auto',
          maxWidth: '80rem',
          width: '100%',
        }}
      >
        <h2
          style={{
            marginBottom: '2rem',
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#163212',
            textAlign: 'center',
            letterSpacing: '-0.025em',
          }}
          className="sm-text-2xl lg-text-3xl"
        >
          Customer Reviews
        </h2>
        <div ref={reviewRef} style={{ position: 'relative' }}>
          {/* Mobile Slider (below 768px) - 1 card at a time */}
          <div
            style={{
              display: 'block',
              overflow: 'hidden',
            }}
            className="md-hidden"
          >
            <div
              style={{
                display: 'flex',
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  style={{
                    flexShrink: 0,
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: '#fff',
                    borderRadius: '1rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    border: '1px solid #e2ebf6',
                    transition: 'box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)')
                  }
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                      gap: '0.75rem',
                    }}
                  >
                    <img
                      src={review.image}
                      alt={review.name}
                      style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid #e2ebf6',
                      }}
                      className="sm-w-3rem sm-h-3rem"
                    />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <h3
                        style={{
                          fontSize: '1rem',
                          fontWeight: '600',
                          color: '#163212',
                        }}
                        className="sm-text-lg"
                      >
                        {review.name}
                      </h3>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginTop: '0.25rem',
                          gap: '0.5rem',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          {Array(review.rating)
                            .fill()
                            .map((_, i) => (
                              <span
                                key={i}
                                style={{ color: '#a0b1c1', fontSize: '0.75rem' }}
                                className="sm-text-sm"
                              >
                                ★
                              </span>
                            ))}
                        </div>
                        <p
                          style={{
                            fontSize: '0.75rem',
                            color: '#6b8384',
                            fontWeight: '500',
                          }}
                          className="sm-text-sm"
                        >
                          {review.company}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      lineHeight: '1.25rem',
                      color: 'rgba(22, 50, 18, 0.8)',
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 4,
                      overflow: 'hidden',
                    }}
                    className="sm-text-sm sm-leading-6"
                  >
                    {review.feedback}
                  </p>
                </div>
              ))}
            </div>
            {/* Slider Dots */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1rem',
                gap: '0.5rem',
              }}
            >
              {reviews.map((_, index) => (
                <button
                  key={index}
                  style={{
                    width: '0.5rem',
                    height: '0.5rem',
                    borderRadius: '50%',
                    backgroundColor: currentIndex === index ? '#6b8384' : '#c8d7e6',
                    transform: currentIndex === index ? 'scale(1.25)' : 'scale(1)',
                    transition: 'background-color 0.3s, transform 0.3s',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid (768px and above) - 4 cards at once */}
          <div
            style={{
              display: 'none',
            }}
            className="md-grid"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                style={{
                  padding: '1.5rem',
                  backgroundColor: '#fff',
                  borderRadius: '1rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  border: '1px solid #e2ebf6',
                  transition: 'box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)')
                }
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.75rem',
                    gap: '0.75rem',
                  }}
                >
                  <img
                    src={review.image}
                    alt={review.name}
                    style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #e2ebf6',
                    }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: '#163212',
                      }}
                    >
                      {review.name}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '0.25rem',
                        gap: '0.5rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {Array(review.rating)
                          .fill()
                          .map((_, i) => (
                            <span
                              key={i}
                              style={{ color: '#FFD700', fontSize: '0.875rem' }}
                            >
                              ★
                            </span>
                          ))}
                      </div>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: '#6b8384',
                          fontWeight: '500',
                        }}
                      >
                        {review.company}
                      </p>
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: '1.5rem',
                    color: 'rgba(22, 50, 18, 0.8)',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4,
                    overflow: 'hidden',
                  }}
                >
                  {review.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default CustomerReviews;