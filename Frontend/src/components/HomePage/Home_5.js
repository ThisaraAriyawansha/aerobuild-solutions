import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


// Projects data
const projects = [
  {
    title: 'Villa',
    description: 'Villa construction typically involves building a luxurious, standalone residence often designed for comfort',
    image: '/images/Rectangle 18.jpg',
  },
  {
    title: 'Home',
    description: 'Home construction typically involves building a personalized residence designed to meet individual needs.',
    image: '/images/Rectangle 18 (1).jpg',
  },
  {
    title: 'Cabana',
    description: 'Cabana construction typically involves creating a cozy and elegant standalone space.',
    image: '/images/Rectangle 18 (2).jpg',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Only show one card at a time
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: false, // Disable centerMode to avoid showing partial cards on the sides
  focusOnSelect: true,
  arrows: false, // Disable arrows
  responsive: [
    {
      breakpoint: 768, // Mobile view settings
      settings: {
        slidesToShow: 1, // Show 1 slide per view
        slidesToScroll: 1,
      },
    },
  ],
};


const OurProjects = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-800 font-quando">OUR PROJECTS</h2>
        <p className="mb-6 sm:mb-12 text-justify text-black font-poppins text-[14px] sm:text-[16px] leading-[22px] sm:leading-[28px]">
          At Kandalama Homes, every project is a testament to our dedication to quality, innovation, and craftsmanship. Our portfolio showcases a diverse range of construction and landscape architecture endeavors, from bespoke residential spaces to sustainable outdoor environments that harmonize with nature. Each project reflects our commitment to meeting our clients’ aspirations while ensuring the highest standards of design and functionality. With an unwavering focus on detail and a passion for excellence, Kandalama Homes transforms ideas into remarkable spaces that inspire and endure.       
        </p>


        {/* Desktop Grid */}
        <div className="hidden grid-cols-1 gap-8 md:grid md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Slider {...settings} className="w-full">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} isMobile={true} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isMobile }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const cardClasses = isMobile
    ? 'overflow-hidden transition-shadow duration-300 rounded-lg shadow-md bg-customGreen hover:shadow-lg hover:scale-105 transform-gpu max-w-xs mx-auto h-auto py-2 flex flex-col items-center'
    : 'overflow-hidden transition-shadow duration-300 rounded-lg shadow-md bg-customGreen hover:shadow-lg hover:scale-105 transform-gpu h-96 flex flex-col items-center';

  const imageClasses = isMobile
    ? 'object-contain w-full max-h-60 transition-transform duration-300 group-hover:scale-105'
    : 'object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105';

  const textClasses = 'text-center text-white font-poppins p-0 flex-grow';

  const projectUrl = `/${project.title.replace(/\s+/g, '_')}_Construction_Home`;

  return (
    <motion.div
      ref={ref}
      className={cardClasses}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
      transition={{ delay: index * 0.2, duration: 1 }}
    >
      {/* Make the entire card clickable using Link */}
      <Link to={projectUrl} className="w-full">
        <div className="w-full">
          <img src={project.image} alt={project.title} className={imageClasses} />
          <div className="left-0 w-2/5 p-2 transform -translate-y-1/2 bg-white rounded-r-md">
            <h3 className="text-2xl text-customGreen font-prata">{project.title}</h3>
          </div>
        </div>
        <p className={textClasses}>{project.description}</p>
      </Link>
    </motion.div>
  );
};
export default OurProjects;
