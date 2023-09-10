import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalsState {
  isOrderDetailsModalOpen: boolean;
  isInfoModalOpen: boolean;
  infoModalText: string;
}

export const initialState: IModalsState = {
  isOrderDetailsModalOpen: false,
  isInfoModalOpen: false,
  infoModalText: "",
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

    closeAllModals: () => {
      return initialState;
    },
  },
});

export const {
  setIsOrderDetailsModalOpen,
  setIsInfoModalOpen,
  setInfoModalText,
  closeAllModals,
} = modalsSlice.actions;

export default modalsSlice.reducer;
