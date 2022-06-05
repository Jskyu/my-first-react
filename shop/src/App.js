import { Component, useEffect, useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import data from './data';
import Detail from './pages/Detail';
import RouteExam from './pages/RouteExam';
import LifeCycleExam from './pages/LifeCycleExam';
import StyleComponent from './pages/StyleComponent';

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
            <Nav.Link onClick={() => { navi('/detail/0') }}>Detail</Nav.Link>
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
                    <Shoes key={"item_" + item.id} item={item} navi={navi} />
                  );
                })}
              </div>
            </div>
          </>
        }//router nested
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/routeExam/:param" element={<RouteExam />} />
        <Route path="/styleComponent" element={<StyleComponent />} />
        <Route path="/lifeCycleExam" element={<LifeCycleExam />} />
        <Route path="*" element={<div>404 Page</div>} />
      </Routes>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet />
    </div>
  );
}

const Shoes = (props) => {
  return (
    <div className='col-md-4'>
      <img src={"https://codingapple1.github.io/shop/shoes" + (Number(props.item.id) + 1) + ".jpg"} width="80%" />
      <Nav.Link onClick={() => { props.navi('/detail/' + props.item.id) }}>{props.item.title}</Nav.Link>
      <p>{props.item.content}</p>
      <p>{props.item.price}</p>
    </div>
  );
}

export default App;