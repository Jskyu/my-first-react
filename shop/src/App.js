import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

import data from './data';
import Detail from './pages/Detail';
import RouteExam from './pages/RouteExam';
import LifeCycleExam from './pages/LifeCycleExam';
import StyleComponent from './pages/StyleComponent';

function App() {

  let [shoes, setShoes] = useState(data);
  let navi = useNavigate();
  let [isLoading, setLoading] = useState(false);
  let [moreCount, setMoreCount] = useState(2);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/my-first-react-shop/">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navi('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navi('/detail/0') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navi('/route/Hello World!') }}>RoutExam</Nav.Link>
            <Nav.Link onClick={() => { navi('/style') }}>styleExam</Nav.Link>
            <Nav.Link onClick={() => { navi('/lifecycle') }}>LifeCycleExam</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                {shoes.map((item) => {
                  return (
                    <Card key={"item_" + item.id} item={item} navi={navi} />
                  );
                })}
              </div>
            </div>
            {
              isLoading == true ?
              <div className='alert alert-warning'>로딩중</div>
              : null
            }
            <button onClick={()=>{
              if(moreCount < 4){
                setLoading(true);
                axios.get("https://codingapple1.github.io/shop/data" + moreCount + ".json")
                  .then((req) => {
                    if(req.status === 200){
                      let copy = [...shoes, ...req.data];
                      setShoes(copy);
                    }
                    setLoading(false);
                  })
                  .catch((req) =>{
                    setLoading(false);
                    alert('더보기 실패. status : ' + req.reponse.status)
                  })
                  setMoreCount(moreCount + 1);
              } 
            }}>더보기</button>
          </>
        }
        />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/route/:param" element={<RouteExam />} />
        <Route path="/style" element={<StyleComponent />} />
        <Route path="/lifecycle" element={<LifeCycleExam />} />
        <Route path="*" element={<div>404 Page</div>} />
      </Routes>
    </div>
  );
}

const Card = (props) => {
  return (
    <div className='col-md-4'>
      <img alt="" src={"https://codingapple1.github.io/shop/shoes" + (Number(props.item.id) + 1) + ".jpg"} width="80%" />
      <Nav.Link onClick={() => { props.navi('/detail/' + props.item.id) }}>{props.item.title}</Nav.Link>
      <p>{props.item.content}</p>
      <p>{props.item.price}</p>
    </div>
  );
}

export default App;