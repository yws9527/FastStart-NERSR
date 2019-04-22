import { Component } from 'react'
//兼容包
import 'whatwg-fetch'

require('babel-polyfill')
require('es6-promise').polyfill()

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
	options.mode = 'cors'
  options.credentials = 'include'
  options.headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  options.body = JSON.stringify(options.body)
  const uri = baseURI + url
  const defer = new Promise((resolve, reject) => {
    fetch(uri, options)
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

