import {login, logout} from "../slices/authSlice";

export const loginAction = (payload) => (dispatch) => {
    dispatch(login(payload))
}
export const logOutAction = (payload) => (dispatch) => {
    dispatch(logout(payload))
}