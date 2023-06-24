import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import INGREDIENTS from '../../../utils/data/INGREDIENTS';
import Item from '../Item/Item';
import styles from './Category.module.scss';

function Category({ title, type }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      INGREDIENTS.filter(i => i.type === type).map((i) => (
        <li className={styles.listItem} key={`listItem-${i._id}`}>
          <Item 
            key={`listItem-${i._id}`}
            name={i.name}
            type={i.type}
            proteins={i.proteins}
            fat={i.fat}
            carbohydrates={i.carbohydrates}
            calories={i.calories}
            price={i.price}
            image={i.image} />
        </li>
      ))
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${styles.category}`}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={`${styles.list} pt-6 pr-4 pb-10 pl-4`}>
        {items}
      </ul>
    </div>
  )
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}; 

export default Category;