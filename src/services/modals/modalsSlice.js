import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isIngredientDetailsModalOpen: false,
  isOrderDetailsModalOpen: false,
  isInfoModalOpen: false,
  infoModalText: '',
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

    setIsInfoModalOpen: (state, action) => {
      return { ...state, isInfoModalOpen: action.payload}
    },

    setInfoModalText: (state, action) => {
      return { ...state, infoModalText: action.payload }
    },

    closeAllModals: () => {
      return initialState;
    } 
  }
})

export const { 
  setIsIngredientDetailsModalOpen,
  setIsOrderDetailsModalOpen,
  setIsInfoModalOpen,
  setInfoModalText,
  closeAllModals
 } = modalsSlice.actions

export default modalsSlice.reducer;