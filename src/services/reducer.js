import { 
  ADD_BUN,
  ADD_INGREDIENT,
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  REMOVE_INGREDIENT
} from "./actions";

const initialState = {
  ingredients: [],
  error: null,
  isLoading: false,
  bun: {},
  selected: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return { ...state, isLoading: true }

    case GET_INGREDIENTS_SUCCESS:
      return { ...state, ingredients: action.payload.data }

    case GET_INGREDIENTS_ERROR:
      return { ...state, error: action.payload}

    case ADD_BUN:
      return { ...state, bun: action.payload }

    case ADD_INGREDIENT:
      const selected = state.selected.length
        ? [...state.selected, action.payload]
        : [action.payload]
      return { ...state, selected }
      
    case REMOVE_INGREDIENT:
      return {
        ...state,
        selected: state.selected.filter(item => item.id !== action.payload)
      }

    default: return state;
  }
}