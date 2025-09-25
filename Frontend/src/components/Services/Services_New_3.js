import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion"; // Importing motion

function KandalamaHomes() {
  const [activeTab, setActiveTab] = useState("Housing Constructions");

  const tabContent = {
    "Housing Constructions": {
      title: "Housing Construction",
      description:
        "Your dream home begins here. At Kandalama Homes, we design and build spaces that are more than just houses—they're sanctuaries of comfort and style. Combining premium materials, eco-friendly practices, and meticulous craftsmanship, we create homes that stand the test of time and feel uniquely yours.",
      image: "/images/29450b5e5710977a15d5fc7ebf25b25d.jpeg",
    },
    "Cabana Constructions": {
      title: "Cabana Construction",
      description:
        "Escape to tranquility with our bespoke cabanas. Crafted to blend seamlessly with nature, our cabanas offer a perfect retreat, combining rustic charm with modern amenities for ultimate relaxation.",
      image: "/images/Rectangle 88.jpg",
    },
    "Building Constructions": {
      title: "Building Construction",
      description:
        "From office spaces to multi-story complexes, Kandalama Homes delivers building projects that stand as a testament to innovation, sustainability, and cutting-edge design.",
      image: "/images/Rectangle 77.jpg",
    },
    "Warehouse Constructions": {
      title: "Warehouse Construction",
      description:
        "Optimize your business with our expertly designed warehouses. Built for efficiency and durability, our warehouses are tailored to meet your specific operational needs.",
      image: "/images/Rectangle 88 (1).jpg",
    },
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const tabKeys = Object.keys(tabContent);
      const currentIndex = tabKeys.indexOf(activeTab);
      const nextTab = tabKeys[(currentIndex + 1) % tabKeys.length];
      setActiveTab(nextTab);
    },
    onSwipedRight: () => {
      const tabKeys = Object.keys(tabContent);
      const currentIndex = tabKeys.indexOf(activeTab);
      const prevTab = tabKeys[(currentIndex - 1 + tabKeys.length) % tabKeys.length];
      setActiveTab(prevTab);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white">
      <div className="w-screen">
        <div className="flex flex-col items-center justify-center">
          <div
            {...handlers}
            className="flex flex-col max-w-6xl mb-10 md:flex-row md:items-start md:justify-between"
          >
            <div className="flex-1">
              <motion.div
                className="w-full h-72 md:h-80"
                key={activeTab}
                initial={{ opacity: 0, y: 50 }} // Initial position below
                animate={{ opacity: 1, y: 0 }}  // Slide up to normal position
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25, // Smooth bounce effect
                  duration: 0.8,
                }}
              >
                <img
                  src={tabContent[activeTab].image}
                  alt={tabContent[activeTab].title}
                  className="object-cover w-full h-full rounded-none"
                />
              </motion.div>
            </div>

            <div className="flex-1 md:pl-8 bg-[#005A4E26] w-full h-72 md:h-80 sm:rounded-tr-lg sm:rounded-br-lg p-8 text-center sm:text-left">
              <motion.h2
                className="mb-4 text-xl font-semibold sm:text-2xl text-customGreen font-prata"
                initial={{ opacity: 0, y: -50 }} // Start from above
                animate={{ opacity: 1, y: 0 }}  // Slide down to normal position
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  duration: 0.7,
                }}
              >
                {tabContent[activeTab].title}
              </motion.h2>
              <motion.p
                className="text-xs leading-relaxed text-justify text-black sm:text-base font-poppins"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {tabContent[activeTab].description}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Tabs for larger screens */}
        <div className="justify-between hidden w-screen px-4 bg-customGreen sm:px-8 md:px-16 lg:px-32 sm:flex">
  {Object.keys(tabContent).map((tab) => (
    <motion.button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`px-6 py-5 font-medium text-sm md:text-base focus:outline-none transition-all duration-300 ease-in-out border-b-2 font-poppins rounded-lg ${
        activeTab === tab
          ? "text-white border-green-800"
          : "text-gray-500 border-transparent hover:text-green-600 hover:border-green-600"
      }`}
      whileHover={{
        scale: 1.05, // Slightly scale up on hover
        textShadow: "0px 0px 10px rgba(255, 255, 255, 0.6)", // Soft text shadow
      }}
      whileTap={{ scale: 0.95 }} // Slight shrink effect on tap
    >
      {tab}
    </motion.button>
  ))}
</div>


        {/* Dots for mobile screens */}
        <div className="flex justify-center w-screen py-1 sm:hidden">
          {Object.keys(tabContent).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`mx-6 w-3 h-3 rounded-full transition-all duration-200 ${
                activeTab === tab
                  ? "bg-green-800"
                  : "bg-gray-400 hover:bg-green-600"
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.5, rotate: 90 }} // Rotate and scale on hover
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default KandalamaHomes;
