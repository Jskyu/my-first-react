import { useParams } from "react-router-dom";

const RouteExam = () => {
    let {param} = useParams();
  
    return(
      <div>
        <h4>입력된 파라미터는 {param} 입니다.</h4>
      </div>
    );
  }

export default RouteExam;