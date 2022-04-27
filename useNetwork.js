import React, { useState, useEffect, useRef } from "react";
import './App.css';

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if(typeof onChange === "function"){
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine)
  };
  useEffect( () => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
    window.removeEventListener("offline", handleChange);
    } 
  }, [])
  return status;
}

function App() {
  const handleNetworkChange = (online) => {
    console.log(onlien ? "we just went online" : "we are on Online");
  }
  const onLine = useNetwork();
  return (
    <div className="App">
      <h1>{ onLine ? "Online" : "offline" }</h1>
    </div>
  );
}

export default App;
