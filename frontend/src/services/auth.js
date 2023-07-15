import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState(localStorage.getItem.user);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/")
  //     .then((response) => response.json()) // Parse the response data as JSON
  //     .then((data) => {
  //       console.log("data fetched is", data);
  //       setUser(data); // Set the data in the state
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const getUser = () => {
    return user;
  };

  const login = (username, password) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "React POST Request Example" }),
    };
    fetch("https://reqres.in/api/posts", requestOptions)
      .then((response) => {
        response.json();
        console.log(response.json());
      })
      .then((data) => setUser(data));
  };

  return { getUser, login };
};

export default useAuth;
