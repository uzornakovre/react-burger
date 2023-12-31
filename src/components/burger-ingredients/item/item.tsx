import styles from "./item.module.scss";
import { FC, MouseEvent, useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import {
  getSelectedBun,
  getSelectedIngredients,
} from "../../../services/constructor/selectors";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";
import {
  addBun,
  addIngredient,
} from "../../../services/constructor/constructorSlice";

// interface IItemProps {
//   name: string;
//   price: number;
//   image: string;
//   _id: string;
//   type: string;
// }

const Item: FC<TIngredient> = ({
  name,
  price,
  image,
  _id,
  type,
  calories,
  carbohydrates,
  fat,
  proteins,
}) => {
  const dispatch = useAppDispatch();
  const selectedBun = useAppSelector(getSelectedBun);
  const selectedIngredients = useAppSelector(getSelectedIngredients);

  function handleIngredientAdd(
    evt: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    item: TIngredient
  ): void {
    evt.stopPropagation();
    if (item.type === "bun") {
      dispatch(addBun({ ...item, id: crypto.randomUUID() }));
    } else dispatch(addIngredient({ ...item, id: crypto.randomUUID() }));
  }

  const [counter, setCounter] = useState(0);

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: { name, price, image, _id, type },
    collect: (monitor: any) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    let ingredCount: number = 0;

    selectedIngredients.forEach((i) =>
      i._id === _id ? ingredCount++ : ingredCount
    );
    setCounter(ingredCount);

    if (selectedBun._id === _id) {
      setCounter(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBun, selectedIngredients]);

  return (
    <div className={`${styles.item} ingredients_drag_item`} ref={dragRef}>
      <img
        className={`${styles.image} pl-4 pr-4 pb-1`}
        src={image}
        alt={name}
      />
      <div className={styles.price}>
        <span className={styles.priceValue}>{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.title} pt-1`}>{name}</p>
      {counter > 0 && (
        <div className={styles.counter}>
          <span className={styles.counter_value}>{counter}</span>
        </div>
      )}
      <button
        className={styles.add_button}
        type="button"
        onClick={(evt) =>
          handleIngredientAdd(evt, {
            name,
            price,
            image,
            _id,
            type,
            calories,
            carbohydrates,
            fat,
            proteins,
          })
        }
      >
        Добавить
      </button>
    </div>
  );
};

export default Item;
