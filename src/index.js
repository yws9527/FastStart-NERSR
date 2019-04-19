import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Orouter from './routes/route'
import * as serviceWorker from './serviceWorker'
require('./utils/peiqi.js')

// 参考这个地址的demo https://reacttraining.com/react-router/web

ReactDOM.render(
  <Orouter/>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()