import React, { useState, useEffect} from "react"
import './App.css';

const usePreventLeave = () => {
  const listener = (event) =>{
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disenablePrevent = () => window.removeEventListener("beforeunload", listener);
    
  return {enablePrevent, disenablePrevent};
}

function App() {
  const { enablePrevent, disenablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disenablePrevent}>Unprotect</button>
    </div>
  );
}

export default App;
