import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import AddButton from "../components/AddButton";
import Add from "../components/Add";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList, isAdmin }) {
  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant App</title>
        <meta name="description" content="Delicious food" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      {isAdmin && <AddButton setClose={setClose} />}
      <ProductList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  let isAdmin = false;

  if (myCookie.token === process.env.TOKEN) {
    isAdmin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      isAdmin,
      pizzaList: res.data,
    },
  };
};
