import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, ArrowRight, Building2 } from 'lucide-react';

export default function ContactUs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f4f9fc' }}>
      {/* Animated Hero with Parallax Effect */}
      <div className="relative overflow-hidden" style={{ 
        background: `linear-gradient(135deg, #6b8384 0%, #a0b1c1 50%, #c8d7e6 100%)`,
        minHeight: '70vh'
      }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute rounded-full top-20 left-10 w-72 h-72" style={{ 
            background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
          <div className="absolute rounded-full bottom-20 right-10 w-96 h-96" style={{ 
            background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite reverse'
          }}></div>
        </div>
        
        <div className="relative px-4 py-32 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-6 py-2 mb-6 bg-white border border-white rounded-full bg-opacity-20 backdrop-blur-sm border-opacity-30">
              <p className="text-sm font-medium tracking-wide text-white">CONNECT WITH US</p>
            </div>
            <h1 className="mb-8 text-6xl font-bold leading-tight text-white md:text-7xl lg:text-8xl" style={{ fontFamily: 'Prata, serif' }}>
              Let's Build
              <br />
              <span className="text-transparent bg-gradient-to-r from-white to-gray-200 bg-clip-text">
                Your Vision
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-white md:text-2xl text-opacity-90">
              Experience construction excellence with Aerobuild Solutions
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.05); }
          }
        `}</style>
      </div>

      {/* Floating Contact Cards */}
      <div className="relative z-10 px-4 mx-auto -mt-32 max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              className="relative p-8 transition-all duration-500 bg-white shadow-xl group rounded-3xl"
              style={{
                transform: hoveredCard === idx ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hoveredCard === idx 
                  ? '0 25px 50px -12px rgba(107, 131, 132, 0.25)' 
                  : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-3xl group-hover:opacity-100" style={{
                background: `linear-gradient(135deg, ${idx === 0 ? '#e2ebf6' : idx === 1 ? '#c8d7e6' : idx === 2 ? '#a0b1c1' : '#6b8384'} 0%, transparent 100%)`
              }}></div>
              
              <div className="relative">
                <div className="inline-block p-4 mb-6 transition-all duration-500 rounded-2xl" style={{ 
                  backgroundColor: hoveredCard === idx ? '#6b8384' : '#e2ebf6'
                }}>
                  <item.icon size={28} style={{ 
                    color: hoveredCard === idx ? '#ffffff' : '#6b8384',
                    transition: 'color 0.5s'
                  }} />
                </div>
                
                <h3 className="mb-4 text-lg font-bold" style={{ 
                  fontFamily: 'Prata, serif', 
                  color: '#6b8384'
                }}>
                  {item.title}
                </h3>
                
                {item.link ? (
                  <a 
                    href={item.link}
                    className="block text-base leading-relaxed transition-colors duration-300 hover:underline"
                    style={{ color: '#a0b1c1' }}
                  >
                    {item.content.map((line, i) => (
                      <span key={i}>{line}{i < item.content.length - 1 && <br />}</span>
                    ))}
                  </a>
                ) : (
                  <p className="text-base leading-relaxed" style={{ color: '#a0b1c1' }}>
                    {item.content.map((line, i) => (
                      <span key={i}>{line}{i < item.content.length - 1 && <br />}</span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Immersive Company Section */}
      <div className="px-4 py-32 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] overflow-hidden" style={{ 
          background: 'linear-gradient(to right, #6b8384, #a0b1c1)',
          minHeight: '600px'
        }}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px]" style={{
              background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)'
            }}></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px]" style={{
              background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)'
            }}></div>
          </div>

          <div className="relative grid gap-12 p-12 lg:grid-cols-2 lg:p-20">
            <div className="flex flex-col justify-center">
              <div className="inline-block mb-6">
                <Building2 size={48} className="text-white opacity-90" />
              </div>
              
              <h2 className="mb-6 text-5xl font-bold leading-tight text-white" style={{ fontFamily: 'Prata, serif' }}>
                Aerobuild Solutions
              </h2>
              
              <p className="mb-10 text-xl leading-relaxed text-white opacity-90">
                Transforming visions into architectural excellence. We combine innovation, 
                quality craftsmanship, and decades of expertise to deliver construction 
                projects that stand the test of time.
              </p>

              <div className="mb-10 space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-white rounded-xl bg-opacity-20">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-white">Visit Our Office</p>
                    <p className="text-white opacity-80">12 B, Galle Road, Matara, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-white rounded-xl bg-opacity-20">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-white">Email Us</p>
                    <a href="mailto:info@aerobuildsolutions.com" className="text-white transition-all opacity-80 hover:opacity-100 hover:underline">
                      info@aerobuildsolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-white rounded-xl bg-opacity-20">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-white">Call Us</p>
                    <a href="tel:+94776785362" className="text-white transition-all opacity-80 hover:opacity-100 hover:underline">
                      +94 77 678 5362
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href="tel:+94776785362"
                  className="flex items-center gap-2 px-8 py-4 font-semibold transition-all duration-300 bg-white rounded-full group hover:gap-3"
                  style={{ color: '#6b8384' }}
                >
                  Start a Conversation
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden" style={{ backgroundColor: '#c8d7e6' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 text-center">
                    <div className="flex items-center justify-center w-32 h-32 mx-auto mb-6 bg-white rounded-full bg-opacity-30 backdrop-blur-sm">
                      <MapPin size={64} className="text-white" />
                    </div>
                    <h3 className="mb-3 text-3xl font-bold text-white" style={{ fontFamily: 'Prata, serif' }}>
                      Find Us in Matara
                    </h3>
                    <p className="text-lg text-white opacity-90">
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
      <div className="max-w-4xl px-4 py-20 mx-auto text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-5xl font-bold" style={{ 
          fontFamily: 'Prata, serif',
          background: 'linear-gradient(135deg, #6b8384 0%, #a0b1c1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Ready to Begin?
        </h2>
        <p className="mb-10 text-xl" style={{ color: '#a0b1c1' }}>
          Let's discuss your project and turn your construction dreams into reality
        </p>
        <div className="inline-flex gap-4">
          <a 
            href="mailto:info@aerobuildsolutions.com"
            className="px-10 py-5 font-semibold text-white transition-all duration-300 transform rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-1"
            style={{ backgroundColor: '#6b8384' }}
          >
            Get in Touch
          </a>
        </div>
      </div>


    </div>
  );
}