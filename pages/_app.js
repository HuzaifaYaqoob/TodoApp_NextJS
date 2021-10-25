import '../styles/globals.css'


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducers from '../redux/service/reducers/index'

// Components 
import AppBaseContainer from '../redux/service/containers/AppBaseContainer'


const store = createStore(rootReducers)

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <AppBaseContainer>
          <Component {...pageProps} />
        </AppBaseContainer>
      </Provider>
    </>
  )
}

export default MyApp
