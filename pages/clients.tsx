import { InferGetServerSidePropsType } from "next";
import React from "react";
import LogoutLink from "../components/LogoutLink";
import UserProfile from "../components/UserProfile";
import { getClients } from "../lib/services/client";

const Clients = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <div>
        <UserProfile />
      </div>
      <div>
        <LogoutLink />
      </div>
      <h1>Clients</h1>
      {props.clients.map((client) => (
        <div key={client.id}>
          <h2>{client.name}</h2>
          <div>{client.description}</div>
        </div>
      ))}
    </>
  );
};

export async function getStaticProps(context) {
  const clients = await getClients();

  return {
    props: {
      clients,
    },
  };
}

export default Clients;
