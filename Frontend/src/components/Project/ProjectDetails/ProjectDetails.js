import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick"; // Import Slider from react-slick
import Navbar from "../../NavBar";
import Footer from "../../Footer";
import Title from "./Project_Title";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState("images");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/projects_web_image_video/${id}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.error("Error fetching project details:", error));
  }, [id]);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 rounded-full spinner-border animate-spin border-t-customGreen"></div>
          <p className="text-lg font-semibold text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Truncate text if necessary
  const shouldShowToggle = project.description.length > 150;
  const truncatedText = project.description.substring(0, 150);
  const toggleText = () => setIsExpanded(!isExpanded);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div>
      <Navbar />
      <Title />

      <div className="container p-8 mx-auto">
        {/* Two-column layout */}
        <div className="grid max-w-screen-xl grid-cols-1 gap-12 px-4 py-8 mx-auto md:grid-cols-2 lg:gap-16">
          {/* Left Column: Project Details */}
          <div className="flex flex-col space-y-6 text-center md:text-left">
            {/* Project Name */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <span className="text-lg font-semibold text-gray-700 sm:text-xl">Project Name:</span>
              <span className="text-base font-bold text-gray-900 sm:text-xl">{project.project_name}</span>
            </div>

            {/* Project Category */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <span className="text-lg font-semibold text-gray-700 sm:text-xl">Project Category:</span>
              <span className="text-base font-bold text-gray-900 sm:text-xl">{project.category_name}</span>
            </div>

            {/* Client Name */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <span className="text-lg font-semibold text-gray-700 sm:text-xl">Client Name:</span>
              <span className="text-base font-bold text-gray-900 sm:text-xl">{project.client_name}</span>
            </div>

            {/* Project Description */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
              <span className="text-lg font-semibold text-gray-700 sm:text-xl">Project Description:</span>
              <p className="text-base font-medium text-justify text-gray-900 sm:text-lg">
                {shouldShowToggle
                  ? isExpanded
                    ? project.description
                    : `${truncatedText}...`
                  : project.description}
                {shouldShowToggle && (
                  <button
                    onClick={toggleText}
                    className="ml-2 text-sm font-medium text-blue-600 hover:underline"
                  >
                    {isExpanded ? "Show less" : "Show more"}
                  </button>
                )}
              </p>
            </div>
          </div>

          {/* Right Column: Main Project Image */}
          <div className="flex items-center justify-center">
            <img
              src={project.project_image}
              alt="Project"
              className="object-cover w-full h-auto max-w-md transition-transform transform shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>

        {/* Tab Section */}
        <div className="mt-12">
          <div className="flex flex-col border-b md:flex-row md:space-x-4">
            <button
              className={`pb-2 text-lg font-medium ${
                activeTab === "images"
                  ? "border-b-2 border-customGreen text-customGreen"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("images")}
            >
              Images
            </button>
            <button
              className={`pb-2 text-lg font-medium ${
                activeTab === "videos"
                  ? "border-b-2 border-customGreen text-customGreen"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("videos")}
            >
              Videos
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "images" && (
              <>
                {/* Slider for mobile view */}
                <div className="block md:hidden">
                  <Slider {...sliderSettings}>
                    {project.images.map((image) => (
                      <img
                        key={image.image_id}
                        src={image.image_url}
                        alt="Project"
                        className="object-cover w-full h-auto rounded-lg shadow-md"
                      />
                    ))}
                  </Slider>
                </div>

                {/* Grid for desktop view */}
                <div className="hidden grid-cols-1 gap-4 md:grid sm:grid-cols-2 md:grid-cols-3">
                  {project.images.map((image) => (
                    <img
                      key={image.image_id}
                      src={image.image_url}
                      alt="Project"
                      className="object-cover w-full h-56 transition-transform transform rounded-lg shadow-md hover:scale-105"
                    />
                  ))}
                </div>
              </>
            )}
            {activeTab === "videos" && (
              <>
                {/* Slider for mobile view */}
                <div className="block md:hidden">
                  <Slider {...sliderSettings}>
                    {project.videos.map((video) => (
                      <video
                        key={video.video_id}
                        controls
                        className="object-cover w-full h-auto transition-transform transform rounded-lg shadow-md"
                      >
                        <source src={video.video_url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ))}
                  </Slider>
                </div>

                {/* Grid for desktop view */}
                <div className="hidden grid-cols-1 gap-4 md:grid sm:grid-cols-2 md:grid-cols-3">
                  {project.videos.map((video) => (
                    <video
                      key={video.video_id}
                      controls
                      className="object-cover w-full h-auto transition-transform transform rounded-lg shadow-md"
                    >
                      <source src={video.video_url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
