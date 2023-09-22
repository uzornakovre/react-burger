import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalsState {
  isOrderDetailsModalOpen: boolean;
  isInfoModalOpen: boolean;
  infoModalText: string;
  isCartModalOpen: boolean;
}

export const initialState: IModalsState = {
  isOrderDetailsModalOpen: false,
  isInfoModalOpen: false,
  infoModalText: "",
  isCartModalOpen: false
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setIsOrderDetailsModalOpen: (state, action: PayloadAction<boolean>) => {
      return { ...state, isOrderDetailsModalOpen: action.payload };
    },

    setIsInfoModalOpen: (state, action: PayloadAction<boolean>) => {
      return { ...state, isInfoModalOpen: action.payload };
    },

    setInfoModalText: (state, action: PayloadAction<string>) => {
      return { ...state, infoModalText: action.payload };
    },

    setIsCartModalOpen: (state, action: PayloadAction<boolean>) => {
      return { ...state, isCartModalOpen: action.payload };
    },

    closeAllModals: () => {
      return initialState;
    },
  },
});

export const {
  setIsOrderDetailsModalOpen,
  setIsInfoModalOpen,
  setInfoModalText,
  setIsCartModalOpen,
  closeAllModals,
} = modalsSlice.actions;

export default modalsSlice.reducer;
