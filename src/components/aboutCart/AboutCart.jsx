import styles from "./about-cart.module.css";
import PropTypes from "prop-types";

export default function AboutCart({ item }) {
  return (
    <div className={styles.AboutCart}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <img src={item.src} alt={item.title} />
        </div>
      </div>
      <div className={styles.aboutText}>
        <h5> {item.title} </h5>
        <p>
              {item.text}
        </p>
      </div>
    </div>
  );
}

AboutCart.propTypes = {
  item: PropTypes.object,
};
