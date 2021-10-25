

import { createSlice } from "@reduxjs/toolkit";
import { apiBaseURL } from "../ApiVariables";



const initialState = {
    todos : [],
    todos_length : 0

}


const TodosSlice = createSlice({
    name : 'TodoSlice',
    initialState,
    reducers:{
        UpdateTodos : (state, action)=>{
            state.todos = action.payload.data
            state.todos_length = action.payload.todos_total_length
        },

        removeTodoItem : (state, action)=>{
            let filtered_items = state.todos.filter((todo_item_ , ind)=>{
                if(action.payload != todo_item_.id){
                    return todo_item_
                }
            })
            state.todos = filtered_items
        }

    }
})

export const {UpdateTodos ,removeTodoItem} = TodosSlice.actions

export default TodosSlice.reducer