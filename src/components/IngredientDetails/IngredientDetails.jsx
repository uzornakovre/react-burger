import styles from './IngredientDetails.module.scss';
import PropTypes from "prop-types";

function IngredientDetails({ currentIngredient }) {
  return (
    <div className={styles.content}>
      <img className={styles.image} src={currentIngredient.image} alt={currentIngredient.name} />
      <h3 className={styles.name}>{currentIngredient.name}</h3>
      <div className={styles.nutrition_values}>
        <div className={styles.nutrition_value}>
          <span className={styles.type}>Калории,ккал</span>
          <span className={styles.value}>{currentIngredient.calories}</span>
        </div>
        <div className={styles.nutrition_value}>
          <span className={styles.type}>Белки, г</span>
          <span className={styles.value}>{currentIngredient.proteins}</span>
        </div>
        <div className={styles.nutrition_value}>
          <span className={styles.type}>Жиры, г</span>
          <span className={styles.value}>{currentIngredient.fat}</span>
        </div>
        <div className={styles.nutrition_value}>
          <span className={styles.type}>Углеводы, г</span>
          <span className={styles.value}>{currentIngredient.carbohydrates}</span>
        </div>
      </div>
    </div>
  );
}

IngredientDetails.propTypes = {
  currentIngredient: PropTypes.shape({
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
}

export default IngredientDetails;