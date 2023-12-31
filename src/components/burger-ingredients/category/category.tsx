import styles from "./category.module.scss";
import { FC, useMemo } from "react";
import { getAllIngredients } from "../../../services/ingredients/selectors";
import Item from "../item/item";
import { useAppSelector } from "../../../services/hooks";

interface ICategoryProps {
  title: string;
  type: string;
  onIngredientClick: (item: TIngredient) => void;
}

const Category: FC<ICategoryProps> = ({ title, type, onIngredientClick }) => {
  const ingredientsList = useAppSelector(getAllIngredients);

  const ingredients = useMemo(
    () =>
      ingredientsList
        .filter((i) => i.type === type)
        .map((i) => (
          <li
            className='ingredients_list_item'
            key={`listItem-${i._id}`}
            onClick={() => onIngredientClick(i)}
          >
            <Item
              _id={i._id}
              name={i.name}
              type={i.type}
              price={i.price}
              image={i.image}
              proteins={i.proteins}
              carbohydrates={i.carbohydrates}
              fat={i.fat}
              calories={i.calories}
            />
          </li>
        )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ingredientsList]
  );

  return (
    <div className={`${styles.category}`} id={`category_${type}`}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>{ingredients}</ul>
    </div>
  );
};

export default Category;
