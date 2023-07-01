import styles from './app-header.module.scss';
import { 
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <ul className={styles.nav_list}>
            <li className={`${styles.nav_item} p-5 mr-2`}>
              <a className={styles.nav_link} href='#'>
                <BurgerIcon type="primary" />
                <span className={`${styles.nav_link_text} pl-2`}>Конструктор</span>
              </a>               
            </li>
            <li className={`${styles.nav_item} p-5 mr-2`}>
              <a className={`${styles.nav_link} ${styles.inactive}`} href='#'>
                <ListIcon type="secondary" />
                <span className={`${styles.nav_link_text} pl-2`}>Лента заказов</span>
              </a>               
            </li>
            <li className={`${styles.nav_item} p-5`}>
              <a className={`${styles.nav_link} ${styles.inactive}`} href='#'>
                <ProfileIcon type="secondary" />
                <span className={`${styles.nav_link_text} pl-2`}>Личный кабинет</span>
              </a>               
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