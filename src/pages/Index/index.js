import React from 'react';
import { Link } from 'react-router-dom';
import './index.less'; // 确保有相应的 CSS 样式
import trpgImage from './images/trpg-background.jpg'; // 跑团相关图片

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // 如果需要初始化或动画效果，可以在这里做
  }

  render() {
    return React.createElement(
      'div',
      { style: styles.container },
      React.createElement(
        'div',
        { style: styles.header },
        '欢迎来到XX跑团馆！'
      ),
      React.createElement('img', {
        src: trpgImage,
        alt: 'TRPG',
        style: styles.image,
      }),
      React.createElement(
        'p',
        { style: styles.description },
        '在这里你可以体验最刺激的跑团冒险！无论是新手还是老手，都能找到属于自己的乐趣。'
      ),
      React.createElement(
        Link,
        { to: '/login', style: styles.loginButton, className: 'fade-in-link' },
        '立即登录'
      )
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff', // 浅色背景
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#4a90e2', // 蓝色调，活泼明亮
  },
  image: {
    width: '80%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '20px',
  },
  loginButton: {
    fontSize: '1rem',
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: '#4a90e2',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
};



