import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalsState {
  isIngredientDetailsModalOpen: boolean;
  isOrderDetailsModalOpen: boolean;
  isInfoModalOpen: boolean;
  infoModalText: string;
}

const initialState: IModalsState = {
  isIngredientDetailsModalOpen: false,
  isOrderDetailsModalOpen: false,
  isInfoModalOpen: false,
  infoModalText: "",
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setIsIngredientDetailsModalOpen: (
      state,
      action: PayloadAction<boolean>
    ) => {
      return { ...state, isIngredientDetailsModalOpen: action.payload };
    },

    setIsOrderDetailsModalOpen: (state, action: PayloadAction<boolean>) => {
      return { ...state, isOrderDetailsModalOpen: action.payload };
    },

    setIsInfoModalOpen: (state, action: PayloadAction<boolean>) => {
      return { ...state, isInfoModalOpen: action.payload };
    },

    setInfoModalText: (state, action: PayloadAction<string>) => {
      return { ...state, infoModalText: action.payload };
    },

    closeAllModals: () => {
      return initialState;
    },
  },
});

export const {
  setIsIngredientDetailsModalOpen,
  setIsOrderDetailsModalOpen,
  setIsInfoModalOpen,
  setInfoModalText,
  closeAllModals,
} = modalsSlice.actions;

export default modalsSlice.reducer;
