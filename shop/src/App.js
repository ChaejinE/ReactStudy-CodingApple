import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from "./data.js"
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/Detail.js'

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>Shoes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <div className="container">
              <div className='row'>
                {
                  shoes.map((shoe, idx) => {
                    return (
                      <Card shoe={shoe} key={idx} />
                    );
                  })
                }
              </div>
            </div>
          </>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={
          <div>
            About
            <Outlet></Outlet>
          </div>
        }>
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="company" element={<div>회사들</div>} />
        </ Route>
        <Route path="*" element={<div>404 Page</div>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4" key={props.key}>
      <img src={props.shoe.url} width="80%" />
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.price}</p>
    </div>
  );
}

export default App;
