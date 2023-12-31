import { FC, RefObject } from "react";
import styles from "./tab-menu.module.scss";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

interface ITabMenuProps {
  currentTab: string;
  tabMenuRef: RefObject<HTMLDivElement | undefined>;
  bunCategoryRef: RefObject<HTMLLIElement | undefined>;
  saucesCategoryRef: RefObject<HTMLLIElement | undefined>;
  mainCategoryRef: RefObject<HTMLLIElement | undefined>;
}

const TabMenu: FC<ITabMenuProps> = ({
  currentTab,
  tabMenuRef,
  bunCategoryRef,
  saucesCategoryRef,
  mainCategoryRef,
}) => {
  function handleTabClick(ref: RefObject<HTMLLIElement>): void {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className={`${styles.tabs} mt-5 mb-10`} ref={tabMenuRef as RefObject<HTMLDivElement>}>
      <Tab
        value="one"
        active={currentTab === "one"}
        onClick={() => handleTabClick(bunCategoryRef as RefObject<HTMLLIElement>)}
      >
        Булки
      </Tab>
      <Tab
        value="two"
        active={currentTab === "two"}
        onClick={() => handleTabClick(saucesCategoryRef as RefObject<HTMLLIElement>)}
      >
        Соусы
      </Tab>
      <Tab
        value="three"
        active={currentTab === "three"}
        onClick={() => handleTabClick(mainCategoryRef as RefObject<HTMLLIElement>)}
      >
        Начинки
      </Tab>
    </div>
  );
};

export default TabMenu;
