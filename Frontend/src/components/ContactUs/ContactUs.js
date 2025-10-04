import React, { useEffect } from "react"; // Import useEffect hook
import Navbar from "../NavBar";
import Footer from "../Footer";
import ContactUs_1 from "./ContactUs_1";
import ContactUs_2 from "./ContactUs_2";

const ContactUs = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <Navbar />
      <ContactUs_2 />
      <Footer />
    </div>
  );
};

export default ContactUs;
