import React, { useState, useEffect, createContext } from "react";
import { Auth } from "../firebase";

type CONTEXT = {
  user: firebase.default.User | null;
};
export const AuthContext = createContext<CONTEXT>({
  user: null,
});

export const AuthProvider: React.FC = (props) => {
  const [user, setuser] = useState<CONTEXT | null>({
    user: null,
  });

  useEffect(() => {
    Auth.onAuthStateChanged(async (user) => {
      setuser({ user });
    });
  }, []);

  return (
    <AuthContext.Provider value={user!}>{props.children}</AuthContext.Provider>
  );
};

export const signOut = () => {
  return Auth.signOut();
};
