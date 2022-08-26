import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(window.screen.width);
  const [count2, setCount2] = useState(window.screen.height);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCount(window.screen.width);
      setCount2(window.screen.height);
    });
  });
  return (
      <>
    <div className="app">
      <h1>Your Screen Width is <strong style={{color:"red"}}>{count}</strong></h1>
      <br></br>
      <br></br>
      <h1 >Your Screen Height is <strong style={{color:"red"}}>{count2}</strong></h1>
    </div>;
  </>
  );
}

export default App;