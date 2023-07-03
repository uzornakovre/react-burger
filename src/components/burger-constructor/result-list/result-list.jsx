import { useMemo } from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../ingredient/ingredient';
import styles from './result-list.module.scss';

function ResultList({ bun, ingredients }) {
  const currentIngredients = useMemo(() => 
    ingredients.map(item => (
      <li className={styles.middle_item} key={`ingredient-${item._id}`}>
        <Ingredient 
          name={item.name}
          price={item.price}
          image={item.image}
        />
      </li>
    )), [ingredients]
  )
  return (
    <ul className={styles.result_list}>
        <li className={`${styles.item} ${styles.item_top}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </li>
        <li className={`${styles.item} ${styles.item_middle}`}>
          <ul className={styles.middle_list}>
            {currentIngredients}
          </ul>
        </li>
        <li className={`${styles.item} ${styles.item_bottom}`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </li>
      </ul>
  )
}

export default ResultList;