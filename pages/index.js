
import Todo from "../Components/Task/Todo"
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='my-10'>
        <div className='max-w-xl w-full mx-auto'>
          <Todo className='border-purple-500' />
          <Todo className='border-red-500' />
          <Todo className='border-yellow-500' />
          <Todo className='border-green-500' />
          <Todo className='border-gray-500' />
        </div>
      </div>
    </>
  )
}


export default Home