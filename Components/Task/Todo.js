
import { apiBaseURL } from "../../redux/ApiVariables"
import { useRouter } from "next/router"


const Todo = ({ className, data, ...props }) => {
    const router = useRouter()

    const StatusColors = {
        ToDo : 'red',
        Doing:'yellow',
        'In Progress' : 'gray',
        Done : 'purple',
        Completed : 'green'
    }

    const DeleteTodo = () => {
        fetch(
            apiBaseURL + `/api/todo/?todo_id=${data.id}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization: `Token ${localStorage.getItem('auth_token')}`
                }
            }
        ).then(respose => respose.json())
            .then(response_data => {
                if (response_data.status_code == 200) {
                    // dispatch(removeTodoItem(data.id))
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className={`group flex items-center justify-between gap-3 bg-white mb-4 hover:shadow-md transition-all cursor-pointer rounded-lg p-3 border-l-8 border-${StatusColors[data.status]}-500 ${className}`}>
            <span className='w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url('${apiBaseURL + data.image}')` }}></span>
            <div className='flex-1'>
                <h3 className='flex-1 mb-1 group-hover:text-gray-900 text-gray-600 font-semibold' onClick={() => { router.push(`/task/${data.id}/`) }}>
                    {data.title}
                </h3>
                <p className='bg-gray-200 text-sm py-1 px-3 rounded inline-block'>{data.status}</p>
            </div>
            <span className='group-hover:opacity-100 opacity-0 bg-red-100 py-1 px-2 rounded hover:bg-red-300' onClick={() => { DeleteTodo() }}>Delete</span>
        </div>
    )
}

export default Todo