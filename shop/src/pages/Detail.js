import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {

    let {id} = useParams();
    let findItem = props.shoes.find(item => item.id == id);

    let [alertState, setAlertState] = useState(true);
    let [quantity, setQuantity] = useState('')

    useEffect(() => {
        let timer = setTimeout(() => { setAlertState(false) }, 2000)

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(()=>{
        if (isNaN(quantity) == true){
          alert('숫자만 입력 가능합니다.');
          setQuantity('');
        }
      }, [quantity])

    return(
        <div className="container">
            {
                alertState == true ?
                <div className='alert alert-warning'>
                    2초 이내 구매시 할인
                </div>
                : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + (Number(findItem.id) + 1) + ".jpg"} width="100%" />
                    <h4 className="pt-5">{findItem.title}</h4>
                    <p>{findItem.content}</p>
                    <p>{findItem.price}</p>
                    <input onChange={(e)=>{ setQuantity(e.target.value) }} value={quantity} />
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;