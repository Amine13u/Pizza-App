import Image from "next/image";
import styles from "../styles/Product.module.css";
import Link from "next/link";

const Product = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <a>
          <Image src={pizza.image} width="500" height="500" />
        </a>
      </Link>

      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.text}>{pizza.description}</p>
    </div>
  );
};

export default Product;
