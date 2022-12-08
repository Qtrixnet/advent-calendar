import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IPopup {
  isPopupOpen: boolean,
}

const initialState: IPopup = {
  isPopupOpen: false,
};

export const PopupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setIsPopupOpenAction: (state, {payload}: PayloadAction<boolean>) => {
      state.isPopupOpen = payload;
    },
  }
});

const {actions, reducer} = PopupSlice;

export const {
  setIsPopupOpenAction,
} = actions;

export default reducer;
