import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages"

const Home: NextPage = () => {
  const { isAuthenticated } = useMoralis();
  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll overflow-hidden">
      <Head>
        <title>Metaverse ChatApp</title>
      </Head>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Messages/>
      </div>
    </div>
  );
};

export default Home;
