//importing components
import Footer from "../src/components/footer-component/FooterComponent";
// import Header from "./components/header-component/HeaderComponent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import SideBar from "./components/sideBar-component/SideBar";


import "./App.css";
import { useState } from "react";

//importing images
// import open from "./images/Open.jpg"

import Navbar from "./components/NewHeader/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import FrontPageContent from "./components/frontPage/FrontPageContent";
import GolfView from "./components/currentProjects/GolfView";
import FortView from "./components/currentProjects/FortView";
import LakeView from "./components/currentProjects/LakeView";
import TempleView from "./components/currentProjects/TempleView";
import ThemeCresta from "./components/futureProjects/ThemeCresta";
import ThemeFort from "./components/futureProjects/ThemeFort";
import Contact from "./components/contact/Contact";
import Feedback from "./components/feedback/Feedback";
import CompletedProjects from "./components/completedProjects/CompletedProjects";
import Project from "./components/currentProjects/Project";


function App() {
  const [footer, setFooter] = useState(false);
  const [burgerButton, setBurgerButton] = useState(true);
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<FrontPageContent/>} />
            <Route exact path="/about" element={<AboutUs/>} />
            <Route exact path="/GolfView" element={<GolfView/>} />
            <Route exact path="/FortView" element={<FortView/>} />
            <Route exact path="/LakeView" element={<LakeView/>} />
            <Route exact path="/TirupatiTempleTown" element={<TempleView/>} />
            <Route exact path="/ThemeFortVista" element={<ThemeFort/>} />
            <Route exact path="/ThemeCrest" element={<ThemeCresta/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/feedback" element={<Feedback/>} />
            <Route exact path="/comProjects" element={<CompletedProjects/>} />
            <Route exact path="/project" element={<Project/>} />

          </Routes>
      </Router>
      {/* <Header burgerButton={burgerButton} setBurgerButton={setBurgerButton} /> */}

      {!burgerButton && <SideBar />}

      <div className="components" id={!burgerButton&&"no-scroll"}>
        

       
        <div onClick={() => setFooter(!footer)} className="footer-text">
          {footer ? (
            <div>
              Less <i className="fas fa-angle-up "></i>
            </div>
          ) : (
            <div style={{ marginTop: '3rem'}}>
              More <i className="fas fa-angle-down"></i>
            </div>
          )}
        </div>
      </div>
      {footer && <Footer />}
    </div>
  );
}

export default App;
