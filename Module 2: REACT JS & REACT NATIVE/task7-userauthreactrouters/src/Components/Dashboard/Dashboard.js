import React from 'react'
import { Link } from 'react-router-dom';
import '../../../src/App.css'
import '../Dashboard/Dashboard.css';
import burger from '../Dashboard/burger.jpg'
export default function Dashboard() {
    return (
        <main className="main-content position-relative max-height-vh-100 h-100 mt-1
      border-radius-lg">
            <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4
          shadow-none
          border-radius-xl" id="navbarBlur" navbar-scroll="true">
                <div className="container-fluid py-2 px-3" style={{
                    borderRadius:
                        '10px',
                    boxShadow: '0 2px 12px 0 rgb(0 0 0 / 16%)'
                }}>
                    <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0
                  me-sm-4" id="navbar">
                        <div><a className="cdiv">Home</a></div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div><a className="cdiv">My
                            Orders</a></div>
                        <div className="ms-md-auto pe-md-3 d-flex
                      align-items-center">
                        </div>
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item d-flex align-items-center">

                                <a className="nav-link text-body
                              font-weight-bold px-1">
                                    <i className="fa fa-user me-sm-1"></i>
                                    <span className="d-sm-inline" id="username"></span>
                                </a>
                                &nbsp;&nbsp;&nbsp;
                                <Link to='/' style={{ color: "#344767" }}><button type="button" className="btn
                              btn-outline-secondary" style={{
                                        marginRight:
                                            '5px', padding: '10px', marginBottom: '0px'
                                    }}>Log Out</button></Link>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container py-4">

                <div className="row my-4">
                </div>
                <div className="row row-cols-sm-2 row-cols-md-3" id="div">
                    <div className="col mb-4">
                        <div className="card h-100">
                        <img src={burger} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Burger</h5>
                                <p className="card-text text-success" style={{ fontWeight: '500', margin: '-1%' }}>Price: 300</p>
                                <p className="card-text" style={{ margin: '-1%' }} >Cetegory: Fast Food</p>
                                <p className="card-text" style={{ margin: '-1%' }} >Delivery Type: Free</p>
                                <button className="btn btn-primary" style={{ float: 'right' }} id="data">Order</button>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card h-100">
                        <img src={burger} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Burger</h5>
                                <p className="card-text text-success" style={{ fontWeight: '500', margin: '-1%' }}>
                                    Price: 300</p>
                                <p className="card-text" style={{ margin: '-1%' }}>Cetegory: Fast Food</p>
                                <p className="card-text" style={{ margin: '-1%' }}>Delivery Type: Free</p>
                                <button className="btn btn-primary" id="data" style={{ float: 'right' }}>Order</button>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer pt-3">

                </footer>
            </div>
        </main>
    )
}
