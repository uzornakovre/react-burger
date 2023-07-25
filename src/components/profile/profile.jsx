import styles from "./profile.module.scss";
import PropTypes from "prop-types";
import { NavLink, Outlet } from "react-router-dom";


function Profile({ handleLogout }) {

  function navLinkDefaultClass({ isActive }) {
    if (isActive) {
      return `${styles.nav_link} ${styles.active}`;
    } else return `${styles.nav_link}`;
  }

  return (
    <div className={styles.container}>
      <div className={styles.side_container}>
        <nav className={styles.nav_menu}>
          <ul className={styles.nav_menu_list}>
            <li className={styles.nav_menu_list_item}>
              <NavLink to="/profile/" className={navLinkDefaultClass}>
                Профиль
              </NavLink>
            </li>
            <li className={styles.nav_menu_list_item}>
              <NavLink to="/profile/orders" className={navLinkDefaultClass}>
                История заказов
              </NavLink>
            </li>
            <li className={styles.nav_menu_list_item}>
              <button className={styles.nav_link} onClick={handleLogout}>
                Выход
              </button>
            </li>
          </ul>
        </nav>
        <span className={styles.tip}>
          В&nbsp;этом разделе вы&nbsp;можете изменить свои персональные данные
        </span>
      </div>
      <Outlet />
    </div>
  );
}

Profile.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Profile;
