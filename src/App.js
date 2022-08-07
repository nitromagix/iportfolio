import React from "react";

import "./App.css";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Bar from "./components/navbar";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Empty from "./components/Empty";

function App() {
  return (
    <div className="App">
      <Bar />
      <Home />
      <Experience />
      <Portfolio />
      <Contact />
      <Empty />
    </div>
  );
}

export default App;
