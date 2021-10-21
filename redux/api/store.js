

import { configureStore } from '@reduxjs/toolkit'

// Reducers 
import loadingReducer from '../features/LoadingSlice'
import userReducer from '../features/UserSlice'


const store = configureStore({
    reducer : {
        Loading : loadingReducer,
        user : userReducer,
    }
})

export default store