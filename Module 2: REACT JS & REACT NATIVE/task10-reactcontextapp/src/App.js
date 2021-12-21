// import { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
// import Login from './Component/Login/Login.js';
import List from './Component/List/List.js';
import { useState } from 'react'
import UpdatedList from './Component/List/UpdatedList.js';



function App() {
  const [state, setState] = useState(false)

  return (
    <>  
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React Context App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Button variant="outline-info" onClick={() => { setState(true)}}>Login</Button>
              &nbsp;&nbsp;
              <Button variant="outline-danger" onClick={() => { setState(false)}}>LogOut</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {
        state ? (<UpdatedList/>) : (<List />)
      }
    </>
  );
}


export default App;
