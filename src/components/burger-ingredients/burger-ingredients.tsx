import styles from "./burger-ingredients.module.scss";
import TabMenu from "./tab-menu/tab-menu";
import IngredientsMenu from "./ingredients-menu/ingredients-menu";
import { useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import Modal from "../modal/modal";
import {
  closeAllModals,
  setIsCartModalOpen,
} from "../../services/modals/modalsSlice";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIsCartModalOpen } from "../../services/modals/selectors";
import OrderBottom from "../mobile-bottom/order-bottom";

const BurgerIngredients = () => {
  const dispatch = useAppDispatch();
  const isCartModalOpen = useAppSelector(getIsCartModalOpen);
  const [currentTab, setCurrentTab] = useState("one");

  const tabMenuRef = useRef<HTMLDivElement>();
  const bunCategoryRef = useRef<HTMLLIElement>();
  const saucesCategoryRef = useRef<HTMLLIElement>();
  const mainCategoryRef = useRef<HTMLLIElement>();

  function handleShowCartClick() {
    dispatch(setIsCartModalOpen(true));
  }

  return (
    <section className={`${styles.burger_ingredients} mt-10`}>
      <h2 className={styles.title}>Соберите бургер</h2>
      <TabMenu
        currentTab={currentTab}
        tabMenuRef={tabMenuRef}
        bunCategoryRef={bunCategoryRef}
        saucesCategoryRef={saucesCategoryRef}
        mainCategoryRef={mainCategoryRef}
      />
      <IngredientsMenu
        setCurrentTab={setCurrentTab}
        tabMenuRef={tabMenuRef}
        bunCategoryRef={bunCategoryRef}
        saucesCategoryRef={saucesCategoryRef}
        mainCategoryRef={mainCategoryRef}
      />
      <OrderBottom
        type="mobile"
        buttonText="Смотреть заказ"
        buttonClickHandler={handleShowCartClick}
      />
      <Modal
        type="default"
        isOpen={isCartModalOpen}
        onClose={() => dispatch(closeAllModals())}
        title="Заказ"
      >
        <BurgerConstructor type="modal" />
      </Modal>
    </section>
  );
};

export default BurgerIngredients;
