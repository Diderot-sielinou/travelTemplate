import styles from "./AboutCart.module.css";
import PropTypes from "prop-types";

export default function AboutCartComponent({ item }) {
  return (
    <div className={styles.containe}>
      <div className={styles.image}>
        <img src={item.src} alt={item.src} />
      </div>
      <div className={styles.text}>
        <div className={styles.textContainer}>
          <p> {item.text1} </p>
          <p> {item.text2} </p>
        </div>
      </div>
    </div>
  );
}

AboutCartComponent.propTypes = {
  item: PropTypes.object,
};
