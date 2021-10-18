
import ViewTask from "../../../Components/Task/ViewTask"
import EditTask from "../../../Components/Task/EditTask"

import { Button } from "../../../Components/Form/Form"
import { useRouter } from "next/router"


const EditPage = () =>{
    const router = useRouter()
    return(
        <div className='mx-auto max-w-lg w-full mt-5'>
            <Button text='Go Back' className='my-0 bg-white transition-all hover:bg-purple-500 hover:text-white text-gray-700' onClick={() => { router.back() }} />
            <ViewTask />
            <EditTask/>
        </div>
    )
}


export default EditPage