import styles from './category.module.scss';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllIngredients } from '../../../utils/constants';
import Item from '../item/item';


function Category({ title, type, onIngredientClick }) {
  const ingredientsList = useSelector(getAllIngredients);

  const ingredients = useMemo(() =>
    ingredientsList.filter(i => i.type === type).map((i) => (
      <li 
        className={styles.listItem}
        key={`listItem-${i._id}`}
        onClick={() => onIngredientClick(i)}>
        <Item 
          _id={i._id}
          name={i.name}
          type={i.type}
          proteins={i.proteins}
          fat={i.fat}
          carbohydrates={i.carbohydrates}
          calories={i.calories}
          price={i.price}
          image={i.image} />
      </li>
    // eslint-disable-next-line react-hooks/exhaustive-deps
    )), [ingredientsList]);

  return (
    <div className={`${styles.category}`} id={`category_${type}`}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={`${styles.list} pt-6 pr-4 pb-10 pl-4`}>
        {ingredients}
      </ul>
    </div>
  )
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onIngredientClick: PropTypes.func.isRequired
}; 

export default Category;