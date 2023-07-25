import { configureStore } from '@reduxjs/toolkit'
import ingredientsSlice from './ingredients/ingredientsSlice';
import constructorSlice from './constructor/constructorSlice';
import currentIngredientSlice from './current-ingredient/currentIngredientSlice';
import orderSlice from './order/orderSlice';
import modalsSlice from './modals/modalsSlice';
import authSlice from './auth/authSlice';

const store = configureStore({
  reducer: {
    allIngredients: ingredientsSlice,
    currentIngredient: currentIngredientSlice,
    selected: constructorSlice,
    order: orderSlice,
    modals: modalsSlice,
    auth: authSlice
  }
})

export default store;