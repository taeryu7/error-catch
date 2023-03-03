
// componentDidCatch 로 에러 잡아내기
import React from 'react';
import User from './User';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const user = {
    id: 1,
    username: 'velopert'
  };
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}

export default App;

/*
import React from 'react';
import User from './User';

function App() {
  const user = {
    id: 1,
    username: 'velopert'
  };
  return <User user={user} />;
}

export default App;
// 만약 위 코드에서 user props 를 제대로 설정하지 않으면 오류가 발생한다.
// 실제 환경에서는 아무것도 렌더링되지않고 흰 페이지만 나타난다.


import React from 'react';

function User({ user }) {
  if (!user) {
    return null;
  }

  return (
    <div>
      <div>
        <b>ID</b>: {user.id}
      </div>
      <div>
        <b>Username:</b> {user.username}
      </div>
    </div>
  );
}

export default User;
// 위에처럼 코드를 짜면 user 값이 존재하지 않는다면 null 을 렌더링하게된다.
// 리액트 컴포넌트에서 null 을 렌더링하게되면 아무것도 나타나지 않게된다. 이를 "null checking" 이라고 부른다.
// 코드를 짜면 화면에 아무것도 보여지지 않는것은 마찬가지지만, 에러는 발생하지 않는다.
// 보통 데이터를 네트워크 요청을 통헤서 나중에 데이터를 받아오게 되는 상황이 발생하는경우 이렇게 데이터가 없으면 null을 보여주거나,
// <div>로딩중</div>과 같은 결과물을 렌더링하게된다.

// 에러가 발생 할 수 있는 또 다른 상황을 아래 예시코드로 봐보자
function Users({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.username}</li>
      ))}
    </ul>
  );
}
// 위와 같은 컴포넌트에 user값을 설정해주지 않을 때에도 렌더링 과정에서 오류가 발생하게 되는데,
// user가 undefined이면 배열의 내장함수 map또한 존재하지 않는다.
// 아래는 또다른 상황 예제가 있다.
function Users({ users, onToggle }) {
  if (!users) return null;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id} onClick={() => onToggle(user.id)}>
          {user.username}
        </li>
      ))}
    </ul>
  );
}

// 위 컴포넌트에 onToggle props를 전달하지 않으면, 에러가 발생한다.
// 에러를 방지하기 위해서는 onToggle을 props로 넣어주는것을 까먹지 않기 위해서 아래 같이 defaultProps 설정을 해주는 방법이 있다
function Users({ users, onToggle }) {
  if (!users) return null;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id} onClick={() => onToggle(user.id)}>
          {user.username}
        </li>
      ))}
    </ul>
  );
}

Users.defaultProps = {
  onToggle: () => {
    console.warn('onToggle is missing!');
  }
};

// 다른 방법으로는 PropTypes 라는것을 사용하는 방법이 있다. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
//  PropTypes 를 사용하면 필요한 데이터를 넣지 않았을 때 개발 단계에서 경고를 볼 수 있기 때문에 실수로 props 설정을 깜박하는 일을 방지 할 수 있다.
// 사용법이 좀 불편하고 귀찮기 때문에 이를 사용하는 것 대신에 나중에 TypeScript 또는 Flow 를 사용해서 관리 하는 것이 좋다.






*/

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/