import styles from "./app-header.module.scss";
import Navigation from "./navigation/navigation";
import { burgerMenuIconPath } from "../../images/svg-pathes";

import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import logoMobile from '../../images/logo.svg';
import { useAppDispatch } from "../../services/hooks";
import { toggleBurgerMenu } from "../../services/burger-menu/burgerMenuSlice";
import { Link } from "react-router-dom";

const AppHeader = () => {
  const dispatch = useAppDispatch();

  function handleBurgerButtonClick(): void {
    dispatch(toggleBurgerMenu(true));
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation />
        <Link className={styles.logo} to="/">
          <Logo />
        </Link>
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
