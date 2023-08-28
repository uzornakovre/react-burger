import styles from "./navigation.module.scss";
import { NavLink } from "react-router-dom";
import {
  burgerIconPath,
  historyListIconPath,
  profileIconPath,
} from "../../../images/svg-pathes";
import { FC } from "react";

interface INavigationProps {
  place?: string;
}

const Navigation: FC<INavigationProps> = ({ place }) => {
  function navLinkDefaultClass({ isActive }: { isActive: boolean }): string {
    if (isActive) {
      return `${styles.nav_link} ${styles.active}`;
    } else return `${styles.nav_link}`;
  }

  return (
    <nav
      className={`${styles.navigation} ${
        place === "burger" && styles.navigation_place_burger
      }`}
    >
      <ul
        className={`${styles.nav_list} ${
          place === "burger" && styles.nav_list_place_burger
        }`}
      >
        <li
          className={`${styles.nav_item} ${
            place === "burger" && styles.nav_item_place_burger
          }`}
        >
          <NavLink to="/" className={navLinkDefaultClass}>
            <svg className={styles.icon} viewBox="0 0 24 24">
              {burgerIconPath}
            </svg>
            <span className={`${styles.nav_link_text} pl-2`}>Конструктор</span>
          </NavLink>
        </li>
        <li
          className={`${styles.nav_item} ${
            place === "burger" && styles.nav_item_place_burger
          }`}
        >
          <NavLink to="/feed" end className={navLinkDefaultClass}>
            <svg className={styles.icon} viewBox="0 0 24 24">
              {historyListIconPath}
            </svg>
            <span className={`${styles.nav_link_text} pl-2`}>
              Лента заказов
            </span>
          </NavLink>
        </li>
        <li
          className={`${styles.nav_item} ${
            place === "burger" && styles.nav_item_place_burger
          }`}
        >
          <NavLink to="/profile" className={navLinkDefaultClass}>
            <svg className={styles.icon} viewBox="0 0 24 24">
              {profileIconPath}
            </svg>
            <span className={`${styles.nav_link_text} pl-2`}>
              Личный кабинет
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
