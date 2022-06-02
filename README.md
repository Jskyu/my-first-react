https://codingapple.com/course/react-basic/ \
React 리액트 기초부터 쇼핑몰 프로젝트까지! 수강일지

## Installation
```
git clone https://github.com/Jskyu/my-first-react.git
npm start
```
> *Downloads*\
`NodeJS 16.15.1 LTS` https://nodejs.org/dist/v16.15.1/

> *Built With*\
`Visual Studio Code 1.67`

## `Part 1. 블로그 제작 & 기초 문법`
>state 란?
```
react(리액트)를 다루는 핵심으로,
State는 props처럼 App 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체지만,
props는 (함수 매개변수처럼) 컴포넌트에 전달되는 반면 state는 (함수 내에 선언된 변수처럼) 컴포넌트 안에서 관리된다는 차이가 있다.
props를 사용했는데도 state를 사용하는 이유는, 사용하는 쪽과 구현하는 쪽을 철저하게 분리시켜서 양쪽의 편의성을 각자 도모하는 것에 있다.
```
<br>

>state 기본 문법
```
let [postTitle, setPostTitle] = useState('블로그 글 제목');

postTitle = state 에 담아놓은 데이터 변수\
setPostTitle = state 의 변경을 도와주는 함수
```
let [a, b] = Array 는 `DeStructuring(구조분해할당)` 이라 하며, 아래와 같다.
```
let nums = [1, 2];
let a = nums[0];
let b = nums[1];
```
자주 변경될것같은 html 부분은 state로 만들고,\
자주 변경되지 않는 html은 하드코딩 or js변수로써 활용하는것을 추천.
<br>
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
- 컴포넌트 이름은 항상 대문자로 시작하도록 한다. (리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 취급하기 때문이다.
- UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 나누어 코딩한다.
출처: https://goddaehee.tistory.com/299 [갓대희의 작은공간:티스토리]
```
<br>

>props 란?
```
React 에서 컴포넌트로 작성한 요소를 JSX Attribute와 자식을 하위 컴포넌트로 전달해주는 객체이다.

props의 특징
-props란 부모 컴포넌트가 자식 컴포넌트에 값을 전달할때 사용한다.
-props를 전달받은 자식 컴포넌트는 값을 수정할 수 없다.
-props는 갯수의 제한 없이 전달 할 수 있다.
-props는 단방향 데이터 전달 방식으로, 자식 컴포넌트가 부모 컴포넌트 방향 또는 같은 기수 컴포넌트 방향으로는 전달할 수 없다.
```
<br>

>props, component 예시
```js
//props 객체의 요소는 컴포넌트를 호출 할 때 지정한 이름으로 자식 컴포넌트에서 사용할 수 있다.
<ExamCompn state={state} color={'skyblue'}
  clickEvent={() => {
    console.log('Hello World !!');
}}/>
...

const ExamCompn = (props)=>{
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