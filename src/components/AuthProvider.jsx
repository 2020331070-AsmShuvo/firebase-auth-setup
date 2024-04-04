import React, { createContext, useContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from './Firebase.init';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const registerUser = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(res=>console.log(res.user))
    };
    const loginUser = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(res=>console.log(res.user))
    };

    const authInfo ={
        registerUser,
        loginUser
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;