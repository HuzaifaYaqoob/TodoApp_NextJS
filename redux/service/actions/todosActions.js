


export const UpdateTodos = (data) =>{
    return{
        type : 'UPDATE_TODOS',
        todos_data : data.todos_data,
        total_length : data.todos_total_length
    }
}


export const removeTodoItem = (item_id) =>{
    return{
        type:'REMOVE_TODO_ITEM',
        todos_id : item_id
    }
}