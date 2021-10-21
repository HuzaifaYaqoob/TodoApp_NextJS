import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import { apiBaseURL } from "../../redux/ApiVariables"

import { makeLogin } from "../../redux/features/UserSlice"

import Link from "next/link"
import Image from "next/image"
import Head from 'next/head'
import Form, { InputField, Button } from '../../Components/Form/Form'


const Login = () => {
    const [error, setError] = useState('')
    const [username_inp, setUsername] = useState('')
    const [password_inp, setPassword] = useState('')
    const router = useRouter()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)


    const ValidateData = () => {
        if (username_inp == '' || password_inp == '') {
            setError('All Fields Are Required')
            return false
        }
        return true
    }

    const Login = () => {
        if (ValidateData()) {
            fetch(
                apiBaseURL + '/api/auth/login/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username_inp,
                        password: password_inp,
                    })
                }
            )
                .then(response => response.json())
                .then((response_data) => {
                    if (response_data.status_code == 200) {
                        const user = response_data.data.user
                        localStorage.setItem(
                            'auth_token',
                            user.auth_token
                        )
                        dispatch(makeLogin(user))
                    }
                    else {
                        setError(response_data && response_data.details ? response_data.details : 'Something Went Wrong')
                    }

                })
                .catch((err) => {
                    setError(err && err.details ? err.details : 'Something Went Wrong')
                    console.log(err)
                })
            // dispatch(makeLogin({ data: 'huzaifa' }))
        }
    }

    useEffect(() => {
        { user.loggedIn && router.push('/') }
    }, [])

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className='px-3 sm:px-0 flex-1 flex items-center justify-center bg-gradient-to-tr from-purple-500 to-pink-400'>

                <div className='bg-white bg-opacity-60 rounded-md p-5 w-11/12 max-w-sm md:max-w-md z-20 ' style={{ backdropFilter: 'blur(5px)' }}>
                    <div className='text-center block mb-3'>
                        <Link href='/'>
                            <Image className='cursor-pointer' src='/images/logo.png' width={100} height={105} />
                        </Link>
                    </div>
                    <div>
                        <h3 className='text-purple-800 text-2xl font-semibold'>Welcome Back!</h3>
                        <p className='text-gray-600 text-sm'>Enter Your Details to Login.</p>
                    </div>
                    <Form>
                        <InputField type='text' Label='Username' placeholder='Enter Your Username' onChange={(event) => { setUsername(event.target.value) }} />
                        <InputField type='password' Label='Password' placeholder='Enter Your Password' onChange={(event) => { setPassword(event.target.value) }} />
                        {
                            error &&
                            <p className='text-xs text-red-600'>{error}</p>
                        }
                        <Button text='Login' className='bg-purple-500 w-full hover:bg-purple-700 py-2' onClick={() => { Login() }} />
                        <Link href='#' className='text-right text-sm block w-full'>Forgot Password?</Link>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login