

import React, { useEffect } from "react";

import "./App.css";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Bar from "./components/navbar";
import Experience from "./components/Experience";
import Home from "./components/Home";
import About from  './components/aboutme';
import Education from './components/education';
import Empty from "./components/Empty";


function App() {

  return (
    <div className="App">
      <Bar />
      <Home />
      <About />
      <Education />
      <Portfolio />
      <Contact />
      <Empty />
    </div>
  );
}

export default App;
