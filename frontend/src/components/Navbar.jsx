import { limit } from "firebase/firestore";
import getUser from "../services/getUser";
import { Login } from "../services/auth/Login";
import useLogout from "../services/auth/Logout";

export const Navbar = () => {
  const { user } = getUser();

  const { logout, error } = useLogout();

  const handleClick = async () => {
    await logout();
    if (!error) {
      console.log("user logged out");
    }
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <span className="logo">E-P</span>

      <ul className="flex">
        <li className="mr-6">
          {!user ? <Login /> : <button onClick={handleClick}>Logout</button>}
        </li>
      </ul>
    </nav>
  );
};
