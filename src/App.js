import { useState } from 'react';
import './App.css';

function App() {
  let logo = 'React Blog';

  let [titles, setTitles] = useState(['글 제목1', '글 제목2', '글 제목3']);
  let [goods, setGoods] = useState(new Int16Array(titles.length));
  let [modal, setModal] = useState({isModal:false, index:-1});

  const clickEvent = (state, setFunc) => {
    let copy = [...state];
    copy[modal.index] = '글 제목 변경';
    setFunc(copy);
  }

  const ObjectDeepCopy = (obj) => {
    let copy = {};
    for(let key in obj){
      copy[key] = obj[key];
    }
    return copy;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      {
        titles.map((postTitle, i) => {
          return (
            <div className="list" key={'title_' + i}>
              <h4 className="post-title" onClick={() => {
                let copy = ObjectDeepCopy(modal);
                if(copy.index === i) {
                  copy.isModal = !copy.isModal
                } else {
                  copy.index = i;
                  copy.isModal = true;
                }
                setModal(copy);
              }}>{postTitle}</h4>
              <span className="button-cursor" onClick={() => {
                let copy = [...goods];
                copy[i] = copy[i] + 1;
                setGoods(copy);
              }}>👍</span> {goods[i]}
              <p>2월 {i + 1}일 발행</p>
            </div>
          )
        })
      }

      {
        modal.isModal === true ? <Modal modal={modal} setTitles={setTitles} titles={titles} clickEvent={clickEvent}/> : null
      }
    </div>
  );
}

const Modal = (props) => {
  return (
    
    <div className="modal">
      <h4>{props.titles[props.modal.index]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        props.clickEvent(props.titles, props.setTitles);
      }}>글수정</button>
    </div>
  );
}

export default App;