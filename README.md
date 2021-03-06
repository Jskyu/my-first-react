https://codingapple.com/course/react-basic/ \
React 리액트 기초부터 쇼핑몰 프로젝트까지! 수강일지

## Pages
- [Blog] https://jskyu.github.io/my-first-react-blog/
- [Shop] https://jskyu.github.io/my-first-react-shop/

## Installation
>blog
```
1. NodeJs Download
2. [Windows] : Powershell, [Mac] Terminal 에서 `npx create-react-app blog`
3. git clone https://github.com/Jskyu/my-first-react.git
4. [2] 폴더에 소스 덮어쓰기
5. [2] 폴더에서 npm start
```

>shop [22022-06-03일 기준. 안된다면 react-bootstrap에 접속하여 설치후 npm start]
```
1. NodeJs Download
2. [Windows] : Powershell, [Mac] Terminal 에서 `npx create-react-app shop`
3. git clone https://github.com/Jskyu/my-first-react.git
4. [2] 폴더에 소스 덮어쓰기
5. [2] 폴더에서 npm install react-router-dom@6
6. [2] 폴더에서 npm install react-bootstrap
7. [2] 폴더에서 npm install styled-components
8. npm start
```

> *Downloads*\
`NodeJS 16.15.1 LTS` https://nodejs.org/dist/v16.15.1/ \
`Visual Studio Code` https://code.visualstudio.com/#alt-downloads

> *Built With*\
`Visual Studio Code 1.67`

## `Part 1. 블로그 제작 & 기초 문법`

### state, component, props
>state 란?
```
react(리액트)를 다루는 핵심으로,
State는 props처럼 App 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체지만,
props는 (함수 매개변수처럼) 컴포넌트에 전달되는 반면 state는 (함수 내에 선언된 변수처럼) 컴포넌트 안에서 관리된다는 차이가 있다.
props를 사용했는데도 state를 사용하는 이유는, 사용하는 쪽과 구현하는 쪽을 철저하게 분리시켜서 양쪽의 편의성을 각자 도모하는 것에 있다.

자주 변경될것같은 html 부분은 state로 만들고,
자주 변경되지 않는 html은 하드코딩 or js변수로써 활용하는것을 추천한다.
```
<br>

>state 기본 문법
```js
let [stateValue, setState] = useState('val');

//stateValue = state 에 담아놓은 데이터 변수. stateValue에는 'val' 이 담긴다.
//setState = state 의 변경을 도와주는 함수
```
<br>

let [a, b] = Array 표현방식은 `DeStructuring(구조분해할당)` 이라 하며, 아래와 같다.
```js
let nums = [1, 2];
let a = nums[0];
let b = nums[1];
```
<br>

>동적인 UI 만드는 3 STEP
```
1. html css로 미리 디자인 완성
2. UI의 현재 상태를 state로 저장
3. state에 따라 UI가 어떻게 보일지 작성
```
<br>

>component 란?
```
- 리액트로 만들어진 앱을 이루는 최소한의 단위
- 기존의 웹 프레임워크는 MVC방식으로 분리하여 관리하여 각 요소의 의존성이 높아 재활용이 어렵다는 단점이 있었다. 
  반면 컴포넌트는 MVC의 뷰를 독립적으로 구성하여 재사용을 할 수 있고 이를 통해 새로운 컴포넌트를 쉽게 만들 수 있다.
- 컴포넌트는 데이터(props)를 입력받아 View(state) 상태에 따라 DOM Node를 출력하는 함수.
- 컴포넌트 이름은 항상 대문자로 시작하도록 한다. (리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 취급하기 때문이다.)
- UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 나누어 코딩한다.
출처: https://goddaehee.tistory.com/299 [갓대희의 작은공간:티스토리]
```
<br>

>props 란?
```
React 에서 컴포넌트로 작성한 요소를 하위 컴포넌트로 전달해주는 객체이다.

props의 특징
- 부모 컴포넌트가 자식 컴포넌트에 값을 전달할때 사용한다.
- 전달받은 자식 컴포넌트는 값을 수정할 수 없다.
- 갯수의 제한 없이 전달 할 수 있다.
- 단방향 데이터 전달 방식으로, 자식 컴포넌트가 부모 컴포넌트 또는 형제 컴포넌트로는 전달할 수 없다.
```
<br>

>props, component 예시
```js
//props 객체의 요소는 컴포넌트를 호출 할 때 지정한 이름으로 자식 컴포넌트에서 사용할 수 있다.
<ExamComp state={state} color={'skyblue'}
  clickEvent={() => {
    console.log('Hello World !!');
}}/>
...

const ExamComp = (props)=>{
  return (
    <div style={{background : props.color}}>
      <h4>{props.state.title}</h4>
      <h4>{props.state.content}</h4>
      <button onClick={props.clickEvent}>버튼</button>
    </div>
  );
}
//props 객체의 요소를 호출할 때엔 위와 같이 props.요소이름 형식으로 사용한다.
```
<br>

>기존 문법 (참고용)
```js
class ExamComp extends React.Component {
  constructor(){
    super();
    this.state = {//기존 문법에서는 this 키워드로 state를 조작해야한다.
      exam1 : "Hello",
      exam2 : "React"
    }
  }
  
  examFunc(){
    this.setState({ exam1: "CHANGE" });
  }
  
  render(){
    return (
      <div>
        <h3>{this.state.exam1} {this.state.exam2}</h3>

        <button onClick={() => { this.examFunc.bind(this) }
        }>state변경1</button>

        <button onClick={() => { this.setState( { exam2 : "CHANGE" })}}>state변경2</button>
        
      </div>
    )
  }
}
```
<br>

## `Part 2. 쇼핑몰 프로젝트`

### import export
<br>

Part 2. 쇼핑몰 프로젝트의 시작은 Bootstrap을 설치하고, import 하는것이었는데 정확히 짚고 넘어가고 싶어 찾아봤던 내용부터 정리해보겠다.
https://jskyu.github.io/my-first-react-shop/
>import 구문
```js
import './App.css';//css파일을 import 할 때엔 경로를 입력한다.
import exam from './url';//Component, Image, 다른 js파일 등을 
                        //import 할 때엔 이름을 주어 사용해야 한다.
import foo from './img/foo.png';//foo.png 이미지를 foo 이름으로 사용하겠다.

function App() {
  return (
    <div>
      ...
      <div style={{ backgroundImage : 'url(' + foo + ')'}}>
    </div>
  );
}
```
<br>

컴포넌트(Component)는 하나의 파일에 여러개가 존재할 수 있으며, 다른 파일에서 해당 컴포넌트를 `import` 하기 위해서는 `export`를 해야한다.
`export` 하는 방법은 두가지가 있다.
1. `export default Comp;`
2. `export {Comp1, Comp2};` \

`export default` 키워드로 내보내기를 할 시 하나의 파일당 하나의 컴포넌트만을 `export` 할 수 있다.\
다만, `export default`와 `export` 키워드를 중복하여 사용할 수 있다.\
또한 `export default` 한 컴포넌트는 `import` 시 이름을 지정하여 사용할 수 있지만, `export` 한 컴포넌트는 해당 클래스의 이름으로만 사용할 수 있다.\
또한 Component 뿐만 아닌 state, function, variable 등을 export하여 다른 파일에서 사용할 수 있다.

> #### `예시`
> 각각 App.js, comp/Comp.js
```js
//App.js
import Comp1, {Comp2, Comp3} from './comp/Comp';
// comp폴더의 Comp.js파일에 존재하는 컴포넌트 Comp1, Comp2, Comp3을 사용하겠다는 뜻이다.
//단, Comp1 은 export default이다.

function App() {
  return (
    <div>
    
      ...
      <Comp1/>
      <Comp2/>
      <Comp3/>
    </div>
  );
}
export default App;
```
```js
//comp/Comp.js
import React from 'react';

class Comp1 extends React.Component {
    render() {
        return( 
            <h3>Hello! Comp1</h3>
        );
    }
}

class Comp2 extends React.Component {
    render(){
        return(
            <h3>Hello! Comp2</h3>
        );
    }
}

class Comp3 extends React.Component {
    render() {
        return(
            <h3>Hello! Comp3</h3>
        );
    }
}

export default Comp1;
export {Comp2, Comp3};
/* export 하는 문법 또한 람다로 표현 가능하다.
export default Comp1 = ()=>{
  return(
    <h3>Hello! Comp1</h3>
  );
},
export const Comp2 = ()=>{
  return(
    <h3>Hello! Comp2</h3>
  );
}
const Comp3 = ()=>{
  return(
    <h3>Hello! Comp2</h3>
  );
}
export Comp3;
*/
```
<br>

### React-Router
react의 서드파티 라이브러리로서 클라이언트 사이드에서 이루어지는 라우팅을 간단하게 해주면서도, 서버 사이드 렌더링을 도와주는 도구들 또한 있기에 싱글 페이지 React에서 여러 화면으로 구성된 웹 어플리케이션을 만들기 위해선 거의 필수적이라 할 수 있다.

>Router 기본 문법
```js
<Route path="URL" element={<Component />}>
```
<br>

### Url Parmeter
Url Parameter는 말 그대로 URL 에 담겨있는 값을 파라미터로 사용하는 것이다.\
Router 선언 시 url 부분중 parameter 로 사용할 값 앞에 클론(:)으로 명시한다.

>Url Parameter 예시 \
https://jskyu.github.io/my-first-react-shop/ 에서 상단의 RouteExam
```js
//Router 선언
// /page/1234 로 접속했을 시 파라미터는 1234가 된다.
<Routes>
  <Route path="/page/:param" element={<Component />} />
<Routes />
```

```js
//컴포넌트 Component
const Component = () => {
  let {param} = useParams();

  return(
    <div>
      <h4>입력된 파라미터는 {param} 입니다.</h4>
    </div>
  );
}
//접속 URL : /page/1234
//출력 : 입력된 파라미터는 1234 입니다.

//접속 URL : /page/Hello-World
//출력 : 입력된 파라미터는 Hello-World 입니다.
```
<br>

### Styled-Components
Styled-Components는 동일한 컴포넌트에서 컴포넌트 이름을 쓰듯 스타일을 지정하는 것을 말한다.\
CSS 파일을 사용하지 않아도 되고, 다른 CSS파일에 간섭하지 않는다는 장점이 있다.

> Styled-Components 셋팅
```
1. 터미널에서 npm install styled-components
2. 사용할 컴포넌트에 import styled from 'styled-components
```

> Styled-Components 예시 \
https://jskyu.github.io/my-first-react-shop/ 에서 상단의 StyleExam
```js
import styled from 'styled-components';

let Box = styled.div`
padding : 20px;
color : grey
`;

let ExamBtn = styled.button`
  outline: none;
  color : black;
  padding : 10px;
`;

// props로 변수 삽입 가능
let Exam1Btn = styled(ExamBtn)`
  background : ${props => props.bg === undefined ? 'red' : props.bg};
`;

//상속도 가능
let Exam2Btn = styled(ExamBtn)`
  background : ${props => props.bg === undefined ? 'green' : props.bg};
`;

const StyleComponent = () => {
    return (
      <Box>
        <Exam1Btn>빨간색 버튼</Exam1Btn>
        <Exam1Btn bg="blue">파란색 버튼</Exam1Btn>
        <Exam2Btn>초록색 버튼</Exam2Btn>
      </Box>
    );
  }
```
<br>

### Component의 LifeCycle
<!-- lifeCycleExam -->
1. mount(생성)
2. update(업데이트)
3. unmount(제거)
<img src="https://kyun2da.dev/static/69e54fe57da139eabae168b5e8304af4/01645/lifecycle.png">
(자세한 내용 : https://ko.reactjs.org/docs/react-component.html) \
<br><br>

> LifeCycle 주기별 실행 함수 \
https://jskyu.github.io/my-first-react-shop/ 에서 상단의 LifeCycleExam
```js
import { useEffect, useState } from 'react';

const LifeCycleExam = () => {

  let [val, setVal] = useState(0);

  useEffect(() => {
    //재렌더링마다 코드 실행
  });

  useEffect(() => {
    //mount시 1회 코드 실행

    return ()=> {
      //unMount 시 1회 코드 실행
    }
  }, []);

  useEffect(() => {
    //'val' 변수 변경 시 코드 실행
  }, [val]);

  const update = () => {
    //컴포넌트 로드 & 업데이트 시 실행
    setVal(val + 1);
  };
    return (
      <div>
        <h4>Hello LC !</h4>
        <button onClick={update}>업데이트</button>
        <h4 style={{display : "none"}}>{val}</h4>
      </div>
    );
  }
```

### AJAX
AJAX 는 Asynchronous JavaScript and XML의 약자로, 말 그대로 JavaScript와 XML을 이용한 비동기적 정보 교환 기법이다. \
쉽게 말하자면 JS에서 HTTP 통신을 편하게 해주는 라이브러리 이다.\
<br>

> AJAX 세팅

우선 위 강의에서는 aixos 라이브러를 사용하여 ajax를 사용하였으니 aixos를 설치한다.\
터미널에서 `npm install axios`\
사용할 js에서 `import axios from 'axios'`
<br>

> 리액트에서의 AJAX

리액트에서 aixos를 사용하는 방법은 다음과 같이 매우 간단하다.

1. GET
```js
  axios.get('URL')//'https://url' 로 get 요청을 보낸다.
    .then((reponse) => {// then 은 성공했을 때 실행되는 메서드이다.
      //reponse는 수신된 결과이다.
      //성공 시 로직
    }).catch((reponse) => {//catch 는 실패했을 때 실행되는 메서드이다.
      //실패 시 로직
  });
```

2. POST
```js
  axios.post('URL', {data : 'json'})//데이터 전송
  .then((reponse) => {})
  .catch((reponse) => {});
```

3. 여러개 동시에 보내기
```js
  Promise.all([
    axios.get('URL1').then((reponse) => {}).catch((reponse) => {}), 
    axios.get('URL2').then((reponse) => {}).catch((reponse) => {}) ]);
```