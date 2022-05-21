import {combineReducers, configureStore, applyMiddleware } from "@reduxjs/toolkit"
import AuthReducer from "./reducers/AuthReducer"

const rootReducer = combineReducers({
    auth : AuthReducer
})

const store = configureStore( {
    reducer : rootReducer,
})

export default store;
export type RootState = ReturnType<typeof  store.getState>
export type AppStore =  typeof store
export type AppDispatch = typeof store.dispatch


