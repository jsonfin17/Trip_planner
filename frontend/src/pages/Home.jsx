import Form from "../components/Form";
import PreferenceForm from "../components/PreferenceForm";

function Home() {
  return (
    <>
      <div className="bg-secondary text-center">
        <h1 className="text-primary">Travel-Planner</h1>
        <Form />
        <PreferenceForm />
      </div>
    </>
  );
}

export default Home;
