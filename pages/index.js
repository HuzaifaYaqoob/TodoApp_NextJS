
import Todo from "../Components/Task/Todo"
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='my-10'>
        <div className='w-11/12 max-w-xl mx-auto'>
          <Todo className='border-purple-500' />
        </div>
      </div>
    </>
  )
}


export default Home