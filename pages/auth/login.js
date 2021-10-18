

import Link from "next/dist/client/link"
import Image from "next/image"
import Head from 'next/head'
import Form, { InputField, Button } from '../../Components/Form/Form'


const Login = () => {

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className='px-3 sm:px-0 flex-1 flex items-center justify-center bg-gradient-to-tr from-purple-500 to-pink-400'>

                <div className='bg-white bg-opacity-60 rounded-md p-5 max-w-xs md:max-w-md z-20 w-full' style={{ backdropFilter: 'blur(5px)' }}>
                    <div className='text-center mb-3'>
                        <Image src='/images/logo.png' width={100} height={105} />
                    </div>
                    <div>
                        <div>
                            <h3 className='text-purple-800 text-2xl font-semibold'>Welcome Back!</h3>
                            <p className='text-gray-600 text-sm'>Enter Your Details to Login.</p>
                        </div>
                        <Form>
                            <InputField type='text' Label='Username' placeholder='Enter Your Username' />
                            <InputField type='password' Label='Password' placeholder='Enter Your Password' />
                            <Button className='bg-purple-500 w-full hover:bg-purple-700 ' onClick={() => { alert('Login Call Back') }} />
                            <Link href='#' className='text-right text-sm block w-full'>Forgot Password?</Link>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login