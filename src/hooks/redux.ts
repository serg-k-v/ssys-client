import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"

export const useAppDispatch = () => useDispathch<AppDispatch>();
export const useAppDispatch: TypedUseSelectorHook<RootState> = useSelector;