import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import PreferencePage from "./pages/PreferencePAge";
import { Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-secondary");
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choosePreference" element={<PreferencePage />} />
      </Routes>
    </>
  );
}

export default App;
