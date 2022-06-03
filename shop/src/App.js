import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data';

function App() {

  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      <div className='container'>
        <div className='row'>
        {shoes.map((item)=>{
          return(
            <Shoes key={"item_" + item.id} item={item}/>
          );
        })}
        </div>
      </div>
    </div>
  );
}

const Shoes = (props) =>{
  return(
    <div className='col-md-4'>
      <img src={"https://codingapple1.github.io/shop/shoes"+ (props.item.id + 1) +".jpg"} width="80%"/>
      <h4>{props.item.title}</h4>
      <p>{props.item.content}</p>
      <p>{props.item.price}</p>
    </div>
  );
}

export default App;