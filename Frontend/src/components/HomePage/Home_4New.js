import React from "react";
import Slider from "react-slick"; // Import the Slider component
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination,Autoplay  } from 'swiper/modules';

import "./Home_4.css";


const services = [
  {
    title: "Housing Constructions",
    image: "/images/29450b5e5710977a15d5fc7ebf25b25d.jpeg",
  },
  {
    title: "Villa Construction",
    image: "/images/Rectangle 48.jpg",
  },
  {
    title: "Cabana Construction",
    image: "/images/Rectangle 88.jpg",
  },
  {
    title: "Landscape Architecture",
    image: "/images/c6e6176dc948a4a667f9f85b9d4f3d38.jpeg",
  },
  {
    title: "Warehouse Construction",
    image: "/images/Rectangle 88 (1).jpg",
  },
];

const TeamSection = () => {
  // Slick slider settings for mobile view
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one service at a time
    slidesToScroll: 1,
  };


  const navigate = useNavigate(); // This should be inside the component

  const handleCardClick = (title) => {
    if (title === 'Villa Construction') {
      navigate('/villaConstruction');
    } else if (title === 'Cabana Construction') {
      navigate('/cabanaConstruction');
    } else if (title === 'Landscape Architecture') {
      navigate('/landscapeConstruction');
    }
  };

  return (
    <div
    className="bg-center bg-full border-4 border-white rounded-[47px] sm:h-full md:h-full  lg:h-full"
    style={{
        backgroundImage:
          "url('/images/Rectangle 7.jpg')",
      }}
    >
      <div className="w-full h-full rounded-[47px] " style={{ backgroundColor: "rgba(0, 90, 78, 0.49)" }}>
        <div className="container p-8 mx-auto text-center text-white md:p-20">
          <h2 className="mb-4 text-xl font-bold text-center lg:text-left md:text-4xl font-quando">
          OUR SERVICES
          </h2>


          {/* Mobile view: Show slider */}
          <div className="lg:hidden">
  <Slider {...settings}>
    {services.map((service, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center transition-shadow duration-300 bg-transparent shadow-md hover:shadow-xl h-[30vh] md:h-[70vh]" // Adjusted md:h-[50vh]
        onClick={() => handleCardClick(service.title)}
      >
        <div className="relative justify-center w-full mb-4" style={{ height: "30vh", maxHeight: "70vh" }}> {/* Adjusted container height */}
          <img
            src={service.image}
            alt={service.title}
            className="w-screen h-[30vh] md:h-[70vh] md:w-[80vw]  border-4 border-white rounded-[5%]" // Added md:h-[50vh]
          />
          {/* Title positioned at the center of the image */}
          <h3 className="absolute inset-0 flex items-center justify-center text-xs text-center text-white sm:text-lg font-sansita">
            <span className="p-1 bg-opacity-50 rounded-lg bg-gray backdrop-blur-md">
              {service.title}
            </span>
          </h3>
        </div>
      </div>
    ))}
  </Slider>
</div>










{/* Desktop view: Show grid */}
<div className="hidden lg:block">
  <Swiper
    slidesPerView={3}
    spaceBetween={30}
    pagination={{
      clickable: true,
      renderBullet: (index, className) =>
        `<span class="${className} custom-bullet"></span>`, // Add a custom class for styling
    }}
    autoplay={{
      delay: 5000, // Auto-slide delay in milliseconds (20 seconds)
      disableOnInteraction: false, // Ensure auto-sliding continues after user interaction
    }}
    loop={true} // Make the slides loop smoothly
    speed={5000} // Increase the speed for smoother transitions (1000ms = 1 second)
    effect="slide" // Use the 'slide' effect for a smoother transition
    slidesPerGroup={1} // Ensure only 1 slide moves at a time for smoother effect
    modules={[Pagination, Autoplay]} // Include the Autoplay and Pagination modules
    className="service-slider"
  >
    {services.map((service, index) => (
      <SwiperSlide key={index}>
        <motion.div
          className="relative p-[2%] transition-shadow duration-300 rounded-[5%] shadow-sm hover:shadow-md h-[70vh] flex-shrink-0 w-[90%]"
          whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          onClick={() => handleCardClick(service.title)}
        >
          <div className="h-full">
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-full rounded-[5%] border-[5px] border-white"
            />
          </div>
          <div className="absolute w-[75%] px-[5%] py-[2%] transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-[5%] bg-opacity-50 top-[50%] left-[50%] backdrop-blur-md">
            <h3 className="text-[120%] text-white font-sansita">{service.title}</h3>
          </div>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>















        </div>
      </div>
    </div>
  );
};

export default TeamSection;
