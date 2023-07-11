import styles from './ingredients-menu.module.scss';
import Category from '../category/category';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCurrentIngredient } from '../../../services/current-ingredient/currentIngredientSlice';
import { setIsIngredientDetailsModalOpen } from '../../../services/modals/modalsSlice';

function IngredientsMenu({ 
  tabMenuRef, 
  bunCategoryRef,
  saucesCategoryRef,
  mainCategoryRef,
  setCurrentTab,
}) {
  const dispatch = useDispatch();

  function handleIngredientClick(item) {
    dispatch(setCurrentIngredient(item));
    dispatch(setIsIngredientDetailsModalOpen(true));
  }

  function handleScrollMenu() {
    const tabMenuPosition = tabMenuRef.current.getBoundingClientRect().bottom;
    const bunsPosition = bunCategoryRef.current.getBoundingClientRect().top;
    const saucesPosition = saucesCategoryRef.current.getBoundingClientRect().top;
    const mainPosition = mainCategoryRef.current.getBoundingClientRect().top;

    let bunsDistance = Math.abs(tabMenuPosition - bunsPosition);
    let saucesDistance = Math.abs(tabMenuPosition - saucesPosition);
    let mainDistance = Math.abs(tabMenuPosition - mainPosition);

    if (bunsDistance <= saucesDistance && bunsDistance <= mainDistance) {
      setCurrentTab('one');
    } else if (saucesDistance <= bunsDistance && saucesDistance <= mainDistance) {
      setCurrentTab('two');
    } else if (mainDistance <= bunsDistance || mainDistance <= saucesDistance) {
      setCurrentTab('three');
    }
  }

  return (
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
  )
}

IngredientsMenu.propTypes = {
  tabMenuRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  bunCategoryRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  saucesCategoryRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  mainCategoryRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  setCurrentTab: PropTypes.func.isRequired
}

export default IngredientsMenu;
