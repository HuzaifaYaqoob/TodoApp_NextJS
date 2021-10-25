

export const LoginUser = () =>{
    return{
        type : 'LOGIN_USER',
        loggedIn : true
    }
}

export const LogoutUser = () =>{
    return{
        type : 'LOGOUT_USER',
        loggedIn : false
    }
}

export const UpdateAuthToken = (data) =>{
    return{
        type:'UPDATE_USER_AUTH_TOKEN',
        auth_token : data && data.auth_token ? data.auth_token : localStorage.getItem('auth_token')
    }
}

export const UpdateUserData = (data) =>{
    return{
        type : 'UPDATE_USER_DATA',
        user_data : data
    }
}