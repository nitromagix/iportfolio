import React from "react";

import "./App.css";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Bar from "./components/navbar";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Bar />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
