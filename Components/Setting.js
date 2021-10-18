import { useState } from "react"

import Image from "next/image"


const ColorDisplay = (props) =>{
    return(
        <div className='flex items-center gap-3 mb-3 transition-all transform hover:scale-110'>
            <span className={`block w-5 h-5 rounded-full ${props.colorClass}`}></span>
            <h3 className='whitespace-nowrap'>{props.text}</h3>
        </div>
    )
}



const Setting = () => {
    const [settingActive, setSettingActive] = useState(false)
    return (
        <div className='fixed top-40 right-0 w-10 h-10 bg-white p-2 rounded-tl rounded-bl cursor-pointer hover:shadow-lg'>
            <span className='block' onClick={()=>{setSettingActive(!settingActive)}}>
                <Image src='/images/gear.png' className={'transform transition-all ' + (settingActive ? 'rotate-45' : 'rotate-90')} width={40} height={40} />
            </span>
            {
                settingActive && 
                <div className='shadow-2xl absolute -left-3 top-0 transition-all transform -translate-x-full py-2 px-5 bg-white rounded' >
                    <ColorDisplay colorClass='bg-red-500' text='To Do' />
                    <ColorDisplay colorClass='bg-yellow-500' text='Doing' />
                    <ColorDisplay colorClass='bg-gray-500' text='In Progress' />
                    <ColorDisplay colorClass='bg-purple-500' text='Done' />
                    <ColorDisplay colorClass='bg-green-500' text='Completed' />
                </div>
            }
        </div>
    )
}

export default Setting