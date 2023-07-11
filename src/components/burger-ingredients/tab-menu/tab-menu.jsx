import styles from './tab-menu.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function TabMenu({ 
  currentTab, 
  tabMenuRef, 
  bunCategoryRef, 
  saucesCategoryRef, 
  mainCategoryRef 
}) {
  
  function handleTabClick(ref) {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <div className={`${styles.tabs} mt-5 mb-10`} ref={tabMenuRef}>
      <Tab value="one" active={currentTab === 'one'} onClick={() => handleTabClick(bunCategoryRef)}>
        Булки
      </Tab>
      <Tab value="two" active={currentTab === 'two'} onClick={() => handleTabClick(saucesCategoryRef)}>
        Соусы
      </Tab>
      <Tab value="three" active={currentTab === 'three'} onClick={() => handleTabClick(mainCategoryRef)}>
        Начинки
      </Tab>
    </div>
  )
}

export default TabMenu;

