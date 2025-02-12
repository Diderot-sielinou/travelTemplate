import styles from "./why-cart.module.css";
import PropTypes from "prop-types";
export default function WhyCart({ children }) {
  return (
    <div className={styles.WhyCart}>
      <div className={styles.container}> {children} </div>
    </div>
  );
}
WhyCart.propTypes = {
  children: PropTypes.node,
};
