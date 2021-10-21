

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
                    updateUserData()
                }
                else{
                    state.auth_token = null
                    state.userData = null
                    state.loggedIn = false
                }
            },

            updateUserData: (state) => {
                console.log('updating')
                fetch(
                    apiBaseURL + '/api/auth/user/',
                    {
                        headers: {
                            'Authorization': `Token ${state.auth_token}`
                        }
                    }
                )
                .then(response => response.json())
                .then(response_data => {
                    if (response_data.status == 200) {
                        const user_data = response_data.user
                        state.userData = user_data
                    }
                    else {
                        alert('Something Went Wrong | Internal Server Error')
                    }
                })
                .catch(error => {
                    console.log('Internal Server Error')
                })
            }
        }
    }
)

export const { LoginUser, LogoutUser, UpdateToken, updateUserData } = UserSlice.actions

export default UserSlice.reducer