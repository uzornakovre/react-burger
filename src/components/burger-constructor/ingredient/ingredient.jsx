import { ConstructorElement,  DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Ingredient({ name, price, image }) {
  return (
    <>
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
      />
    </>
  )
}

export default Ingredient;