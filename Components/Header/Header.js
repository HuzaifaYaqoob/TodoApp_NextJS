
import { useSelector, useDispatch } from 'react-redux'
import { makeLogout } from '../../redux/features/UserSlice'

import Link from 'next/link'
import Image from 'next/image'

import {Button} from '../Form/Form'


const Anchor = ({ text, className, nextPath, ...otherProps }) => {
    return (
        <li>
            <Link href={nextPath}>
                <a className={`hover:bg-purple-50 transition-all py-1 px-2 rounded text-gray-500 hover:text-gray-800 ${className}`}>{text}</a>
            </Link>
        </li>
    )
}



const Header = () => {
    const user = useSelector(state => state.user)
    const dispath = useDispatch()

    const Logout = ()=>{
        localStorage.removeItem('auth_token')
        dispath(makeLogout())
    }
    return (
        <header className='bg-white '>
            <div className='container md:px-0 px-2 mx-auto flex items-center justify-between py-2'>
                <div>
                    <Link href='/'>
                        <Image className='cursor-pointer' src='/images/logo.png' width={40} height={44} />
                    </Link>
                </div>
                <nav>
                    <ul className='flex items-center gap-5'>
                        <Anchor text='Home' nextPath='/' />
                        <Anchor text='Add Task' nextPath='/task/add-new/' />
                        <li>{
                            user.loggedIn ?
                            <Button text='Logout' className='bg-red-500' onClick={()=>{Logout()}} />
                                :
                                <Link href='/auth/login/'>
                                    <a className='bg-purple-500 hover:bg-purple-800 transition-all rounded py-1 px-2 text-white'>Login</a>
                                </Link>
                        }
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Header