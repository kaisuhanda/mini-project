import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/reducer/globalState.js'
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'
import dotenv from 'dotenv';
import { API_URL } from '../helper.js'
// import { globalState } from './redux/index.js'


dotenv.config();
// console.log(API_URL);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
)



