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
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-bold text-gray-600 text-3xl text-extrabold md:text-4xl lg:text-5xl mt-8 uppercase text-center">
          Event
          <span className="px-2 text-white bg-cyan-600 rounded">Buddy</span>
        </h1>
        <Form />
      </div>
    </>
  );
}

export default Home;
