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
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
  })
}

export default IngredientDetails;