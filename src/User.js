

// componentDidCatch 로 에러 잡아내기
import React from 'react';

function User({ user }) {
  // if (!user) {
  //   return null;
  // }

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
// 아래코드를 수정해서 브라우저를 열면 같은 에러가 뜨겠지만 우측상단의 x버튼을 누르면 흰화면이 아닌 에러발생! 이라는 문구가 뜰 것이다.



/*
// 리액트 앱에서 에러가 발생하는 상황
import React from 'react';

function User({ user }) {
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
// 이 컴포넌트는 user 라는 props 를 받아와서 해당 데이터의 id 와 username 값을 보여준다
*/
