import {combineReducers} from 'redux';
import userReducer from "./user-reducer";
import tripReducers from "./trip-reducers";
import errorReducer from "./error-reducer";

const rootReducer = combineReducers({
    userList: userReducer,
    tripList: tripReducers,
    errors: errorReducer
});


export default rootReducer;;