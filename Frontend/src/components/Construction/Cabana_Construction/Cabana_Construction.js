import React, { useEffect } from "react"; // Import useEffect hook
import Navbar from "../../NavBar";
import Footer from "../../Footer";
import Cabana_Construction_1 from "./Cabana_Construction_1";
import Cabana_Construction_2 from "./Cabana_Construction_2";


const Cabana = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []); 

  return (
    <div>
    <Navbar />
     <Cabana_Construction_1/>
     <Cabana_Construction_2/>
    <Footer/>

    </div>
  );
};

export default Cabana;