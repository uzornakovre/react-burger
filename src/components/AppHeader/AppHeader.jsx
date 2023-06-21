import React from 'react';
import appHeaderStyles from './AppHeader.module.scss';
import { 
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

class AppHeader extends React.Component {
  render() {
    return (
      <header className={appHeaderStyles.header}>
        <div className={appHeaderStyles.container}>
          <nav className={appHeaderStyles.navigation}>
            <ul className={appHeaderStyles.navList}>
              <li className={`${appHeaderStyles.navItem} p-5 mr-2`}>
                <a className={appHeaderStyles.navLink} href='#'>
                  <BurgerIcon type="primary" />
                  <span className={`${appHeaderStyles.navLinkText} pl-2`}>Конструктор</span>
                </a>               
              </li>
              <li className={`${appHeaderStyles.navItem} p-5 mr-2`}>
                <a className={`${appHeaderStyles.navLink} ${appHeaderStyles.inactive}`} href='#'>
                  <ListIcon type="secondary" />
                  <span className={`${appHeaderStyles.navLinkText} pl-2`}>Лента заказов</span>
                </a>               
              </li>
              <li className={`${appHeaderStyles.navItem} p-5`}>
                <a className={`${appHeaderStyles.navLink} ${appHeaderStyles.inactive}`} href='#'>
                  <ProfileIcon type="secondary" />
                  <span className={`${appHeaderStyles.navLinkText} pl-2`}>Личный кабинет</span>
                </a>               
              </li>
            </ul>
          </nav>
          <div className={appHeaderStyles.logo}><Logo /></div>
          <h1 className={appHeaderStyles.title} lang="en">Stellar Burgers</h1>
        </div>
      </header>
    )
  }
}

export default AppHeader;