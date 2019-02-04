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