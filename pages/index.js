
import { useEffect } from "react"
import { apiBaseURL } from "../redux/ApiVariables"

import Todo from "../Components/Task/Todo"
import Head from 'next/head'

import { useSelector, useDispatch } from "react-redux"
import { UpdateTodos } from "../redux/features/TodosSlice"


const Home = () => {
  const dispatch = useDispatch()
  const myState = useSelector(state => {
    return state
  })

  useEffect(() => {
    if (myState.user.auth_token) {
      fetch(
        apiBaseURL + '/api/todo/',
        {
          headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
          }
        }
      )
        .then(response => response.json())
        .then(response_data => {
          dispatch(UpdateTodos({data : response_data.data}))
        })
        .catch(error => {
          console.log(error.message)
        })
    }
  }, [myState.user.auth_token])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='my-10'>
        <div className='w-11/12 max-w-xl mx-auto'>
          {
            myState.myTodos.todos.length > 0 ? 
            myState.myTodos.todos.map((item, ind)=>{
              return <Todo data={item} key={ind} className='border-purple-500' />
            })
            :
            <h3>No Item Found</h3>
          }
        </div>
      </div>
    </>
  )
}


export default Home