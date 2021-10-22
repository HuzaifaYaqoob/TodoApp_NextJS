
import {useEffect , useState} from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

import ViewTask from "../../../Components/Task/ViewTask"
import { Button } from "../../../Components/Form/Form"

const View = () => {
    const router = useRouter()
    const myState = useSelector(state =>{return state})
 
    const [todo_item, setTodoItem] = useState(null)
    const GetTodoItem = () => {
        myState.myTodos.todos.filter((todo_item, ind) => {
            if (todo_item.id == router.query.taskID) {
                setTodoItem(todo_item)
            }
        })
    }


    useEffect(() => {
        GetTodoItem()
    }, [myState.myTodos])



    return (
        <div className='mx-auto max-w-lg w-full mt-5'>
            <Button text='Go Back' className='ml-4 md:ml-0 my-0 bg-white transition-all hover:bg-purple-500 hover:text-white text-gray-700' onClick={() => { router.back() }} />
            {
                todo_item ?
                <ViewTask data={todo_item} />
                :
                <></>
            }
        </div>
    )
}


export default View