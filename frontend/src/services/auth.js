import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState(localStorage.getItem.user);

  useEffect(() => {
    fetch("localhost:5000/")
      .then(
        (response) => response.json(),
        console("json received is", response.json())
      )
      .then((data) => console.log("data fetched is", data), setUser(data));
  });

  const getUser = () => {
    return user;
  };

  return { getUser };
};

export default useAuth;
