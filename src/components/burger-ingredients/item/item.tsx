import styles from "./item.module.scss";
import { FC, useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import {
  getSelectedBun,
  getSelectedIngredients,
} from "../../../utils/constants";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

interface IItemProps {
  name: string;
  price: number;
  image: string;
  _id: string;
  type: string;
}

const Item: FC<IItemProps> = ({ name, price, image, _id, type }) => {
  const selectedBun = useSelector(getSelectedBun);
  const selectedIngredients = useSelector(getSelectedIngredients);

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
    <div className={styles.item} ref={dragRef}>
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
    </div>
  );
};

export default Item;
