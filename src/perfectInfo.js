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
      avatar: '',
      imgName: '',
      company: ''
    }
    this.postInfo = this.postInfo.bind(this)
    this.getInput = this.getInput.bind(this)
    this.getfile = this.getfile.bind(this)
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
    const target = event.target
    this.setState({
      [target.id]: target.value
    })
    event.preventDefault()
  }
  getfile (event) {
    const MAX_HEIGHT = 100
    const file = document.getElementById('avatar').files[0]
    if (!file) return false
    if (file.size > 2097152) return alert('图片太大，不能超过2Mb！')
    if (file.type.indexOf('image') === -1) return alert('您选择上传的不是图片，请重新选择！')
    const img = new Image()
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      // 获得图片的src值，原始 base64编码
      const initBase64 = reader.result
      img.src = initBase64
      img.onload = o => {
        // _img 加载出来的图片的一系列属性
        const _img = o.target
        // 开始构建canvas
        const canvas = document.getElementById("myCanvas")
        // 按照最大高度等比缩放图片
        if(_img.height > MAX_HEIGHT) {
          _img.width *= MAX_HEIGHT / _img.height
          _img.height = MAX_HEIGHT
        }
        const ctx = canvas.getContext("2d")
        // 初始化画布大小
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        // 设置画布大小为图片的大小
        canvas.width = _img.width
        canvas.height = _img.height
        // 在画布上绘制图片
        ctx.drawImage(_img, 0, 0, _img.width, _img.height)
        // 利用 toDataURL 缩小图片（可控制缩小比例 0-1）
        const newBase64 = canvas.toDataURL('image/jpeg', 0.4)
        // this.setState({avatar: img.src})
        this.setState({avatar: newBase64})
        this.setState({imgName: file.name})
        console.log('原始：', new Blob([file])) // 图片原始大小
        console.log('压缩前：' , new Blob([initBase64])) // 第一次转base64后的大小（转换后相比原始文件默认会增大）
        console.log('压缩后：' , new Blob([newBase64])) // 第二次缩小为0.4，转base64后的大小
        alert(`图片宽高：${_img.width}x${_img.height}, 图片大小：${(file.size / 1024).toFixed(2)}Kb`)
      }
    }
    event.preventDefault()
  }
  async postInfo() {
    try {
      const {username, age, sex, work, email, avatar, company} = this.state
      const {res} = await this.$http('/updateInfo', {
        method: 'post',
        data: {username, age, sex, work, email, avatar, company}
      })
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
          <label htmlFor="avatar">头像：</label>
          <div className="form-input-info upload">
            <span className="avatar">
              <input type="file" onChange={this.getfile} id="avatar"/>
              {/*<img src={this.state.avatar} alt="" title={this.state.imgName}/>*/}
              <canvas id="myCanvas"></canvas>
            </span>
          </div><br />
          <input className="form-btn-info" type="button" value='提交' onClick={this.postInfo} />
        </form>
      </div>
    )
  }
}


export default PerferInfo