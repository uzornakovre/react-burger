import styles from "./ModalOverlay.module.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";

const modalRoot = document.getElementById("react-modals");

function ModalOverlay({ isOpen, onClose, title, children }) {

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
    <div
      className={`${styles.modal_overlay} ${isOpen ? styles.opened : ""}`}
      onMouseDown={handleModalOverlayClick}
    >
      <Modal onClose={onClose} title={title}>{children}</Modal>
    </div>,
    modalRoot
  );
}

ModalOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
};

export default ModalOverlay;
