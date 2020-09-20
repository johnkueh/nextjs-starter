import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { firebaseClient } from "../lib/firebaseClient";

const Login = () => {
  const [error, setError] = useState<string>(undefined);
  const [loading, setLoading] = useState(false);
  const { currentValues, handleChange } = useForm({
    email: "",
    name: "",
    password: "",
  });

  const { email, password } = currentValues;

  return (
    <div>
      <Link href="/">
        <a>Go back to home page</a>
      </Link>
      {error && <div>{error}</div>}
      <br />
      <input
        name="email"
        type="email"
        placeholder={"Email"}
        value={currentValues["email"]}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder={"Password"}
        value={currentValues["password"]}
        onChange={handleChange}
      />
      <button
        onClick={async () => {
          setError(undefined);
          setLoading(true);
          try {
            await firebaseClient
              .auth()
              .signInWithEmailAndPassword(email, password);
            window.location.href = "/";
          } catch (e) {
            setError(e.message);
            setLoading(false);
          }
        }}
      >
        Log in
      </button>
    </div>
  );
};

export default Login;
