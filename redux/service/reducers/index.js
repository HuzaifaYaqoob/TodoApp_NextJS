
import { combineReducers } from "redux";

// All Reducers 
import myTodos from "./TodosReducers";
import { UserReducer } from "./userReducers";
import LoadingReducer from "./LoadingReducer";

// This is Root Reducer 

export default combineReducers({
    todos : myTodos,
    user : UserReducer,
    Loading : LoadingReducer
})
