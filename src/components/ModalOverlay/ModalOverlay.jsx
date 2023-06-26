import styles from './ModalOverlay.module.scss';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';

const modalRoot = document.getElementById("react-modals");

function ModalOverlay({ isOpen, onClose, onOverlayClick }) {
  return createPortal(
    (
      <div 
        className={`${styles.modal_overlay} ${isOpen ? styles.opened : ''}`}
        onMouseDown={onOverlayClick}>
          <Modal onClose={onClose}/>  
      </div>  
    ), 
    modalRoot
  );
}

ModalOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOverlayClick: PropTypes.func.isRequired
}

export default ModalOverlay;