import styles from "./ModalOverlay.module.scss";
import PropTypes from "prop-types";

function ModalOverlay({ isOpen, onOverlayClick, children }) {

  return (
    <div
      className={`${styles.modal_overlay} ${isOpen ? styles.opened : ""}`}
      onMouseDown={onOverlayClick}
    >{children}</div>
  );
}

ModalOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOverlayClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
