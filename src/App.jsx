import { useState, useCallback } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import ParticlesComponent from "./components/utils/particles";
import Navbar from "./components/navBar";
import Home from "./containers/home";
import Resume from "./containers/resume";
import About from "./containers/about";
import Skills from "./containers/skills";
import Contact from "./containers/contact";
import "./app.scss";
import "./index.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/" && <ParticlesComponent id="particles" />}

      <Navbar />
      <div className="App-main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
