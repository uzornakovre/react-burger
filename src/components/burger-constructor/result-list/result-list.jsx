import { useMemo } from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../ingredient/ingredient';
import styles from './result-list.module.scss';
import { useSelector } from 'react-redux';
import { getSelectedBun, getSelectedIngredients } from '../../../utils/constants';

function ResultList() {
  const selectedBun = useSelector(getSelectedBun);
  const selectedIngredients = useSelector(getSelectedIngredients);

  const currentIngredients = useMemo(() => 
    selectedIngredients && selectedIngredients.map(item => (
      <li className={styles.middle_item} key={`ingredient-${item.id}`}>
        <Ingredient 
          name={item.name}
          price={item.price}
          image={item.image}
          id={item.id}
        />
      </li>
    )), [selectedIngredients]
  )

  return (
    <ul className={styles.result_list}>
        <li className={`${styles.item} ${styles.item_top}`}>
          {
            selectedBun.id
              ? <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={`${selectedBun.name} (верх)`}
                  price={selectedBun.price}
                  thumbnail={selectedBun.image}
                />
              : <div className={`${styles.element_empty} ${styles.element_empty_top}`}>
                  <span className={styles.tip}>Перетащите булку</span>
                </div>

          }
        </li>
        <li className={`${styles.item} ${styles.item_middle}`}>
          {
            selectedIngredients.length 
              ? <ul className={styles.middle_list}>{currentIngredients}</ul>
              : <div className={`${styles.element_empty} ${styles.element_empty_middle}`}>
                  <span className={styles.tip}>Перетащите ингредиент</span>
                </div>
          }
        </li>
        <li className={`${styles.item} ${styles.item_bottom}`}>
        {
            selectedBun.id
              ? <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${selectedBun.name} (низ)`}
                  price={selectedBun.price}
                  thumbnail={selectedBun.image}
                />
              : <div className={`${styles.element_empty} ${styles.element_empty_bottom}`}>
                  <span className={styles.tip}>Перетащите булку</span>
                </div>

          }
        </li>
      </ul>
  )
}

export default ResultList;