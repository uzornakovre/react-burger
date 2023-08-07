import styles from "./app-header.module.scss";
import Navigation from "./navigation/navigation";
import { burgerMenuIconPath } from "../../utils/svg-pathes";

import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import logoMobile from '../../images/logo.svg';
import { useDispatch } from "react-redux";
import { toggleBurgerMenu } from "../../services/burger-menu/burgerMenuSlice";

function AppHeader() {
  const dispatch = useDispatch();

  function handleBurgerButtonClick() {
    dispatch(toggleBurgerMenu(true));
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation />
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.logo_mobile}>
          <img src={logoMobile} alt="Логотип с изображением неонового бургера" />
        </div>
        <h1 className={styles.title} lang="en">
          Stellar Burgers
        </h1>
        <button className={styles.burger_button} type="button" onClick={handleBurgerButtonClick}>
          <svg className={styles.burger_icon} viewBox="0 0 24 24">
            {burgerMenuIconPath}
          </svg>
        </button>
      </div>
    </header>
  );
}

export default AppHeader;
