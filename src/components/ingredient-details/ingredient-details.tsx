import styles from "./ingredient-details.module.scss";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { getCurrentIngredient } from "../../services/current-ingredient/selectors";
import { getAllIngredients } from "../../services/ingredients/selectors";
import { setCurrentIngredient } from "../../services/current-ingredient/currentIngredientSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const IngredientDetails = () => {
  const dispatch = useAppDispatch();
  const allIngredients = useAppSelector(getAllIngredients);
  const currentIngredient = useAppSelector(getCurrentIngredient);
  const currentIngredientId = useParams().id;

  useEffect(() => {
    dispatch(
      setCurrentIngredient(
        allIngredients.find((i) => i._id === currentIngredientId)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, allIngredients]);

  return (
    <div className={styles.content}>
      <img
        className={styles.image}
        src={currentIngredient.image_large}
        alt={currentIngredient.name}
      />
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
          <span className={styles.value}>
            {currentIngredient.carbohydrates}
          </span>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;
