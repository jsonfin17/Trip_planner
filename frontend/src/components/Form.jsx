import useAuth from "../services/auth";
import { useState } from "react";

function Form() {
  const { getUser, Login } = useAuth();

  const currentUser = getUser();

  console.log("frontend check getuser is", currentUser);

  const [showLogin, setShowLogin] = useState(true);
  const [showReg, setShowReg] = useState(false);

  const toggleLogin = () => {
    setShowLogin(true);
    setShowReg(false);
  };

  const toggleRegister = () => {
    setShowLogin(false);
    setShowReg(true);
  };

  return (
    <div id="container">
      <div id="tabs" className="mb-8 mt-6">
        <button
          class="inline mx-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow"
          onClick={() => toggleLogin()}
          data-toggle="tab"
        >
          Login
        </button>
        <button
          class="inline bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow"
          onClick={() => toggleRegister()}
          data-toggle="tab"
        >
          Register
        </button>
      </div>

      {showLogin && (
        <div class="tab-content" id="cont">
          <div class="tab-pane active" id="signIn">
            <input
              id="se"
              type="email"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Your Email"
              required
            />
            <input
              id="sp"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              type="password"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-primary text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Submit
            </button>
            <p className="mt-3 text-black">Forget Password?</p>
          </div>
        </div>
      )}
      {/* Second tab */}
      {showReg && (
        <div class="tab-pane" id="register">
          <input
            className=""
            class="block border border-grey-light w-full p-3 rounded mb-4"
            id="re"
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            class="block border border-grey-light w-full p-3 rounded mb-4"
            id="rp"
            type="password"
            placeholder="Password"
            required
          />
          <input
            class="block border border-grey-light w-full p-3 rounded mb-4"
            id="rrp"
            type="password"
            placeholder="Re-enter Your Password"
            required
          />
          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-primary text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
export default Form;
