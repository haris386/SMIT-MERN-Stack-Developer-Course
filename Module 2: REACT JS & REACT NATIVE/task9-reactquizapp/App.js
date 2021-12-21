import React from 'react'
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login.js';
import Quiz from './Components/Quiz/Quiz.js';
import ShowAnswers from './Components/ShowAnswers/ShowAnswers.js'

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import "./index.css";


export default function App() {
	return (
		<Router>
		<Switch>
          <Route exact path="/">
			  <Login />
          </Route>
          <Route path="/signup">
			  <SignUp />
          </Route>
          <Route path="/quiz">
			  <Quiz />
          </Route>
          <Route path="/showanswers">
			  <ShowAnswers />
          </Route>
        </Switch>
		</Router>
	);
}

