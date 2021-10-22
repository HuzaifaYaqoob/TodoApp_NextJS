

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading : true
}


const LoadingSlice = createSlice({
    name : 'Loading',
    initialState,
    reducers : {
        // Actions Here 
        removeLoading : (state)=>{
            state.loading = false
        }
    }
})

export const {removeLoading} = LoadingSlice.actions

export default LoadingSlice.reducer