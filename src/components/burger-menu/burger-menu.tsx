import styles from "./burger-menu.module.scss";
import Navigation from "../app-header/navigation/navigation";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { getIsBurgerMenuOpen } from "../../utils/constants";
import { toggleBurgerMenu } from "../../services/burger-menu/burgerMenuSlice";
import { MouseEvent } from "react";
import { isHtmlElement } from "../../utils/constants";

function BurgerMenu() {
  const dispatch = useAppDispatch();
  const isBurgerMenuOpen: boolean = useAppSelector(getIsBurgerMenuOpen);

  function closeBurgerMenu(): void {
    dispatch(toggleBurgerMenu(false));
  }

  function handleMenuOverlayClick(evt: MouseEvent<HTMLDivElement>): void {
    if (isHtmlElement(evt.target)) {
      evt.target.classList.forEach((className: string) => {
        if (className.includes("menu_opened")) {
          closeBurgerMenu();
        }
      });
    }
  }

  return (
    <div
      className={`${styles.menu} ${isBurgerMenuOpen ? styles.menu_opened : ""}`}
      onMouseDown={handleMenuOverlayClick}
    >
      <div
        className={`${styles.container} ${
          isBurgerMenuOpen ? styles.container_opened : ""
        }`}
      >
        <div className={styles.heading}>
          <h2 className={styles.title}>Меню</h2>
          <button
            className={styles.close_button}
            type="button"
            onClick={closeBurgerMenu}
          ></button>
        </div>
        <Navigation place="burger" />
      </div>
    </div>
  );
}

export default BurgerMenu;
