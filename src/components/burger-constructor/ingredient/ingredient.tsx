import styles from "./ingredient.module.scss";
import { FC, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { removeIngredient } from "../../../services/constructor/constructorSlice";
import { Identifier } from "dnd-core";
import { useAppDispatch } from "../../../services/hooks";

interface IIngredientProps {
  name: string;
  price: number;
  image: string;
  id?: string;
  index: number;
  moveSelectedIngredient: (dragIndex: number, hoverIndex: number) => void;
}

const Ingredient: FC<IIngredientProps> = ({
  name,
  price,
  image,
  id,
  index,
  moveSelectedIngredient,
}) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  function handleDeleteClick(): void {
    if (id) dispatch(removeIngredient(id));
  }

  const [{ handlerId, isHover }, dropRef] = useDrop<
    { ingredient: TIngredient; index: number },
    unknown,
    { handlerId: Identifier | null; isHover: boolean }
  >({
    accept: "filling",
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
      isHover: monitor.isOver(),
    }),
    hover(item, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (!ref.current) return;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      // @ts-ignore
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveSelectedIngredient(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDrag }, dragRef] = useDrag({
    type: "filling",
    item: { id, index },
    collect: (monitor: any) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  dragRef(dropRef(ref));

  return (
    <div
      className={`${styles.ingredient} constructor_drag_item ${
        isDrag && styles.ingredient_is_dragging
      }
      ${isHover && styles.ingredient_is_hover}`}
      ref={ref}
      data-handler-id={handlerId}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={handleDeleteClick}
        extraClass={styles.element}
      />
    </div>
  );
}

export default Ingredient;
