import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-secondary");
  }, []);

  return (
    <>
      <div className="bg-secondary">
        <h1 className="text-primary">Travel-Planner</h1>
        <Form />
      </div>
    </>
  );
}

export default App;
