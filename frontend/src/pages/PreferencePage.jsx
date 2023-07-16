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
      <div>
        <h1 className="text-primary">Add your preferences</h1>
        <PreferenceForm activities={activities} />
      </div>
    </>
  );
}

export default PreferencePage;
