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
    <nav className="flex items-center justify-between flex-wrap bg-secondary p-6">
      <h1 className="font-bold text-gray-600 text-xl text-extrabold mt-4 uppercase text-center">
        Event
        <span className="px-2 text-white bg-cyan-600 rounded">Buddy</span>
      </h1>

      <ul className="flex">
        <li className="mr-6">
          {!user ? "" : <button onClick={handleClick}>Logout</button>}
        </li>
      </ul>
    </nav>
  );
};
