import React from "react";

import "./App.css";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Bar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Bar />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
