import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App'
import store from './store'
import { GlobalStyle, theme } from './styled'
import { ThemeProvider } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
    <ToastContainer />
  </React.StrictMode>,

  document.getElementById('root')
)
serviceWorker.unregister()
