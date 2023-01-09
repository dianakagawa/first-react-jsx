import React from "react";
import {ToDo} from "./components/ToDoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Hello Dojo!</h1>
      <h2> Things I need to do:</h2>
      {ToDo()}
    </div>
  );
}

export default App;
