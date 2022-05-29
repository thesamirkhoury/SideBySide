import { createContext, useContext, useState } from "react";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  updateDoc,
  sendPasswordResetEmail,
} from "firebase/auth";

import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase/Firebase.config";

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userLogged, setUserLogged] = useState(false);
  const [adminLogged, setAdminLogged] = useState(false);

  useState(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUser = (email, password, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        console.log("After registration", auth);
        const docRef2 = await addDoc(
          collection(db, "userInfo", auth.currentUser.uid),
          {
            firstName: user.firstName,
            lastName: user.lastName,
          }
        );
      })
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const [wrongCreds, setWrongCreds] = useState("");

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("User which is currently logged in:", res);
        localStorage.setItem("currentUser",JSON.stringify(res.user));
        setUserLogged(true);
      })
      .catch((err) => {
        setError(err.code);
      })
      .finally(() => setLoading(false));
  };

  const logoutUser = () => {
    signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const contextValue = {
    user,
    loading,
    error,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
    userLogged,
    setUserLogged,
    adminLogged,
    setAdminLogged,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
