import axios from "axios";
import styles from "../../styles/FoodItem.module.css";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const FoodItem = ({ item }) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(item.prices[size]);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (amount) => {
    setPrice(price + amount);
  };

  const handleSize = (sizeIndex) => {
    const diff = item.prices[sizeIndex] - item.prices[size];
    setSize(sizeIndex);
    changePrice(diff);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...item, price, qty }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={item.image}
            alt="pizza"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{item.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{item.description}</p>
        <h3 className={styles.choice}>Choose your size, please !</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" alt="size" layout="fill" />
            <span className={styles.text}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" alt="size" layout="fill" />
            <span className={styles.text}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
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
            onChange={(e) => setQty(e.target.value)}
          />
          <button className={styles.button} onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );

  return {
    props: {
      item: res.data,
    },
  };
};

export default FoodItem;
