import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App'
import store from './store'
import { GlobalStyle } from './styled/globalStyle'
import 'react-toastify/dist/ReactToastify.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
    <ToastContainer />
  </React.StrictMode>,

  document.getElementById('root')
)
serviceWorker.unregister()
