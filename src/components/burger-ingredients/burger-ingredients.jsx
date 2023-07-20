import styles from './burger-ingredients.module.scss';
import Modal from '../modal/modal';
import TabMenu from './tab-menu/tab-menu';
import IngredientDetails from '../ingredient-details/ingredient-details';
import IngredientsMenu from './ingredients-menu/ingredients-menu';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAllModals } from '../../services/modals/modalsSlice';
import { getCurrentIngredient, getIsIngredientDetailsModalOpen } from '../../utils/constants';

function BurgerIngredients() {
  const currentIngredient = useSelector(getCurrentIngredient);
  const isIngredientDetailsModalOpen = useSelector(getIsIngredientDetailsModalOpen);
  const [currentTab, setCurrentTab] = useState('one');

  const dispatch = useDispatch();

  const tabMenuRef = useRef();
  const bunCategoryRef = useRef();
  const saucesCategoryRef = useRef();
  const mainCategoryRef = useRef();
  
  return (
    <section className={`${styles.burger_ingredients} mt-10`}>
      <h2 className={styles.title}>Соберите бургер</h2>
      <TabMenu 
        currentTab={currentTab}
        tabMenuRef={tabMenuRef}
        bunCategoryRef={bunCategoryRef}
        saucesCategoryRef={saucesCategoryRef}
        mainCategoryRef={mainCategoryRef}
      />
      <IngredientsMenu
        setCurrentTab={setCurrentTab}
        tabMenuRef={tabMenuRef}
        bunCategoryRef={bunCategoryRef}
        saucesCategoryRef={saucesCategoryRef}
        mainCategoryRef={mainCategoryRef}
      />
      <Modal
        isOpen={isIngredientDetailsModalOpen}
        onClose={() => dispatch(closeAllModals())}
        currentIngredient={currentIngredient}
        title="Детали ингредиента">
          <IngredientDetails currentIngredient={currentIngredient} />
        </Modal>
    </section>
  )
}

export default BurgerIngredients;