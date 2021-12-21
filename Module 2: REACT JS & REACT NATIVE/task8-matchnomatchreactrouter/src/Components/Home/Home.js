import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
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
            <h1 style = {{textAlign: 'center'}}>Welcome to Home</h1>
        </>
    )
}
