import { useEffect, useState } from "react"

import { useRouter } from "next/router"
import Header from "../Header/Header"
import Head from "next/head"
import Setting from "../Setting"
import Loader from "../Loader/Loader"


// Actions Redux
import { removeLoading } from "../../redux/features/LoadingSlice"

import { useSelector, useDispatch } from "react-redux"

const AppBase = (props) => {
    const router = useRouter()
    const dispatch = useDispatch()

    const user = useSelector((state)=>{
        return state.user
    })

    useEffect(()=>{
        {!user.loggedIn && router.push('/auth/login/')}
        setTimeout(() => {
            dispatch(removeLoading())
        }, 0);
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
            </main>
        </>
    )
}

export default AppBase