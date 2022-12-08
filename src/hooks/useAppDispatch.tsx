import {useDispatch} from 'react-redux';
import {AppDispatch} from "../sevices/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
