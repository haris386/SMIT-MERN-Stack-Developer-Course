import React from 'react'
import Username from './UserName/Username'
import Image from './ProfileImage/Image.js'
import Posts from './Posts/Posts'

export default function LeftCard() {
    return (
        <div id = "leftCard" style = {{
        backgroundColor: '#e26c62',
        width: '20%',
        height: '400px',
        display: 'inline'}}>
        <Username userName = 'Justin Case'/>
        <Image />
        <Posts post = '45 Posts'/>
        </div>
    )
}
