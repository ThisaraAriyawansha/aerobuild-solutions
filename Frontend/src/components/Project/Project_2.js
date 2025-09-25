import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const settings = {
  dots: false, // Remove dots on mobile
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Only show one card at a time
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: false, // Ensure no center mode to avoid partial cards on the sides
  focusOnSelect: true, // Ensure focus on selecting the card
  arrows: true, // Enable arrows for mobile for easy navigation
  responsive: [
    {
      breakpoint: 768, // Mobile view settings
      settings: {
        slidesToShow: 1, // Show only 1 slide at a time on mobile
        slidesToScroll: 1,
        centerMode: false, // Disable center mode for mobile view
        infinite: true, // Allow infinite scrolling on mobile
        dots: false, // Remove dots for better mobile experience
        arrows: true, // Ensure arrows are available for navigation
      },
    },
  ],
};

const OngoingProjects = () => {
  const [projects, setProjects] = useState([]); // useState is now inside the component
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const projectsPerPage = 6; // Limit to 6 cards per page for desktop

  useEffect(() => {
    fetch("http://localhost:8000/projects_web") // Replace with your actual API URL
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  // Calculate the index of the first and last project to display (for desktop pagination)
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Function to handle page change for desktop pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-10 lg:p-16 bg-gray-50">
      <div className="container px-4 mx-auto lg:px-16">
        <h2 className="mb-4 text-3xl text-center text-black font-poppins">Projects</h2>
        <p className="mb-10 text-center text-black font-poppins">
          This is a brief description of the project, explaining the goals,
          purpose, and unique features of the project.
        </p>

        <div>
          {/* Desktop view: Show grid with pagination */}
          <div className="hidden grid-cols-1 gap-6 md:grid sm:grid-cols-2 md:grid-cols-3">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="mx-4 overflow-hidden transition bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <img
                  src={project.project_image} // Use the provided image URL
                  alt={project.project_name}
                  className="object-cover w-full h-48"
                />
                <div className="p-4 text-center">
                  <h3 className="mb-2 text-lg text-black font-poppins">{project.project_name}</h3>
                  <button className="px-4 py-2 text-white bg-customGreen font-poppins">
                  <Link to={`/projectDetails/${project.id}`}>View All Images</Link>
                </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view: Show all cards in a slider */}
          <div className="w-full md:hidden slider-container">
            <Slider {...settings}>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full mx-0 overflow-hidden transition bg-white rounded-lg shadow-md hover:shadow-lg"
                >
                  <img
                    src={project.project_image} // Use the provided image URL
                    alt={project.project_name}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-4 text-center">
                    <h3 className="mb-2 text-lg text-black font-poppins">{project.project_name}</h3>
                    <button className="px-4 py-2 text-white bg-customGreen font-poppins">
                      <Link to={`/projectDetails/${project.id}`}>View All Images</Link>
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Pagination for Desktop */}
        <div className="items-center justify-center hidden mt-8 space-x-2 md:flex">
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="px-4 py-2 text-white rounded-full bg-customGreen">
            {currentPage}
          </span>
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage * projectsPerPage >= projects.length}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OngoingProjects;
