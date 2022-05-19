import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.still;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>123654786</span>
              </td>
              <td>
                <span className={styles.customer}>John Doe</span>
              </td>
              <td>
                <span className={styles.address}>677 Fire Access Road</span>
              </td>
              <td>
                <span className={styles.total}>$19.9</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" alt="paid" width={40} height={40} />
            <span>Paiment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt="checked"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image
              src="/img/preparing.png"
              alt="preparing"
              width={40}
              height={40}
            />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt="checked"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/way.png" alt="way" width={40} height={40} />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt="checked"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image
              src="/img/delivered.png"
              alt="delivered"
              width={40}
              height={40}
            />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt="checked"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
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
          <button className={styles.button} disabled>
            Paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
