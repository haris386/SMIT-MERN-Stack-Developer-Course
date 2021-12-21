import React from 'react'
import './Login.css'

import {
    Link,
    Redirect
} from "react-router-dom";

import { auth, signInWithEmailAndPassword } from "../Firebase/FirebaseConfig.js";


import { useState } from 'react'


export default function Login() {

    const [Validate, setValidate] = useState(false)

    function getData() {
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value


        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setValidate(true)
                console.log(user)
                console.log(user.uid)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    };


    return (
        <>
            {
                Validate ? (<Redirect to='/quiz' />) : (<div className="form-container">
                    <h1 style={{ textAlign: 'center', color: 'black' }}>LOGIN</h1>
                    {/* <form className="register-form"> */}
                    <div className="register-form">
                        {/* Uncomment the next line to show the success message */}
                        {/* <div className="success-message">Success! Thank you for registering</div> */}
                        <input
                            id="email"
                            className="form-field"
                            type="text"
                            placeholder="email"
                            name="firstName"
                        />
                        {/* Uncomment the next line to show the error message */}
                        {/* <span id="first-name-error">Please enter a first name</span> */}
                        <input
                            id="password"
                            className="form-field"
                            type="password"
                            placeholder="password"
                            name="lastName"

                        />
                        {/* Uncomment the next line to show the error message */}
                        {/* <span id="last-name-error">Please enter a last name</span> */}
                        {/* Uncomment the next line to show the error message */}
                        {/* <span id="email-error">Please enter an email address</span> */}
                        <button className="form-field" style={{ color: "white", justifyContent: "center" }} onClick={getData}>
                            Login
                        </button>
                        <p style={{ textAlign: 'center', color: "black" }}>Not a user <Link to='/signup' style={{ color: "black" }}>SignUp</Link></p>
                    </div>
                </div>)}
        </>
    )
}
