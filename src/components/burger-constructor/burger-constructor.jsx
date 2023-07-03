import { useState, useContext, useEffect } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.scss';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import ResultList from './result-list/result-list';
import { IngredientsListContext } from '../../contexts/ingredients-list-context';

function BurgerConstructor() {

  // Временные данные для теста:

  const tempBun = {
    "_id":"60666c42cc7b410027a1a9b1",
    "name":"Краторная булка N-200i",
    "type":"bun",
    "proteins":80,
    "fat":24,
    "carbohydrates":53,
    "calories":420,
    "price":1255,
    "image":"https://code.s3.yandex.net/react/code/bun-02.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
    "__v":0
  }

  const tempIngredients = [
    {
      "_id":"60666c42cc7b410027a1a9b5",
      "name":"Говяжий метеорит (отбивная)",
      "type":"main",
      "proteins":800,
      "fat":800,
      "carbohydrates":300,
      "calories":2674,
      "price":3000,
      "image":"https://code.s3.yandex.net/react/code/meat-04.png",
      "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
      "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
      "__v":0
   },
   {
      "_id":"60666c42cc7b410027a1a9b6",
      "name":"Биокотлета из марсианской Магнолии",
      "type":"main",
      "proteins":420,
      "fat":142,
      "carbohydrates":242,
      "calories":4242,
      "price":424,
      "image":"https://code.s3.yandex.net/react/code/meat-01.png",
      "image_mobile":"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
      "image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png",
      "__v":0
   },
   {
      "_id":"60666c42cc7b410027a1a9b7",
      "name":"Соус Spicy-X",
      "type":"sauce",
      "proteins":30,
      "fat":20,
      "carbohydrates":40,
      "calories":30,
      "price":90,
      "image":"https://code.s3.yandex.net/react/code/sauce-02.png",
      "image_mobile":"https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
      "image_large":"https://code.s3.yandex.net/react/code/sauce-02-large.png",
      "__v":0
   }
  ]


  const ingredientsList = useContext(IngredientsListContext);
  const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] = useState(false);
  const [selectedBun, setSelectedBun] = useState(tempBun);
  const [selectedIngredients, setSelectedIngredients] = useState(tempIngredients);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleOrderClick() {
    setIsOrderDetailsModalOpen(true);
  }

  function closeModal() {
    setIsOrderDetailsModalOpen(false);
  }

  useEffect(() => {
    setTotalPrice(
      selectedBun.price * 2 + selectedIngredients.reduce((acc, item) => acc + item.price, 0)
    )
  }, [selectedBun, selectedIngredients])

  return (
    <section className={`${styles.burger_constructor} mt-25`}>
      <ResultList bun={selectedBun} ingredients={selectedIngredients} />
      <div className={`${styles.order_info} mt-10`}>
        <div className={styles.total_price}>
          <span className={styles.total_price_value}>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button 
          htmlType="button" 
          type="primary" 
          size="large"
          onClick={handleOrderClick}>Оформить заказ</Button>
      </div>
      <Modal
        isOpen={isOrderDetailsModalOpen}
        onClose={closeModal}
        title=""
      >
        <OrderDetails />
      </Modal>
    </section>
  )
}

export default BurgerConstructor;