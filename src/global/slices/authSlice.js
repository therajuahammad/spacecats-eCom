import {createSlice} from "@reduxjs/toolkit";
import {isLoggedIn} from "../../utils/isLoggedin";

const initialState = {
    token: "",
    username: "",
    isAuthorize: isLoggedIn()
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            return action.payload
        },
        logout: (state, action) => {
            return action.payload
        }
    },
});

const {reducer, actions} = authSlice;

export const {login, logout} = actions;

export default reducer;