import React from 'react';
import './ShowAnswers.css'
import {
	Link
} from "react-router-dom";

let itemJsonArrayStr = localStorage.getItem("itemsJson");
let itemJsonArray = JSON.parse(itemJsonArrayStr);
// console.log(itemJsonArray[1])

export default function ShowAnswer() {


	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Welcome {itemJsonArray[0]}</h1>

			<div style={{ display: 'flex', padding: "20px" }}>
				<div style={{ marginRight: "18px" }}>
					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>Ctrl, Shift and Alt Keys are called?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">modifier</button>
						</div>
					</div>
					<br />
					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>Who is CEO of Tesla?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">Elon Musk</button>
						</div>
					</div>
					<br />

					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>Fathometer is used to measure?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">Ocean depth</button>
						</div>
					</div>
					<br />

					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>The iPhone was created by which company?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">Apple</button>
						</div>
					</div>
					<br />
					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>The iPhone was created by which company?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">Apple</button>
						</div>
					</div>
				</div>
				<br />
				<div>
					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>Epsom(England) is the place associated with?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">7</button>
						</div>
					</div>
					<br />
					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>How many Harry Potter books are there?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">Horse racing</button>
						</div>
					</div>
					<br />

					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>The blue colour of the clear sky is due to?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">Dispersion of light</button>
						</div>
					</div>
					<br />

					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>Microsoft Office is an example of a?</div>
						</div>
						<div className='answer-section'>
							<button className="button1" style = {{marginTop: '-14'}}>Horizontal market software</button>
						</div>
					</div>
					<br />
					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>SI unit of equivalent conductance?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">Siemens m2/equivalent</button>
						</div>
					</div>
				</div>
			</div>
			<Link to = '/' style = {{marginLeft: '46%', color: 'white', fontWeight:'bold', textDecoration: 'none'}}>LogOut</Link>
		</>
	);
}
