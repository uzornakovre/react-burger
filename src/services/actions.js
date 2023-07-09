import { api } from '../utils/api';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR'

export const ADD_BUN = 'ADD_BUN';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export function getIngredients() {
  return function(dispatch) {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    return (
      api.getIngredients()
        .then(data => dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: GET_INGREDIENTS_ERROR, payload: err }))
    )
  }
}

export function addBun(bun) {
  return {
    type: ADD_BUN,
    payload: bun
  }
}

export function addIngredient(ingredient) {
  return {
    type: ADD_INGREDIENT,
    payload: ingredient
  }
}

export function removeIngredient(ingredientId) {
  return {
    type: REMOVE_INGREDIENT,
    payload: ingredientId
  }
}