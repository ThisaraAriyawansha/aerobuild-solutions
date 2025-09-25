import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutUs/AboutUs";
import Navbar from "./components/NavBar";
import ContactUs from "./components/ContactUs/ContactUs";
import Project from "./components/Project/Project";
import VillaConstruction from "./components/Construction/Villa_Construction/Villa_Construction";
import CabanaConstruction from "./components/Construction/Cabana_Construction/Cabana_Construction";
import LandscapeConstruction from "./components/Construction/Landscape_Construction/Landscape_Construction";
import ContactUs_1 from "./components/ContactUs/ContactUs_1";
import Villa_Construction_Home from "./components/Construction/Villa_Construction_Home/Villa_Construction_Home";
import Cabana_Construction_Home from "./components/Construction/Cabana_Construction_Home/Cabana_Construction_Home";
import Home_Construction_Home from "./components/Construction/Home_Construction_Home/Home_Construction_Home";
import Services from "./components/Services/Services_New";
import ProjectDetails from "./components/Project/ProjectDetails/ProjectDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/villaConstruction" element={<VillaConstruction />} />
        <Route path="/cabanaConstruction" element={<CabanaConstruction />} />
        <Route path="/landscapeConstruction" element={<LandscapeConstruction />} />
        <Route path="/landscapeConstruction" element={<LandscapeConstruction />} />
        <Route path="/contactUs_1" element={<ContactUs_1 />} />
        <Route path="/Villa_Construction_Home" element={<Villa_Construction_Home />} />
        <Route path="/Cabana_Construction_Home" element={<Cabana_Construction_Home />} />
        <Route path="/Home_Construction_Home" element={<Home_Construction_Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projectDetails/:id" element={<ProjectDetails />} />





      </Routes>
    </Router>
  );
}


export default App;
