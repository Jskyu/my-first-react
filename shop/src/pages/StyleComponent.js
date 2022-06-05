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

export default StyleComponent;