import React from "react";
import Slider from "react-slick"; // Import the Slider component
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Mr. Upali Kulathunga",
    role: "C.E.O",
    image: "/images/Rectangle 38.jpg",
  },
  {
    name: "Mr. Upali Kulathunga",
    role: "H.R Manager",
    image: "/images/Rectangle 38 (1).jpg",
  },
  {
    name: "Mr. Upali Kulathunga",
    role: "Marketing Manager",
    image: "/images/Rectangle 38 (2).jpg",
  },
  {
    name: "Mr. Upali Kulathunga",
    role: "Main Designer",
    image: "/images/Rectangle 38 (3).jpg",
  },
];

const TeamSection = () => {
  // Slick slider settings for mobile view
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one team member at a time
    slidesToScroll: 1,
  };

  return (
    <div
      className="h-auto bg-center bg-cover"
      style={{
        backgroundImage:
          "url('/images/Rectangle 35.jpg')",
      }}
    >
      <div className="w-full " style={{ background: "#000000B8" }}>
        <div className="container p-10 mx-auto text-center text-white sm:p-20">
        <h2 className="mb-4 text-2xl text-center sm:text-left sm:text-4xl font-prata">
  Meet Our Team
</h2>
<p className="mb-8 text-base text-justify sm:text-lg font-poppins">
  We are a team of dedicated professionals committed to delivering high-quality construction and design services. Our mission is to provide innovative and reliable solutions that exceed our clients' expectations. With years of experience in the industry, we take pride in our craftsmanship and attention to detail, ensuring that every project we undertake is completed to the highest standards.
</p>



          {/* Mobile view: Show slider */}
          <div className="lg:hidden">
            <Slider {...settings}>
            {teamMembers.map((member, index) => (
  <div
    key={index}
    className="flex flex-col items-center justify-center h-auto p-4 transition-shadow duration-300 bg-white shadow-md sm:p-6 hover:shadow-xl sm:h-72" // Adjusted height for mobile
  >
    <div className="flex justify-center mb-4"> {/* Center image container */}
      <img
        src={member.image}
        alt={member.role}
        className="object-cover w-32 rounded-none h-42 sm:w-40 sm:h-40" // Image size reduced on mobile
      />
    </div>
    <h3 className="mt-2 text-lg text-center text-black sm:mt-4 sm:text-xl font-prata">{member.name}</h3> {/* Centered name */}
    <p className="text-sm text-center font-prata text-customGreen sm:text-base">{member.role}</p> {/* Centered role */}
  </div>
))}
            </Slider>
          </div>




          {/* Desktop view: Show grid */}
          <div className="hidden grid-cols-1 gap-8 ml-20 mr-20 lg:grid md:grid-cols-4 lg:grid-cols-4">
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
          whileHover={{ scale: 1.05 }} // Scale on hover
          whileInView={{ opacity: 1, y: 0 }} // Fade in on view
          initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and position slightly lower
          transition={{ duration: 0.8 }} // Slower transition (increase duration to slow down)
        >
          <img
            src={member.image}
            alt={member.role}
            className="object-cover w-full h-auto rounded-none"
          />
          <h3 className="mt-4 text-xl text-black font-prata ">{member.name}</h3>
          <p className="text-customGreen font-prata">{member.role}</p>
        </motion.div>
      ))}
    </div>

          
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
