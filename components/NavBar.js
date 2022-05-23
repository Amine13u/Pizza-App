import Image from "next/image";
import styles from "../styles/NavBar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.c}>
          <Image src="/img/phone.png" alt="phone" width={40} height={40} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now</div>
          <div className={styles.text}>+216 21 216 751</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home Page</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="logo" width={100} height={100} />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="cart" width={60} height={60} />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
