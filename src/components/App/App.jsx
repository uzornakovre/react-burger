import styles from './App.module.scss';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Content/Content';

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
