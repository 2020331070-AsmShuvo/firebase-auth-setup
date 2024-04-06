import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./Firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [regUser, setRegUser] = useState(null);
  // email password login............
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google login......................
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // facebook login................................
  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  // signout...............
  const logOut = ()=>{
    setRegUser("");
    return signOut(auth);
  }
  const authInfo = {
    registerUser,
    loginUser,
    regUser,
    setRegUser,
    googleLogin,
    facebookLogin,
    logOut
  };



  useEffect(() => {
    // whenever I signUp, login or logout this is called
    const unSubscribe = onAuthStateChanged(auth, (curUser) => {
      if (curUser) { 
        setRegUser(curUser)
      } else {
        setRegUser(null);
      }

    });

    return()=>{
      unSubscribe(); // ei route change kore onno kothao gele (unmount) observer off thaakbe abar ekhane ashle colbe
    }
  }, []);

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
