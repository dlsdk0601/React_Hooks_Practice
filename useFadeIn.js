import React, { useState, useEffect, useRef } from "react";
import './App.css';

  const useFadeIn = (duration = 1. delay = 0) => {
    // if(typeof duration !==  "number || typeof delay !== "number"){
    //   return;
    // }
    const element = useRef();
    useEffect( () => {
      if(element.current){
        const { current } = element;
        current.style.transition = `opacity ${duration }s ease-in-out ${delay}`;
        current.style.opacity = 1;
      }
    }, []);
    return { ref: element,  style: {opacity: 0} }
  }


function App() {
  const fadeInh1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);  
  return (
    <div className="App">
      <h1 {...fadeInh1} >Hi</h1>
      <p {...fadeInP} >lorem ipsum lalalalalala</p>
    </div>
  );
}

export default App;
