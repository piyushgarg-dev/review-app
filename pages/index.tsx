import Navbar from "@/components/elements/Navbar";
import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Review App</title>
      </Head>
      <main>
        <Navbar />
        <h1>Welcome to HomePage of Review App</h1>
      </main>
    </div>
  );
};

export default HomePage;
