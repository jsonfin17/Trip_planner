import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState(localStorage.getItem.user);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((response) => response.json()) // Parse the response data as JSON
      .then((data) => {
        console.log("data fetched is", data);
        setUser(data); // Set the data in the state
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getUser = () => {
    return user;
  };

  return { getUser };
};

export default useAuth;
