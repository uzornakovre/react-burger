import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from './modal.module.scss';
import PropTypes from 'prop-types';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById("react-modals");

function Modal({ isOpen, onClose, title, children }) {
  function handleModalOverlayClick(evt) {
    evt.target.classList.forEach((className) => {
      if (className.includes('opened')) {
        onClose();
      }
    });
  }

  useEffect(() => {
    function handleEscClick(evt) {
      if (evt.key === 'Escape') {
        console.log(1)
        onClose();
      }
    }
    if (isOpen) {
          document.addEventListener('keydown', handleEscClick);
        }
      return () => {
        document.removeEventListener('keydown', handleEscClick);
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return createPortal(
    <ModalOverlay isOpen={isOpen} onOverlayClick={handleModalOverlayClick}>
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
    </ModalOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
}

export default Modal;