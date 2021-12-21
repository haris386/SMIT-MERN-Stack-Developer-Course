import React from 'react'
import { Link } from 'react-router-dom';
import '../Login/Login.css';
import logo from '../Login/logo.png'
import curved14 from '../Login/curved14.jpg'

export default function Login() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3  navbar-transparent mt-4">
                <div className="container">
                    <img src={logo} alt="" className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-white" />
                    <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ps ps--active-x ps--active-y" id="navigation">
                        <ul className="navbar-nav d-lg-block d-none">
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="min-vh-100 mb-8">
                <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3
          border-radius-lg" style={{ backgroundImage: `url(${curved14})`}}> 
                    <span className="mask bg-gradient-dark opacity-6"></span>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 text-center mx-auto">
                                <h1 className="text-white mb-2 mt-5">Welcome!</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-lg-n10 mt-md-n11 mt-n10">
                        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                            <div className="card z-index-0">
                                <div className="card-body">
                                    <form role="form text-left">
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder="Email" aria-label="Email" id="email" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" className="form-control" placeholder="Password" aria-label="Password" id="pass" />
                                        </div>
                                        <div className="text-center">
                                        <Link to="/dashboard" style={{ color: 'white' }}><button type="button" className="btn bg-gradient-dark w-100 my-4
          mb-2">Log In</button></Link>
                                            <p className="text-sm mt-3 mb-0">Not a member?<Link to="/signup" className="text-dark
          font-weight-bolder"> Sign Up</Link></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
