


const initialState = {
    todos : [],
    total_length : 0
}


const myTodos = (state=initialState , action) =>{
    switch (action.type){
        case 'UPDATE_TODOS' :
            return{
                ...state,
                todos : action.todos_data,
                total_length : action.total_length
            }
        default:
            return state
    }
}

export default myTodos