import styles from './ingredient-details.module.scss';
import { currentIngredientType } from '../../utils/prop-types';

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

IngredientDetails.propTypes = { currentIngredient: currentIngredientType }

export default IngredientDetails;