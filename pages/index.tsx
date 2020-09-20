import Head from "next/head";
import React from "react";
import LogoutLink from "../components/LogoutLink";
import UserProfile from "../components/UserProfile";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Next.js starter</h1>
        <div>
          <UserProfile />
        </div>
        <div>
          <LogoutLink />
        </div>
      </div>
    </div>
  );
};

export default Home;
