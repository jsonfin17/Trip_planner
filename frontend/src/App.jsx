import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import PreferencePage from "./pages/PreferencePAge";
import { Routes, Route } from "react-router-dom";
import EventsPage from "./pages/EventsPage";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-background");
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preference" element={<PreferencePage />} />
        <Route path="/events" element={<EventsPage />} />"
      </Routes>
    </>
  );
}

export default App;
