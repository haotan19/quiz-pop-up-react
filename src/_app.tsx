// index.tsx
import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./Quiz";
import './styles/globals.css'

console.log("Hello from tsx!");

ReactDOM.render(
  <section className={"quiz-wrapper"}>
    <Quiz></Quiz>
  </section>,
  document.getElementById("root")
);
