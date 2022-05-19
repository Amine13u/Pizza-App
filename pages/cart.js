import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza.jpeg"
                  alt="pizza"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}> Sicilian Pizza</span>
            </td>
            <td>
              <span className={styles.price}> $19.9</span>
            </td>
            <td>
              <span className={styles.quantity}> 1</span>
            </td>
            <td>
              <span className={styles.total}> $19.9</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Cart Total</h2>

          <div className={styles.totalTitle}>
            <b className={styles.totalTitleText}>Discount:</b>$0.0
          </div>
          <div className={styles.totalTitle}>
            <b className={styles.totalTitleText}>Total:</b>$19.9
          </div>
          <button className={styles.button}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
