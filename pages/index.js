import InfiniteScroll from "react-infinite-scroll-component"

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


  const getTodoItems = (_limit) => {
    fetch(
      apiBaseURL + `/api/todo/?_limit=${_limit}`,
      {
        headers: {
          'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
      }
    )
      .then(response => response.json())
      .then(response_data => {
        if (response_data.status_code == 200) {
          dispatch(UpdateTodos({ data: response_data.data, todos_total_length: response_data.total_length }))
        }

      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const FetchMoreData = () => {
    getTodoItems(myState.myTodos.todos.length + 1)
  }




  useEffect(() => {
    if (myState.user.auth_token) {
      getTodoItems(10)
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

          <InfiniteScroll
            dataLength={myState.myTodos.todos.length} //This is important field to render the next data
            next={FetchMoreData}
            hasMore={myState.myTodos.todos_length > myState.myTodos.todos.length ? true : false}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }

          >
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
                  <h3>Loading more items...</h3>
            }
          </InfiniteScroll>
        </div>
      </div>
    </>
  )
}





export default Home