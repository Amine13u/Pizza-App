import { useState } from "react";
import styles from "../styles/Slider.module.css";
import Image from "next/image";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }

    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  const images = ["/img/chiken.jpeg", "/img/pasta.jpeg", "/img/pizza.jpeg"];

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/img/arrowl.png"
          alt="arrowl"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={image} alt="slider" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/arrowr.png"
          alt="arrowr"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Slider;
