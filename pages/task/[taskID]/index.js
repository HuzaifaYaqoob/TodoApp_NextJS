
import { useRouter } from "next/router"

import Head from "next/head"

import { Button } from "../../../Components/Form/Form"

import ViewTaskContainer from "../../../redux/service/containers/ViewTaskContainer"

const View = (props) => {
    const router = useRouter()


    return (
        <>
            <Head>
                <title>{'Todo Item | View'}</title>
            </Head>
            <div className='mx-auto max-w-lg w-full mt-5'>
                <Button text='Go Back' className='ml-4 md:ml-0 my-0 bg-white transition-all hover:bg-purple-500 hover:text-white text-gray-700' onClick={() => { router.back() }} />
                <ViewTaskContainer />
            </div>
        </>
    )
}


export default View