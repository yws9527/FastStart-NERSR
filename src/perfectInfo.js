import React, {Component} from 'react'
import './perfectInfo.css'

class PerferInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.postInfo = this.postInfo.bind(this)
  }
  postInfo () {
    // 提交请求
  }
  render () {
    return (
      <div className="perfect-info">
        <h2 className="h2-info">完善个人信息</h2>
        <form className="info-form">
          <label htmlFor="username">用户：</label>
          <input className="form-input-info" disabled type="text" value={this.state.username} onChange={this.getInput} id="username" placeholder="请输入用户名" autoComplete="off"/><br />
          <label htmlFor="password">年龄：</label>
          <input className="form-input-info" type="text" value={this.state.password} onChange={this.getInput} id="password"  placeholder="请输入年龄" autoComplete="off"/><br />
          <label htmlFor="password">性别：</label>
          <input className="form-input-info" type="text" value={this.state.password} onChange={this.getInput} id="password"  placeholder="请输入性别" autoComplete="off"/><br />
          <label htmlFor="password">工作：</label>
          <input className="form-input-info" type="text" value={this.state.password} onChange={this.getInput} id="password"  placeholder="请输入工作" autoComplete="off"/><br />
          <label htmlFor="password">邮箱：</label>
          <input className="form-input-info" type="text" value={this.state.password} onChange={this.getInput} id="password"  placeholder="请输入邮箱" autoComplete="off"/><br />
          <label htmlFor="password">公司：</label>
          <input className="form-input-info" type="text" value={this.state.password} onChange={this.getInput} id="password"  placeholder="请输入公司名字" autoComplete="off"/><br />
          <input className="form-btn-info" type="button" value='提交' onClick={this.postInfo} />
        </form>
      </div>
    )
  }
}


export default PerferInfo