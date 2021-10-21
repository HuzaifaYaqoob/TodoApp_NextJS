

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loggedIn : false,
    userData : null
}

const UserSlice = createSlice(

    {
        name : 'UserStates',
        initialState,
        reducers : {
            makeLogin : (state , action)=>{
                state.loggedIn = true
                state.userData = action.payload
            },
            makeLogout : (state) =>{
                state.loggedIn = false
            }
        }
    }
)

export const {makeLogin , makeLogout} = UserSlice.actions

export default UserSlice.reducer