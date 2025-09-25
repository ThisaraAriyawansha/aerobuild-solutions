import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick"; // Import the Slider component

const Villa_1 = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1, // Only show one card at a time
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false, // Ensure no center mode to avoid partial cards on the sides
        focusOnSelect: true, // Ensure focus on selecting the card
        arrows: false, // Disable arrows
      };

      
  // Array of image paths
  const images = [
    "/images/Rectangle 47.jpg",
    "/images/Rectangle 48.jpg",
    "/images/Rectangle 49.jpg",
  ];

  return (
    <div>
    <motion.div
      className="w-full bg-customGreen rounded-b-[40px]"
      initial={{ opacity: 0, y: -50 }} // Initial state: invisible and slightly above
      whileInView={{ opacity: 1, y: 0 }} // On view: fully visible and at normal position
      transition={{ duration: 0.8 }} // Transition duration for the animation
    >
      <h2 className="p-16 text-3xl text-center text-white sm:text-left sm:text-3xl font-prata">
        Villa Construction
      </h2>
         
 {/* Desktop view: Show grid */}
      {/* Image Section */}
      <div className="hidden grid-cols-1 gap-1 p-10 lg:grid mr-36 ml-36 lg:grid-cols-3 lg:px-8">
  {images.map((image, index) => (
    <motion.div
      key={index}
      className="overflow-hidden border-4 border-white rounded-lg w-[22rem]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }} // Adds scaling on hover
      whileTap={{ scale: 0.95 }} // Adds scaling when clicked
    >
      <img
        src={image} // Dynamically using the image from the array
        alt={`Villa Image ${index + 1}`}
        className="object-cover w-[22rem] h-[22rem] rounded-lg transition-all duration-300" // Smooth transition for hover effects
      />
    </motion.div>
  ))}
</div>





{/* Mobile view: Show slider */}
<div className="px-4 py-10 mx-auto lg:hidden max-w-[19rem]">
  <Slider {...settings}>
    {images.map((image, index) => (
      <motion.div
        key={index}
        className="w-auto mx-auto overflow-hidden border-4 border-white rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={image}
          alt={`Villa Image ${index + 1}`}
          className="object-cover h-auto max-w-[19rem] mx-auto rounded-lg"
        />
      </motion.div>
    ))}
  </Slider>
</div>


      


    </motion.div>
    <motion.p
  className="p-10 text-base text-justify text-black sm:p-20 sm:text-lg font-poppins"
  initial={{ opacity: 0, y: 50 }} // Initial state: invisible and slightly below
  whileInView={{ opacity: 1, y: 0 }} // On view: fully visible and at normal position
  viewport={{ once: true }} // Animation plays only once when the element comes into view
  transition={{ duration: 0.8 }} // Duration of the animation
>
  Sri Lanka, often referred to as the "Pearl of the Indian Ocean," offers an ideal location
  for building luxurious and serene villas. Whether nestled along pristine beaches, in the
  lush hill country, or amidst tropical forests, villas in Sri Lanka provide the perfect blend
  of modern architecture and natural beauty. Here's a comprehensive guide to creating your dream
  villa in Sri Lanka.
</motion.p>

    </div>
  );
};

export default Villa_1;
