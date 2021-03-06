import React, { useState, useEffect } from "react";

const App = () => {
    const sayHello = () => {
        console.log("hello");
    }
    useEffect( () => {
        sayHello();
    }, [number]);
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);

    return (
        <div className="App">
            <div>Hi</div>
            <button onClick={() => setAnumber(number + 1)}>{number}</button>
            <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
        </div>
    )
}

export default App; 