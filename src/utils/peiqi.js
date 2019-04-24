import { Component } from 'react'
//兼容包
import 'whatwg-fetch'

require('babel-polyfill')
require('es6-promise').polyfill()

const querystring = require('querystring')

// 基础ip
const baseURI = "http://localhost:22222"

// 检测状态
function checkStatus (response) {
  if (response.status === 200 && response.ok) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

// 格式化json
function parseJSON (response) {
  return response.json()
}

// 封装
Component.prototype.$http = function (url, options) {
  const _url = baseURI + url
  const method = options.method.toUpperCase()
  const querystr = method === 'GET' ? querystring.stringify(options.data) : null
  const uri = method === 'GET' ? (_url + '?' + querystr) : _url
  const body = method === 'GET' ? null : JSON.stringify(options.data)
  const _options = {
    method,
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  const opts = method === 'GET' ? _options : {..._options, body}
  const defer = new Promise((resolve, reject) => {
    fetch(uri, opts)
    	.then(checkStatus)
      .then(parseJSON)
      .then(data => {
        resolve(data) //返回成功数据
      })
      .catch(error => {
        //捕获异常
        console.log(error.msg)
        reject(error)
      })
  })

  return defer
}

