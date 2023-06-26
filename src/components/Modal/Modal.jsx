import styles from './Modal.module.scss';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Modal({ onClose }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_top}>
        <h2 className={styles.title}>Заголовок</h2>
        <button
        className={styles.close_button}
        type='button'
        onClick={onClose}
      >
        <CloseIcon type="primary" />
      </button>
      </div>
    </div>
  )
}

export default Modal;