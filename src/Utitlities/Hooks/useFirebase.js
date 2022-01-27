import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/initializeFirebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import axios from "axios";
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(null);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //get current user
  useEffect(() => {
    setIsLoading(true);
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // getIdToken(user).then((token) =>
        //   localStorage.setItem("idToken", token)
        // );
      } else {
        // User is signed out
      }
      setIsLoading(false);
    });
    return () => unSubscribe();
  }, [auth]);

  //login using google auth
  const googleLogIn = (navigate, destination) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        SaveUserDb(user.displayName, user.email, "PUT");
        navigate(destination);
      })
      .catch((error) => {
        setError(error.message);
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  //log in by email pass
  const logInUsingEmail = (email, password, navigate, destination) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setError("");
        navigate(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //Register by email
  const RegisterUsingEmail = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            setUser(user);
            alert("Successfully Created Account");
            setError("error.message");
            SaveUserDb(user.displayName, user.email, "POST");
            navigate("/");
          })
          .catch((error) => {});
      })
      .catch((error) => {
        setError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  //logout
  const userLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
        alert("Successfully Log Out");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  //Check admin or not
  useEffect(() => {
    axios
      .get(`https://serene-ocean-67383.herokuapp.com/users/${user?.email}`)
      .then((res) => {
        setIsAdmin(res.data?.isAdmin);
        // console.log(res);
      });
  }, [user?.email]);

  //save user data to database
  const SaveUserDb = (name, email, method) => {
    fetch("https://serene-ocean-67383.herokuapp.com/users", {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return {
    user,
    googleLogIn,
    userLogOut,
    logInUsingEmail,
    RegisterUsingEmail,
    isLoading,
    isAdmin,
  };
};

export default useFirebase;
