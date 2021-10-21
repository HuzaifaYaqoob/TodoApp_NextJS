

const Loader = () =>{
    return(
        <div className='flex text-center items-center justify-center fixed top-0 left-0 bottom-0 right-0 bg-black z-50 bg-opacity-50'>
            <div className='animate-spin mb-3 block w-10 h-10 bg-transparent rounded-full border-4 border-gray-400' style={{borderTopColor:'#8B5CF6'}}></div>
        </div>
    )
}

export default Loader