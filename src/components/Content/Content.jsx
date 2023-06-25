import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import styles from './Content.module.scss';

function Content() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </main>
  )
}

export default Content;