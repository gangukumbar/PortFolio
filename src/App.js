import React from "react";
import SocialLinks from "./components/SocialLinks";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />

      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </>
  );
};

export default App;
