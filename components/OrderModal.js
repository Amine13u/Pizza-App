import { useState } from "react";
import styles from "../styles/OrderModal.module.css";

const OrderModal = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay ${total}</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name</label>
          <input
            placeholder="John Doe"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          ></input>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            placeholder="+216 90 555 ..."
            type="text"
            className={styles.input}
          ></input>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            row={5}
            placeholder="7685 Farmington Blvd #108"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order Now !
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
