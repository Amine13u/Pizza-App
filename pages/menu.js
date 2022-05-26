import ProductList from "../components/ProductList";
import axios from "axios";

const Menu = ({ pizzaList }) => {
  return <ProductList pizzaList={pizzaList} />;
};

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      pizzaList: res.data,
    },
  };
};

export default Menu;
