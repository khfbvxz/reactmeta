import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';

// 0. React 엔진 - 데이터 변경 감지에서 UI그려주는 !
// 1. 실행과정 (index.html) -SPA
// 2. JSX 문법
// 3. 바벨(자바스크립트 ES5) -> ES6

// (1) return시에 하나의 DOM만 리턴 할 수 있다.
// (2) 뱐수 선언 let const
// (3) if 사용불가 -> 삼항 연산자 (조건? 값(true) : 값 (false))
// (4)조건부 렌더링 (조건 && 값(true))
// (5) css 디자인
//  - 내부에 적는 방법
//  - 외부 파일에 적는 방법
//  - 라이브러리 사용(부트스트랩, component-styled)

function App() {
  //let number = 1; // 상태 값 아님
  const [num, setNum] = useState(5);
  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '코스' },
  ];
  console.log('App 실행됨 ');
  const [users, setUsers] = useState(sample); //레퍼런스 변경되야 동작 !!

  const download = () => {
    //setUsers([...sample]);
    //기존 데이터 세팅
    // const a = sample.concat({ id: 5, name: '조자룡' });
    // setUsers(a);

    setUsers([...sample, { id: num, name: '조자룡' }]);
    setNum(num + 1);
  };

  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <button onClick={download}>다운로드 </button>
      {users.map((u) => (
        <h1>
          {u.id}, {u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
