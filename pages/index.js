
import { useEffect, useState } from "react"
import { apiBaseURL } from "../redux/ApiVariables"

import Todo from "../Components/Task/Todo"
import Head from 'next/head'
import Filters from "../Components/Filter.js/Filters"

import { useSelector, useDispatch } from "react-redux"
import { UpdateTodos } from "../redux/features/TodosSlice"
import { useRouter } from "next/router"


const Home = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const myState = useSelector(state => {
    return state
  })


  const getTodoItems = () => {
    fetch(
      apiBaseURL + `/api/todo/`,
      {
        headers: {
          'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
      }
    )
      .then(response => response.json())
      .then(response_data => {
        if (response_data.status_code == 200) {
          dispatch(UpdateTodos({ data: response_data.data }))
        }

      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const LoadMore = () => {
    getTodoItems(items_Limit + 10)
  }

  const Scrolling = () => {
    if ((myState.myTodos.todos.length % 10) == 0) {

      const window_height = window.innerHeight
      const scroll_top = document.documentElement.scrollTop
      const scroll_height = document.scrollingElement.scrollHeight
      if (window_height + scroll_top == scroll_height) {
        setTimeout(() => {
          LoadMore()
        }, 3000);
      }
    }

  }

  useEffect(() => {
    // window.addEventListener('scroll', () => { Scrolling() })
    if (myState.user.auth_token) {
      getTodoItems()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='my-10'>
        <div className='w-11/12 max-w-xl mx-auto'>
          <Filters />
          {
            router.query.status ?
              myState.myTodos.todos.filter(item => {
                if (router.query.status == 'All') {
                  return true
                }
                return item.status == router.query.status
              }).map((item, ind) => {
                return <Todo data={item} key={ind} className='border-purple-500' />
              })
              :
              myState.myTodos.todos.length > 0 ?
                myState.myTodos.todos.map((item, ind) => {
                  return <Todo data={item} key={ind} className='border-purple-500' />
                })
                :
                <h3>Loading...</h3>
          }
        </div>
      </div>
    </>
  )
}





export default Home