import nookies from "nookies";
import React, { createContext, useContext, useEffect, useState } from "react";
import { firebaseClient } from "../lib/firebaseClient";

const AuthContext = createContext<{ user: firebaseClient.User | null }>({
  user: null,
});

export function FirebaseAuthProvider({ children }: any) {
  const [user, setUser] = useState<firebaseClient.User | null>(null);

  useEffect(() => {
    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      console.log(`auth changed`);
      console.log(user ? user.uid : "NO USER");
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", {});
        return;
      }

      const token = await user.getIdToken();
      setUser(user);
      nookies.set(undefined, "token", token, {});
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export const useFirebaseAuth = () => {
  return useContext(AuthContext);
};
