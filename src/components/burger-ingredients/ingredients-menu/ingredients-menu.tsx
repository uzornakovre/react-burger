import styles from "./ingredients-menu.module.scss";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Category from "../category/category";
import { setCurrentIngredient } from "../../../services/current-ingredient/currentIngredientSlice";
import { setIsIngredientDetailsModalOpen } from "../../../services/modals/modalsSlice";
import { FC } from "react";

interface IIngredientsMenuProps {
  setCurrentTab: any;
  tabMenuRef: any;
  bunCategoryRef: any;
  saucesCategoryRef: any;
  mainCategoryRef: any;
}

const IngredientsMenu: FC<IIngredientsMenuProps> = ({
  tabMenuRef,
  bunCategoryRef,
  saucesCategoryRef,
  mainCategoryRef,
  setCurrentTab,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  function handleIngredientClick(item: TIngredient): void {
    dispatch(setCurrentIngredient(item));
    dispatch(setIsIngredientDetailsModalOpen(true));
    navigate(`ingredients/${item._id}`, {
      state: { backgroundLocation: location },
    });
  }

  function handleScrollMenu() {
    const tabMenuPosition: number =
      tabMenuRef.current.getBoundingClientRect().bottom;
    const bunsPosition: number =
      bunCategoryRef.current.getBoundingClientRect().top;
    const saucesPosition: number =
      saucesCategoryRef.current.getBoundingClientRect().top;
    const mainPosition: number =
      mainCategoryRef.current.getBoundingClientRect().top;

    let bunsDistance: number = Math.abs(tabMenuPosition - bunsPosition);
    let saucesDistance: number = Math.abs(tabMenuPosition - saucesPosition);
    let mainDistance: number = Math.abs(tabMenuPosition - mainPosition);

    if (bunsDistance <= saucesDistance && bunsDistance <= mainDistance) {
      setCurrentTab("one");
    } else if (
      saucesDistance <= bunsDistance &&
      saucesDistance <= mainDistance
    ) {
      setCurrentTab("two");
    } else if (mainDistance <= bunsDistance || mainDistance <= saucesDistance) {
      setCurrentTab("three");
    }
  }

  return (
    <ul className={styles.categories} onScroll={handleScrollMenu}>
      <li className={styles.categoriesItem} ref={bunCategoryRef}>
        <Category
          title="Булка"
          type="bun"
          onIngredientClick={handleIngredientClick}
        />
      </li>
      <li className={styles.categoriesItem} ref={saucesCategoryRef}>
        <Category
          title="Соусы"
          type="sauce"
          onIngredientClick={handleIngredientClick}
        />
      </li>
      <li className={styles.categoriesItem} ref={mainCategoryRef}>
        <Category
          title="Начинки"
          type="main"
          onIngredientClick={handleIngredientClick}
        />
      </li>
    </ul>
  );
};

export default IngredientsMenu;
