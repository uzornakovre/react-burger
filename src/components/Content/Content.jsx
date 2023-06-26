import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import PropTypes from 'prop-types';
import styles from './Content.module.scss';

function Content({ onIngredientClick, onOrderClick}) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BurgerIngredients onIngredientClick={onIngredientClick} />
        <BurgerConstructor onOrderClick={onOrderClick} />
      </div>
    </main>
  )
}

Content.propTypes = {
  onIngredientClick: PropTypes.func.isRequired,
  onOrderClick: PropTypes.func.isRequired
}

export default Content;