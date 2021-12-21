import React from 'react'
import profile from '../images/profile.png'

export default function Image() {
    return (
        <div style = {{
            width: '70%',
            height: '45%',
            borderRadius: '100%',
            margin: 'auto',
            marginTop: '15%'}}>
        <img src = {profile} alt="Profile Image" style = {{width: '85%', margin: 'auto', border: '15px solid #cd635a', borderRadius: '100%'}}/>
        </div>
    )
}
