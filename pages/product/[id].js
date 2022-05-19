import styles from "../../styles/FoodItem.module.css";
import Image from "next/image";
import { useState } from "react";

const FoodItem = () => {
  const [size, setSize] = useState(0);

  const item = {
    id: 1,
    img: "/img/pizza.jpeg",
    name: "Sicilian Pizza",
    price: [17.5, 18.6, 19.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={item.img} alt="pizza" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{item.name}</h1>
        <span className={styles.price}>${item.price[size]}</span>
        <p className={styles.desc}>{item.desc}</p>
        <h3 className={styles.choice}>Choose your size, please !</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" alt="size" layout="fill" />
            <span className={styles.text}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" alt="size" layout="fill" />
            <span className={styles.text}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" alt="size" layout="fill" />
            <span className={styles.text}>Large</span>
          </div>
        </div>
        <div className={styles.submit}>
          <input
            type="number"
            defaultValue={1}
            min={1}
            max={20}
            className={styles.quantity}
          />
          <button className={styles.button}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
