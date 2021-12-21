import React from 'react'
import './Quiz.css'
import { auth, signOut } from "../Firebase/FirebaseConfig.js";
import { useState } from 'react';

import {
    Redirect
} from "react-router-dom";

export default function Pass() {
    const [userOut, setuserOut] = useState(false)

    function logOut() {
        signOut(auth).then(() => {
            setuserOut(true)
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <>
            {
                userOut ? (<Redirect to='/' />) : (<>
                    <h1>Quiz has been submitted!</h1>
                    <button className="form-field" style={{ color: "white", justifyContent: "center" }} onClick={logOut}>
                        LogOut
                    </button>
                </>)
            }
        </>
    )
}
