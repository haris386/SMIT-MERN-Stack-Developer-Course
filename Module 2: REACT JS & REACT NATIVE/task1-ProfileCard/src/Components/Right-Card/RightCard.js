import React from 'react'
import SkillsLink from './Links/SkillsLink'

export default function RightCard() {
    return (
        <div id="rightCard" style={{
            backgroundColor: 'white',
            width: '40%', height: '400px',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px'
        }}>
            <h2 style={{ marginTop: '5%', textAlign: 'center', fontFamily: '-webkit-pictograph', fontSize: '50px' }}>Bio</h2>
            <p style={{ textAlign: 'center', fontFamily: '-webkit-pictograph', fontSize: '20px', fontWeight: 'bold', padding: '5%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, rem! Velit quos et quae suscipit illum adipisci
                perferendis architecto aliquid possimus hic? Eius sapiente nemo veniam sint recusandae minima eligendi.</p>
            <SkillsLink skillslink = {'View SKills'} />
            <p style={{ textAlign: 'center', fontFamily: '-webkit-pictograph', fontSize: '20px', fontWeight: 'bold', marginLeft: '40%', display: 'inline'}}>Joined: 01.01.2021</p>
            
        </div>
    )
}
