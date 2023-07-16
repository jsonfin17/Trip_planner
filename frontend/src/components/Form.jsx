import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getUser from "../services/getUser";
import { Login } from "../services/auth/Login";

function Form() {
  // const [loginDetails, setLoginDetails] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setLoginDetails({ ...loginDetails, [name]: value });
  // };

  // const [regDetails, setRegDetails] = useState({
  //   username: "",
  //   password: "",
  //   checkPassword: "",
  // });

  // const handleRegInputChange = (e) => {
  //   console.log("reg input called!");
  //   const { name, value } = e.target;
  //   setRegDetails({ ...regDetails, [name]: value });
  // };

  // const [showLogin, setShowLogin] = useState(true);
  // const [showReg, setShowReg] = useState(false);

  // const toggleLogin = () => {
  //   setShowLogin(true);
  //   setShowReg(false);
  // };

  // const toggleRegister = () => {
  //   setShowLogin(false);
  //   setShowReg(true);
  // };

  // const handleLogin = () => {
  //   console.log("login called!");
  //   login(loginDetails.username, loginDetails.password);
  //   setLoginDetails({ username: "", password: "" });
  //   navigate("/preference");
  // };

  // const handleRegister = () => {
  //   console.log("register called!");
  //   if (regDetails.password !== regDetails.checkPassword) {
  //     alert("Passwords do not match!");
  //     return;
  //   }
  //   register(loginDetails.username, loginDetails.password);
  //   setRegDetails({ username: "", password: "", checkPassword: "" });
  // };

  return (
    <div className="place-self-center w-2/4 mt-6 px-4 py-2 text-gray-700 uppercase bg-secondary rounded-2xl shadow-lg shadow-indigo-500/40">
      {/* <div id="tabs" className="mb-8 mt-6">
        <button
          class="inline mx-8 ps-6 pe-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow"
          onClick={() => toggleLogin()}
          data-toggle="tab"
        >
          Login
        </button>
        <button
          class="inline ps-4 pe-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow"
          onClick={() => toggleRegister()}
          data-toggle="tab"
        >
          Register
        </button>
      </div> */}
      <Login />
      {/* {showLogin && (
        <div className="tab-content" id="cont">
          <div className="tab-pane active" id="signIn">
            <input
              id="su"
              type="email"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Account Name"
              required
            />
            <input
              id="se"
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Your Email"
              required
              name="username"
              value={loginDetails.username}
              onChange={handleInputChange}
            />
            <input
              id="sp"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="password"
              placeholder="Password"
              required
              name="password"
              value={loginDetails.password}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-primary text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={() => {
                handleLogin();
              }}
            >
              Submit
            </button>
            <p className="mt-3 text-black">Forget Password?</p>
          </div>
        </div>
      )}
      {/* Second tab */}
      {/* {showReg && (
        <div className="tab-pane" id="register">
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            id="re"
            type="email"
            placeholder="Account Name"
            required
          />
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            id="re"
            type="email"
            placeholder="Your Email"
            name="username"
            required
            value={regDetails.username}
            onChange={handleRegInputChange}
          />
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            id="rp"
            type="password"
            placeholder="Password"
            name="password"
            value={regDetails.password}
            required
            onChange={handleRegInputChange}
          />
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            id="rrp"
            type="password"
            placeholder="Re-enter Your Password"
            required
            name="checkPassword"
            value={regDetails.checkPassword}
            onChange={handleRegInputChange}
          />
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-primary text-white hover:bg-green-dark focus:outline-none my-1"
            onClick={() => {
              handleRegister();
            }}
          >
            Submit
          </button>
        </div>
      )}{" "} */}
    </div>
  );
}
export default Form;
