import { createContext, useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  updateDoc,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";

import { addDoc, collection, getDocs, query } from "firebase/firestore";
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
  const [ticketTrigger, setTicketTrigger] = useState(true);
  const [tickets, setTickets] = useState([]);

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
      })
      .then((res) => {})
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const [adminusers, setAdminUsers] = useState([]);
  const [loggedUserDetails, setLoggedUserDetails] = useState();

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const userData = async () => {
          const q = query(collection(db, "admin"));
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          for (var i = 0; i <= data?.length; i++) {
            if (data[i].isAdmin && auth.currentUser.email == data[i].email) {
              // console.log("ADMIN DATA", data[i]);
              setAdminLogged(true);
              setIsAdminLoggedIn(true);
              setUserLogged(false);
              break;
            } else if (
              !data[i].isAdmin &&
              auth.currentUser.email == data[i].email
            ) {
              setAdminLogged(false);

              setUserLogged(true);

              break;
            }
          }

          data?.map((admin) => {
            if (admin.isAdmin && auth.currentUser.email == admin.email) {
              console.log("ADMIN DATA", admin);

              setAdminLogged(true);
            } else if (!admin.isAdmin && auth.currentUser.email == admin) {
              setAdminLogged(true);
            }
          });
        };

        console.log("Logged user details: ", loggedUserDetails);

        localStorage.setItem("currentUser", JSON.stringify(res.user));

        userData();
      })
      .catch((err) => {
        setError(err.code);
      })
      .finally(() => setLoading(false));
  };

  const logoutUser = () => {
    signOut(auth);
  };

  const [resetPass, setResetPass] = useState("");
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        // console.log("Im hereee in reset pass: ");
        setResetPass("Password reset link has been sent to your email");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setResetPass("email is not found in the table.");

        // console.log("errro in reseting pass...");
      });
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
    tickets,
    setTickets,
    resetPass,
    setResetPass,
    isAdminLoggedIn,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
