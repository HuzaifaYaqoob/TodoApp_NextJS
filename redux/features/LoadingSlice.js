

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
            console.log('state')
            console.log(state.loading = false)
            console.log('state')
        }
    }
})

export const {removeLoading} = LoadingSlice.actions

export default LoadingSlice.reducer