import styles from './app-header.module.scss';
import Navigation from './navigation/navigation';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation />
        <div className={styles.logo}><Logo /></div>
        <h1 className={styles.title} lang="en">Stellar Burgers</h1>
      </div>
    </header>
  )
}

export default AppHeader;