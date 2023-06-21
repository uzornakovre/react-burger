import React from 'react';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import mainStyles from './Main.module.scss';

class Main extends React.Component {
  render() {
    return (
      <main className={mainStyles.main}>
        <div className={mainStyles.container}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </main>
    )
  }
}

export default Main;