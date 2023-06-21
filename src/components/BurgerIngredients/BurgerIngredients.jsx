import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredients.module.scss';

class BurgerIngredients extends React.Component {
  state = {
    current: 'one',
  }

  setCurrentTab = (evt) => {
    this.setState({ current: evt });
  }
  render() {
    return (
      <section className={`${styles.burgerIngredients} mt-10`}>
        <h2 className={styles.title}>Соберите бургер</h2>
        <div className={`${styles.tabs} mt-5 mb-10`}>
          <Tab value="one" active={this.state.current === 'one'} onClick={this.setCurrentTab}>
            Булки
          </Tab>
          <Tab value="two" active={this.state.current === 'two'} onClick={this.setCurrentTab}>
            Соусы
          </Tab>
          <Tab value="three" active={this.state.current === 'three'} onClick={this.setCurrentTab}>
            Начинки
          </Tab>
        </div>
        <ul className={styles.categories}>
          <li className={styles.categoriesItem}>
            
          </li>
        </ul>
      </section>
    )
  }
}

export default BurgerIngredients;