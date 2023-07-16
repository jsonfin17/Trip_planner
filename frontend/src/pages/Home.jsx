import { useEffect } from "react";
import Form from "../components/Form";
import getUser from "../services/getUser";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

function Home() {
  const user = getUser();
  const navigate = useNavigate();

  console.log("user is", user);

  useEffect(() => {
    if (user.user) {
      navigate("/preference");
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="text-center">
        <h1 className="text-primary">Travel-Planner</h1>
        <Form />
      </div>
    </>
  );
}

export default Home;
