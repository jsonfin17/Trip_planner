import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import PreferenceForm from "./components/PreferenceForm";
import { Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-secondary");
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choosePreference" element={<PreferenceForm />} />
      </Routes>
    </>
  );
}

export default App;
