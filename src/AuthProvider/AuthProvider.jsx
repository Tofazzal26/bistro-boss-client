import { createContext, useEffect, useState } from "react";
import auth from "./../Firebase/Firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [notLoading, setNotLoading] = useState(true);
  const [profileLoad, setProfileLoad] = useState(false);

  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setNotLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const logInEmailPassword = (email, password) => {
    setNotLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInformation = {
          email: currentUser?.email,
        };
        axiosPublic.post(`/jwt`, userInformation).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setNotLoading(false);
          }
        });
      } else {
        localStorage.removeItem("access-token");
        setNotLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, [profileLoad, axiosPublic]);

  const userInfo = {
    useState,
    setNotLoading,
    notLoading,
    setProfileLoad,
    createUser,
    user,
    googleLogin,
    updateUserProfile,
    logOut,
    logInEmailPassword,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
