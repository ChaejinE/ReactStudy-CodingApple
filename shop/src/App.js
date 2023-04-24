import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from "./data.js"
import { useState } from 'react';

function App() {
  let [shoes, setShoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shoes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      <div className="container">
        <div className='row'>
          {
            shoes.map((shoe, idx) => {
              return (
                <MyComponent shoe={shoe} key={idx} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

function MyComponent(props) {
  return (
    <div className="col-md-4" key={props.key}>
      <img src={props.shoe.url} width="80%" />
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.price}</p>
    </div>
  );
}

export default App;
