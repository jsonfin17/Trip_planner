import {
  getAuth,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase-config";

const getUser = () => {
  const currauth = getAuth();
  setPersistence(auth, browserSessionPersistence);

  const [user, setUser] = useState(currauth.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (_user) => {
      setUser(_user);
    });
  }, []);

  return { user };
};

export default getUser;
