
import { useRouter } from "next/router"

import ViewTask from "../../../Components/Task/ViewTask"
import { Button } from "../../../Components/Form/Form"

const View = () => {
    const router = useRouter()
    return (
        <div className='mx-auto max-w-lg w-full mt-5'>
            <Button text='Go Back' className='my-0 bg-white transition-all hover:bg-purple-500 hover:text-white text-gray-700' onClick={() => { router.back() }} />
            <ViewTask />
        </div>
    )
}


export default View