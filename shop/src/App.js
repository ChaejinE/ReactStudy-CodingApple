import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from "./data.js"
import { useState, lazy, Suspense } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react';
// import Detail from './pages/Detail.js'
// import Cart from './pages/Cart.js'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const Detail = lazy(() => import('./pages/Detail.js'));
const Cart = lazy(() => import('./pages/Cart.js'));

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("watched"))
      localStorage.setItem("watched", JSON.stringify([]));
    let a = setTimeout(() => { setAlert(false) }, 2000)
    return () => { clearTimeout(a); }
  }, [])

  let result = useQuery("Lotto", () => {
    axios.get("https://codingapple1.github.io/userdata.json").
      then((a) => {
        console.log("요청");
        return a.data;
      })
  })


  return (
    <div className="App">
      {
        alert
          ? <div>2초뒤 제거</div>
          : null
      }
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>Shoes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail/0') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            {result.isLoading && "로딩중"}
            {result.error && "에러"}
            {result.data && result.data.name}
          </Nav>
        </Container>
      </Navbar>
      <Suspense>
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
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
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
