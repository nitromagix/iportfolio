import React from "react";

import "./App.css";
import Portfolio from "./components/Portfolio";
import Bar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Bar />
      <Portfolio />
    </div>
  );
}

export default App;
