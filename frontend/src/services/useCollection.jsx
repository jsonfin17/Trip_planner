import {
  QueryDocumentSnapshot,
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useState } from "react";

export const useCollection = () => {
  const [userError, setUserError] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  const addUser = async (userInfo) => {
    try {
      await addDoc(collection(db, "users"), userInfo);
    } catch (err) {
      console.log(err.message);
      setUserError(err.message);
    }
  };

  const loadAllUsers = async () => {
    const q = query(collection(db, "users"));

    onSnapshot(q, (querySnapshot) => {
      setAllUsers([]);
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.tripId = doc.id;
        setAllUsers((allUsers) => [...allUsers, data]);
      });
    });
  };

  return {
    addUser,
    userError,
    allUsers,
    loadAllUsers,
  };
};

export default useCollection;
