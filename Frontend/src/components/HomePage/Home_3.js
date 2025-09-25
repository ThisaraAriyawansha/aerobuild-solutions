import React, { useEffect, useRef } from "react";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play().catch((err) => {
            console.error("Failed to play video:", err);
          });
        } else {
          videoElement.pause();
        }
      },
      { threshold: 0.5 } // Play when 50% of the video is in view
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const videoUrl = "/images/-9d79-4e22-a4eb-9c980600b937.mp4"; // Replace with your video URL

  return (
    <div className="mt-10 mb-20 sm:mb-10">
      <div
        className="p-0 mb-10 md:p-20 video-container"
        style={{
          width: "100%",
          overflow: "hidden",
          margin: "0 auto",
          maxWidth: "1800px",
        }}
      >
        <video
          ref={videoRef}
          className="w-full"
          loop
          muted
          preload="auto"
          style={{
            width: "100%", // Full width
            height: "auto", // Flexible height
            maxHeight: "500px", // Max height for PC
            objectFit: "cover", // Ensure video covers the area without distortion
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;