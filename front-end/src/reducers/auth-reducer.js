import _ from 'lodash';
import * as Types from "../constants/action-types";


const intialState = {
    isAuthenticated: false,
    user: {}
}

const authReducer = (state = intialState, action) => {
    switch(action.type) {
        case Types.SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: !_.isEmpty(action.payload) 
            }
        default:
            return {...state};
    }
}

export default authReducer;
