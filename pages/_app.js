import '../styles/globals.css'


// Components 

import AppBase from '../Components/AppBase/AppBase'


const MyApp = ({ Component, pageProps }) => {
  return (
    <AppBase>
      <Component {...pageProps} />
    </AppBase>
  )
}

export default MyApp
