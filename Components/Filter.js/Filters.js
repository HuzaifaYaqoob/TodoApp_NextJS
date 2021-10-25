
import { useRouter } from "next/router"

const FilterTab = (props) =>{
    const router = useRouter()
    return(
        <p className={`py-1 px-3 rounded cursor-pointer ` + (router.query.status == props.text ? 'bg-purple-500 text-white hover:bg-purple-700 hover:text-white' : 'bg-white text-purple-500 hover:bg-purple-500 hover:text-white')} onClick={()=>{router.push(`/?status=${props.text}`)}}>{props.text}</p>
    )
}

const Filters = () =>{
    return(
        <div className='mb-3 flex items-center gap-3'>
            <FilterTab text='All' />
            <FilterTab text='ToDo' />
            <FilterTab text='Doing' />
            <FilterTab text='In Progress' />
            <FilterTab text='Done' />
            <FilterTab text='Completed' />
        </div>
    )
}

export default Filters