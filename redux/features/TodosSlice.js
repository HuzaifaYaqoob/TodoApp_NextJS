

import { createSlice } from "@reduxjs/toolkit";
import { apiBaseURL } from "../ApiVariables";



const initialState = {
    todos : [],

}


const TodosSlice = createSlice({
    name : 'TodoSlice',
    initialState,
    reducers:{
        UpdateTodos : (state, action)=>{
            state.todos = action.payload.data
        }
    }
})

export const {UpdateTodos} = TodosSlice.actions

export default TodosSlice.reducer