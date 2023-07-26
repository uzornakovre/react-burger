import styles from './navigation.module.scss';
import { NavLink } from 'react-router-dom';
import { burgerIconPath, historyListIconPath, profileIconPath } from '../../../utils/constants';

function Navigation() {
  function navLinkDefaultClass({ isActive }) {
    if (isActive) {
      return `${styles.nav_link} ${styles.active}`;
    } else return `${styles.nav_link}`;
  }
  
  return (
    <nav className={styles.navigation}>
      <ul className={styles.nav_list}>
        <li className={`${styles.nav_item} p-5 mr-2`}>
          <NavLink to="/" className={navLinkDefaultClass}>
            <svg className={styles.icon} viewBox="0 0 24 24">{burgerIconPath}</svg>
            <span className={`${styles.nav_link_text} pl-2`}>Конструктор</span>
          </NavLink>               
        </li>
        <li className={`${styles.nav_item} p-5 mr-2`}>
          <NavLink to="/history" className={navLinkDefaultClass}>
          <svg className={styles.icon} viewBox="0 0 24 24">{historyListIconPath}</svg>
            <span className={`${styles.nav_link_text} pl-2`}>Лента заказов</span>
          </NavLink>               
        </li>
        <li className={`${styles.nav_item} p-5`}>
          <NavLink to="/profile/" className={navLinkDefaultClass}>
            <svg className={styles.icon} viewBox="0 0 24 24">{profileIconPath}</svg>
            <span className={`${styles.nav_link_text} pl-2`}>Личный кабинет</span>
          </NavLink>               
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
