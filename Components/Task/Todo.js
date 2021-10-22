
import { apiBaseURL } from "../../redux/ApiVariables"
import {useRouter} from "next/router"

import { removeTodoItem } from "../../redux/features/TodosSlice"
import { useDispatch } from "react-redux"

const Todo = ({ className,data, ...props }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const DeleteTodo = () =>{
        fetch(
            apiBaseURL + `/api/todo/?todo_id=${data.id}`,
            {
                method:'DELETE',
                headers:{
                    Authorization : `Token ${localStorage.getItem('auth_token')}`
                }
            }
        ).then(respose => respose.json())
        .then(response_data =>{
            if(response_data.status_code == 200){
                dispatch(removeTodoItem(data.id))
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div className={`group flex items-center justify-between gap-3 bg-white mb-4 hover:shadow-md transition-all cursor-pointer rounded-md p-3 border-l-4 ${className}`}>
            <span className='w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url('${apiBaseURL + data.image}')`}}></span>
            <h3 className='flex-1 group-hover:text-gray-900 text-gray-600 font-semibold' onClick={()=>{router.push(`/task/${data.id}/`)}}>
                {data.title}
            </h3>
            <span className='group-hover:opacity-100 opacity-0 bg-red-100 py-1 px-2 rounded hover:bg-red-300' onClick={()=>{DeleteTodo()}}>Delete</span>
        </div>
    )
}

export default Todo