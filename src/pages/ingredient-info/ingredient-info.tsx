import styles from "./ingredient-info.module.scss";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";

const IngredientInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Детали ингридиента</h2>
      <IngredientDetails />
    </div>
  );
}

export default IngredientInfo;
