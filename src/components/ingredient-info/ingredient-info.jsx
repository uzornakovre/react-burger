import styles from './ingredient-info.module.scss';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useParams } from 'react-router-dom';
import { getAllIngredients, getCurrentIngredient } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentIngredient } from '../../services/current-ingredient/currentIngredientSlice';
import { useEffect } from 'react';

function IngredientInfo() {
  const dispatch = useDispatch();
  const allIngredients = useSelector(getAllIngredients);
  const currentIngredient = useSelector(getCurrentIngredient);
  const currentIngredientId = useParams().id;

  useEffect(() => {
    dispatch(setCurrentIngredient(allIngredients.find(i => i._id === currentIngredientId)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, allIngredients]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Детали ингридиента</h2>
        {currentIngredient._id && <IngredientDetails />}
    </div>
  )
}

export default IngredientInfo;
