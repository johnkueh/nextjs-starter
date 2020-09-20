import React from "react";
import { useFirebaseAuth } from "../context/useFirebaseAuth";

const UserProfile = () => {
  const { user } = useFirebaseAuth();

  if (user)
    return (
      <p>
        ID: {user.uid} / Email: {user.email}
      </p>
    );

  return <>No user logged in</>;
};

export default UserProfile;
