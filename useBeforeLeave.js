import React, { useState, useEffect } from "react";
import './App.css';

const useBeforeLeave = (onBefore) =>{
  // if(typeof onBefore !== "function"){
  //   return;
  // }
  useEffect( () => {
    const handle = (event) => {
      const { clientY } = event;
      if(clientY <= 0) onBefore();
    }
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, [])
}


function App() {
  const begForLife = () => console.log("plz don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
