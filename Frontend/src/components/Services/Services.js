import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { FaArrowLeft } from "react-icons/fa"; // Import the left arrow icon

const ComingSoon = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigation = () => {
    navigate("/"); // This will navigate to the home page ("/")
  };

  return (
    <div
      className="flex items-center justify-center h-screen text-white bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/Rectangle 79.jpg')", // Background image URL
        backgroundColor: "#000000B5", // Full background color with opacity
      }}
    >
      {/* Centered container with full height */}
      <div className="flex items-center justify-center w-full h-full text-center bg-black bg-opacity-50 rounded-md">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl font-poppins">
            COMING SOON
          </h1>
          <span className="inline-block px-4 py-2 mb-6 font-semibold text-black bg-white rounded-full">
            Under Construction
          </span>
          <p className="max-w-md mx-auto mb-6 text-sm font-poppins sm:text-base md:text-lg">
            Our website is under construction, but we are ready to go! We are preparing something amazing and exciting for you. Special surprise for our subscribers only.
          </p>
          {/* Button with the icon and navigation on click */}
          <button
            onClick={handleNavigation} // Navigate on click
            className="px-6 py-2 font-semibold text-black transition bg-white rounded-full hover:bg-gray-300"
          >
            <FaArrowLeft /> {/* React Icon for Left Arrow */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
