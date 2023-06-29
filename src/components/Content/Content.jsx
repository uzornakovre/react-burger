import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import PropTypes from 'prop-types';
import styles from './Content.module.scss';

function Content({ onIngredientClick, onOrderClick, ingredientsList}) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BurgerIngredients onIngredientClick={onIngredientClick} ingredientsList={ingredientsList} />
        <BurgerConstructor onOrderClick={onOrderClick} />
      </div>
    </main>
  )
}

Content.propTypes = {
  onIngredientClick: PropTypes.func.isRequired,
  onOrderClick: PropTypes.func.isRequired,
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

export default Content;