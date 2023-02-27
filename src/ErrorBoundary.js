// componentDidCatch 로 에러 잡아내기
// componentDidCatch 생명주기 메서드를 사용하여 우리가 사전에 예외처리를 하지 않은 에러가 발생 했을 때 사용자에게 에러가 발생했다고 알려주는 화면

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false
  };

  componentDidCatch(error, info) {
    console.log('에러가 발생했습니다.');
    console.log({
      error,
      info
    });
    this.setState({
      error: true
    });
  }

  render() {
    if (this.state.error) {
      return <h1>에러 발생!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

// componentDidCatch 메서드에는 두개의 파라미터를 사용하게 되는데 첫번째 파라미터는 에러의 내용, 두번째 파라미터에서는 에러가 발생한 위치를 알려준다.
// 이 메서드에서 현재 컴포넌트 상태 error 를 true 로 설정을 해주고, render() 메서드에서는 만약 this.state.error 값이 true 라면,
// 에러가 발생했다는 문구를 렌더링하도록 하고 그렇지 않다면 this.props.children 을 렌더링하도록 처리한다.

