import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Category from './category/category';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import styles from './burger-ingredients.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addBun, addIngredient, setCurrentIngredient } from '../../services/actions';

function BurgerIngredients() {
  const currentIngredient = useSelector(store => store.currentIngredient);
  const [current, setCurrent] = useState('one');
  const [isIngredientDetailsModalOpen, setIsIngredientDetailsModalOpen] = useState(false);

  const dispatch = useDispatch();

  function handleIngredientClick(item) {
    dispatch(setCurrentIngredient(item));
    setIsIngredientDetailsModalOpen(true);

    if (item.type === 'bun') {
      dispatch(addBun({ ...item, id: Math.random() }));
    } else dispatch(addIngredient({ ...item, id: Math.random() }));
  }

  function closeModal() {
    setIsIngredientDetailsModalOpen(false);
  }
  
  return (
    <section className={`${styles.burger_ingredients} mt-10`}>
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
          <Category
            title="Булка"
            type="bun"
            onIngredientClick={handleIngredientClick} />
        </li>
        <li className={styles.categoriesItem}>
          <Category
            title="Соусы"
            type="sauce"
            onIngredientClick={handleIngredientClick} />
        </li>
        <li className={styles.categoriesItem}>
          <Category
            title="Начинки"
            type="main"
            onIngredientClick={handleIngredientClick} />
        </li>
      </ul>
      <Modal
        isOpen={isIngredientDetailsModalOpen}
        onClose={closeModal}
        currentIngredient={currentIngredient}
        title="Детали ингредиента">
          <IngredientDetails currentIngredient={currentIngredient} />
        </Modal>
    </section>
  )
}

export default BurgerIngredients;