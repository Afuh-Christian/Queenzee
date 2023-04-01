import Navbar from '../Components/nav/Navbar'

import global from "../styles/globals.css"

import { store } from '../dataStore/store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  return (
 <Provider store={store}>
    <Navbar>
      <Component {...pageProps} />
      </Navbar>

      {/* <Navbar/> */}
      
  </Provider>
  )
  }

export default MyApp
