import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail.js'

function App() {

  let [shoes, setShoes] = useState(data);
  let navi = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navi('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navi('/detail') }}>Detail</Nav.Link>
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
                    <Shoes key={"item_" + item.id} item={item} />
                  );
                })}
              </div>
            </div>
          </>
        }//router nested
        />
        <Route path="/detail" element={<Detail />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>}></Route>
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 추문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
        <Route path="*" element={<div>404 Page</div>} />
      </Routes>
    </div>
  );
}

const Event = () => {
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet/>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet/>
    </div>
  );
}

const Shoes = (props) => {
  return (
    <div className='col-md-4'>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.item.id + 1) + ".jpg"} width="80%" />
      <h4>{props.item.title}</h4>
      <p>{props.item.content}</p>
      <p>{props.item.price}</p>
    </div>
  );
}

export default App;