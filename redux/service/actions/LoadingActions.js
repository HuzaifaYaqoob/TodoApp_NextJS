

export const startLoading = () =>{
    return{
        type:'START_LOADING',
        loading : true
    }
}

export const StopLoading = () =>{
    return{
        type:'STOP_LOADING',
        loading: false
    }
}