import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Spinner from 'react-bootstrap/Spinner'
import './Quiz.css'

import {
	Link,
	Redirect
} from "react-router-dom";

import { auth, onAuthStateChanged, doc, getDoc, db, updateDoc } from "../Firebase/FirebaseConfig.js";

// console.log(itemJsonArray[1])

let snapData;
let uid;
export default function Quiz() {
	const [ifData, setData] = useState(false)
	const [agarPass, setagarPass] = useState(true)

	onAuthStateChanged(auth, (user) => {
		if (user) {
			const ref = doc(db, "users", user.uid);
			const docSnap = getDoc(ref)
				.then((snapshot) => {
					snapData = snapshot.data()
					console.log(snapData.name)
					uid = user.uid
					console.log(uid)
					console.log(snapData.isPass)
					if (snapData.isPass == false) {
						setagarPass(true)
						setData(true)
					}
					else {
						setInterval(() => {

							setagarPass(false)
						}, 5000);
					}
				});
		} else {

		}
	});

	const questions = [
		{
			questionText: 'Ctrl, Shift and Alt Keys are called?',
			answerOptions: [
				{ answerText: 'modifier', isCorrect: true },
				{ answerText: 'function', isCorrect: false },
				{ answerText: 'adjustment', isCorrect: false },
				{ answerText: 'alphanumeric', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'Fathometer is used to measure?',
			answerOptions: [
				{ answerText: 'Earthquakes', isCorrect: false },
				{ answerText: 'Rainfall', isCorrect: false },
				{ answerText: 'Ocean depth', isCorrect: true },
				{ answerText: 'Sound intensity', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'Epsom(England) is the place associated with?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: 'Snooker', isCorrect: false },
				{ answerText: 'Polo', isCorrect: false },
				{ answerText: 'Shooting', isCorrect: false },
				{ answerText: 'Horse racing', isCorrect: true },
			],
		},
		{
			questionText: 'The blue colour of the clear sky is due to?',
			answerOptions: [
				{ answerText: 'Diffraction of light', isCorrect: false },
				{ answerText: 'Reflection of light', isCorrect: false },
				{ answerText: 'Dispersion of light', isCorrect: true },
				{ answerText: 'Refraction of light', isCorrect: false },
			],
		},
		{
			questionText: 'Which one of the following types of waves are used in a night vision apparatus?',
			answerOptions: [
				{ answerText: 'Radio waves', isCorrect: false },
				{ answerText: 'Microwaves', isCorrect: false },
				{ answerText: ' Infra-red waves', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Microsoft Office is an example of a?',
			answerOptions: [
				{ answerText: 'Closed source software', isCorrect: false },
				{ answerText: 'Open source software', isCorrect: false },
				{ answerText: 'Horizontal market software', isCorrect: true },
				{ answerText: 'vertical market software', isCorrect: false },
			],
		},
		{
			questionText: 'SI unit of equivalent conductance?',
			answerOptions: [
				{ answerText: 'ohm/cm', isCorrect: false },
				{ answerText: 'Siemens m2/equivalent', isCorrect: true },
				{ answerText: ' Siemens/equivalent', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			const Ref = doc(db, "users", uid);
			updateDoc(Ref, {
				isPass: true
			});
			setShowScore(true);
		}
	};
	return (
		<>
			{agarPass ? (<>
				{ifData ? (<> <h1 style={{ textAlign: 'center' }}>Welcome {snapData.name} </h1>
					<div className='app'>
						{showScore ? (
							<div className='score-section' style = {{width: '100%', display: 'grid',alignItems: 'center', textAlign: 'center'}}>
								You scored {score} out of {questions.length}
								<br/>
								<p>You will be redirected shortly</p>
							</div>
						) : (
							<>
								<div className='question-section'>
									<div className='question-count'>
										<span>Question {currentQuestion + 1}</span>/{questions.length}
									</div>
									<div className='question-text'>{questions[currentQuestion].questionText}</div>
								</div>
								<div className='answer-section'>
									{questions[currentQuestion].answerOptions.map((answerOption) => (
										<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
									))}
								</div>
							</>
						)}
					</div> </>) : (<Spinner animation="grow" />)}
			</>) : (<Redirect to='/pass' />)}
		</>
	);
}
