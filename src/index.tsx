import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './store'
import { Provider } from 'react-redux'
import { GlobalStyle } from './styles/globalStyle'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
)
serviceWorker.unregister()
