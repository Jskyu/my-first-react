import { useState } from 'react';
import './App.css';

function App() {
  let logo = 'React Blog';

  let [titles, setTitles] = useState(['글 제목1', '글 제목2', '글 제목3']);
  let [goods, setGoods] = useState(new Int16Array(titles.length));
  let [modal, setModal] = useState({isModal:false, index:-1});
  let [inputValue, setInputValue] = useState(); 

  const clickEvent = (state, setFunc, changeValue) => {
    let copy = [...state];
    copy[modal.index] = changeValue;
    setFunc(copy);
  }

  const ObjectDeepCopy = (obj) => {
    let copy = {};
    for(let key in obj){
      copy[key] = obj[key];
    }
    return copy;
  }

  const addPost = ()=>{
    if(inputValue === null || inputValue === undefined || inputValue === ''){
      return;
    } else {
      let goodsCopy = [...goods];
      goodsCopy.unshift(0);
      setGoods(goodsCopy);

      let copy = [...titles];
      copy.unshift(inputValue);
      setTitles(copy);

      document.getElementById('titleInput').value = '';
      setInputValue('');
    }
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="contents">
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
                  }}> {postTitle} 

                  <span className="button-cursor" onClick={(e) => {
                    e.stopPropagation();
                    let copy = [...goods];
                    copy[i] = copy[i] + 1;
                    setGoods(copy);
                  }}>  👍</span> {goods[i]}

                  <button className="btn-right" onClick={(e)=>{
                    e.stopPropagation();

                    let copy = [...titles];
                    copy.splice(i, 1);
                    setTitles(copy);

                    let goodCopy = [...goods];
                    goodCopy.splice(i, 1);
                    setGoods(goodCopy);
                  }}>글삭제</button>
                </h4>
                
                <p>11월 11일 발행</p>
              </div>
            )
          })
        }

        <input id="titleInput" key="titleInput" onChange={(e) => {
          setInputValue(e.target.value);
        }}/>
        <button onClick={addPost}>글추가</button>

        {
          modal.isModal === true ?
          <Modal modal={modal} setTitles={setTitles} titles={titles} clickEvent={clickEvent}/>
          : null
        }
      </div>
    </div>
  );
}

const Modal = (props) => {
  let changeValue = '';
  return (
    <div className="modal">
      <h4>{props.titles[props.modal.index]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <input id="changeInput" type={changeValue} onChange={(e)=> changeValue=e.target.value}/>
      <button onClick={()=>{
        if(changeValue !== ''){
          props.clickEvent(props.titles, props.setTitles, changeValue);
          document.getElementById("changeInput").value = '';
        }
      }}>글제목수정</button>
    </div>
  );
}

export default App;