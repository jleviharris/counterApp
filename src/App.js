import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const subtract = () => {
    setCounter(counter - 1);
  };
  const add = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Counter App</h1>
        <div className="counter">{counter}</div>

        <br />
        <ul>
          <li>
            <button className="subtractBttn" onClick={subtract}>
              SUBTRACT
            </button>
          </li>
          <li>
            <button className="resetBttn" onClick={reset}>
              RESET
            </button>
          </li>
          <li>
            <button className="addBttn" onClick={add}>
              ADD
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
