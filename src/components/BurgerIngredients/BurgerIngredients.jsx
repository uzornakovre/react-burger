import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import Category from './Category/Category';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import styles from './BurgerIngredients.module.scss';

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
  ingredientsList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  )
}

export default BurgerIngredients;