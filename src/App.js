import React from 'react';
import Bar from './components/navbar'; 
import About from  './components/aboutme';
import Education from './components/education';
import "./App.css";


function App() {
  return (
    <div className="App">
      <Bar/>
      <About />
      <Education />
    </div>
  );
}

export default App;