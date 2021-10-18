
import Header from "../Header/Header"
import Head from "next/head"
import Setting from "../Setting"

const AppBase = (props) => {


    return (
        <>
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