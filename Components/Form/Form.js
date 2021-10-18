
import { useState } from "react"


const FormLabel = (props) => {
    return (
        <h3 className='mb-1 mt-2 font-medium text-gray-800'>{props.children}</h3>
    )
}

export const InputField = ({ className, ...props }) => {
    return (
        <div className='w-full mb-2'>
            <FormLabel>
                {props.Label}
            </FormLabel>
            <input className={`w-full outline-none focus:ring-2 focus:ring-purple-500 ring-offset-1 rounded py-1 px-5 ${className}`} {...props} />
        </div>
    )
}

export const TextArea = ({ className, Label, ...props }) => {
    return (
        <div>
            <FormLabel>
                {Label}
            </FormLabel>
            <textarea className={`text-gray-600 w-full outline-none focus:ring-2 ring-purple-500 rounded py-1 px-2 h-40 ${className}`} {...props} ></textarea>
        </div>
    )
}

const DropDownItem = ({data , setActiveItem , setDropDownActive}) => {
    
    const HandleActiveItem = () =>{
        setActiveItem(data)
        setDropDownActive(false)
    }
    
    return (
        <p onClick={()=>{HandleActiveItem()}} className={`bg-gray-300 rounded mb-1 py-1 px-2 hover:bg-${data.bg_color}-500 transition-all cursor-pointer hover:text-white`}>{data.text}</p>
    )
}

export const DropDown = () => {
    const [dropDownActive, setDropDownActive] = useState(false)
    const [activeItem , setActiveItem] = useState(
        {
            text: 'To Do',
            bg_color: 'red',
        }
    )
    const dropDownItems = [
        {
            text: 'To Do',
            bg_color: 'red',
        },
        {
            text: 'Doing',
            bg_color: 'yellow',
        },
        {
            text: 'In Progress',
            bg_color: 'gray',
        },
        {
            text: 'Done',
            bg_color: 'purple',
        },
        {
            text: 'Completed',
            bg_color: 'green',
        },

    ]
    return (
        <div className='relative w-full flex-1'>
            <div className={`bg-${activeItem.bg_color}-500 py-1 px-2 text-white rounded w-full cursor-pointer`} onClick={() => { setDropDownActive(!dropDownActive) }}>
                <p>{activeItem.text}</p>
            </div>
            <div className={'absolute top-full left-0 right-0 transform translate-y-1 rounded shadow-lg bg-white py-1 px-2 ' + (dropDownActive ? 'block' : 'hidden')}>
                {
                    dropDownItems.map((item, ind) => {
                        return (
                            <DropDownItem data = {item} setActiveItem={setActiveItem} setDropDownActive={setDropDownActive} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export const Button = ({ className, ...props }) => {
    return (
        <button className={`rounded py-1 px-2 my-2 text-white ${className}`} {...props}>
            {props.text}
        </button>
    )
}

const Form = ({ className, ...props }) => {

    return (
        <form className={`w-full block py-4 px-2 ${className}`}>
            {props.children}
        </form>
    )
}


export default Form