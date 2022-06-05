import { useEffect, useState } from 'react';

const LifeCycleExam = () => {
  
  let [val, setVal] = useState(0);

  useEffect(() => {
    if(val !== 0) alert('useEffect\nComponent Update');
  }, [val]);

  useEffect(() => {
    alert('useEffect\nComponent Mounted');
  }, []);
  
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

  export default LifeCycleExam;