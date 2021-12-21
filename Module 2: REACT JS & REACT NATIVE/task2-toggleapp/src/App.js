import Mlogo from './Mlogo.png';
import Nlogo from './Nlogo.jpg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isMorning, setbtnState] = useState(false)
  const DNCsource = isMorning ? Nlogo : Mlogo
  const btnText = isMorning ? "Enable Day Mode" : "Enable Night Mode";

  function ToggleBtnState() {
    console.log(isMorning)
    setbtnState(!isMorning)
  }

  const [darkMode, setDNCycle] = useState(false)


  return (
    <>
      <div className={isMorning ? 'darkMode' : 'lightMode'}>
        <header className="App-header">
          <br />
          <h1>Welcome to Day/Night Cycle React App</h1>
          <img src={DNCsource} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <br />
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" style = {{cursor: 'pointer'}} onClick={ToggleBtnState} onChange={() => setDNCycle(!darkMode)} />
          </div>
          <br />
          <label className="form-check-label" for="flexSwitchCheckDefault">{btnText}</label>
        </header>
      </div>
    </>
  );
}

export default App;
