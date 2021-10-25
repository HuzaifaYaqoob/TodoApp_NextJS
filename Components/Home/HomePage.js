

import InfiniteScroll from "react-infinite-scroll-component"

import { useEffect } from "react"
import { apiBaseURL } from "../../redux/ApiVariables"

import Todo from "../Task/Todo"
import Head from 'next/head'
import Filters from "../Filter/Filters"

import { useRouter } from "next/router"


const HomePage = (props) => {
    const router = useRouter()
    const myState = props.data
    const allTodos = myState.todos.todos
    const todos_total_length = myState.todos.total_length


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

                    props.updateTodosHandler(
                        {
                            todos_data: response_data.data,
                            todos_total_length: response_data.total_length
                        }
                    )
                }

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const FetchMoreData = () => {
        getTodoItems((allTodos.length) + 1)
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
                        dataLength={allTodos.length} //This is important field to render the next data
                        next={FetchMoreData}
                        hasMore={todos_total_length > allTodos.length ? true : false}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }

                    >
                        {
                            router.query.status ?
                                allTodos.filter(item => {
                                    if (router.query.status == 'All') {
                                        return true
                                    }
                                    return item.status == router.query.status
                                }).map((item, ind) => {
                                    return <Todo data={item} key={ind} />
                                })
                                :
                                allTodos.length > 0 ?
                                    allTodos.map((item, ind) => {
                                        return <Todo data={item} key={ind} />
                                    })
                                    :
                                    allTodos.todos_length == 0 ?
                                        <h3>No More Items</h3>
                                        :
                                        <h3>Loading more items...</h3>
                        }
                    </InfiniteScroll>
                </div>
            </div>
        </>
    )
}





export default HomePage