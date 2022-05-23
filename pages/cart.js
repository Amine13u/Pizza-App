import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderModal from "../components/OrderModal";
import { useRouter } from "next/router";
import axios from "axios";
import { reset } from "../redux/cartSlice";

const Cart = () => {
  const [cash, setCash] = useState(false);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tr}>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>
          {cart.products.map((product) => (
            <tbody key={product._id}>
              <tr>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.image}
                      alt="pizza"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.price}>${product.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.qty}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    ${product.price * product.qty}
                  </span>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Cart Total</h2>
          <div className={styles.totalTitle}>
            <b className={styles.totalTitleText}>Discount:</b>$0.0
          </div>
          <div className={styles.totalTitle}>
            <b className={styles.totalTitleText}>Total:</b>${cart.total}
          </div>
          <button className={styles.button} onClick={() => setCash(true)}>
            Order Now !
          </button>
        </div>
      </div>
      {cash && <OrderModal total={cart.total} createOrder={createOrder} />}
    </div>
  );
};

export default Cart;
