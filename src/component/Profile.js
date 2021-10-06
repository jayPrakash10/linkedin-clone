import React from "react";
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForward';

function Profile(){
    return(
        <div className='profile'>
            <div className='coverimg'></div>
            
            <div className='profileimg'></div>

            <div className='profilebody'>
                <h1>Figma</h1>
                <p>A design platform of teams who build products together.</p>
                <div className='profilebodyinfo'><p>Design</p> . <p>San Fransisco, CA</p> . <p>101,802 followers</p></div>
                <div className='profilebodylink'>See all 358 employees on LinkedIn <ArrowForwardRoundedIcon fontSize='small'/></div>
                <button className='follow'> Follow </button>
                <button className='visit'> Visit website</button>
                <button className='ellipse'> ... </button>
            </div>
        </div>
                
    )
}

export default Profile