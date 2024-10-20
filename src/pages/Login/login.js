import React from 'react';
import './Login.css';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false, // 控制登录窗口的显示
      username: '', // 用于保存输入的账号
      password: ''  // 用于保存输入的密码
    };
  }

  componentDidMount() {
    // 为入场动画添加class
    setTimeout(() => {
      document.querySelector('.login-container').classList.add('animate-entry');
    }, 100);
  }

  // 控制登录表单显示/隐藏
  toggleLoginForm = () => {
    this.setState({ showLoginForm: !this.state.showLoginForm });
  };

  // 处理表单提交
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    // 模拟登录逻辑，检查用户名和密码
    if (username === '1' && password === '1') {
      // 登录成功，跳转到Home.js
      this.props.history.push('/home');
    } else {
      alert('账号或密码错误');
    }
  };

  // 处理输入框的变化
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { showLoginForm, username, password } = this.state;
    return (
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">XX跑团馆</h1>
          <p className="login-subtitle">Welcome to the madness...</p>
          {!showLoginForm && (
            <button className="login-link" onClick={this.toggleLoginForm}>
              Enter the Abyss
            </button>
          )}
        </div>

        {showLoginForm && (
          <div className="login-form">
            <h2>登录</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>账号</label>
                <input
                  type="text"
                  name="username"
                  placeholder="请输入您的账号"
                  value={username}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>密码</label>
                <input
                  type="password"
                  name="password"
                  placeholder="请输入您的密码"
                  value={password}
                  onChange={this.handleInputChange}
                />
              </div>
              <button type="submit" className="submit-btn">登录</button>
            </form>
            <div className="account-options">
              <button className="create-account-btn">创建新账户</button>
              <button className="create-account-btn1">忘记密码</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Login);
