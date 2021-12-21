// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Home from './Components/Home/Home.js'
import WillMatch from './Components/WillMatch/WillMatch.js'
import AlsoWillMatch from './Components/AlsoWillMatch/AlsoWillMatch.js'

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";


function App() {
  return (

    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/will-match">
            <WillMatch />
          </Route>
          <Route path="/also-will-match">
            <AlsoWillMatch />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>MatchNoMatch</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/'><Button variant="outline-info">Home</Button></Link>
                            &nbsp;
                            <Link to='/will-match'><Button variant="outline-success">Burger</Button></Link>
                            &nbsp;
                            <Link to='/also-will-match'><Button variant="outline-primary">Biryani</Button></Link>
                            &nbsp;
                            <Link to='/will-not-match'><Button variant="outline-danger">Will Not Match</Button></Link>
                            &nbsp;
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        <div>
          <h3 style = {{textAlign: 'center'}}>
            No match for <code>{location.pathname}</code>
          </h3>
        </div>
      </>
  );
}

export default App;
