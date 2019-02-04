import axios from "axios";
import * as Types from "../constants/action-types";

export const actStoreUserData = (userList) => {
    return {
        type: Types.STORE_USER_DATA,
        userList,
    }
}

export const actGetUserList = () => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: 'http://localhost:5500/api/user/getUsersList'
        })
        .then(res => {
            dispatch(actStoreUserData(res.data));
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const actRegisterUser = (newUser) => {
    return (dispatch) => {
        axios.post("http://localhost:5500/api/user/register", newUser)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                dispatch({
                    type: Types.GET_ERRORS,
                    payload: err.response.data
                })
            })
    }
}