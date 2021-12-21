import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
// import bg from './bg.jpg'
import bg2 from './bg2.jpg'
import profile from './profile.jpg'
import ImgGallery from '../Gallery/ImgGallery.js'

export default function Header() {
    return (
        <>
            <section style={{
                border: '1px solid black', backgroundImage:`url(${bg2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay',
                backgroundColor: '#00000096'
            }}>
                {/* <!-- <img src="bg.jpg" alt=""> --> */}
                <Container style={{ marginTop: '190px', marginBottom: '50px', maxWidth: '1260px'}}>
                    <Row>
                        <div className="col-10">
                            <Image src={profile} alt={'profilepic'}></Image>
                            <h1 style={{
                                color: 'white',
                                display: 'inline',
                                position: 'absolute',
                                top: '180px',
                                fontSize: '45px',
                                marginLeft: '25px',
                            }}>Haris Ahmed</h1>
                            <p style={{
                                color: 'white',
                                display: 'inline',
                                fontSize: '18px',
                                lineHeight: '5',
                                marginLeft: '25px',
                            }}>1.1K Watchers | 4.5K Page Views | 113 Deviations</p>
                        </div>
                        <div className="col">
                        </div>
                    </Row>
                    &nbsp;
                    <nav className="navbar navbar-expand-lg navbar-dark"
                        style={{ backgroundColor: 'black', paddingTop: '0px', paddingBottom: '0px' }}>
                        <div className="container-fluid" style={{ paddingRight: '0px' }}>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style= {{cursor: 'pointer'}}>
                                    <li className="nav-item" style = {{paddingRight: '50px'}}>
                                        <a className="nav-link active" aria-current="page">Home</a>
                                    </li>
                                    <li className="nav-item" style = {{paddingRight: '50px'}}>
                                        <a className="nav-link">Gallery</a>
                                    </li>
                                    <li className="nav-item" style = {{paddingRight: '50px'}}>
                                        <a className="nav-link">Favourites</a>
                                    </li>
                                    <li className="nav-item" style = {{paddingRight: '50px'}}>
                                        <a className="nav-link">Posts</a>
                                    </li>
                                    <li className="nav-item" style = {{paddingRight: '50px'}}>
                                        <a className="nav-link">Shop</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" style = {{paddingRight: '50px'}}>About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Subscriptions <span className="badge"
                                            style= {{color:'black', backgroundColor: '#00e59b'}}>Beta</span>
                                        </a>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <button style={{
                                        backgroundColor: 'white',
                                        border: 'none',
                                        height: '52px', width: '70px'
                                    }}>chat</button>
                                    <button style={{
                                        background: "linear-gradient(114deg,#4cddbd,#06f286)",
                                        border: 'none',
                                        height: '52px', width: '100px'
                                    }}>+ watch</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </Container>
            </section>
            <section id="gallery" style= {{border: '0px solid'}}>
                <Container>
                <center><h2 style = {{color: 'white', paddingTop: '10px'}}>Featured Gallery</h2></center>
                <ImgGallery />
                </Container>
            </section>
            
        </>
    )
}
