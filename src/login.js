import React, { Component } from 'react'
import './login.css'

class Login extends Component {
	constructor(props) {
    super(props)
    this.state = {
			isLogin: true,
			username: '',
			password: ''
		}
    // 为了在回调中使用 `this`，这个绑定是必不可少的
		this.switchUi = this.switchUi.bind(this)
		this.getInput = this.getInput.bind(this)
		this.postRequest = this.postRequest.bind(this)
		this.getLogin = this.getLogin.bind(this)
		this.getRegister = this.getRegister.bind(this)
  }

  switchUi(event) {
    this.setState(state => ({
			isLogin: !state.isLogin,
			username: '',
			password: ''
		}))
		event.preventDefault()
	}

	async postRequest () {
		// 登录 | 注册请求
		if (this.state.isLogin) {
			this.getLogin()
		} else {
			this.getRegister()
		}
	}

	async getLogin () {
		const {res} = await this.$http('/login', {
			method: 'post',
			body: {
				username: this.state.username,
				password: this.state.password
			}
		})
		if (res === 1) {
			alert('欢迎' + this.state.username + '回来！')
		} else {
			alert('尚未注册，请先注册！')
			this.setState({isLogin: false})
		}
	}

	async getRegister () {
		const {res} = await this.$http('/register', {
			method: 'post',
			body: {
				username: this.state.username,
				password: this.state.password
			}
		})
		if (res === 'success') {
			alert('您已成功注册，请登录！')
			this.setState({isLogin: true})
		} else {
			alert(res)
		}
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
					<input className="form-btn" type="button" value={this.state.isLogin ? '登录': '注册'} onClick={this.postRequest} />
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
