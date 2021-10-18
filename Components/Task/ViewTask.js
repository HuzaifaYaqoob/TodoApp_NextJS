
import { useRouter } from "next/router"

import { Button } from "../Form/Form"

const ViewTask = () => {
    const router = useRouter()
    return (
        <div className='bg-white rounded-lg w-full mt-3 py-2 px-3 border-l-4 border-red-500'>
            <div className='flex items-center justify-between'>
                <p className='text-gray-500 text-xs mb-1'>18-Oct-2021</p>
                <Button text='Edit' className='my-0 transition-all bg-green-500 hover:bg-green-700 text-white py-0.5' onClick={() => { router.push('/task/123456/edit/') }} />
            </div>
            <h3 className='text-gray-800 font-medium'>Please Complete Next JS App With Django Backend</h3>
            <p className='text-xs text-red-500'>Deadline : 19-Oct-2021</p>
            <p className='text-sm text-gray-500 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ut earum totam sint assumenda natus ea accusamus pariatur soluta hic perferendis placeat commodi magnam quibusdam, explicabo unde temporibus voluptas at.</p>
            <Button text='Delete' className='mt-10 transition-all bg-red-500 hover:bg-red-700 text-white py-0.5' onClick={() => { router.push('/task/123456/edit/') }} />
        </div>
    )
}


export default ViewTask