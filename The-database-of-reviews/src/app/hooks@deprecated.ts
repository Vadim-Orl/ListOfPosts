import { useDispatch , TypedUseSelectorHook, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../app/AppStore';


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;