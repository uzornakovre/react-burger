import { useEffect } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.scss';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import ResultList from './result-list/result-list';
import { useSelector, useDispatch } from 'react-redux';
import { sendOrderData, setTotalPrice } from '../../services/order/orderSlice';
import { setInfoModalText, setIsInfoModalOpen, setIsOrderDetailsModalOpen } from '../../services/modals/modalsSlice';
import { clearSelected } from '../../services/constructor/constructorSlice';
import { closeAllModals } from '../../services/modals/modalsSlice';
import { 
  getIsOrderDetailsModalOpen,
  getOrderId,
  getSelectedBun, 
  getSelectedIngredients, 
  getTotalPrice,
} from '../../utils/constants';

function BurgerConstructor() {

  const selectedBun = useSelector(getSelectedBun)
  const selectedIngredients = useSelector(getSelectedIngredients);
  const totalPrice = useSelector(getTotalPrice);
  const orderNumber = useSelector(getOrderId);
  const isOrderDetailsModalOpen = useSelector(getIsOrderDetailsModalOpen);

  const dispatch = useDispatch();

  function submitOrder(ingredients) {
    dispatch(sendOrderData(ingredients));
  }

  function handleOrderClick() {
    if (selectedIngredients.length && selectedBun._id) {
      dispatch(setIsOrderDetailsModalOpen(true));
      submitOrder(selectedIngredients.map(i => i._id).concat([selectedBun._id, selectedBun._id]));
      dispatch(clearSelected());
    } else {
      dispatch(setIsInfoModalOpen(true));
      dispatch(setInfoModalText('Необходимо выбрать булку и как минимум один ингредент'));
    }
  }

  useEffect(() => {
    dispatch(setTotalPrice(
      (selectedBun.id ? selectedBun.price * 2 : 0) + 
      (selectedIngredients ? selectedIngredients.reduce((acc, item) => acc + item.price, 0) : 0)
    ))
  }, [dispatch, selectedBun, selectedIngredients]);

  return (
    <section className={`${styles.burger_constructor} mt-25`}>
      <ResultList bun={selectedBun} />
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
        onClose={() => dispatch(closeAllModals())}
        title=""
      >
        <OrderDetails orderNumber={orderNumber} />
      </Modal>
    </section>
  )
}

export default BurgerConstructor;