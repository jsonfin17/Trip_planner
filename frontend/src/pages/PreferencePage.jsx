import PreferenceForm from "../components/PreferenceForm";
import { Navbar } from "../components/Navbar";
import { useEffect } from "react";
import getUser from "../services/getUser";
import { useNavigate } from "react-router-dom";

function PreferencePage() {
  const user = getUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.user) {
      navigate("/");
    }
  }, [user]);

  const activities = ["Hiking", "Swimming", "Karoke", "Run", "Walk", "Fishing"];

  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <h1 className="text-gray-600 text-3xl text-extrabold md:text-4xl lg:text-5xl mt-8 uppercase text-center">
          Add your{" "}
          <span class="px-2 text-white bg-blue-600 rounded dark:bg-cyan-800">
            preferences
          </span>
        </h1>
        <PreferenceForm activities={activities} />
      </div>
    </>
  );
}

export default PreferencePage;
