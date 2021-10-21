import '../styles/globals.css'


import { Provider } from 'react-redux'
import store from '../redux/api/store'

// Components 
import AppBase from '../Components/AppBase/AppBase'


const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <Provider store={store}>
        <AppBase>
          <Component {...pageProps} />
        </AppBase>
      </Provider>
    </>
  )
}

export default MyApp
