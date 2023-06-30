import { useState, useEffect } from 'react';
import { api } from '../../utils/api';
import styles from './App.module.scss';
import AppHeader from '../app-header-/app-header-';
import Content from '../burger-constructor-page/burger-constructor-page';

function App() {
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    api.getIngredients()
      .then((data) => {
        setIngredientsList(data.data);
      })
      .catch((error) => {
        console.log(`Ошибка при получении данных: ${error}`);
    });
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Content ingredientsList={ingredientsList} />
    </div>
  );
}

export default App;
