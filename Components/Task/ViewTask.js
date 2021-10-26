
import { useRouter } from "next/router"
import { apiBaseURL } from "../../redux/ApiVariables"
import { Button } from "../Form/Form"

import { useEffect, useState } from "react"

const ViewTask = (props) => {
    console.log(props)
    const router = useRouter()
    const myState = props

    const [todo_item, setTodoItem] = useState(null)
    const GetTodoItem = () => {
        myState.todos.todos.filter((todo_item, ind) => {
            if (todo_item.id == router.query.taskID) {
                setTodoItem(todo_item)
            }
        })
    }

    const DeleteTodo = () =>{
        fetch(
            apiBaseURL + `/api/todo/?todo_id=${todo_item.id}`,
            {
                method:'DELETE',
                headers:{
                    Authorization : `Token ${localStorage.getItem('auth_token')}`
                }
            }
        ).then(respose => respose.json())
        .then(response_data =>{
            if(response_data.status_code == 200){
                props.removeTodoItemHanlder(todo_item.id)
                router.back()
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }

    useEffect(() => {
        GetTodoItem()
    }, [myState.todos.todos, myState.user.auth_token])



    return (
        <div className='bg-white rounded-lg w-11/12 mx-auto mt-3 py-2 px-3 border-l-4 border-red-500'>
            {
                todo_item ?
                    <>
                        < div className='flex items-center justify-between' >
                            < p className='text-gray-500 text-xs mb-1' > {todo_item.starts_date}</p >
                            <Button text='Edit' className='my-0 transition-all bg-green-500 hover:bg-green-700 text-white py-0.5' onClick={() => { router.push(`/task/${router.query.taskID == todo_item.id && todo_item.id}/edit/`) }} />
                        </div >
                        <div className='w-32 mb-3 h-32 rounded-full overflow-hidden bg-gray-300 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url('${apiBaseURL + todo_item.image}')` }}>

                        </div>
                        <h3 className='text-gray-800 text-xl font-medium'>{todo_item.title}</h3>
                        <p className='text-xs text-red-500'>Deadline : {todo_item.ends_date}</p>
                        
                        <p className='text-sm text-gray-500 mt-2'>{todo_item.description}</p>
                        <Button text='Delete' className='mt-10 transition-all bg-red-500 hover:bg-red-700 text-white py-0.5' onClick={() => { DeleteTodo() }} />
                    </>
                    :
                    <>No Item Found</>
            }
        </div>
    )
}


export default ViewTask