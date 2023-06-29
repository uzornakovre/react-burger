import styles from "./ModalOverlay.module.scss";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";

const modalRoot = document.getElementById("react-modals");

function ModalOverlay({
  onClose,
  onOverlayClick,
  isIngredientDetailsModalOpen,
  isOrderDetailsModalOpen,
  currentIngredient
}) {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isIngredientDetailsModalOpen || isOrderDetailsModalOpen ? setIsOpen(true) : setIsOpen(false);
  }, [isIngredientDetailsModalOpen, isOrderDetailsModalOpen]);

  return createPortal(
    <div
      className={`${styles.modal_overlay} ${isOpen ? styles.opened : ""}`}
      onMouseDown={onOverlayClick}
    >
      <Modal onClose={onClose} title={isIngredientDetailsModalOpen ? 'Детали ингредиента' : ''}>
        {isIngredientDetailsModalOpen && <IngredientDetails currentIngredient={currentIngredient} />}
        {isOrderDetailsModalOpen && <OrderDetails />}
      </Modal>
    </div>,
    modalRoot
  );
}

ModalOverlay.propTypes = {
  isIngredientDetailsModalOpen: PropTypes.bool.isRequired,
  isOrderDetailsModalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOverlayClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
