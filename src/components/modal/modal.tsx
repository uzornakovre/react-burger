import { ReactNode, useEffect, MouseEvent } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { isHtmlElement } from "../../utils/constants";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const modalRoot: any = document.getElementById("react-modals");

function Modal({ isOpen, onClose, title, children }: IModalProps) {
  function handleModalOverlayClick(evt: MouseEvent<HTMLDivElement>) {
    if (isHtmlElement(evt.target)) {
      evt.target.classList.forEach((className: string) => {
        if (className.includes("opened")) {
          onClose();
        }
      });
    }
  }

  useEffect(() => {
    function handleEscClick(evt: IKeyboardEvent) {
      if (evt.key === "Escape") {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscClick);
    }
    return () => {
      document.removeEventListener("keydown", handleEscClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return createPortal(
    <ModalOverlay isOpen={isOpen} onOverlayClick={handleModalOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.modal_top}>
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.close_button}
            type="button"
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

export default Modal;
