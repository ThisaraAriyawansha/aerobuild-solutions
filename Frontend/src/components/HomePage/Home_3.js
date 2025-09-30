import React, { useEffect, useRef } from "react";
import videoFile from "../../assets/video/Hailuo_Video_A cinematic walkthrough video _429326458000150530.mp4";

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

  const videoUrl = {videoFile}

  return (
    <div className="sm:mb-10">
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
      <source src={videoFile} type="video/mp4" />         
        </video>
      </div>
    </div>
  );
};

export default Video;