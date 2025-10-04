import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, ArrowRight, Building2 } from 'lucide-react';

export default function ContactUs() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f4f9fc',
      width: '100%',
      overflowX: 'hidden'
    }}>
      {/* Animated Hero Section */}
      <div style={{ 
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #6b8384 0%, #a0b1c1 50%, #c8d7e6 100%)',
        minHeight: isMobile ? '50vh' : '60vh',
        width: '100%'
      }}>
        {/* Floating Orbs */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
          <div style={{ 
            position: 'absolute',
            width: isMobile ? '192px' : '288px',
            height: isMobile ? '192px' : '288px',
            borderRadius: '50%',
            top: isMobile ? '40px' : '80px',
            left: isMobile ? '16px' : '40px',
            background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite'
          }} />
          <div style={{ 
            position: 'absolute',
            width: isMobile ? '256px' : '384px',
            height: isMobile ? '256px' : '384px',
            borderRadius: '50%',
            bottom: isMobile ? '40px' : '80px',
            right: isMobile ? '16px' : '40px',
            background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite reverse'
          }} />
        </div>
        
        {/* Hero Content */}
        <div style={{ 
          position: 'relative',
          padding: isMobile ? '60px 16px' : '120px 24px',
          margin: '0 auto',
          maxWidth: '1280px',
          textAlign: 'center'
        }}>
          <div style={{ 
            display: 'inline-block',
            padding: isMobile ? '8px 16px' : '8px 24px',
            marginBottom: isMobile ? '16px' : '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '9999px',
            backdropFilter: 'blur(4px)'
          }}>
            <p style={{ 
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: '#ffffff',
              margin: 0
            }}>CONNECT WITH US</p>
          </div>
          
          <h1 style={{ 
            marginBottom: isMobile ? '24px' : '32px',
            fontSize: isMobile ? '32px' : isTablet ? '40px' : '48px',
            fontWeight: 'bold',
            lineHeight: 1.2,
            color: '#ffffff',
            fontFamily: 'Prata, serif',
            margin: `0 0 ${isMobile ? '24px' : '32px'} 0`
          }}>
            Let's Build
            <br />
            <span style={{
              background: 'linear-gradient(to right, #ffffff, #e5e7eb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Your Vision
            </span>
          </h1>
          
          <p style={{ 
            maxWidth: '672px',
            margin: '0 auto',
            fontSize: isMobile ? '16px' : '20px',
            color: 'rgba(255, 255, 255, 0.9)',
            padding: '0 16px'
          }}>
            Experience construction excellence with Aerobuild Solutions
          </p>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.05); }
          }
        `}</style>
      </div>

      {/* Floating Contact Cards */}
      <div style={{ 
        position: 'relative',
        zIndex: 10,
        padding: isMobile ? '0 16px' : '0 24px',
        margin: '0 auto',
        marginTop: isMobile ? '-60px' : '-80px',
        maxWidth: '1280px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '16px' : '24px'
        }}>
          {[
            { icon: MapPin, title: 'Location', content: ['12 B, Galle Road', 'Matara, Sri Lanka'], link: null },
            { icon: Mail, title: 'Email', content: ['info@aerobuildsolutions.com'], link: 'mailto:info@aerobuildsolutions.com' },
            { icon: Phone, title: 'Phone', content: ['+94 77 678 5362'], link: 'tel:+94776785362' },
            { icon: Clock, title: 'Hours', content: ['Monday - Saturday', '9:00 AM – 6:00 PM'], link: null }
          ].map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => setHoveredCard(idx)}
              onTouchEnd={() => setTimeout(() => setHoveredCard(null), 300)}
              style={{
                position: 'relative',
                padding: isMobile ? '24px' : '32px',
                backgroundColor: '#ffffff',
                borderRadius: isMobile ? '16px' : '24px',
                boxShadow: hoveredCard === idx 
                  ? '0 20px 40px -12px rgba(107, 131, 132, 0.25)' 
                  : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                transform: hoveredCard === idx ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: isMobile ? '16px' : '24px',
                background: `linear-gradient(135deg, ${
                  idx === 0 ? '#e2ebf6' : idx === 1 ? '#c8d7e6' : idx === 2 ? '#a0b1c1' : '#6b8384'
                } 0%, transparent 100%)`,
                opacity: hoveredCard === idx ? 1 : 0,
                transition: 'opacity 0.5s'
              }} />
              
              <div style={{ position: 'relative' }}>
                <div style={{ 
                  display: 'inline-block',
                  padding: isMobile ? '12px' : '16px',
                  marginBottom: isMobile ? '16px' : '24px',
                  borderRadius: isMobile ? '12px' : '16px',
                  backgroundColor: hoveredCard === idx ? '#6b8384' : '#e2ebf6',
                  transition: 'background-color 0.5s'
                }}>
                  <item.icon 
                    size={isMobile ? 20 : 24} 
                    style={{ 
                      color: hoveredCard === idx ? '#ffffff' : '#6b8384',
                      transition: 'color 0.5s'
                    }} 
                  />
                </div>
                
                <h3 style={{ 
                  marginBottom: isMobile ? '12px' : '16px',
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: 'bold',
                  fontFamily: 'Prata, serif',
                  color: '#6b8384',
                  margin: `0 0 ${isMobile ? '12px' : '16px'} 0`
                }}>
                  {item.title}
                </h3>
                
                {item.link ? (
                  <a 
                    href={item.link}
                    style={{ 
                      display: 'block',
                      fontSize: isMobile ? '13px' : '14px',
                      lineHeight: 1.6,
                      color: '#a0b1c1',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                  >
                    {item.content.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < item.content.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </a>
                ) : (
                  <p style={{ 
                    fontSize: isMobile ? '13px' : '14px',
                    lineHeight: 1.6,
                    color: '#a0b1c1',
                    margin: 0
                  }}>
                    {item.content.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < item.content.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Section */}
      <div style={{ 
        padding: isMobile ? '64px 16px' : '128px 24px',
        margin: '0 auto',
        maxWidth: '1280px'
      }}>
        <div style={{ 
          position: 'relative',
          borderRadius: isMobile ? '16px' : '48px',
          background: 'linear-gradient(to right, #6b8384, #a0b1c1)',
          minHeight: isMobile ? '300px' : '400px',
          overflow: 'hidden'
        }}>
          {/* Background Orbs */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: isMobile ? '256px' : '500px',
              height: isMobile ? '256px' : '500px',
              background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)'
            }} />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: isMobile ? '320px' : '600px',
              height: isMobile ? '320px' : '600px',
              background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)'
            }} />
          </div>

          <div style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '32px' : '48px',
            padding: isMobile ? '24px' : isTablet ? '48px' : '80px'
          }}>
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ marginBottom: isMobile ? '16px' : '24px' }}>
                <Building2 size={isMobile ? 32 : 40} style={{ color: 'rgba(255, 255, 255, 0.9)' }} />
              </div>
              
              <h2 style={{ 
                marginBottom: isMobile ? '16px' : '24px',
                fontSize: isMobile ? '28px' : '36px',
                fontWeight: 'bold',
                lineHeight: 1.2,
                color: '#ffffff',
                fontFamily: 'Prata, serif',
                margin: `0 0 ${isMobile ? '16px' : '24px'} 0`
              }}>
                Aerobuild Solutions
              </h2>
              
              <p style={{ 
                marginBottom: isMobile ? '24px' : '40px',
                fontSize: isMobile ? '15px' : '18px',
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.9)',
                margin: `0 0 ${isMobile ? '24px' : '40px'} 0`
              }}>
                Transforming visions into architectural excellence. We combine innovation, 
                quality craftsmanship, and decades of expertise to deliver construction 
                projects that stand the test of time.
              </p>

              <div style={{ 
                marginBottom: isMobile ? '32px' : '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '16px' : '24px'
              }}>
                {[
                  { icon: MapPin, title: 'Visit Our Office', content: '12 B, Galle Road, Matara, Sri Lanka' },
                  { icon: Mail, title: 'Email Us', content: 'info@aerobuildsolutions.com', link: 'mailto:info@aerobuildsolutions.com' },
                  { icon: Phone, title: 'Call Us', content: '+94 77 678 5362', link: 'tel:+94776785362' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: isMobile ? '12px' : '16px' }}>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      width: isMobile ? '40px' : '48px',
                      height: isMobile ? '40px' : '48px',
                      borderRadius: isMobile ? '8px' : '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)'
                    }}>
                      <item.icon size={16} style={{ color: '#ffffff' }} />
                    </div>
                    <div>
                      <p style={{ 
                        marginBottom: '4px',
                        fontSize: isMobile ? '12px' : '14px',
                        fontWeight: 600,
                        color: '#ffffff',
                        margin: '0 0 4px 0'
                      }}>
                        {item.title}
                      </p>
                      {item.link ? (
                        <a 
                          href={item.link}
                          style={{ 
                            fontSize: isMobile ? '12px' : '14px',
                            color: 'rgba(255, 255, 255, 0.8)',
                            textDecoration: 'none',
                            transition: 'opacity 0.3s'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '1';
                            e.currentTarget.style.textDecoration = 'underline';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '0.8';
                            e.currentTarget.style.textDecoration = 'none';
                          }}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p style={{ 
                          fontSize: isMobile ? '12px' : '14px',
                          color: 'rgba(255, 255, 255, 0.8)',
                          margin: 0
                        }}>
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <a 
                  href="tel:+94776785362"
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: isMobile ? '12px 24px' : '16px 32px',
                    fontSize: isMobile ? '13px' : '14px',
                    fontWeight: 600,
                    color: '#6b8384',
                    backgroundColor: '#ffffff',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
                  onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}
                >
                  Start a Conversation
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Content - Map Placeholder */}
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: isMobile ? '32px' : 0
            }}>
              <div style={{ 
                position: 'relative',
                width: '100%',
                height: '100%',
                minHeight: isMobile ? '250px' : '400px',
                borderRadius: isMobile ? '16px' : '24px',
                backgroundColor: '#c8d7e6',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ padding: isMobile ? '24px' : '32px', textAlign: 'center' }}>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: isMobile ? '96px' : '128px',
                      height: isMobile ? '96px' : '128px',
                      margin: `0 auto ${isMobile ? '16px' : '24px'} auto`,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(4px)'
                    }}>
                      <MapPin size={isMobile ? 40 : 56} style={{ color: '#ffffff' }} />
                    </div>
                    <h3 style={{ 
                      marginBottom: isMobile ? '8px' : '12px',
                      fontSize: isMobile ? '20px' : '24px',
                      fontWeight: 'bold',
                      color: '#ffffff',
                      fontFamily: 'Prata, serif',
                      margin: `0 0 ${isMobile ? '8px' : '12px'} 0`
                    }}>
                      Find Us in Matara
                    </h3>
                    <p style={{ 
                      fontSize: isMobile ? '14px' : '16px',
                      color: 'rgba(255, 255, 255, 0.9)',
                      margin: 0
                    }}>
                      Southern Province, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ 
        maxWidth: '896px',
        padding: isMobile ? '48px 16px' : '80px 24px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          marginBottom: isMobile ? '16px' : '24px',
          fontSize: isMobile ? '28px' : '36px',
          fontWeight: 'bold',
          fontFamily: 'Prata, serif',
          background: 'linear-gradient(135deg, #6b8384 0%, #a0b1c1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          margin: `0 0 ${isMobile ? '16px' : '24px'} 0`
        }}>
          Ready to Begin?
        </h2>
        <p style={{ 
          marginBottom: isMobile ? '24px' : '40px',
          fontSize: isMobile ? '15px' : '18px',
          color: '#a0b1c1',
          margin: `0 0 ${isMobile ? '24px' : '40px'} 0`
        }}>
          Let's discuss your project and turn your construction dreams into reality
        </p>
        <div style={{ display: 'inline-flex', gap: isMobile ? '12px' : '16px' }}>
          <a 
            href="mailto:info@aerobuildsolutions.com"
            style={{ 
              padding: isMobile ? '14px 28px' : '20px 40px',
              fontSize: isMobile ? '13px' : '14px',
              fontWeight: 600,
              color: '#ffffff',
              backgroundColor: '#6b8384',
              borderRadius: '9999px',
              textDecoration: 'none',
              boxShadow: '0 20px 40px -12px rgba(107, 131, 132, 0.4)',
              transition: 'all 0.3s',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(107, 131, 132, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(107, 131, 132, 0.4)';
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}