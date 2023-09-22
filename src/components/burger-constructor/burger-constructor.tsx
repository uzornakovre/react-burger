// styles

import styles from "./burger-constructor.module.scss";

// libraries

import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// hooks

import { useAppDispatch, useAppSelector } from "../../services/hooks";

// store

import { getIsOrderDetailsModalOpen } from "../../services/modals/selectors";
import { getOrderId, getOrderIsLoading } from "../../services/order/selectors";
import { getIsLoggedIn } from "../../services/auth/selectors";
import {
  getSelectedBun,
  getSelectedIngredients,
} from "../../services/constructor/selectors";

// components

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
import OrderBottom from "../mobile-bottom/order-bottom";

interface BurgerConstructorProps {
  type: "default" | "modal";
}

const BurgerConstructor: FC<BurgerConstructorProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const accessToken: string | undefined = getCookie("accessToken");
  const selectedBun = useAppSelector(getSelectedBun);
  const selectedIngredients = useAppSelector(getSelectedIngredients);
  const orderNumber = useAppSelector(getOrderId);
  const isOrderDetailsModalOpen = useAppSelector(getIsOrderDetailsModalOpen);
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const isOrderLoading = useAppSelector(getOrderIsLoading);

  function submitOrder(ingredients: Array<string>): void {
    dispatch(
      sendOrderData({ ingredientsList: ingredients, token: accessToken })
    );
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
    <section
      className={`${styles.burger_constructor} ${
        type === "modal" && styles.modal
      } ${type === "default" && "mt-25"}`}
    >
      <ResultList />
      <OrderBottom
        type={type === "modal" ? "mobile" : "default"}
        buttonText="Оформить заказ"
        buttonClickHandler={handleOrderClick}
      />
      {!isOrderLoading && (
        <Modal
          type="default"
          isOpen={isOrderDetailsModalOpen}
          onClose={() => dispatch(closeAllModals())}
          title=""
        >
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
