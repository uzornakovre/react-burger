import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Category from './Category/Category';
import styles from './BurgerIngredients.module.scss';

function BurgerIngredients() {
  const [current, setCurrent] = useState('one');

  // function setCurrentTab(evt) {
  //   setCurrent(evt);
  // }
  
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
          <Category title="Булка" type="bun" />
        </li>
        <li className={styles.categoriesItem}>
          <Category title="Соусы" type="sauce" />
        </li>
        <li className={styles.categoriesItem}>
          <Category title="Начинки" type="main" />
        </li>
      </ul>
    </section>
  )
}

export default BurgerIngredients;