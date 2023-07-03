import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { currentIngredientType } from '../../utils/prop-types';
import Category from './category/category';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import styles from './burger-ingredients.module.scss';

function BurgerIngredients({ ingredientsList }) {
  const [current, setCurrent] = useState('one');
  const [currentIngredient, setCurrentIngredient] = useState({});
  const [isIngredientDetailsModalOpen, setIsIngredientDetailsModalOpen] = useState(false);

  function handleIngredientClick(item) {
    setCurrentIngredient(item);
    setIsIngredientDetailsModalOpen(true);
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
            onIngredientClick={handleIngredientClick}
            ingredientsList={ingredientsList} />
        </li>
        <li className={styles.categoriesItem}>
          <Category
            title="Соусы"
            type="sauce"
            onIngredientClick={handleIngredientClick}
            ingredientsList={ingredientsList} />
        </li>
        <li className={styles.categoriesItem}>
          <Category
            title="Начинки"
            type="main"
            onIngredientClick={handleIngredientClick}
            ingredientsList={ingredientsList} />
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

BurgerIngredients.propTypes = {
  ingredientsList: PropTypes.arrayOf(currentIngredientType)
}

export default BurgerIngredients;