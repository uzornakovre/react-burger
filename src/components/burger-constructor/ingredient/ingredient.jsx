import styles from './ingredient.module.scss';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { removeIngredient } from '../../../services/constructor/constructorSlice';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';

function Ingredient({ name, price, image, id, index, moveSelectedIngredient }) {
  const dispatch = useDispatch();
  const ref = useRef();

  function handleDeleteClick() {
    dispatch(removeIngredient(id));
  }

  const [{ isHover }, dropRef] = useDrop({
    accept: "filling",
    collect: monitor => ({
      handlerId: monitor.getHandlerId(),
      isHover: monitor.isOver(),
    }),
    hover(item, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (!ref.current) return;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveSelectedIngredient(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const [{ isDrag }, dragRef] = useDrag({
    type: "filling",
    item: {id, index},
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  })

  dragRef(dropRef(ref));

  return (
    <div className={`${styles.ingredient} ${isDrag && styles.ingredient_is_dragging}
      ${isHover && styles.ingredient_is_hover}`} ref={ref}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={handleDeleteClick}
      />
    </div>
  )
}

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  moveSelectedIngredient: PropTypes.func.isRequired
}

export default Ingredient;