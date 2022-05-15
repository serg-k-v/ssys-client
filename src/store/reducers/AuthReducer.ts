import { IUser } from "../../models/IUser";
import AuthService from "../../services/AuthService";

import { createSlice, useDispatch } from '@reduxjs/toolkit'

interface AuthState {
    user : IUser;
    isAuth : boolean;
}

const authSlice = createSlice( {
    name: "auth",

    initialState : {
        user : {},
        isAuth : false,
    },

    reducers : {

        login : (state : AuthState, username:string, password:string) => {
            try {
                const response = useDispatch( AuthService.login(username, password));
                localStorage.setItem('token', response.data.accessToken);
                state.isAuth = true;
                state.user = response.data.user;
            } catch (error) {
                console.log(error.response?.data?.message);
            }
        },


        logout : (state : AuthState) => {
            try {
                const response = useDispatch(AuthService.logout());
                localStorage.removeItem('token');
                state.isAuth = false;
                state.user = {};
            } catch (error) {
                console.log(error.response?.data?.message);
            }
        }
    }
})

export const { login, logout } = authSlice.actions
export const selectIsAuth = (state:AuthState) => state.isAuth;

export default authSlice.reducer;