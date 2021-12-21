// import logo from './logo.svg'; 
// import './App.css';
import "./styles.css";
import { useState } from "react";

export default function App(props) {
  const shortText = props.text.substring(0, 150) + "...";

  const longText = props.text;

  const [isShort, setbtnState] = useState(false);
  const textSource = isShort ? longText : shortText;
  const btnText = isShort ? "Read Less" : "Read More";

  function ToggleBtnState() {
    console.log(isShort);
    setbtnState(!isShort);
  }

  return (
    <>
      {/* CARD 1 */}
      <div className="container">
        <div className="box">
          <span></span>
          <div className="content">
            <p>{textSource}</p>
            <button
              type="button"
              className="btn btn-outline-light"
              style={{ cursor: "pointer", borderRadius: "20px"}}
              onClick={ToggleBtnState}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


// npm install react-bootstrap@next bootstrap@5.1.0