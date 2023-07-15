import PreferenceForm from "../components/PreferenceForm";

function PreferencePage() {
  const activities = ["Hiking", "Swimming", "Karoke", "Run", "Walk", "Fishing"];

  return (
    <div>
      <h1 className="text-primary">Add your preferences</h1>
      <PreferenceForm activities={activities} />
    </div>
  );
}

export default PreferencePage;
