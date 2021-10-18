

import Form, { InputField, TextArea, Button , DropDown } from "../Form/Form"
import { useRouter } from "next/router"



const EditTask = () => {
    const router = useRouter()
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white py-2 px-3 rounded max-w-xl w-full'>
                <div className='text-right'>
                    <Button text='Cancel' className='bg-red-500 text-white ml-auto' onClick={()=>{router.back()}} />
                </div>
                <Form>
                    <InputField type='text' value='Please Complete Next Js App with Django backend' placeholder='Enter Task Title' Label='Title' className='bg-gray-100 focus:bg-gray-200' />
                    <TextArea Label='Description' value='Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quis tempore ab doloribus quia consequatur aliquid vel aliquam non necessitatibus facilis quisquam veniam cupiditate velit, veritatis accusantium, accusamus, est nam!' placeholder='Enter Description' className='bg-gray-100 focus:bg-gray-200' />
                    <DropDown/>
                </Form>
            </div>
        </div>
    )
}

export default EditTask