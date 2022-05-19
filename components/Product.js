import Image from "next/image";
import styles from "../styles/Product.module.css";

const Product = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.jpeg" width="500" height="500" />
      <h1 className={styles.title}>Sicilian Pizza</h1>
      <span className={styles.price}>$19.52</span>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        eleifend vitae risus in mattis.
      </p>
    </div>
  );
};

export default Product;
