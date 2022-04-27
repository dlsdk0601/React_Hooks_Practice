import React, { useState, useEffect} from "react"
import './App.css';

const useConfirm = (message ="", onConfirm, onCancel) => {
  // if(!onConfirm || typeof onConfirm !== "function"){
  //   retrun;
  // }
  // if(onCancel || typeof onCancel !== "function"){
  //   retrun;
  // }
  const confirmAction = () => {
    if( window.confirm(message) ){
      onConfirm();
    }else{
      onCancel();
    }
  }
  return confirmAction;
}

function App() {

  const deleteWorld = () => console.log("Deleting the World...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the World?</button>
    </div>
  );
}

export default App;
