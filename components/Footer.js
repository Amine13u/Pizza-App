import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/restaurant.jpeg" alt="restaurant" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Every day is a good day for your restaurant.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find Our Restaurant</h1>
          <p className={styles.text}>
            1222 G. Portugal Road.
            <br /> Tunisia 1164
            <br /> (216) 225 8555 222
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working Hours</h1>
          <p className={styles.text}>
            Sunday 10AM–2AM
            <br />
            Monday 10AM–2AM
            <br />
            Tuesday 10AM–2AM
            <br />
            Wednesday 10AM–2AM
            <br />
            Thursday 10AM–2AM
            <br />
            Friday 10AM–2AM
            <br />
            Saturday 10AM–2AM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
