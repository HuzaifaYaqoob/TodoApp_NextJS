

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loggedIn : false
}

const UserSlice = createSlice(

    {
        name : 'UserStates',
        initialState,
        reducer : {
            data : 'Huzaifa'
        }
    }
)

export default UserSlice.reducer