import '../styles/globals.css'
import React,{useState, useEffect, useRef} from "react"
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import store from '../lib/Redux/store'



function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    ) 
    
}

export default MyApp
