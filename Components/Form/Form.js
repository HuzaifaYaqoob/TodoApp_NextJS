


export const InputField = ({className , ...props}) =>{
    return(
        <div className='w-full mb-2'>
            <h3 className='mb-1 text-gray-800'>{props.Label}</h3>
            <input className={`w-full outline-none focus:ring-2 focus:ring-purple-500 ring-offset-1 rounded py-1 px-5 ${className}`} {...props}  />
        </div>
    )
}

export const Button = ({className , ...props}) =>{
    return(
        <button className={`rounded py-2 px-3 my-2 text-white ${className}`} {...props}>
            Login
        </button>
    )
}


const Form = ({className , ...props}) =>{
    
    return(
        <form className={`w-full block py-4 px-2 ${className}`}>
            {props.children}
        </form>
    )
}


export default Form