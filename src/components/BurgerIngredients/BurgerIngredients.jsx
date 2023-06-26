import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import Category from './Category/Category';
import styles from './BurgerIngredients.module.scss';

function BurgerIngredients({ onIngredientClick }) {
  const [current, setCurrent] = useState('one');
  
  return (
    <section className={`${styles.burgerIngredients} mt-10`}>
      <h2 className={styles.title}>Соберите бургер</h2>
      <div className={`${styles.tabs} mt-5 mb-10`}>
        <Tab value="one" active={current === 'one'} onClick={(evt) => setCurrent(evt)}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={(evt) => setCurrent(evt)}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={(evt) => setCurrent(evt)}>
          Начинки
        </Tab>
      </div>
      <ul className={styles.categories}>
        <li className={styles.categoriesItem}>
          <Category title="Булка" type="bun" onIngredientClick={onIngredientClick} />
        </li>
        <li className={styles.categoriesItem}>
          <Category title="Соусы" type="sauce" onIngredientClick={onIngredientClick} />
        </li>
        <li className={styles.categoriesItem}>
          <Category title="Начинки" type="main" onIngredientClick={onIngredientClick} />
        </li>
      </ul>
    </section>
  )
}

BurgerIngredients.propTypes = {
  onIngredientClick: PropTypes.func.isRequired
}

export default BurgerIngredients;