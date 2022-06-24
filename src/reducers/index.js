import hobbyReducer from "./hobby";
import userReducer from "./user";
import { combineReducers } from "redux";

//combineReducers: dùng tổng hợp các Reducer có trong app
const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducer,
});

//Tổng hợp các reducer của mình có trong app
// Mỗi reducer sẽ quản lý 1 state
export default rootReducer;
