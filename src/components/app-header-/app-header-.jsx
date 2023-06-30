import styles from './AppHeader.module.scss';
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
          <ul className={styles.navList}>
            <li className={`${styles.navItem} p-5 mr-2`}>
              <a className={styles.navLink} href='#'>
                <BurgerIcon type="primary" />
                <span className={`${styles.navLinkText} pl-2`}>Конструктор</span>
              </a>               
            </li>
            <li className={`${styles.navItem} p-5 mr-2`}>
              <a className={`${styles.navLink} ${styles.inactive}`} href='#'>
                <ListIcon type="secondary" />
                <span className={`${styles.navLinkText} pl-2`}>Лента заказов</span>
              </a>               
            </li>
            <li className={`${styles.navItem} p-5`}>
              <a className={`${styles.navLink} ${styles.inactive}`} href='#'>
                <ProfileIcon type="secondary" />
                <span className={`${styles.navLinkText} pl-2`}>Личный кабинет</span>
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