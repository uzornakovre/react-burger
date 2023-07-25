import styles from './app-header.module.scss';
import { NavLink } from 'react-router-dom';
import { burgerIconPath, historyListIconPath, profileIconPath } from '../../utils/constants';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  function navLinkDefaultClass({ isActive }) {
    if (isActive) {
      return `${styles.nav_link} ${styles.active}`;
    } else return `${styles.nav_link}`;
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
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
        <div className={styles.logo}><Logo /></div>
        <h1 className={styles.title} lang="en">Stellar Burgers</h1>
      </div>
    </header>
  )
}

export default AppHeader;