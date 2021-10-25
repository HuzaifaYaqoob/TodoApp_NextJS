
import { Button } from "../../../Components/Form/Form"
import { useRouter } from "next/router"

import EditTaskContainer from "../../../redux/service/containers/EditTaskContainer"
import ViewTaskContainer from "../../../redux/service/containers/ViewTaskContainer"

const EditPage = () =>{
    const router = useRouter()
    return(
        <div className='mx-auto max-w-lg w-full mt-5'>
            <Button text='Go Back' className='my-0 bg-white transition-all hover:bg-purple-500 hover:text-white text-gray-700' onClick={() => { router.back() }} />
            <ViewTaskContainer />
            <EditTaskContainer/>
        </div>
    )
}


export default EditPage