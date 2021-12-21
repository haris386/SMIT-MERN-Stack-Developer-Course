import React from 'react'
import "./SignUp.css";
import {
	Redirect
} from "react-router-dom";

import { useState } from 'react'

export default function SignUp() {
	const [Re, setRe] = useState(false)

	function getData() {
		let fname = document.getElementById("first-name").value
		let email = document.getElementById("email").value
		let password = document.getElementById("password").value
		
		// let data = [
		// 	{
		// 		FirstName: fname,
		// 		LastName: lname
		// 	}
		// ]
		// localStorage.setItem("Userdata", data);
		
		let itemJsonArray = [];
		itemJsonArray.push(fname, email, password);
		localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
		console.log(itemJsonArray)
		console.log('Length: ' + itemJsonArray.length)
		
		if (itemJsonArray.includes("")) {
			setRe(false)
			alert('No Data has been Inputted')
		}
		else {
			setRe(true)
		}
	};
	return (
		<>
			{
				Re ? (<Redirect to='/' />) : (

					<div className="form-container">
						<h1 style = {{textAlign: 'center', color: 'black'}}>Sign Up</h1>
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
							<button className="form-field" style={{ color: "white" }} onClick={getData}>
								Register
							</button>
						</div>
					</div>
				)}
		</>
	);
}