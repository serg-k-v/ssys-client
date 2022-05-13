import {combineReducers, configureStore} from "@reduxjs/toolkit"

const rootReducer = combineReducers({

})

export const setupStore = () => {
    return configureStore( {
        reducer : rootReducer
    })
}

export RootState = ReturnType<typeof rootReducer>
export AppStore =  ReturnType<typeof setupStore>
export AppDispatch = AppStore['dispatch'] 