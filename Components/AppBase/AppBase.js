import { useEffect, } from "react"
import { apiBaseURL } from "../../redux/ApiVariables"

import { useRouter } from "next/router"
import Footer from "../Footer/Footer"
import Head from "next/head"
import Setting from "../Setting"
import Loader from "../Loader/Loader"

// Components OR Containers 
import HeaderContainer from "../../redux/service/containers/HeaderContainer"



const AppBase = (props) => {
    const router = useRouter()

    const myState = props
    useEffect(() => {
        const auth_token = localStorage.getItem('auth_token')
        if (auth_token) {
            props.updateUserToken(auth_token)
            props.loginUser()
            setTimeout(() => {
                fetch(
                    apiBaseURL + '/api/auth/user/',
                    {
                        headers: {
                            'Authorization': `Token ${myState.user.auth_token}`
                        }
                    }
                )
                    .then(response => response.json())
                    .then(response_data => {
                        if (response_data.status_code == 200) {
                            var user_data = response_data.user
                            props.updateUserData(user_data)
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        console.log('Internal Server Error')
                    })
                    .then(() => {
                        props.stopLoading()
                        router.push('/')
                    })
            }, 0)
        }

        router.push('/auth/login/')
        props.stopLoading()

    }, [myState.user.loggedIn, myState.user.auth_token])


    return (
        <>
            {
                myState.Loading.loading && <Loader />
            }
            <Head>
                <link rel='icon' type='image/png' href='/images/logo.png' />
            </Head>
            <main className='relative min-h-screen flex flex-col' style={{ backgroundColor: '#e5e5e5' }}>
                <HeaderContainer />
                <Setting />
                {props.children}
                <Footer />
            </main>
        </>
    )
}

export default AppBase