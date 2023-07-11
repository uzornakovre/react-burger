import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './item.module.scss';
import { useSelector } from 'react-redux';
import { getSelectedBun, getSelectedIngredients } from '../../../utils/constants';
import { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd';

function Item({ name, price, image, _id, type }) {
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: { name, price, image, _id, type },
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  })
  const selectedBun = useSelector(getSelectedBun);
  const selectedIngredients = useSelector(getSelectedIngredients);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let ingredCount = 0;

    selectedIngredients.forEach(i => i._id === _id ? ingredCount++ : ingredCount);
    setCounter(ingredCount);

    if (selectedBun._id === _id) {
      setCounter(1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBun, selectedIngredients])

  return (
    <div className={styles.item} ref={dragRef}>
      <img className={`${styles.image} pl-4 pr-4 pb-1`} src={image} alt={name} />
      <div className={styles.price}>
        <span className={styles.priceValue}>{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.title} pt-1`}>{name}</p>
      {
        counter > 0 && 
        <div className={styles.counter}><span className={styles.counter_value}>{counter}</span></div>
      }
    </div>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Item;