import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isIngredientDetailsModalOpen: false,
  isOrderDetailsModalOpen: false,
  isErrorModalOpen: false,
}

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setIsIngredientDetailsModalOpen: (state, action) => {
      return { ...state, isIngredientDetailsModalOpen: action.payload}
    },

    setIsOrderDetailsModalOpen: (state, action) => {
      return { ...state, isOrderDetailsModalOpen: action.payload}
    },

    setIsErrorModalOpen: (state, action) => {
      return { ...state, isErrorModalOpen: action.payload}
    },
  }
})

export const { 
  setIsIngredientDetailsModalOpen,
  setIsOrderDetailsModalOpen,
  setIsErrorModalOpen
 } = modalsSlice.actions

export default modalsSlice.reducer;