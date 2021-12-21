import React from 'react'

export default function Posts(props) {
    return (
        <div style = {{backgroundColor: '#bf5a51',
        width: '50%',
        height: '10%',
        borderRadius: '20px',
        margin: 'auto',
        marginTop: '15%'}}>
        <h2 className = 'username' style = {{color: 'white', textAlign: 'center', textTransform: 'uppercase', fontFamily: '-webkit-pictograph'}}>{props.post}</h2>
        </div>
    )
}
