import styles from './profile.module.scss';
import { NavLink } from 'react-router-dom';

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.side_container}>
        <nav className={styles.nav_menu}>
          <ul className={styles.nav_menu_list}>
            <li className={styles.nav_menu_list_item}>
              <NavLink>Профиль</NavLink>
            </li>
            <li className={styles.nav_menu_list_item}>
              <NavLink>История заказов</NavLink>
            </li>
            <li className={styles.nav_menu_list_item}>
              <NavLink>Выход</NavLink>
            </li>
          </ul>
        </nav>
        <span className={styles.tip}>В&nbsp;этом разделе вы&nbsp;можете изменить свои персональные данные</span>
      </div>
      
    </div>
  )
}

export default Profile;
