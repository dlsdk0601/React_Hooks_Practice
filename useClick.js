import React, { useState, useEffect, useRef} from "react";
import './App.css';

const useClick = (onClick) => {
  const element = useRef();
  useEffect( () => {
    if(element.current){
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if(element.current){
        element.current.removeEventListener("click", onClick);
      }
    }
  }, []);
  return element;
} 

function App() {
  // const potato = useRef(); useRef 는 getElementById 같은 애임. 여기서는 input 태그의 정보를 가져옴.
  // setTimeout( () => potato.current.focus(), 5000); 
  
  const seyHello = () => {
    console.log("say Hello");
  }
  const title = useClick(seyHello);
  return (

    <div className="App">
      <h1 ref={title}>Hi</h1>
      {/* <input ref={potato} placeholder="la" /> */}
    </div>
  );
}

export default App;
