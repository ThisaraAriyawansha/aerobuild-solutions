import React, { useEffect } from "react"; // Import useEffect hook
import Navbar from "../../NavBar";
import Footer from "../../Footer";
import Villa_Construction_1 from "./Villa_Construction_1";
import Villa_Construction_2 from "./Villa_Construction_2";


const Villa = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
    <Navbar />
     <Villa_Construction_1/>
     <Villa_Construction_2/>
    <Footer/>

    </div>
  );
};

export default Villa;