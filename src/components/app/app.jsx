import styles from './app.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/ingredients/ingredientsSlice';
import Layout from '../layout/layout';
import NotFound from '../not-found/not-found';
import BurgerConstructorPage from '../burger-constructor-page/burger-constructor-page';
import { Routes, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BurgerConstructorPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
