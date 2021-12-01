import logo from './logo.svg';
import './App.css';
import Wood from './wood';

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
let a = 10;
const b = 20;
function App() {
  let c;
  let d = undefined;
  console.log(1, c);

  const mystyle = {
    color: 'red',
  };
  return (
    <div>
      <div>달</div>
      <Wood />
    </div>
  );
}

export default App;
