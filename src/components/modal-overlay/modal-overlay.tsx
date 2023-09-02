import styles from "./modal-overlay.module.scss";
import { FC, MouseEvent, PropsWithChildren } from "react";

interface IModalOverlayProps {
  type: "default" | "route"
  isOpen?: boolean;
  onOverlayClick: (evt: MouseEvent<HTMLDivElement>) => void;
}

const ModalOverlay: FC<PropsWithChildren<IModalOverlayProps>> = ({
  type,
  isOpen,
  onOverlayClick,
  children,
}) => {
  return (
    <div
      className={`${styles.modal_overlay} ${(isOpen || type === "route") && styles.opened}`}
      onMouseDown={onOverlayClick}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
