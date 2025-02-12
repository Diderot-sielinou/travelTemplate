import styles from "./banner.module.css";
import PropTypes from "prop-types";

export default function Banner({ children }) {
  return (
    <div className={styles.Banner}>
      <div className={styles.textContaine}>{children}</div>
    </div>
  );
}

Banner.propTypes = {
  children: PropTypes.node,
};
