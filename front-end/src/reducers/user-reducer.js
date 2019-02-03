import * as Types from "../constants/action-types";
let initialState = {
    userList: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.GET_TRIP_LIST:
            state = {
                ...state,
                userList: action.userList
            }
            return {...state};
        default:
            return {...state}
    }
}

export default userReducer;