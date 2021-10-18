
import Router from "next/router"

const Todo = ({ className, ...props }) => {
    const router = Router
    return (
        <div className={`group flex items-center justify-between bg-white mb-4 hover:shadow-md transition-all cursor-pointer rounded-md p-3 border-l-4 ${className}`}>
            <h3 className='flex-1 group-hover:text-gray-900 text-gray-600 font-semibold' onClick={()=>{router.push('/task/12546/')}}>
                Complete Todo App ASAP With Next JS and Django
            </h3>
            <span className='group-hover:opacity-100 opacity-0 bg-red-100 py-1 px-2 rounded hover:bg-red-300'>Delete</span>
        </div>
    )
}

export default Todo