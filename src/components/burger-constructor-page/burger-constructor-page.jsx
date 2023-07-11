import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import PropTypes from 'prop-types';
import { currentIngredientType } from '../../utils/prop-types';
import styles from './burger-constructor-page.module.scss';

function BurgerConstructorPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </main>
  )
}

BurgerConstructorPage.propTypes = {
  ingredientsList: PropTypes.arrayOf(currentIngredientType)
}

export default BurgerConstructorPage;