
import { Button } from "../Form/Form"
import { useRouter } from "next/router"

import AddNewTaskForm from "./add-new-task-form"

import { useState, useEffect } from "react"


const EditTask = (props) => {
    const router = useRouter()
    
    const [todo_item, setTodoItem] = useState(null)
    let myState = props

    const GetTodoItem = () => {
        myState.todos.todos.filter((todo_item, ind) => {
            if (todo_item.id == router.query.taskID) {
                setTodoItem(todo_item)
            }
        })
    }


    useEffect(() => {
        GetTodoItem()
    }, [myState.todos.todos])



    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white py-2 px-3 rounded max-w-xl w-full'>
                <div className='text-right'>
                    <Button text='Cancel' className='bg-red-500 text-white ml-auto' onClick={() => { router.back() }} />
                </div>
                {
                    todo_item ?
                    <AddNewTaskForm data={todo_item} />
                    :
                    ()=>{props.startLoading()}
                }
            </div>
        </div>
    )
}

export default EditTask