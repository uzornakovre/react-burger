import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Modal({ onClose, title, children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_top}>
        <h2 className={styles.title}>{title}</h2>
        <button
        className={styles.close_button}
        type='button'
        onClick={onClose}
      >
        <CloseIcon type="primary" />
      </button>
      </div>
      {children}
    </div>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
}

export default Modal;