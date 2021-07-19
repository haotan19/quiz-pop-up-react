// index.tsx
import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./Quiz";
import './styles/globals.css'

console.log("Hello from tsx!");

ReactDOM.render(
  <div>
    <Quiz></Quiz>
  </div>,
  document.getElementById("root")
);
