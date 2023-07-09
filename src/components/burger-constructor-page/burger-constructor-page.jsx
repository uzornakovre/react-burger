import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './burger-constructor-page.module.scss';

function BurgerConstructorPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </main>
  )
}

export default BurgerConstructorPage;