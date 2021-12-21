import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import biryani from '../AlsoWillMatch/biryani.jpg'
import { ListGroup } from 'react-bootstrap';
export default function Home() {
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
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br></br>
            <Container>
                <div class="row no-gutters">
                    <div class="col-auto">
                        <img src={biryani} style={{ width: '32rem' }} class="img-fluid" alt="" />
                    </div>
                    <div class="col">
                        <div class="card-block px-2">
                            <h4 class="card-title" style={{ textAlign: "center" }}>Burger</h4>
                            <ListGroup>
                                <ListGroup.Item style={{ textAlign: "center" }}>Ingredients</ListGroup.Item>
                                <ListGroup.Item action variant="primary">Rice</ListGroup.Item>
                                <ListGroup.Item action variant="secondary">
                                    Chicken
                                </ListGroup.Item>
                                <ListGroup.Item action variant="success">
                                    Tomatoes
                                </ListGroup.Item>
                                <ListGroup.Item action variant="danger">
                                    Onions
                                </ListGroup.Item>
                                <ListGroup.Item action variant="warning">
                                    Garam Masala
                                </ListGroup.Item>
                                <ListGroup.Item action variant="info">
                                    And Many More
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
