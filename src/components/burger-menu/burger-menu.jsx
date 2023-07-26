import styles from "./burger-menu.module.scss";
import Navigation from "../app-header/navigation/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getIsBurgerMenuOpen } from "../../utils/constants";
import { toggleBurgerMenu } from "../../services/burger-menu/burgerMenuSlice";

function BurgerMenu() {
  const dispatch = useDispatch();
  const isBurgerMenuOpen = useSelector(getIsBurgerMenuOpen);

  function closeBurgerMenu() {
    dispatch(toggleBurgerMenu(false));
  }

  function handleMenuOverlayClick(evt) {
    evt.target.classList.forEach((className) => {
      if (className.includes("menu_opened")) {
        closeBurgerMenu();
      }
    });
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
