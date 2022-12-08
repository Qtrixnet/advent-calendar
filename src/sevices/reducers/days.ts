import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDay} from "../../types/types";
import days from "../../utils/days";

interface IDays {
  currentDay: null,
  days: IDay[],
}

const initialState: IDays = {
  currentDay: null,
  days: days,
};

export const DaysSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {

  }
});

const {actions, reducer} = DaysSlice;

export const {

} = actions;

export default reducer;
