import React, { useEffect } from "react"; // Import useEffect hook
import Navbar from "../NavBar";
import Footer from "../Footer";
import ContactUs_1 from "./ContactUs_1";
import AboutUs_4 from "../AboutUs/AboutUs_4";

const ContactUs = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <Navbar />
      <ContactUs_1 />
      <AboutUs_4 />
      <Footer />
    </div>
  );
};

export default ContactUs;
