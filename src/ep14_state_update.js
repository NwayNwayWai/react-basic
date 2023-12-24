import React from "react";
import { useState } from "react";

export default function Appep14() {
  let [count, setCount] = useState(0);

  let increment = () => {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };
  return (
    <div className="app">
      <h1>Counter</h1>
      <h3>Count - {count}</h3>
      <button onClick={increment}>increment</button>
    </div>
  );
}
