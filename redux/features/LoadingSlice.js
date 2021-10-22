

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading : true
}


const LoadingSlice = createSlice({
    name : 'Loading',
    initialState,
    reducers : {
        // Actions Here 
        startLoading : (state)=>{
            state.loading = true
        },
        removeLoading : (state)=>{
            state.loading = false
        }
    }
})

export const {removeLoading , startLoading} = LoadingSlice.actions

export default LoadingSlice.reducer