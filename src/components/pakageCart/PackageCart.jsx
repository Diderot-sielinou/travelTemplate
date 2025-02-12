import styles from "./package-cart.module.css";
import PropTypes from 'prop-types'

export default function PackageCart({item}) {
  return (
    <div className={styles.packageContainer}>
      <div className={styles.packageImage}>
        <img src={item.src} alt={item.title} />
      </div>
      <div className={styles.packagetext}>
        <h3>{item.title}</h3>
        <p>
              {item.text}
        </p>
        <button className={styles.btn}>Learn More</button>
      </div>
    </div>
  );
}

PackageCart.propTypes ={
  item: PropTypes.object,
}
