import { useState, useContext, useEffect } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.scss';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import ResultList from './result-list/result-list';
import { IngredientsListContext } from '../../contexts/ingredients-list-context';
import { api } from '../../utils/api';
import { tempBun, tempIngredients } from '../../utils/tempData';

function BurgerConstructor() {

  const ingredientsList = useContext(IngredientsListContext);
  const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] = useState(false);
  const [selectedBun, setSelectedBun] = useState(tempBun);
  const [selectedIngredients, setSelectedIngredients] = useState(tempIngredients);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderNumber, setOrderNumber] = useState(null);

  function submitOrder(ingredients) {
    api.sendOrderData(ingredients)
      .then((res) => {
        setOrderNumber(res.order.number)
      })
      .catch((error) =>{
        console.log(error);
      })
  }

  function handleOrderClick() {
    setIsOrderDetailsModalOpen(true);
    submitOrder(selectedIngredients.map(i => i._id));
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
        <OrderDetails orderNumber={orderNumber} />
      </Modal>
    </section>
  )
}

export default BurgerConstructor;