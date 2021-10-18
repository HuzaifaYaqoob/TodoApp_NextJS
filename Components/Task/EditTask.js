
import { useState } from "react"
import Form, { InputField, TextArea, Button, DropDown, DateTime, DropDownItem } from "../Form/Form"
import { useRouter } from "next/router"



const EditTask = () => {
    const router = useRouter()
    const [active_item , setActive_Item] = useState(
        {
            text: 'To Do',
            bg_color: 'red', 
        }
    )
  
    const dropDownItems = [
        {
            text: 'To Do',
            bg_color: 'red',
            active:true
        },
        {
            text: 'Doing',
            bg_color: 'yellow',
            active:false
        },
        {
            text: 'In Progress',
            bg_color: 'gray',
            active:false
        },
        {
            text: 'Done',
            bg_color: 'purple',
            active:false
        },
        {
            text: 'Completed',
            bg_color: 'green',
            active:false
        },

    ]

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white py-2 px-3 rounded max-w-xl w-full'>
                <div className='text-right'>
                    <Button text='Cancel' className='bg-red-500 text-white ml-auto' onClick={() => { router.back() }} />
                </div>
                <Form>
                    <InputField type='text' value='Please Complete Next Js App with Django backend' onChange={()=>{}} placeholder='Enter Task Title' Label='Title' className='bg-gray-100 focus:bg-gray-200' />
                    <TextArea Label='Description'  onChange={()=>{}} value='Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quis tempore ab doloribus quia consequatur aliquid vel aliquam non necessitatibus facilis quisquam veniam cupiditate velit, veritatis accusantium, accusamus, est nam!' placeholder='Enter Description' className='bg-gray-100 focus:bg-gray-200' />
                    <DropDown activeItem={active_item} >
                        {
                            dropDownItems.map((item, ind) => {
                                return (
                                    <DropDownItem key={ind} className={`bg-${item.bg_color}-500`} data={item} activeItem_state={{active_item , setActive_Item}} />
                                )
                            })
                        }
                    </DropDown>
                    
                    <InputField type='date' min='2021-10-18' Label='End Date' placeholder='Choose Your Date'  />
                    <Button text='Save' onClick={(event)=>{event.preventDefault()}} className='bg-green-500 w-full' />
                </Form>
            </div>
        </div>
    )
}

export default EditTask