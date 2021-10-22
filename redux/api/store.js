

import { configureStore } from '@reduxjs/toolkit'

// Reducers 
import loadingReducer from '../features/LoadingSlice'
import userReducer from '../features/UserSlice'
import TodosReducers from '../features/TodosSlice'


const store = configureStore({
    reducer : {
        Loading : loadingReducer,
        user : userReducer,
        myTodos : TodosReducers
    },
    
})

export default store