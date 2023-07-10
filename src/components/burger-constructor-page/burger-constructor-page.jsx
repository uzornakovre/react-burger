import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './burger-constructor-page.module.scss';

function BurgerConstructorPage() {
  return (
    <main className={styles.main}>
      <DndProvider backend={HTML5Backend}>
        <div className={styles.container}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </DndProvider>
    </main>
  )
}

export default BurgerConstructorPage;