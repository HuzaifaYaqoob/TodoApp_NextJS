
import AddNewTaskForm from "../../Components/Task/add-new-task-form"
import Head from "next/dist/shared/lib/head"

const AddNew = () =>{
    return(
        <>
        <Head>
            <title>Add New Task</title>
        </Head>
        <div className='max-w-lg w-full mx-auto'>
            <AddNewTaskForm/>
        </div>
        </>
    )
}

export default AddNew