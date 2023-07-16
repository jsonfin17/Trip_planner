import { useState, useRef } from "react";
import Slider from "../components/Slider";

function PreferenceForm() {
  const activities = ["Hiking", "Swimming", "Karoke", "Run", "Walk", "Fishing"];

  return (
    <div className="place-self-center w-2/4 mt-6 px-4 py-2 text-gray-700 uppercase bg-cyan-400 rounded-2xl shadow-lg shadow-indigo-500/40">
      {activities.map((activityName, index) => {
        return <Slider activityName={activityName} key={index} />;
      })}
      <button
        type="submit"
        className="w-full font-extrabold uppercase mt-6 text-center py-3 rounded bg-cyan-800 text-white hover:bg-green-dark focus:outline-none my-1"
      >
        Submit
      </button>
    </div>
  );
}

export default PreferenceForm;
