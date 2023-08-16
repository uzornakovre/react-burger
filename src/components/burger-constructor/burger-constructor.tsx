// styles

import styles from "./burger-constructor.module.scss";

// libraries

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// hooks

import { useAppDispatch, useAppSelector } from "../../services/hooks";

// utils

import {
  getIsLoggedIn,
  getIsOrderDetailsModalOpen,
  getOrderId,
  getSelectedBun,
  getSelectedIngredients,
  getTotalPrice,
} from "../../utils/constants";

// components

import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import ResultList from "./result-list/result-list";

// slices
import { clearSelected } from "../../services/constructor/constructorSlice";
import { closeAllModals } from "../../services/modals/modalsSlice";
import { sendOrderData, setTotalPrice } from "../../services/order/orderSlice";
import {
  setInfoModalText,
  setIsInfoModalOpen,
  setIsOrderDetailsModalOpen,
} from "../../services/modals/modalsSlice";
import { getCookie } from "../../utils/cookies";

const BurgerConstructor = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const accessToken: string | undefined = getCookie("accessToken");
  const selectedBun = useAppSelector(getSelectedBun);
  const selectedIngredients = useAppSelector(
    getSelectedIngredients
  );
  const totalPrice = useAppSelector(getTotalPrice);
  const orderNumber = useAppSelector(getOrderId);
  const isOrderDetailsModalOpen = useAppSelector(
    getIsOrderDetailsModalOpen
  );
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  function submitOrder(ingredients: Array<string>): void {
    dispatch(sendOrderData({ ingredientsList: ingredients, token: accessToken }));
  }

  function handleOrderClick(): void {
    if (isLoggedIn) {
      if (selectedIngredients.length && selectedBun._id) {
        dispatch(setIsOrderDetailsModalOpen(true));
        submitOrder(
          selectedIngredients
            .map((i) => i._id)
            .concat([selectedBun._id, selectedBun._id])
        );
        dispatch(clearSelected());
      } else {
        dispatch(setIsInfoModalOpen(true));
        dispatch(
          setInfoModalText(
            "Необходимо выбрать булку и как минимум один ингредент"
          )
        );
      }
    } else navigate("/login");
  }

  useEffect(() => {
    dispatch(
      setTotalPrice(
        (selectedBun.id ? selectedBun.price * 2 : 0) +
          (selectedIngredients
            ? selectedIngredients.reduce((acc, item) => acc + item.price, 0)
            : 0)
      )
    );
  }, [dispatch, selectedBun, selectedIngredients]);

  return (
    <section className={`${styles.burger_constructor} mt-25`}>
      <ResultList />
      <div className={`${styles.order_info} mt-10`}>
        <div className={styles.total_price}>
          <span className={styles.total_price_value}>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleOrderClick}
        >
          Оформить заказ
        </Button>
      </div>
      <Modal
        isOpen={isOrderDetailsModalOpen}
        onClose={() => dispatch(closeAllModals())}
        title=""
      >
        <OrderDetails orderNumber={orderNumber} />
      </Modal>
    </section>
  );
}

export default BurgerConstructor;
