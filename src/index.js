import React from 'react'
import {render} from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './store'

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)
registerServiceWorker()

