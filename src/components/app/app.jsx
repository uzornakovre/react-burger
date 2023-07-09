import styles from './app.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions';
import AppHeader from '../app-header/app-header';
import BurgerConstructorPage from '../burger-constructor-page/burger-constructor-page';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <BurgerConstructorPage />
    </div>
  );
}

export default App;
