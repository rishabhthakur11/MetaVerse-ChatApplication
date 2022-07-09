import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";

const Home: NextPage = () => {
  const isAuthenticated = false;
  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen ">
      <Head>
        <title>Metaverse ChatApp</title>
      </Head>
      <h1>Welcome to the chat section</h1>
    </div>
  );
};

export default Home;
