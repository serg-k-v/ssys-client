import {combineReducers, configureStore} from "@reduxjs/toolkit"
import AuthReducer from "./reducers/AuthReducer"

const rootReducer = combineReducers({
    auth : AuthReducer
})

export const setupStore = () => {
    return configureStore( {
        reducer : rootReducer
    })
}

export default setupStore;
// export RootState = ReturnType<typeof rootReducer>
// export AppStore =  ReturnType<typeof setupStore>
// export AppDispatch = AppStore['dispatch']


