import Product from "./Product";
import styles from "../styles/ProductList.module.css";

const ProductList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best Food that you can have</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        eleifend vitae risus in mattis. In vehicula mi ligula, in ullamcorper
        nisi suscipit vel. Donec eget massa gravida, sollicitudin quam a,
        scelerisque est. Fusce a pretium tellus.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <Product key={pizza._id} pizza={pizza} />
        ))}
        ;
      </div>
    </div>
  );
};

export default ProductList;
