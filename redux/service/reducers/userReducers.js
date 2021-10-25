



const initialState = {
    loggedIn: false,
    userData: null,
    auth_token: null
}

export const UserReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return{
                ...state,
                loggedIn : action.loggedIn
            }
        case 'UPDATE_USER_AUTH_TOKEN' :
            return{
                ...state,
                auth_token : action.auth_token
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                loggedIn : action.loggedIn
            }
        case 'UPDATE_USER_DATA':
            return{
                ...state,
                userData : action.user_data
            }
        default:
            return{
                ...state,
            }
    }
}
