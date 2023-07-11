import { useState, useRef } from 'react';
import Category from './category/category';
import Modal from '../modal/modal';
import TabMenu from './tab-menu/tab-menu';
import IngredientDetails from '../ingredient-details/ingredient-details';
import styles from './burger-ingredients.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentIngredient } from '../../services/current-ingredient/currentIngredientSlice';
import { setIsIngredientDetailsModalOpen } from '../../services/modals/modalsSlice';
import { getCurrentIngredient, getIsIngredientDetailsModalOpen } from '../../utils/constants';

function BurgerIngredients() {
  const currentIngredient = useSelector(getCurrentIngredient);
  const isIngredientDetailsModalOpen = useSelector(getIsIngredientDetailsModalOpen);
  const [current, setCurrent] = useState('one');

  const dispatch = useDispatch();

  const tabMenuRef = useRef();
  const bunCategoryRef = useRef();
  const saucesCategoryRef = useRef();
  const mainCategoryRef = useRef();

  function handleScrollMenu() {
    const tabMenuPosition = tabMenuRef.current.getBoundingClientRect().bottom;
    const bunsPosition = bunCategoryRef.current.getBoundingClientRect().top;
    const saucesPosition = saucesCategoryRef.current.getBoundingClientRect().top;
    const mainPosition = mainCategoryRef.current.getBoundingClientRect().top;

    let bunsDistance = Math.abs(tabMenuPosition - bunsPosition);
    let saucesDistance = Math.abs(tabMenuPosition - saucesPosition);
    let mainDistance = Math.abs(tabMenuPosition - mainPosition);

    if (bunsDistance <= saucesDistance && bunsDistance <= mainDistance) {
      setCurrent('one');
    } else if (saucesDistance <= bunsDistance && saucesDistance <= mainDistance) {
      setCurrent('two');
    } else if (mainDistance <= bunsDistance || mainDistance <= saucesDistance) {
      setCurrent('three');
    }
  }

  function handleIngredientClick(item) {
    dispatch(setCurrentIngredient(item));
    dispatch(setIsIngredientDetailsModalOpen(true));
  }

  function closeModal() {
    dispatch(setIsIngredientDetailsModalOpen(false));
  }
  
  return (
    <section className={`${styles.burger_ingredients} mt-10`}>
      <h2 className={styles.title}>Соберите бургер</h2>
      <TabMenu 
        current={current}
        tabMenuRef={tabMenuRef}
        bunCategoryRef={bunCategoryRef}
        saucesCategoryRef={saucesCategoryRef}
        mainCategoryRef={mainCategoryRef}
      />
      <ul className={styles.categories} onScroll={handleScrollMenu}>
        <li className={styles.categoriesItem} ref={bunCategoryRef}>
          <Category
            title="Булка"
            type="bun"
            onIngredientClick={handleIngredientClick} />
        </li>
        <li className={styles.categoriesItem} ref={saucesCategoryRef}>
          <Category
            title="Соусы"
            type="sauce"
            onIngredientClick={handleIngredientClick} />
        </li>
        <li className={styles.categoriesItem} ref={mainCategoryRef}>
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