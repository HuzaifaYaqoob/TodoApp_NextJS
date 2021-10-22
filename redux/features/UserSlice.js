

import { createSlice } from '@reduxjs/toolkit'
import { apiBaseURL } from '../ApiVariables'


const initialState = {
    loggedIn: false,
    userData: null,
    auth_token: null
}

const UserSlice = createSlice(

    {
        name: 'UserStates',
        initialState,
        reducers: {
            LoginUser: (state, action) => {
                state.loggedIn = true
                state.userData = action.payload
                state.auth_token = action.payload.auth_token
            },
            LogoutUser: (state) => {
                localStorage.removeItem('auth_token')
                state.auth_token = null
                state.userData = null
                state.loggedIn = false
            },
            UpdateToken: (state) => {
                const token = localStorage.getItem('auth_token')
                if (token) {
                    state.auth_token = token
                    state.loggedIn = true
                }
            },

            updateUserData: (state, action) => {
                state.userData = action.payload.data
            }
        }
    }
)

export const { LoginUser, LogoutUser, UpdateToken, updateUserData } = UserSlice.actions

export default UserSlice.reducer