import styles from "./modal-overlay.module.scss";
import { MouseEvent, ReactNode } from "react";

interface IModalOverlayProps {
  isOpen: boolean;
  onOverlayClick: (evt: MouseEvent<HTMLDivElement>) => void;
  children: ReactNode;
}

function ModalOverlay({ isOpen, onOverlayClick, children }: IModalOverlayProps) {

  return (
    <div
      className={`${styles.modal_overlay} ${isOpen ? styles.opened : ""}`}
      onMouseDown={onOverlayClick}
    >{children}</div>
  );
}

export default ModalOverlay;
