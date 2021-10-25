



const initialState = {
    loading : true
}


const LoadingReducer = (state = initialState , action) =>{
    switch (action.type){
        case 'START_LOADING' :
            return{
                ...state,
                loading:action.loading
            }
        case 'STOP_LOADING' :
            return{
                ...state,
                loading : action.loading
            }
        default:
            return state
    }
}

export default LoadingReducer