import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { removeIngredient } from '../../../services/constructor/constructorSlice';
import PropTypes from 'prop-types';

function Ingredient({ name, price, image, id }) {
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(removeIngredient(id));
  }

  return (
    <>
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={handleDeleteClick}
      />
    </>
  )
}

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Ingredient;