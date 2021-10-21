import { useEffect, useState } from "react"
import { apiBaseURL } from "../../redux/ApiVariables"

import { useRouter } from "next/router"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Head from "next/head"
import Setting from "../Setting"
import Loader from "../Loader/Loader"


// Actions Redux
import { removeLoading } from "../../redux/features/LoadingSlice"
import { UpdateToken, updateUserData } from "../../redux/features/UserSlice"

import { useSelector, useDispatch } from "react-redux"

const AppBase = (props) => {
    const router = useRouter()
    const dispatch = useDispatch()

    const myState = useSelector((state) => {
        return state
    })

    useEffect(() => {
        dispatch(UpdateToken())
        if(myState.user.auth_token){
            dispatch(updateUserData())
        }
        { !myState.user.loggedIn ? router.push('/auth/login/') : router.push('/') }
        setTimeout(() => {
            dispatch(removeLoading())
        }, 0);

    }, [myState.user.loggedIn])


    return (
        <>
            {
                myState.Loading.loading && <Loader />
            }
            <Head>
                <link rel='icon' type='image/png' href='/images/logo.png' />
            </Head>
            <main className='relative min-h-screen flex flex-col' style={{ backgroundColor: '#e5e5e5' }}>
                <Header />
                <Setting />
                {props.children}
                <Footer />
            </main>
        </>
    )
}

export default AppBase