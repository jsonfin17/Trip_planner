import { useState } from "react";

function Slider(activityName) {
  const [value, setValue] = useState(0);

  const updateTextInput = (e) => {
    console.log("e value is", e.target.value);
    setValue(e.target.value);
  };

  console.log("activitname received is", activityName);

  return (
    <div className="mt-4 font-medium">
      <div className="inline w-16 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-sky-600 from-cyan-800">
        {activityName.activityName}
      </div>
      <input
        id="minmax-range"
        type="range"
        min="0"
        max="10"
        defaultValue="0"
        className="w-2/4 mx-4 h-2 bg-gray-200 rounded-lg slider"
        name="placeholder"
        value={value}
        onChange={(e) => {
          updateTextInput(e);
        }}
      />
      <label
        className="boxeslevel text-white border-radius:50% text-xl rounded-full"
        htmlFor="text"
      >
        {value}
      </label>
    </div>
  );
}

export default Slider;
