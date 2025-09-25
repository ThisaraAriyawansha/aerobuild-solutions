import React, { useState } from "react";
import Slider from "react-slick";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Only show one card at a time
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: false, // Ensure no center mode to avoid partial cards on the sides
  focusOnSelect: true, // Ensure focus on selecting the card
  arrows: false, // Disable arrows
  responsive: [
    {
      breakpoint: 768, // Mobile view settings
      settings: {
        slidesToShow: 1, // Show only 1 slide at a time on mobile
        slidesToScroll: 1,
        centerMode: false, // Disable center mode for mobile view
        infinite: true, // Allow infinite scrolling on mobile
      },
    },
  ],
};


const settingsMore = {
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
  responsive: [
    {
      breakpoint: 768, // Mobile view settings
      settings: {
        slidesToShow: 1, // Show only 1 slide at a time on mobile
        slidesToScroll: 1,
        centerMode: false, // Disable center mode for mobile view
        infinite: true, // Allow infinite scrolling on mobile
      },
    },
  ],
};



const projects = [
    {
      name: "H. Perera",
      images: [
        "/images/178b09012c8add2e85fab7ae2e78bec1.jpeg",
       
      ]
    },
    {
      name: "H.M.K Silva",
      images: [
        "/images/c6e6176dc948a4a667f9f85b9d4f3d38.jpeg"
      ]
    },
    {
      name: "Harendra Senarathna",
      images: [
        "/images/29450b5e5710977a15d5fc7ebf25b25d.jpeg",
        "/images/Rectangle 70.jpg",
        "/images/Rectangle 71.jpg",
        "/images/Rectangle 72.jpg",
        "/images/Rectangle 73 (1).png",
        "/images/Rectangle 74.jpg",
      ]
    },
    {
      name: "H.G Kanishkarandi",
      images: [
        "/images/a938a712a5397c41bbddbd2a80bed293.jpeg"
      ]
    }
  ];
  

const OngoingProjects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewAllImagesClick = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="p-16 bg-gray-50">
      <div className="container px-4 mx-auto lg:px-16">
        <h2 className="mb-20 text-3xl text-center text-black font-poppins ">Maintains Projects</h2>


        <div>
      {/* Desktop view: Show grid */}
      <div className="hidden grid-cols-1 gap-6 md:grid sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mx-4 overflow-hidden transition bg-white rounded-lg shadow-md hover:shadow-lg"
          >
            <img
              src={project.images[0]} // Use the first image as a thumbnail
              alt={project.name}
              className="object-cover w-full h-48"
            />
            <div className="p-4 text-center">
              <h3 className="mb-2 text-lg text-black font-poppins">{project.name}</h3>
              <button
                className="px-4 py-2 text-white bg-customGreen font-poppins"
                onClick={() => handleViewAllImagesClick(project)}
              >
                View All Images
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view: Show slider */}
      <div className="w-full md:hidden slider-container">
  <Slider {...settings}>
    {projects.map((project, index) => (
      <div
        key={index}
        className="w-full mx-0 overflow-hidden transition bg-white rounded-lg shadow-md hover:shadow-lg"
      >
        <img
          src={project.images[0]} // Use the first image as a thumbnail
          alt={project.name}
          className="object-cover w-full h-48"
        />
        <div className="p-4 text-center">
          <h3 className="mb-2 text-lg text-black font-poppins">{project.name}</h3>
          <button
            className="px-4 py-2 text-white bg-customGreen font-poppins"
            onClick={() => handleViewAllImagesClick(project)}
          >
            View All Images
          </button>
        </div>
      </div>
    ))}
  </Slider>
</div>


    </div>

    {isPopupOpen && selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    {/* Modal Container */}
    <div className="relative sm:bg-white bg-transparent p-6 rounded-lg shadow-xl w-11/12 sm:w-2/4 md:w-2/4 lg:w-1/3 max-w-3xl max-h-[80vh] overflow-auto">

      {/* Close Button (Desktop Version) */}
      <button
        onClick={handleClosePopup}
        className="absolute hidden p-2 text-white bg-red-600 rounded-full top-4 right-4 hover:bg-red-700 md:block"
      >
        X
      </button>

      {/* Header with Red Container */}
      {/* Header with Red Container */}
      <div className="p-2 text-white rounded-t-lg sm:text-black">
        <h2 className="text-xl text-center font-poppins">{selectedProject.name} - Images</h2>
      </div>

      {/* Desktop View: Grid Layout */}
      <div className="hidden grid-cols-2 gap-4 mt-4 sm:grid sm:grid-cols-3">
        {selectedProject.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${selectedProject.name} Image ${index + 1}`}
            className="object-contain w-full h-auto"
          />
        ))}
      </div>



      

{/* Mobile View Modal: Slider (One Image at a Time) */}
<div className="w-full md:hidden max-h-[50vh] relative bg-white"> {/* Reduced max-height for smaller view */}

  {/* Close Button (Mobile Version) */}
  <button
    onClick={handleClosePopup}
    className="w-6 h-6 p-1 text-white bg-red-600 rounded-full top-2 right-2 hover:bg-red-700 focus:outline-none"
  >
    {/* Close icon using FontAwesome (you can also use another icon library or SVG) */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 10.586L16.707 6.879l1.414 1.414L13.414 12l4.707 4.707-1.414 1.414L12 13.414l-4.707 4.707-1.414-1.414L10.586 12 5.879 7.293l1.414-1.414L12 10.586z"/>
    </svg>
  </button>

  {/* Slider Container */}
  <div className="w-10/12 mx-auto mt-2 max-h-[40vh] overflow-hidden items-center justify-center  bg-opacity-20 rounded-lg ">
    {/* bg-opacity-20: reduces the white background to 20% opacity */}
    {selectedProject.images.length > 1 ? (
      <Slider {...settingsMore}>
        {selectedProject.images.map((image, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={image}
              alt={`${selectedProject.name} Image ${index + 1}`}
              className="object-contain w-full max-w-[100%] max-h-[35vh] items-center justify-center"
            />
          </div>
        ))}
      </Slider>
    ) : (
      <div className="flex items-center justify-center">
        <img
          src={selectedProject.images[0]}
          alt={`${selectedProject.name} Image`}
          className="object-contain w-full max-w-[85%] max-h-[35vh] items-center justify-center"
        />
      </div>
    )}
  </div>
</div>





      

      
    </div>
  </div>
)}







      </div>

            {/* Pagination */}
            <div className="items-center justify-center hidden mt-8 space-x-2 md:flex">
  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
    <i className="fas fa-chevron-left"></i>
  </button>
  <span className="px-4 py-2 text-white rounded-full bg-customGreen">1</span>
  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
    <i className="fas fa-chevron-right"></i>
  </button>
</div>




    </div>
  );
};

export default OngoingProjects;
