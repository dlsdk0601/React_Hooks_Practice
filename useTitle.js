import React, { useState, sueEffect, useEffect } from "react";
import './App.css';


const useTitle = (inituialTitle) => {
  const [title, setTitle] = useState(inituialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title]);
  return setTitle;
}
function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout( () => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}

export default App;
