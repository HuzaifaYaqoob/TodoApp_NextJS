import { useEffect, useState } from "react"
import { apiBaseURL } from "../../redux/ApiVariables"

import { useRouter } from "next/router"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Head from "next/head"
import Setting from "../Setting"
import Loader from "../Loader/Loader"


// Actions Redux
import { removeLoading  } from "../../redux/features/LoadingSlice"
import { makeLogin } from "../../redux/features/UserSlice"

import { useSelector, useDispatch } from "react-redux"

const AppBase = (props) => {
    const router = useRouter()
    const dispatch = useDispatch()

    const user = useSelector((state)=>{
        return state.user
    })

    useEffect(()=>{
        {!user.loggedIn ? router.push('/auth/login/') : router.push('/')}

        const token = localStorage.getItem('auth_token')
        if(token){
            fetch(
                apiBaseURL + '/api/auth/user/',
                {
                    headers:{
                        'Authorization' : `Token ${token}`
                    }
                }
            )
            .then(response => response.json())
            .then(response_data => {
                if(response_data.status == 200){
                    const user_data = response_data.user
                    dispatch(makeLogin(user_data))
                }
                else{
                    alert('Something Went Wrong | Internal Server Error')
                }
            })
            .then(() => {
                dispatch(removeLoading())
            })
            .catch(error => {
                console.log('Internal Server Error')
            })
            
        }
        else{
            router.push('/auth/login/')
            dispatch(removeLoading())
        }
    } , [user.loggedIn])


    return (
        <>
            {
                useSelector((state) => {
                    return (state.Loading.loading && <Loader />)
                })
            }
            <Head>
                <link rel='icon' type='image/png' href='/images/logo.png' />
            </Head>
            <main className='relative min-h-screen flex flex-col' style={{ backgroundColor: '#e5e5e5' }}>
                <Header />
                <Setting />
                {props.children}
                <Footer/>
            </main>
        </>
    )
}

export default AppBase