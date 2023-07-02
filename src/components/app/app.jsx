import { useState, useEffect } from 'react';
// import { compose, createStore, applyMiddleware } from 'redux';
import { api } from '../../utils/api';
import styles from './app.module.scss';
import AppHeader from '../app-header/app-header';
import Content from '../burger-constructor-page/burger-constructor-page';

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const enhancer = composeEnhancers();
// const rootReducer = (state, action) => state;
// const store = createStore(rootReducer, enhancer); 

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
