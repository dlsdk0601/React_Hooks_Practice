import React, { useState, useEffect, useRef } from "react";
import './App.css';
import Logo from "./logo.svg";

const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if(element.current){
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  }
  return { element, triggerFull, exitFull };
}

function App() {
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div className="App" style={ {height: "50vh"} }>
      <div ref={element}>
        <img src={Logo} alt="ddd" style={ {height: "100%", width: "100%" } } />
      </div>
      <button onClick={triggerFull} >Make FullScreen</button>
      <button onClick={exitFull} >Make unFullScreen</button>
    </div>
  );
}

export default App;
