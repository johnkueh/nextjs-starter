import Link from "next/link";
import React from "react";
import { useFirebaseAuth } from "../context/useFirebaseAuth";
import { firebaseClient } from "../lib/firebaseClient";

const LogoutLink = () => {
  const { user } = useFirebaseAuth();
  if (user) {
    return (
      <a
        href="#"
        onClick={async (e) => {
          e.preventDefault();
          await firebaseClient.auth().signOut();
          window.location.href = "/";
        }}
      >
        Logout
      </a>
    );
  }

  return <Link href="/login">Go to login</Link>;
};

export default LogoutLink;
