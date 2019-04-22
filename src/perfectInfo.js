import React, {Component} from 'react'
import './perfectInfo.css'

class PerferInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      age: '',
      sex: '',
      work: '',
      email: '',
      company: ''
    }
    this.postInfo = this.postInfo.bind(this)
    this.getInput = this.getInput.bind(this)
    this.getRegistedInfo = this.getRegistedInfo.bind(this)
  }
  componentWillMount() {
    this.getRegistedInfo()
  }
  async getRegistedInfo () {
    try {
      const {res, username} = await this.$http('/registed', {
        method: 'get'
      })
      if (res === 1) {
        this.setState(state => ({
          username: username
        }))
      }
    } catch (e) {
      throw e
    }
  }

  getInput (event) {
    // 提交请求
    const target = event.target
    this.setState({
      [target.id]: target.value
    })
    event.preventDefault()
  }
   async postInfo() {
    try {
      const {res} = await this.$http('/updateInfo', {method: 'post'})
      if (res === 1) {
        alert('用户信息更新成功！')
      } else {
        alert('用户信息更新失败！')
      }
    } catch (e) {
      throw e
    }
  }
  render () {
    return (
      <div className="perfect-info">
        <h2 className="h2-info">完善个人信息</h2>
        <form className="info-form">
          <label htmlFor="username">用户：</label>
          <input className="form-input-info disabled" disabled type="text" defaultValue={this.state.username} id="username" placeholder="请输入用户名" autoComplete="off"/><br />
          <label htmlFor="age">年龄：</label>
          <input className="form-input-info" type="text" value={this.state.age} onChange={this.getInput} id="age"  placeholder="请输入年龄" autoComplete="off"/><br />
          <label htmlFor="sex">性别：</label>
          <input className="form-input-info" type="text" value={this.state.sex} onChange={this.getInput} id="sex"  placeholder="请输入性别" autoComplete="off"/><br />
          <label htmlFor="work">工作：</label>
          <input className="form-input-info" type="text" value={this.state.work} onChange={this.getInput} id="work"  placeholder="请输入工作" autoComplete="off"/><br />
          <label htmlFor="email">邮箱：</label>
          <input className="form-input-info" type="text" value={this.state.email} onChange={this.getInput} id="email"  placeholder="请输入邮箱" autoComplete="off"/><br />
          <label htmlFor="company">公司：</label>
          <input className="form-input-info" type="text" value={this.state.company} onChange={this.getInput} id="company"  placeholder="请输入公司名字" autoComplete="off"/><br />
          <input className="form-btn-info" type="button" value='提交' onClick={this.postInfo} />
        </form>
      </div>
    )
  }
}


export default PerferInfo