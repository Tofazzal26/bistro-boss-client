import { createContext, useEffect, useState } from "react";
import auth from "./../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [notLoading, setNotLoading] = useState(true);
  const [profileLoad, setProfileLoad] = useState(false);

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

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setNotLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [profileLoad]);

  const userInfo = {
    useState,
    setNotLoading,
    notLoading,
    setProfileLoad,
    createUser,
    user,
    updateUserProfile,
    logOut,
    logInEmailPassword,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
