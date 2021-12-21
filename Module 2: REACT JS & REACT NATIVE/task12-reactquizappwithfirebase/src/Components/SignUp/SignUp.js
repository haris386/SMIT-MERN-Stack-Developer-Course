import React from 'react'
// import {auth, db} from '../Firebase/FirebaseConfig.js'
import "./SignUp.css";
import {
	Redirect
} from "react-router-dom";

import { auth, createUserWithEmailAndPassword, db,doc, setDoc } from "../Firebase/FirebaseConfig.js";


import { useState } from 'react'

export default function SignUp() {
	const [Re, setRe] = useState(false)
	// const [ifUser, setUser] = useState(false)
	let ifUser1 = true

	function getData() {
		let fname = document.getElementById("first-name").value
		let email = document.getElementById("email").value
		let password = document.getElementById("password").value

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				ifUser1 = false
				console.log("USER DATA: ", user)
				console.log("USER UID: ", user.uid)
				// ...
				setDoc(doc(db, "users", user.uid), {
					name: fname,
					state: email,
					isPass: false
				})
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode)
				console.log(errorMessage)
				// ..
			});
			
			if (ifUser1 == false) {
				setRe(false)
				console.log('No Data has been Inputted')
			}
			else {
				setRe(true)
				// console.log("USER UID: ", user.uid)
			}
		};
	return (
		<>
			{
				Re ? (<Redirect to='/' />) : (

					<div className="form-container">
						<h1 style={{ textAlign: 'center', color: 'black' }}>Sign Up</h1>
						{/* <form className="register-form"> */}
						<div className="register-form">
							{/* Uncomment the next line to show the success message */}
							{/* <div className="success-message">Success! Thank you for registering</div> */}
							<input
								id="first-name"
								className="form-field"
								type="text"
								placeholder="First Name"
								name="firstName"
							/>
							{/* Uncomment the next line to show the error message */}
							{/* <span id="first-name-error">Please enter a first name</span> */}
							<input
								id="email"
								className="form-field"
								type="text"
								placeholder="Email"
								name="lastName"
							/>
							{/* Uncomment the next line to show the error message */}
							{/* <span id="last-name-error">Please enter a last name</span> */}
							<input
								id="password"
								className="form-field"
								type="password"
								placeholder="Password"
								name="email"
							/>
							{/* Uncomment the next line to show the error message */}
							{/* <span id="email-error">Please enter an email address</span> */}
							<button className="form-field" style={{ color: "white", justifyContent: "center"}} onClick={getData}>
								Register
							</button>
						</div>
					</div>
				)}
		</>
	);
}