import { useState, useEffect } from 'react';
// import { configureStore } from '@reduxjs/toolkit'
import { api } from '../../utils/api';
import styles from './app.module.scss';
import AppHeader from '../app-header/app-header';
import Content from '../burger-constructor-page/burger-constructor-page';

// const reducer = (state, action) => state; 

// const store = configureStore({
//   reducer,
//   devTools: process.env.NODE_ENV !== 'production',
// }) 

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
