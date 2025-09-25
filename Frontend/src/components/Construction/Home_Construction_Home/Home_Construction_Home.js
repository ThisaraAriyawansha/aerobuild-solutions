import React, { useEffect } from "react"; // Import useEffect hook
import Navbar from "../../NavBar";
import Footer from "../../Footer";
import Villa_Construction_Home_1 from "./Home_Construction_Home_1";


const Home = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
    <Navbar />
     <Villa_Construction_Home_1/>
    <Footer/>

    </div>
  );
};

export default Home;