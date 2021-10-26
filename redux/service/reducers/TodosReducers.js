


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
        case 'REMOVE_TODO_ITEM' :
            state.todos.filter((item_)=>{
                if(item_.id != action.todos_id){
                    return item_
                }
            })
        default:
            return state
    }
}

export default myTodos