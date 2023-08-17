import styles from "./result-list.module.scss";
import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";
import { useDrop } from "react-dnd";
import {
  getSelectedBun,
  getSelectedIngredients,
} from "../../../utils/constants";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "../ingredient/ingredient";
import {
  addBun,
  addIngredient,
  moveIngredient,
} from "../../../services/constructor/constructorSlice";

const ResultList = () => {
  const dispatch = useAppDispatch();
  const selectedBun = useAppSelector(getSelectedBun);
  const selectedIngredients = useAppSelector(
    getSelectedIngredients
  );

  const [{ isHover }, ingredientDropRef] = useDrop<
    TIngredient,
    unknown,
    { isHover: boolean }
  >(() => ({
    accept: "ingredient",
    drop(item) {
      handleIngredientDrop(item);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  }));

  function handleIngredientDrop(item: TIngredient): void {
    if (item.type === "bun") {
      dispatch(addBun({ ...item, id: crypto.randomUUID() }));
    } else dispatch(addIngredient({ ...item, id: crypto.randomUUID() }));
  }

  function moveSelectedIngredient(dragIndex: number, hoverIndex: number): void {
    dispatch(moveIngredient({ dragIndex, hoverIndex }));
  }

  const currentIngredients = useMemo(
    () =>
      selectedIngredients &&
      selectedIngredients.map((item, index) => (
        <li className={styles.middle_item} key={`ingredient-${item.id}`}>
          <Ingredient
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
            index={index}
            moveSelectedIngredient={moveSelectedIngredient}
          />
        </li>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedIngredients]
  );

  return (
    <ul
      className={`${styles.result_list} ${
        isHover && styles.result_list_on_drop
      }`}
      ref={ingredientDropRef}
    >
      <li className={`${styles.item} ${styles.item_top}`}>
        {selectedBun.id ? (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${selectedBun.name} (верх)`}
            price={selectedBun.price}
            thumbnail={selectedBun.image}
          />
        ) : (
          <div
            className={`${styles.element_empty} ${styles.element_empty_top}`}
          >
            <span className={styles.tip}>Перетащите булку</span>
          </div>
        )}
      </li>
      <li className={`${styles.item} ${styles.item_middle}`}>
        {selectedIngredients.length ? (
          <ul className={styles.middle_list}>{currentIngredients}</ul>
        ) : (
          <div
            className={`${styles.element_empty} ${styles.element_empty_middle}`}
          >
            <span className={styles.tip}>Перетащите ингредиент</span>
          </div>
        )}
      </li>
      <li className={`${styles.item} ${styles.item_bottom}`}>
        {selectedBun.id ? (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${selectedBun.name} (низ)`}
            price={selectedBun.price}
            thumbnail={selectedBun.image}
          />
        ) : (
          <div
            className={`${styles.element_empty} ${styles.element_empty_bottom}`}
          >
            <span className={styles.tip}>Перетащите булку</span>
          </div>
        )}
      </li>
    </ul>
  );
}

export default ResultList;
