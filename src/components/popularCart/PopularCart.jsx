import styles from './popular-cart.module.css'
import PropTypes from 'prop-types';

export default function PopularCart({item}) {
  return (
    <div className={styles.PopularCart}>
      <div className={styles.popularImage}>
        <img src={item.src} alt="dddd" />
      </div>
      <div className={styles.popularText}>
        <h3> {item.title} </h3>
        <p> {item.text} </p>
      </div>
    </div>
  )
}

PopularCart.propTypes = {
  item: PropTypes.object,
}
