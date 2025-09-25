import React, { useEffect } from "react"; // Import useEffect hook
import Navbar from "../../NavBar";
import Footer from "../../Footer";
import Landscape_Construction_1 from "./Landscape_Construction_1";
import Landscape_Construction_2 from "./Landscape_Construction_2";
import Landscape_Construction_3 from "./Landscape_Construction_3";


const Landscape = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []); 

  return (
    <div>
    <Navbar />
     <Landscape_Construction_1/>
     <Landscape_Construction_2/>
     <Landscape_Construction_3/>
    <Footer/>

    </div>
  );
};

export default Landscape;