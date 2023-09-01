import styles from "./ingredients-menu.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import Category from "../category/category";
import { setCurrentIngredient } from "../../../services/current-ingredient/currentIngredientSlice";
import { setIsIngredientDetailsModalOpen } from "../../../services/modals/modalsSlice";
import { FC, SetStateAction, Dispatch, RefObject } from "react";
import { useAppDispatch } from "../../../services/hooks";

interface IIngredientsMenuProps {
  setCurrentTab: Dispatch<SetStateAction<string>>
  tabMenuRef: RefObject<HTMLDivElement | undefined>;
  bunCategoryRef: RefObject<HTMLLIElement | undefined>;
  saucesCategoryRef: RefObject<HTMLLIElement | undefined>;
  mainCategoryRef: RefObject<HTMLLIElement | undefined>;
}

const IngredientsMenu: FC<IIngredientsMenuProps> = ({
  tabMenuRef,
  bunCategoryRef,
  saucesCategoryRef,
  mainCategoryRef,
  setCurrentTab,
}) => {
  const dispatch = useAppDispatch();
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
    const tabMenuPosition = tabMenuRef.current?.getBoundingClientRect().bottom || 0;
    const bunsPosition = bunCategoryRef.current?.getBoundingClientRect().top || 0;
    const saucesPosition = saucesCategoryRef.current?.getBoundingClientRect().top || 0;
    const mainPosition = mainCategoryRef.current?.getBoundingClientRect().top || 0;

    let bunsDistance = Math.abs(tabMenuPosition - bunsPosition);
    let saucesDistance = Math.abs(tabMenuPosition - saucesPosition);
    let mainDistance = Math.abs(tabMenuPosition - mainPosition);

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
      <li className={styles.categoriesItem} ref={bunCategoryRef as RefObject<HTMLLIElement>}>
        <Category
          title="Булка"
          type="bun"
          onIngredientClick={handleIngredientClick}
        />
      </li>
      <li className={styles.categoriesItem} ref={saucesCategoryRef as RefObject<HTMLLIElement>}>
        <Category
          title="Соусы"
          type="sauce"
          onIngredientClick={handleIngredientClick}
        />
      </li>
      <li className={styles.categoriesItem} ref={mainCategoryRef as RefObject<HTMLLIElement>}>
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
