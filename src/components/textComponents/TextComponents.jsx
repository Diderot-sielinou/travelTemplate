import styles from './text-component.module.css'
import PropTypes from 'prop-types';
export default function TextComponents({children}) {
  return (
    <div className={styles.textContainer}>
      {children}
    </div>
  )
}

TextComponents.propTypes = {
  children: PropTypes.node,
}
