import { useState, useRef } from "react";
import Slider from "../components/Slider";

function PreferenceForm() {
  const activities = ["Hiking", "Swimming", "Karoke", "Run", "Walk", "Fishing"];

  const handleButtonClick = () => {
    window.location.href = "http://localhost:5173/events"; // Replace with your desired URL
  };

  return (
    <div className="place-self-center w-2/4 mt-6 px-4 py-2 text-gray-700 uppercase bg-secondary rounded-2xl shadow-lg shadow-indigo-500/40">
      {activities.map((activityName, index) => {
        return <Slider activityName={activityName} key={index} />;
      })}
      <button
        className="w-full mt-6 text-center py-3 rounded bg-cyan-600 text-white hover:bg-green-dark focus:outline-none my-1"
        onClick={handleButtonClick}
      >
        Submit
      </button>
    </div>
  );
}

export default PreferenceForm;
