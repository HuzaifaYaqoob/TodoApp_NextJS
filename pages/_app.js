import '../styles/globals.css'

import Head from 'next/head'

// Components 
import AppBase from '../Components/AppBase/AppBase'


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='icon' type='image/png' href='/images/logo.png' />
      </Head>
      <AppBase>
        <Component {...pageProps} />
      </AppBase>
    </>
  )
}

export default MyApp
