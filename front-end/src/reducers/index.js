import {combineReducers} from 'redux';
import userReducer from "./user-reducer";
import tripReducers from "./trip-reducers";

const rootReducer = combineReducers({
    userList: userReducer,
    tripList: tripReducers
});


export default rootReducer;;