import styles from "./modal-overlay.module.scss";
import { FC, MouseEvent, PropsWithChildren } from "react";

interface IModalOverlayProps {
  isOpen: boolean;
  onOverlayClick: (evt: MouseEvent<HTMLDivElement>) => void;
}

const ModalOverlay: FC<PropsWithChildren<IModalOverlayProps>> = ({
  isOpen,
  onOverlayClick,
  children,
}) => {
  return (
    <div
      className={`${styles.modal_overlay} ${isOpen ? styles.opened : ""}`}
      onMouseDown={onOverlayClick}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
