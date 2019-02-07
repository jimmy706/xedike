import axios from "axios";
import * as Types from "../constants/action-types";
import jwtDecode from "jwt-decode";
import setAuthToken from "../utils/set-auth";

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

export const setCurrentUser = (decoded) => {
    return {
        type: Types.SET_CURRENT_USER,
        payload: decoded
    }
} 

export const actLogin = (userData) => {
    return (dispatch) => {
        axios.post("http://localhost:5500/api/user/login", userData)
        .then(res=> {
            const {token} = res.data; //khi đăng nhập thành công sẽ đưa chuỗi jwt lên localStorage
            localStorage.setItem("jwtToken", token);

            // decode token
            const decoded = jwtDecode(token);

            // set header cho các lần gọi api private sau
            setAuthToken(token);
            // state user cần phải thay đổi
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            dispatch({ // đăng nhập fail sẽ thực hiện GET_ERROR
                type: Types.GET_ERRORS,
                payload: err.response.data
            })
        })
    }
}

export const actLogout = () => {
    localStorage.removeItem("jwtToken");
    setAuthToken(undefined);
    return (dispatch) => {
        dispatch(setCurrentUser({}))
    } 
}


