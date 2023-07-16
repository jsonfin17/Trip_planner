import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";

const useLogout = () => {
  const [error, setError] = useState();
  const logout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  return { logout, error };
};

export default useLogout;
