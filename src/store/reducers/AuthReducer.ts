import { IUser } from "../../models/IUser";
import AuthService from "../../services/AuthService";

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthResponse } from "../../models/AuthResponse";
import { AppDispatch } from "../store";

interface AuthState {
    user : IUser;
    isAuth : boolean;
}

// export const fetchLoginThunk = createAsyncThunk( 'auth/login', 
//     async (username:string, password:string) => {
//     const responce = await AuthService.login(username, password)
//     return responce.data
// })

// export const fetchLogoutThunk = createAsyncThunk( 'auth/login', 
//     async () => {
//     const responce = await AuthService.logout()
//     return responce.data
// })


const authSlice = createSlice( {
    name: "auth",

    initialState : {
        user : {},
        isAuth : false,
    },

    reducers : {
        login(state, action) {
            try {
                localStorage.setItem('token', action.payload.accessToken);
                state.isAuth = true;
                state.user = action.payload.user;
            } catch (error) {
                // console.log(error.response?.data?.message);
            }
        },

        logout(state) {
            try {
                localStorage.removeItem('token');
                state.isAuth = false;
                state.user = {};
            } catch (error) {
                // console.log(error.response?.data?.message);
            }
        },

    },

    extraReducers: (builder) => {
        
        // builder.addCase(fetchLoginThunk.fulfilled, ( state, action ) => {
        //     try {
        //         localStorage.setItem('token', action.payload.accessToken);
        //         state.isAuth = true;
        //         state.user = action.payload.user;
        //     } catch (error) {
        //         // console.log(error.response?.data?.message);
        //     }
        // }),
        
        // builder.addCase(fetchLogoutThunk.fulfilled, ( state, action ) => {
        //     try {
        //         localStorage.removeItem('token');
        //         state.isAuth = false;
        //         state.user = {};
        //     } catch (error) {
        //         // console.log(error.response?.data?.message);
        //     }
        // }),
    }
})

export const { login, logout } = authSlice.actions
export const selectIsAuth = (state:AuthState) => state.isAuth;
export default authSlice.reducer;


export const fetchLogin = (username:string, password:string) => async (dispatch:AppDispatch) => {
    const response = await AuthService.login(username, password)
    dispatch(login(response.data))
}

export const fetchLogout = () => async (dispatch:AppDispatch) => {
    const response = await AuthService.logout()
    dispatch(logout())
}