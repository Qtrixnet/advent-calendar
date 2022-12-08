import {setIsPopupOpenAction} from "../reducers/popup";

// @ts-ignore
export const setIsPopupOpen = (status: boolean) => dispatch => dispatch(setIsPopupOpenAction(status));
