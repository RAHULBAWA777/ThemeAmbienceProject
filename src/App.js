//importing components

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import { useState } from "react";

//importing images

import Navbar from "./components/NewHeader/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import FrontPageContent from "./components/frontPage/FrontPageContent";
// import GolfView from "./components/currentProjects/GolfView";
// import FortView from "./components/currentProjects/FortView";
// import LakeView from "./components/currentProjects/LakeView";
import TempleView from "./components/currentProjects/TempleView";
import ThemeCresta from "./components/futureProjects/ThemeCresta";
import ThemeFort from "./components/futureProjects/ThemeFort";
import Contact from "./components/contact/Contact";
import CompletedProjects from "./components/completedProjects/CompletedProjects";
import Project from "./components/currentProjects/Project";


function App() {

  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<FrontPageContent/>} />
            <Route exact path="/about" element={<AboutUs/>} />
            {/* <Route exact path="/GolfView" element={<GolfView/>} />
            <Route exact path="/FortView" element={<FortView/>} />
            <Route exact path="/LakeView" element={<LakeView/>} /> */}
            <Route exact path="/TirupatiTempleTown" element={<TempleView/>} />
            <Route exact path="/ThemeFortVista" element={<ThemeFort/>} />
            <Route exact path="/ThemeCrest" element={<ThemeCresta/>} />
            <Route exact path="/contact" element={<Contact/>} />
            {/* <Route exact path="/feedback" element={<Feedback/>} /> */}
            <Route exact path="/comProjects" element={<CompletedProjects/>} />
            <Route exact path="/project" element={<Project/>} />

          </Routes>
      </Router>

     

    </div>
  );
}

export default App;
