
import { useState } from "react"


const FormLabel = (props) => {
    return (
        <h3 className='mb-1 mt-2 font-medium text-gray-800'>{props.children}</h3>
    )
}

export const InputField = ({ className, Label, ...props }) => {
    return (
        <div className='w-full mb-2'>
            <FormLabel>
                {Label}
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

export const DropDownItem = ({className , data , activeItem_state , ...props}) => {
    const {active_item , setActive_Item} = activeItem_state
    
    return (
        <p onClick={()=>{setActive_Item(data)}} className={`bg-gray-300 rounded mb-1 py-1 px-2 transition-all cursor-pointer hover:text-white ${className}`}>{data.text}</p>
    )
}

export const DropDown = ({activeItem,...props}) => {
    const [dropDownActive, setDropDownActive] = useState(false)
    
    return (
        <div className='relative w-full flex-1'>
            <div className={`py-1 px-2 text-white rounded w-full cursor-pointer ` + (activeItem.bg_color ? `bg-${activeItem.bg_color}-500` : 'bg-gray-500')} onClick={() => { setDropDownActive(!dropDownActive) }}>
                <p>{activeItem.text}</p>
            </div>
            <div className={'absolute top-full left-0 right-0 transform translate-y-1 rounded shadow-lg bg-white py-1 px-2 ' + (dropDownActive ? 'block' : 'hidden')}>
                {props.children}
            </div>
        </div>
    )
}


export const DateTime = () =>{
    return(
        <div>
            <FormLabel>Ends Date</FormLabel>
            <input type='date'  />
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
        <form className={`w-full block py-4 px-2 ${className}`} onSubmit={(event)=>{event.preventDefault()}}>
            {props.children}
        </form>
    )
}


export default Form