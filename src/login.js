import React, { Component } from 'react'
import './login.css'

class Login extends Component {
	constructor(props) {
    super(props)
    this.state = {
			isLogin: false,
			username: '',
			password: ''
		}
    // 为了在回调中使用 `this`，这个绑定是必不可少的
		this.switchUi = this.switchUi.bind(this)
		this.postMe = this.postMe.bind(this)
		this.getInput = this.getInput.bind(this)
  }

  switchUi(event) {
    this.setState(state => ({
			isLogin: !state.isLogin,
			username: '',
			password: ''
		}))
		event.preventDefault()
	}
	
	postMe () {
		// 登录 | 注册 请求
	}

	getInput (event) {
		const target = event.target
		this.setState(state => ({
			username: target.id === 'username' ? target.value : state.username,
			password: target.id === 'password' ? target.value : state.password
		}))
		event.preventDefault()
	}

	render () {
		return (
			<div className="App-right">
				<h5>{this.state.isLogin ? '登录': '注册'}</h5>
				<form className="App-form">
					<label htmlFor="username">用户：</label>
					<input className="form-input" type="text" value={this.state.username} onChange={this.getInput} id="username" placeholder="请输入用户名" autoComplete="off"/><br />
					<label htmlFor="password">密码：</label>
					<input className="form-input" type="password" value={this.state.password} onChange={this.getInput} id="password"  placeholder="请输入密码" autoComplete="off"/><br />
					<input className="form-btn" type="button" value={this.state.isLogin ? '登录': '注册'} onClick={this.postMe} />
					<p className="form-tips">
						{!this.state.isLogin ? '已有': '尚无'}账户，请&nbsp;
						<b onClick={this.switchUi}>{!this.state.isLogin ? '登录': '注册'}</b>
					</p>
				</form>
			</div>	
		)
	}
}

export default Login
