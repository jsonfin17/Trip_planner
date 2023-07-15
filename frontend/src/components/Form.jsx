import useAuth from "../services/auth";
import { useState } from "react";

function Form() {
  const { getUser } = useAuth();

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
      <div id="tabs">
        <ul id="myTab">
          <li class="active">
            <button
              className="inline"
              onClick={() => toggleLogin()}
              data-toggle="tab"
            >
              Login
            </button>
          </li>
          <li>
            <button
              className="inline"
              onClick={() => toggleRegister()}
              data-toggle="tab"
            >
              Register
            </button>
          </li>
        </ul>
      </div>

      {showLogin && (
        <div class="tab-content" id="cont">
          <div class="tab-pane active" id="signIn">
            <input id="se" type="email" placeholder="Your Email" required />
            <input id="sp" type="password" placeholder="Password" required />
            <input type="submit"></input>
            <p>Forget Password?</p>
          </div>
        </div>
      )}
      {/* Second tab */}
      {showReg && (
        <div class="tab-pane" id="register">
          <input
            className=""
            id="re"
            type="email"
            placeholder="Your Email"
            required
          />
          <input id="rp" type="password" placeholder="Password" required />
          <input
            id="rrp"
            type="password"
            placeholder="Re-enter Your Password"
            required
          />
          <input type="submit"></input>
        </div>
      )}
    </div>
  );
}
export default Form;
